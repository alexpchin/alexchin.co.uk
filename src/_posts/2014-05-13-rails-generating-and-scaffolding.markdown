---
layout: post
title:  "Rails Generating & Scaffolding"
date:   2014-05-13 12:07:17
---

Rails' use of **strict naming conventions** means a lot of core code SHOULD be in the same format whoever writes it? It could be written by a friend, colleague or a computer... it shouldn't matter because the same Rails rules apply to everyone.

This means that Rails can actually do some tasks for you!
It can actually build things and write code on your behalf...

Coming from another language like PHP, this can seem like magic.

## Quick reference:

  rails g scaffold Post name:string title:string content:text
  rails g controller Comments
  rails g model Comment commenter:string body:text article:references

##Rails generator
The rails generate command uses templates designed-by-convention to create a whole lot of useful things. Running rails generate by itself gives a list of available generators:

  rails generate

or for super-hackers:

  rails g

There are a lot of generators:  

**Rails:**

* assets
* controller
* generator
* helper
* integration_test
* mailer
* migration
* model
* observer
* performance_test
* resource
* scaffold
* scaffold_controller
* session_migration
* task

**Coffee:**

* coffee:assets

**Jquery:**

* jquery:install

**Js:**

* js:assets


##Scaffolding in Rails

Rails' scaffolding tool is a quick way to generate some of the major pieces of code in an application. This saves a lot of time when you want to get up-and-running quickly! (*It is super cool!*)

Depending on what you want to create, scaffolding can auto-generate all or a combination of:

  migrations
  models
  views
  controllers
  unit_tests 
  helpers
  stylesheets
  javascript

There might be a few more files that it makes... I'm not sure if that's a complete list!


##Scaffolding a whole resource
### You are scaffolding things associated with an object (singular) 

If you want to scaffold an application, you need to scaffold each resource within that application. If you wanted to make a blogging application for example - you could scaffold the whole Post resource:

  rails g scaffold Post
  
The resource name `Post` needs to be: 

* UpperCamelCase 
* **SINGULAR**

**This name is going to be the name of the model, e.g. Post.** It is also going to be the name of the controller class (but pluralized), e.g. PostsController AND the name of the table (but pluralized) e.g. posts

After the class name, you can add table columns and their datatypes.

  rails g scaffold Post name:string title:string content:text

These table columns names should be: 

* lower_snake_case
* **SINGULAR**

----

This is because each Post item is meant to have **one** value stored in each column.

---

If you ran this scaffold, it would create these all files:

* db/migrate/20100207214725_create_posts.rb
* app/models/post.rb
* test/unit/post_test.rb
* test/fixtures/posts.yml
* config/routes.rb
* app/controllers/posts_controller.rb
* app/views/posts/index.html.erb
* app/views/posts/edit.html.erb
* app/views/posts/show.html.erb 
* app/views/posts/new.html.erb
* app/views/posts/_form.html.erb
* test/functional/posts_controller_test.rb
* app/helpers/posts_helper.rb
* test/unit/helpers/posts_helper_test.rb
* app/assets/javascripts/posts.js.coffee
* app/assets/stylesheets/posts.css.scss
* app/assets/stylesheets/scaffolds.css.scss

Within the PostController, all of the RESTful methods will be created and they will all have their corresponding view files.

After creating the migration file, in order to make the change to the database remember to run:

  rake db:migrate

##Generating just a controller
### It controls lots of objects (so it is plural)

Sometimes, you want to generate just a controller.

  rails g controller Comments
  
The controller name needs to be:

* UpperCamelCase
* **PLURALIZED**

----

This is because a controller deals with lots of examples of an object, so it should be plural.

---

This will make these files:

* app/controllers/comments_controller.rb
* app/views/comments/
* test/controllers/comments_controller_test.rb
* app/helpers/comments_helper.rb
* test/helpers/comments_helper_test.rb
* app/assets/javascripts/comment.js.coffee
* app/assets/stylesheets/comment.css.scss

This will **NOT** create a migration file or a model file.

##Generating just a model
### You are generating the outline of an object (singular)

If you just want to create a model, you can do:

  rails g model Comment

* UpperCamelCase 
* **SINGULAR**

You can also add the column names to this if you want:

  rails g model Comment commenter:string body:text article:references
  
These table column names should be: 

* lower_snake_case
* **SINGULAR**


Generating a model will create these files:

* db/migrate/20140120201010_create_comments.rb
* app/models/comment.rb
* test/models/comment_test.rb
* test/fixtures/comments.yml

After creating the migration file, in order to make the change to the database remember to run:

  rake db:migrate