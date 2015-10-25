---
layout: post
title:  "Force git to overwrite local files on pull"
date:   2014-08-26 09:01:00
category: Teaching
tags:  [Mentoring, Git]
---

"How do I force git to overwrite local files on pull?"

This question popped up from someone today and I realised there wasn't any clear blog posts saying how to do this, so I thought I'd add one.

##Solution

{% highlight ruby linenos %}
git fetch --all
git reset --hard origin/master
{% endhighlight %}

##What happens?

`git fetch` downloads the latest from remote without trying to merge or rebase anything.

Then the `git reset` resets the master branch to what you just fetched. The --hard option changes all the files in your working tree to match the files in origin/master, so if you have any local changes, they will be lost. With or without `--hard`, any local commits that haven't been pushed will be lost.

If you have any files that are not tracked by Git (e.g. uploaded user content), these files will not be affected.