---
layout: post
title:  "What is REST?"
date:   2014-05-08 15:07:17
---

REST stands for **Representional State Transfer** and is defined on Wikipedia as:
> Representational state transfer (REST) is a software architectural style consisting of a coordinated set of architectural constraints applied to components, connectors, and data elements, within a distributed hypermedia system. REST ignores the details of component implementation and protocol syntax in order to focus on the **roles of components**, the constraints upon their interaction with other components, and their interpretation of significant data elements.

I think the second part of that explanation sounds like it could be quite interesting... but to me that all seems **super complicated**! So I've decided to try to simplify it for my own understanding. *(If I have not understood something in this gist, please TELL ME!)*

##Saving & Retrieving information
For this section, think of a web application as a piece of software built to help people to store and access information online.

####HTTP requests help you request this information

Whenever your web browser or application fetches a file (a page, a picture, etc) from a web server, it does so using HTTP (**"Hypertext Transfer Protocol"**).  HTTP is a request/response protocol, which means your computer sends a request for some file (e.g. "Get me the file 'home.html'"), ..and the web server sends back a response (e.g. "Here's the file", followed by the file itself).


##REST - Wtf?!
I understand REST as a **set of actions** that a web application can do. *(Web app got skillz.)*
> I think it's quite easy to remember because someone **doing an action** is the oppoiste of them RESTing!

We can group these RESTful actions into 3 main categories:

* **Posting** data (e.g. create and/or update)
* **Reading** data (e.g. make queries)
* **Deleting** data (e.g. remove something) 

Although there are other actions, these actions can mainly be grouped by these 3 categories - for example, looking at a list of all the posts on a blog is an example of **Reading** & looking at just one blog post is also an example of **Reading**.

##API vs Browser
When interacting with a website, whether you are a coder (using an API to access the website's data) or you are a user viewing a website using a browser (Chrome, Firefox, Safari etc...), these REST actions that you might want to do in the application should be the same.

####What are theses REST actions? 

Applications might limit the permissions of specific users' actions using authentication especially for actions that involve ***deleting***, ***updating*** and ***editing*** but usually the ones that don't change anything are accessible to the user. *(Or else they wouldn't be able to get any information from the web app!)*

In order to make these requests, the web application uses HTTP requests (HTTP verbs) and subsequently route a user to the correct logic contained within the application. In Rails, this routing is done using convention using **path** locations and **filenames**.

##The 7 RESTFUL routes

Here is a list of the **7 RESTFUL routes**.

  HTTP Verb Path        Controller#Action
  
  GET     /photos       photos#index
  GET     /photos/new     photos#new
  POST    /photos       photos#create
  GET     /photos/:id     photos#show
  GET     /photos/:id/edit  photos#edit
  PATCH/PUT /photos/:id     photos#update
  DELETE    /photos/:id     photos#destroy

#####Pro Tip (As Jon would say)...

It is important that the route for the dynamic urls (`/photos/:id`) are at the bottom of the page or else anything following the `/photos/` would be considered as an id.

##REST vs CRUD
Another way of understanding the concept is that REST uses HTTP to allow users to  do all the four main CRUD operations.

* **C**reate
* **R**ead
* **U**pdate
* **D**elete

CRUD is defined on Wikipedia as:
> In computer programming, create, read, update and delete (CRUD) (Sometimes called SCRUD with an "S" for Search) are the four basic functions of persistent storage.

#####If you want to store information on a web application, you therefore need to do CRUD operations. If you want to allow users to perform these actions securely, you need to use REST so they can perform these actions using HTTP requests.

Going back to the top again:

> For this section, think of a web application as a piece of software built to help people to store and access information online.

##REST is super cool!

Much like Web Services, a REST service is:

* **Platform-independent** (you don't care if the server is Unix, the client is a Mac, or anything else),
* **Language-independent** (C# can talk to Java, etc.),
* **Standards-based** (runs on top of HTTP), and
* **Can easily be used in the presence of firewalls**.