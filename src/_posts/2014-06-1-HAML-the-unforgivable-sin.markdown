---
layout: post
title:  "HAML: the unforgivable sin"
date:   2014-06-2 12:07:17
---

Repost from: [http://opensoul.org/2011/11/30/haml-the-unforgivable-sin/
](http://)

I used HAML on several client projects and I hated it every time. There are certainly some things that are nice about it, but overall it is a net loss.

##For abstraction’s sake
Abstractions are a beautiful thing. The goal of an abstraction is to reduce or factor out irrelevant details. Removing details focuses you on the problem at hand and not the underlying implementation.

But an abstraction fails when it doesn’t remove the details. HAML is purely an abstraction of syntax. I still have to think about tags, ids and classes while I’m writing HAML. It simply provides a more concise syntax.

##So you hate SASS and CoffeeScript too?
No. While SASS and CoffeeScript do abstract the syntax of CSS and JavaScript, they provide other great features.

SASS (or even better, SCSS) is a great abstraction because it enables features that would be nearly impossible to maintain by hand. It makes it easier to break your styles up into small, reusable components, and encourages good design patterns.

Likewise, CoffeeScript adds “features” on top of JavaScript that are extremely cumbersome to code by hand. CoffeeScript guards against common coding mistakes, like ensuring variables are properly declared within lexical scope.

##Easy to write, hard to read
I agree that HAML is easier to write than HTML, simply because it involves less typing. But I feel it is infinitely harder to read. While the indentation makes it easy to see the nesting, the extremely overloaded synax requires careful attention to each line.

If HAML provided some value other than saving a few keystrokes, I would likely become a believer. But it doesn’t.

Typing is not my bottleneck in coding. Thinking is. And forcing my brain to parse HAML when it is occupied by more important things is not conducive to productivity.