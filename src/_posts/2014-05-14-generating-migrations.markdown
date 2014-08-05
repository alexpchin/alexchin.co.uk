---
layout: post
title:  "Generating Migrations"
date:   2014-05-14 12:07:17
<!-- categories: jekyll update -->
---

> Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use an easy Ruby DSL to describe changes to your tables.

Another way of thinking about them is like a kind of version control (like git) for your application's database - only not as cool as Git (***because Git rules***).

##Each database starts empty
Every database starts empty.
Adding information to a database can be described as a series of steps, one after another... Migrations allow developers to save the most important steps like creating tables or adding columns. Later you can rollback to before these changes if something goes wrong, although you might lose data if you do this!

##Active Record & Ruby DSL
Instead of writing complicated SQL statements with things like left-joins, inner-joins and outer-joins... which even an experienced web developer might find a stuggle to understand, (especially when they didn't write the code), Rails uses something called a **Ruby DSL (Domain Specific Language)**.

- DSL is used to make manipulating an applications' database MUCH easier.

DSL allows us to **manipulate Ruby objects** rather having to SELECT by table and column. This is because a table is just a representation of the information stored about an object. 

##Generating a new migration

{% highlight ruby linenos %}
  $ rails generate migration MigrationName
{% endhighlight %}

**You can call a migration anything you want!** However, it is generally good practise to describe what you are changing in the database so that other people can easily tell what it does.

The format of a migration name is usually:

* In UpperCamelCase
* In the format **AddXXXtoYYY**
* Where XXX is usually **SINGULAR** (as it is a column)
* Where YYY is usually **PLURALIZED** (as it is a table)

Running this will create a blank migration file which will be timestamped, it will look like:

* db/migrate/20100207214725_addXXXtoYYY.rb

And will be in the db > migrate folder.

##When does a migration auto-populate?
This is something that I found confusing when I was first learning about migrations. This only happens when:

**The migration name is of the form "AddXXXToYYY" or "RemoveXXXFromYYY" AND is followed by a list of column names and types**

For example: 

{% highlight ruby linenos %}
  $ rails generate migration AddPartNumberToProducts part_number:string
{% endhighlight %}

A migration containing the appropriate add_column and remove_column statements will automatically be created.

All other times, a **blank migration** will be created.

##Executing a migration
Once you have a migration file that has been created. You need to run:

{% highlight ruby linenos %}
  $ rake db:migrate
{% endhighlight %}

This will execute the migration files. It will execute them **in the order of the earliest timestamp first**, so the oldest one first. 

##Editing a migration file

Within a migration file you need to include:

* Instructions on what to do when you execute the migration
* Instructions on what to do if you want to reverse/rollback a migration 

Sometimes these instructions can be in the form of one **change** method:

{% highlight ruby linenos %}
  class AddPartNumberToProducts < ActiveRecord::Migration
      def change
      end
  end
{% endhighlight %}
  
And sometimes these instructions can be in the form of an **up** method AND a **down** method:

{% highlight ruby linenos %}
  class ExampleMigration < ActiveRecord::Migration
      def up
      end
 
      def down
      end
  end
{% endhighlight %}

##Change vs up/down?
What is the difference?

###Change Method
The change method is the normal way of writing migrations. It works for the majority of cases, where Active Record **knows how to reverse the migration automatically**.

-----

**An example:** 
For many operations rails can guess what is the inverse operation (without problems). For example, in your case what is the reverse operation of `add_column` to call when you rollback? Of course it's `remove_column`. What is the inverse of `create_table`? It's `drop_table`. So in these cases rails know how to rollback and define a down method is superfluous


-----

Currently, the change method supports only these migration definitions:

* add_column
* add_index
* add_reference
* add_timestamps
* create_table
* create_join_table
* drop_table (must supply a block)
* drop_join_table (must supply a block)
* remove_timestamps
* rename_column
* rename_index
* remove_reference
* rename_table

###Up / down methods

This is usually used when Active Record **does not know how to reverse a migration**. 

-----

**An example:**  for some kind of operation you still need to define the down method, for example if you change the precision of a decimal column how to guess the original precision on rollback? It's not possible, so you need to define the down method.

-----

###Up
The up method should describe the transformation you'd like to make to your schema.

###Down
The down method of your migration should revert the transformations done by the up method. 

> If you did an up followed by a down - the table should be unchanged.

#####What to do when the migration is irreversible?

If your migration is irreversible, you should `raise ActiveRecord::IrreversibleMigration` from your down method.

-----

**An example:** There are certain commands like `remove_column` that cannot be automatically reversed. This is because the information required to re-create the column is not available in the remove_column command, e.g. `What datatype do you want the removed column to have?` If Rails encounters such commands while reversing a migration, an `ActiveRecord::IrreversibleMigration` exception will need be raised.

-----

I will do another blog on actually what to add inside the change & up/down methods.
