---
layout: post
title:  "We can’t automatically merge this pull request."
date:   2014-08-7 09:01:00
category: Code
tags:  [Mentoring, Code]
---

Github makes very easy to collaborate with people, however sometime it’s a bit complicated to understand how to use Pull Request, and in particular how to make sure that the feature branch can be merged in master in a Fast Forward way.

##Why this happens

The problem is that both in master and in your branch some files have been changed, and their going in different directions. The content of the file in master is different from the one in your feature_branch, and git does not know which one to pick, or how to integrate them.

To solve this, you need to

- Get the latest upstream/master
- Switch to your master
- Merge the latest master in your master (Never develop in master, always develop in a feature branch)
- Switch to your feature branch
- Merge master in your feature branch
- Solve all the conflicts: this is where you decide how to integrate the conflicting files, and this can be done only by you because you know what you did, you can figure out what happened in master, and pick the best way to integrate them.
- Commit all the changes, after all the conflicts are solved
- Push your feature branch to your origin: the Pull Request will automatically update.

## Code

- 1. Git fetch upstream

{% highlight ruby linenos %}
git fetch upstream
{% endhighlight %}

- 2. Go to your master. Never develop there.

{% highlight ruby linenos %}
git checkout master
{% endhighlight %}

- 3. Bringing your master up to speed with latest upstream master

{% highlight ruby linenos %}
git merge upstream/master
{% endhighlight %}

- 4. Go to the branch you are developing

{% highlight ruby linenos %}
git checkout my_feature_branch
{% endhighlight %}

- 5. It will not be fast forward

{% highlight ruby linenos %}
git merge master
{% endhighlight %}

- 6. Solve the conflicts.
- 7. Commit all the changes. Write an intelligible commit message

{% highlight ruby linenos %}
git commit -m "Decent commit message"
{% endhighlight %}

- 8. This will push the branch up on your repo.

{% highlight ruby linenos %}
git push origin my_feature_branch
{% endhighlight %}