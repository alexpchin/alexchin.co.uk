---
layout: post
title:  "Hello.js and Rails"
date:   2014-09-16 09:01:00
category: Code, JS
tags:  [Mentoring, Code]
image: 
---

I thought I'd have a little play with integrating [hello.js](http://adodson.com/hello.js/) and Rails. Devise and Oauth2 are quite good but I liked the idea of doing all of this functionality client-side.

- 1. Create a new rails app (I'm using Rails 4.)

{% highlight ruby linenos %}
rails new hello_js --database=postgresql
{% endhighlight %}

- 2. Add relavent gems to Gemfile and bundle
- 3. Scaffold basic User and install Devise

{% highlight ruby linenos %}
rails g scaffold User first_name last_name image:text username
rails g devise:install
{% endhighlight %}

- 4. Update development.rb by adding:

{% highlight ruby linenos %}
config.action_mailer.default_url_options = { host: 'localhost:3000' }
{% endhighlight %}

- 5. Change initializer for Devise.

{% highlight ruby linenos %}
config.mailer_sender = 'hello_js@hello_js_example.com'
{% endhighlight %}

- 6. Add Devise to User model

{% highlight ruby linenos %}
rails g devise user
{% endhighlight %}

- 7. Run migrations

{% highlight ruby linenos %}
rake db:create db:migrate
{% endhighlight %}

- 8. Bower install Hello.js (I use [this setup](https://coderwall.com/p/hhaxlg) for Bower & Rails)

{% highlight ruby linenos %}
bower install hello
{% endhighlight %}

- 9. Register your app domain, let's do it on [Facebook](https://developers.facebook.com/apps)
- 10. Include hello.all.js script in application.js (hello.all includes all of the provider modules)

{% highlight ruby linenos %}
//= require hello/dist/hello.all.js
//= require_tree .
{% endhighlight %}

- 11. Create the signin buttons in application.html.erb. I used the [zocial](http://zocial.smcllns.com/) to style. 

{% highlight ruby linenos %}
<button class="zocial facebook" onclick="hello.login('facebook');">Facebook</button>
<button class="zocial twitter" onclick="hello.login('twitter');">Twitter</button>
{% endhighlight %}

- 12. Setup listener for login and retrieve user info.

{% highlight ruby linenos %}
hello.on('auth.login', function(auth){
  
  hello( auth.network ).api( '/me' ).then( function(r){
    $('#result').append('<div id="'+ auth.network + '"><h2>Connected to '+ auth.network + '</h2><img src="'+ r.thumbnail +'" /></div>');
  });
});
{% endhighlight %}

- 13. Initiate the client_ids and all listeners (Client ID is aka App ID)

{% highlight ruby linenos %}
  hello.init({
    facebook : ENV['FACEBOOK_CLIENT_ID'],
    twitter : ENV['TWITTER_CLIENT_ID']
  },{
    redirect_uri: 'http://localhost:3000',
  });

  hello.on('auth.login', function(auth){
    
    hello( auth.network ).api( '/me' ).then( function(r){
      $('#result').append('<div id="'+ auth.network + '"><h2>Connected to '+ auth.network + '</h2><img src="'+ r.thumbnail +'" /></div>');
    });
  });
{% endhighlight %}

- 13. Add root route

{% highlight ruby linenos %}
  root to: "users#index"
{% endhighlight %}

- 14. Create a new user using Devise using the information from returned from hello.js for a provider

(To be continued in another blog post).

