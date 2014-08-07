---
layout: post
title:  "The Partners Problem"
date:   2014-08-6 09:01:00
category: Code
tags:  [Mentoring, Code]
---

Today, we set the students this problem:

<blockquote><p>
  Working in pairs, the students should create an app that will randomly assign groups for the class. The app takes a group size as input and prints out what the groups are. If the class does not divide evenly into the group size, decide what to do with the remaining students.
</p></blockquote>

I decided to play the game too. I tried to get the solution below the character value of a tweet, 140 characters.

{% highlight ruby linenos %}
a=%w(Abdul Akunor Anand Colin Emma Francesco Habib Hisako Kate Laurence Lee Luke Manuel Shehryar Stefanie).shuffle;p "Group size?";c=a.each_slice(gets.to_i).to_a;c[0]+=c.pop if c[-1].size==1;n=0;c.each{|k|p "Group #{n+=1}: #{k.join(', ')}"}
{% endhighlight %}

Or a bit more verbose:
{% highlight ruby linenos %}
a=%w(Abdul Akunor Anand Colin Emma Francesco Habib Hisako Kate Laurence Lee Luke Manuel Shehryar Stefanie).shuffle
p "Group size?"
c=a.each_slice(gets.to_i).to_a
c[0]+=c.pop if c[-1].size==1
n=0
c.each{|k|p "Group #{n+=1}: #{k.join(', ')}"}
{% endhighlight %}