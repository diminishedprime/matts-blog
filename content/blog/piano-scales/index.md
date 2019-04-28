---
title: Piano Scales
date: "2019-04-21T23:40:00.000Z"
seo:
 - piano
---


# Todo

+ Add in a key signature
+ Add in fingering
  + Add in left hand piano
+ Add in option to create own list
+ Add in option to score scale as pass/fail.
  + Add option to focus on failed scales
+ Use local storage to make data persist between loads.

<div><mjh-scales></mjh-scales></div>

When trying to learn piano scales, it's useful to see

+ Key Signature
+ Fingering (especially across multiple octaves)
+ Note Names

I couldn't find a resource for piano scales that did all of the following, so I
made the above component to do just that. It makes use of the excellent [tonal]
library by [danigb].

I was also inspired by [the random scale machine]. So you can see some of that
influence as well. Ideally, this tool can be used to learn new scales, refresh
on those you're already familiar with, and to quiz on those that you think you
have down.

[tonal]: https://github.com/danigb/tonal
[danigb]: https://github.com/danigb
[the random scale machine]: http://www.therandomscalemachine.com/
