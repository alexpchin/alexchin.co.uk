---
layout: post
title:  "A story explaining MVC"
date:   2014-05-15 12:07:17
<!-- categories: jekyll update -->
---

MVC stands for:

* Models
* Views
* Controllers

It’s more fun to imagine the explainatin of MVC as a story with “a **fat assistant**, a **skinny manager** and a **good looking sales rep**" (fat model, skinny controller and well designed view) rather than a boring “3-tiered MVC architecture”. 

* Models do the grunt work 
* Views are the happy face
* Controllers are the masterminds behind it all.
 
Many MVC discussions also ignore the role of the web server. However, it’s important to mention how the controller magically gets created and passed user information. The web server is the shopping small, a  gateway where everything is located, in which people move data back and forth: users never interact with the controller directly ;).

##An MVC story

* First, the **browser makes a request**, such as http://alexchin.co.uk/videos/show/15
> A customer decides they want to buy something from a business.

* Then the web server (Heroku, 1and1, Amazon etc.) receives the request.
> The customer actually walks into the business where the business is located (like a shopping center).

* The server uses `routes.rb` (in application > config) to find out which controller to use: the default route pattern is `“/controller/action/id”`. In the case above, it’s the “`videos`” controller (controllers should be plural), method “`show`” with an id of “`15`″. The web server then uses the dispatcher to create a new controller, call the action and pass the parameters.
> The customer asks someone from the shopping center, *"I'd like to get a video with an id of 15, where would I find that?"* The shopping mall assistant looks at the map given to them by the shop and says, *"Over there dude!"*

* Controllers do the work of **parsing user requests**, **data submissions**, **cookies**, **sessions** and the “browser stuff”.  In our case (http://alexchin.co.uk/videos/show/15), the show method in the video controller knows it needs to lookup a video. It asks the model to get video 15, and will eventually display it to the user.
> The customer meets the controller, a slick-haired manager that orders employees around. The controller gives orders without knowing (or caring) how it gets done. When the employ goes to get a video the controller grabs it off the model and then gives it to the customer.

* Models are Ruby classes that represent objects. They **talk to the database**, **store and validate data**, perform the **business logic** and otherwise do the **heavy lifting**. In our case, the model retrieves video 15 from the database. 
> Think of models as the people who stack the shelves in the shop. They do all the work to sort and grab things when you need them to. They pick up the objects and sort them out (even more because of Ruby's use of DSL instead of SQL). You can think of the database as the actual shelves where the products are stored. 

*Note from Pavling: "Beware... if the shop assistant gets too fat, he won't be able to get around the shop. I think the skinny manager might prefer lots of skinny assistants to one fat one..."

* Views are what the user sees: **HTML, CSS, XML, Javascript, JSON**. In our example, the controller gives video 15 to the “show” view. The show view generates the HTML: divs, tables, text, descriptions, footers, etc.
> Sometimes, you can think of the views as the actual product... But you can also think of a view like a sales rep. They are often responsible for putting up flyers and collecting surveys. However, they work completely at the manager’s direction. Views are merely puppets reading what their manager (the controller) gives them. They don’t know what happens in the back room. (They probably live for the weekend!)

* The controller also returns the response body (HTML, XML, etc.) & metadata (caching headers, redirects) to the server. The server combines the raw data into a proper HTTP response and sends it to the user.