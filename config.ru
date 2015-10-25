# Set the encoding
Encoding.default_internal = Encoding::UTF_8

require 'bundler/setup'
require 'rack/contrib/try_static'
require 'rack/contrib/not_found'
require 'rack/rewrite'

# Set up asset compression
use Rack::Deflater

Bundler.require(:default) 

# Set up redirects
use Rack::Rewrite do
  # There should only be one canonical permalink, and it should not end with index.html
  r301 /(.*)\/index\.html$/i, 'http://www.alexchin.co.uk$1'

  # Redirect any calls to the the canonical domain, unless they are to the canonical domain
  # This prevents accessing the app from the heroku url or your domain
  r301 /.*/, 'http://www.alexchin.co.uk$&', if: proc { |rack_env| rack_env['SERVER_NAME'] != 'www.alexchin.co.uk' }
end

# Ensure the site is served from the correct location and the headers are appropriate
use Rack::TryStatic,
  urls: %w[/], # match all requests 
  root: '_site',
  try: ['index.html', '/index.html'],
  header_rules: [
    ['atom.xml', { 'Content-Type' => 'application/atom+xml' }],
    [['xml'], { 'Content-Type' => 'application/xml' }],
    [['html'],  { 'Content-Type' => 'text/html; charset=utf-8' }],
    [['css'],   { 'Content-Type' => 'text/css' }],
    [['js'],    { 'Content-Type' => 'text/javascript' }],
    [['png'],   { 'Content-Type' => 'image/png' }],
    [['ico'],   { 'Content-Type' => 'image/x-icon' }],
    ['/assets', { 'Cache-Control' => 'public, max-age=31536000' }],
    ['/', { 'Cache-Control' => 'public, max-age=31536000' }], # Might be duplication
  ]

# 404s should be sent to that simple page we created above
run Rack::NotFound.new('_site/404.html')