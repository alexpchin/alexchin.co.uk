---
layout: post
title:  "Automatic Posting with Jekyll and Buffer"
date:   2014-08-4 15:42:00
category: Code
tags:  [Jekyll, Buffer, plugins]
---

Writing a little plugin to automatically post to my social media profiles using Buffer.

Buffer is pretty cool. It also has a pretty nice Ruby library, ([https://github.com/bufferapp/buffer-ruby](http://)). 

The plugin requires that you:

- Register your blog as a Buffer application to generate an access token.
- Add the promotion field to your YAML front matter for all new posts with a short message, basically what will become your status update.
- Provide the access token as either an environment variable (BUFFER_ACCESS_TOKEN) on your server or in the configuration file (buffer_access_token)
- Provide an array of buffer_profiles in your configuration file. These are the IDs of each of your social accounts.

{% highlight ruby linenos %}
require 'buff'

class Buffer < Jekyll::Generator
  
  def generate(site)
    post = most_recent_post(site)
    post_date = post.date.strftime('%Y-%m-%d')
    today_date = Date.today.strftime('%Y-%m-%d')
    if post_date == today_date
      message = generate_message(post)
      log "Buffer message: \"#{message}\""
      buffer(message, site)
    else
      log 'Not sending latest promotion because older than today...'
    end
  end

  private

  def generate_message(post)
    promotion_message = post.data['promotion'] || ''
    "#{promotion_message} #{post.location_on_server}"
  end

  def most_recent_post(site)
    site.posts.reduce do |memo, post|
      memo.date > post.date ? memo : post
    end
  end

  def buffer(message, site)
    access_token = ENV['BUFFER_ACCESS_TOKEN'] || site.config['buffer_access_token']
    fail ArgumentError, 'No Buffer access token!' unless access_token
    client = Buff::Client.new(access_token)
    content = { body: { text: message, top: true, shorten: true,
                        profile_ids: site.config['buffer_profiles'] } }
    if site.config['send_to_buffer']
      response = client.create_update(content)
      log("Buffer API Response: #{response.inspect}")
    else
      log 'Not sending latest post promotion to Buffer...'
    end
  end

  def log(message)
    puts "\n\n#{message}\n\n"
  end
end
{% endhighlight %}