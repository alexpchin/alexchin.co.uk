---
layout: post
title:  "Generating a sitemap with Jekyll"
date:   2014-08-12 10:00:00
category: Coding
tags:  [Code, Jekyll Plugin, Jekyll]
---

I was looking for a solution to create a new sitemap.xml [file](http://www.sitemaps.org/protocol.html#xmlTagDefinitions) for my jekyll blog when I push my site to Heroku. I looked at some code written by [Dave Perret](http://www.daveperrett.com/), [here](https://github.com/recurser/jekyll-plugins).

This is the plugin code I ended up going with:

{% highlight ruby linenos %}
require 'pathname'
module Jekyll

  # Monkey-patch an accessor for a page's containing folder, since
  # we need it to generate the sitemap.
  class Page
    def subfolder
      @dir
    end
  end

  # Sub-class Jekyll::StaticFile to allow recovery from unimportant exception
  # when writing the sitemap file.
  class StaticSitemapFile < StaticFile
    def write(dest)
      super(dest) rescue ArgumentError
      true
    end
  end

  # Generates a sitemap.xml file containing URLs of all pages and posts.
  class SitemapGenerator < Generator
    safe true
    priority :low

    # Generates the sitemap.xml file.
    # +site+ is the global Site object.
    def generate(site)
      # Create the destination folder if necessary.
      site_folder = site.config['destination']
      unless File.directory?(site_folder)
        p = Pathname.new(site_folder)
        p.mkdir
      end

      # Write the contents of sitemap.xml.
      File.open(File.join(site_folder, 'sitemap.xml'), 'w') do |f|
        f.write(generate_header())
        f.write(generate_content(site))
        f.write(generate_footer())
        f.close
      end

      # Add a static file entry for the zip file, otherwise Site::cleanup will remove it.
      site.static_files << Jekyll::StaticSitemapFile.new(site, site.dest, '/', 'sitemap.xml')
      log 'Generating Sitemap.xml'
    end

    private

    # Returns the XML header.
    def generate_header
      "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">"
    end

    # Returns a string containing the the XML entries.
    # +site+ is the global Site object.
    def generate_content(site)
      result = ''

      # First, try to find any stand-alone pages.
      site.pages.each do |page|
        path = page.subfolder + '/' + page.name

        # Skip files that don't exist yet (e.g. paginator pages)
        next unless FileTest.exist?(path)

        mod_date = File.mtime(site.source + path)

        # Use the user-specified permalink if one is given.
        if page.permalink
          path = page.permalink
        else
          # Be smart about the output filename.
          path.gsub!(/.md$/, '.html')
        end

        # Ignore SASS, SCSS, and CSS files
        next if path =~ /.(sass|scss|css)$/

        # Remove the trailing 'index.html' if there is one, and just output the folder name.
        path = path[0..-11] if path =~ /\/index.html$/

        result += entry(path, mod_date, get_attrs(page), site) unless path =~ /error/
      end

      # Next, find all the posts.
      posts = site.site_payload['site']['posts']
      for post in posts do
        url     = post.url
        url     = '/' + url unless url =~ /^\//
        url     = url[0..-11] if url=~/\/index.html$/
        result += entry(url, post.date, get_attrs(post), site)
      end

      result
    end

    def get_attrs(page)
      attrs              = Hash.new
      attrs[:changefreq] = page.data['changefreq'] if page.data.has_key?('changefreq')
      attrs[:priority]   = page.data['priority'] if page.data.has_key?('priority')
      attrs
    end

    # Returns the XML footer.
    def generate_footer
      "\n</urlset>"
    end

    # Creates an XML entry from the given path and date.
    #
    #  +path+ is the URL path to the page.
    #  +date+ is the date the file was modified (in the case of regular pages), or published (for blog posts).
    #  +changefreq+ is the frequency with which the page is expected to change (this information is used by
    #    e.g. the Googlebot). This may be specified in the page's YAML front matter. If it is not set, nothing
    #    is output for this property.
    def entry(path, date, attrs, site)
      # Remove the trailing slash from the baseurl if it is present, for consistency.
      baseurl = site.config['url']
      baseurl = baseurl[0..-2] if baseurl=~/\/$/
    "<url><loc>#{baseurl}#{path}</loc><lastmod>#{date.strftime("%Y-%m-%d")}</lastmod>#{attrs.map { |k,v| "xs<#{k}>#{v}</#{k}>" }.join("\n") }</url>"
    end

    def log(message)
      puts "\n#{message}\n\n"
    end

  end

end
{% endhighlight %}

In your _config.yaml, file - I added these options:

{% highlight ruby linenos %}
sitemap:
  # local: false
  file: "/sitemap.xml"
  exclude:
      - "/atom.xml"
      - "/feed.xml"
      - "/feed/index.xml"
  include_posts:
      - "/index.html"
  change_frequency_name: "change_frequency"
  priority_name: "priority"
{% endhighlight %}
