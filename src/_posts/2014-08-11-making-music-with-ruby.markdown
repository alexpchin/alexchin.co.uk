---
layout: post
title:  "Making music with Ruby"
date:   2014-08-12 09:02:00
category: Ruby
tags:  [Lrug, Ruby, Music]
---

Last night I went to [LRUG](http://lrug.org/) and I watched a talk by Alex Speller about music theory and Ruby.

Alex Speller says:

<blockquote><p><em>Music theory can seem arcane and unapproachable. But underneath the weird names and symbols, the basics are actually pretty simple. The real issue is that the documentation is bad and the API is worse! In this talk I will show how to start with nothing but a ruby interpreter, and generate sine waves, notes, scales, modes, chords, arpeggios and songs, in a way that will be understandable to those who have never touched an instrument before and will (hopefully) offer an interesting new perspective even to those who are already well versed in music theory.</em></p></blockquote>

I thought the talk was really great. Here is how Alex made a note in Ruby:

{% highlight ruby linenos %}
require 'bundler'
Bundler.require

frequency     = 440.0   # frequency of the note, in hz
sample_rate   = 22050 # frames per second
duration      = 1.0     # seconds

# we want 1 second of the note, so we need 1 second's worth of frames
total_frames = (duration * sample_rate).to_i

# each frame, we want this fraction of a cycle:
cycles_per_frame = frequency / sample_rate

# What is a cycle? A cycle is a full sine wave, which is 2π radians:
increment = 2 * Math::PI * cycles_per_frame

phase = 0

samples = total_frames.times.map do
  sample = Math.sin phase
  phase += increment
  sample
end

filename = 'a.wav'

format = WaveFile::Format.new :mono, :pcm_16, sample_rate
buffer_format = WaveFile::Format.new :mono, :float, sample_rate
WaveFile::Writer.new filename, format do |writer|
  buffer = WaveFile::Buffer.new samples, buffer_format
  writer.write buffer
end

`afplay a.wav`
{% endhighlight %}