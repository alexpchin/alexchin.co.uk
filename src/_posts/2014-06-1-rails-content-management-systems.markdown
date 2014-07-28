---
layout: post
title:  "Rails Content Management Systems"
date:   2014-06-1 12:07:17
---

When developing websites for small to medium clients, often a decent CMS is needed to get basic CRUD functionality and authentication off the ground quickly.

I've done a little bit of research into some of the most popular CMS platforms. Here are my quick thoughts.

## 1. Browser CMS

* Website: [http://www.browsercms.org/](http://)
* Github: [https://github.com/browsermedia/browsercms](http://)

One of the easier CMS's to setup. Presuming you have Ruby & Rails 3.2.13 already installed:

  $ gem install browsercms
  $ bcms demo project_name
  $ cd project_name
  $ rake db:install
  $ rails server

Then in order to access the admin panel, you need to go to: [http://localhost:3000/cms](http://) and login using username=cmsadmin, password=cmsadmin.

###Initial thoughts

Personally, I think that the style of the admin section leaves ALOT to be desired. It is very "windowsy". Because of this, it is not very pleasureable to use.

The documentation is quite good on Github.

## 2. Adva CMS
* Website: [http://adva-cms.org/](http://)
* Github: [https://github.com/svenfuchs/adva_cms](http://)
* Version2 Github: [https://github.com/svenfuchs/adva-cms2](http://)

Adva is currently being upgraded to version 2:

  $ git clone git://github.com/svenfuchs/adva-cms2
  $ cd adva-cms2
  $ bundle install

Then,

  $ thor adva:app my_new_app --target /home/user/path/to/apps
  $ cd /home/user/path/to/apps/my_new_app
  $ bundle install
  $ rails s

I faced a small error (You have already activated thor 0.19.1, but your Gemfile requires thor 0.14.6.) that meant I had to:

  $ bundle exec thor adva:app my_new_app --target /home/user/path/to/apps

###Initial thoughts

The installation was **annoying**. It should have been much simpler.


### Adva uses Thor

Adva CMS uses Thor: [http://whatisthor.com/](http://). Thor is a toolkit for building powerful command-line interfaces.


## 3. Casein CMS
* Website: [http://www.caseincms.com/](http://)
* Rails v4 Github: [https://github.com/russellquinn/casein](http://)
* Rails v3 Github: [https://github.com/spoiledmilk/casein3](http://)
* Latest: [https://github.com/russellquinn/casein/tree/new-ui](http://)

Initially attracted by the slightly-better-than-average design, I was quite excited about having a play with this CMS.

I had a play with the Rails v3, but there was a bug with the rake tasks not showing up. So I got in touch with the developer, Russell Quinn and in fairness he got back to me really quickly!

He told me to play with the latest version.

**To install:**

  rails new casein-test

Add Gem to Gemfile:

  gem 'casein', :git => 'git://github.com/russellquinn/casein.git', :branch => 'new-ui'

Then:

  bundle install
  rails g casein:install
  rake db:create (if needed)
  rake db:migrate
  rake casein:users:create_admin email=you@yourdomain.com

###Initial thoughts

There is definitely some potential with this CMS, but at the moment it's not stable. 

## 4. Comfortable Mexican Sofa CMS
* Github: [https://github.com/comfy/comfortable-mexican-sofa](http://)
* Wiki: [https://github.com/comfy/comfortable-mexican-sofa/wiki](http://)

Instantly, I liked this CMS because it seemed to have decent gems that integrate with Rails 3 or 4.

To install: 

  gem 'comfortable_mexican_sofa', '~> 1.8.0'
  bundle install
  rails generate comfy:cms
  rake db:migrate

Once installed, you need to 

  rails s
  
Then go to: [http://localhost:3000/cms-admin](http://)
With username:username & password:password

###Initial thoughts

The installation process was quite straightforward.
However, the CMS is very basic. It would probably be just as fast to scaffold a website from scratch...

#Still to come:

## 5. Locomotive CMS
Website: [http://locomotivecms.com/](http://)

## 6. Radient CMS
Website: [http://radiantcms.org/](http://)