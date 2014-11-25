namespace :assets do
  desc 'Build Site'
  task :precompile do
    sh 'bundle exec jekyll build'
  end
end

require 'html/proofer'

task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("/build").run
end