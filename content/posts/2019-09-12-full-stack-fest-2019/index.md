---
slug:        "2019/09/12/full-stack-fest-2019"
title:       "Full Stack Fest 2019"
subtitle:    "3 days, 1 track, 18 mind-blowing talks."
date:        2019-09-12
cover:       ./fsf-sitges.jpg
coverDescription: "sitges"
coverLink:   "https://www.google.com/maps/@41.2368365,1.8233564,16z"
imageFb:     ./2019-09-12-full-stack-fest-2019-fb.png
imageTw:     ./2019-09-12-full-stack-fest-2019-tw.png
type:        post
comments:    false
tags: 
  - fullstack 
  - frontend 
  - backend 
  - conference 
authors:
  - jeroen
---

*This post contains a brief summary of what I've heard on [Full Stack Fest 2019](https://2019.fullstackfest.com).*

## Introduction

I've been visiting Full Stack Fest from the very first edition back in 2012. I think it's a remarkable single track conference with topics which are really relevant for modern developers.

Previous years we also wrote blogs about it, these can be found here:
- [All](https://040code.github.io/tags/fullstack)
- [2018 - frontend days](https://040code.github.io/2018/09/18/full-stack-fest-2018-frontend)
- [2018 - backend days](https://040code.github.io/2018/09/05/full-stack-fest-2018)
- [2017 - frontend days](https://040code.github.io/2017/09/08/full-stack-fest-2017-frontend)
- [2017 - backend days](https://040code.github.io/2017/09/05/full-stack-fest-2017)

This year the conference is three days and there's no clear distinguish between frontend and backend days.
The location has changed. We're now in Sitges, a beach place near Barcelona.

## The first day - 2019-09-04

### Host

We were welcomed by [Sara Vieira](https://2019.fullstackfest.com/speakers/sara-vieira). She works at codesandbox, which we really like. I also like her humor. She is very direct and I like it very much.

### Lee Byron - We're gunna program like it's 1999

I've seen [Lee Byron](https://2019.fullstackfest.com/speakers/lee-byron) at [ReactEurope](https://www.react-europe.org) in Paris and this talk had some of the same elements. I really admire Lee for all his work and in showing everybody how we need to continue to change the abstractions, syntax and mental models. He shows the past in the future. Also liked the Svelte code example.

[Link to presentation](https://www.youtube.com/watch?v=jMZssfxL6Sg)

### Developers tools
by [Ashley Williams](https://2019.fullstackfest.com/speakers/ashley-williams)

I'm not sure anymore how the talk was called, but she had an amazing talk on making developers tools.
In her work for Rust / WebAssembly she sees that it's very important to understand how developers use your tool. You don't make a product, your enriching a developer.
There is something like [Language Strangeness Budget](https://words.steveklabnik.com/the-language-strangeness-budget). When creating tools or clis, this is very important to keep in mind.

Our products are like the Fire Flowers. They turn Mario (a developer) into a Fire Mario! Senior developers should become Fire Mario Enablers.

[Link to presentation](https://www.youtube.com/watch?v=N6YwzpFYDoo)

### Spreading the JAM throughout your CI workflow
by [Brian Douglas](https://2019.fullstackfest.com/speakers/brian-douglas)

Nice comparison with Baseball. We're using a JAMstack for this blog (gatsby). Brian showed what the benefits are of JAMstacks. The static pages can be served everywhere. Github has some good workflows to automatically publish sites.
Showing Github Actions, now, netlify and so on.
He showed a project [Open-sauced](https://github.com/bdougie/open-sauced). It's a frontend with github API as backend.

[Link to presentation](https://www.youtube.com/watch?v=YHsNSfv4KNY)

### How to build a social network entirely on serverless
by [Yan Cui](https://2019.fullstackfest.com/speakers/yan-cui)

Interesting talk on how Yan migrated a monolith to a [s8s](https://aws.amazon.com/serverless/) environment. How it saves a lot of money. How it impacted the lead times for features and how he approached it. He showed a little monolith diagram of the application and a big diagram with the current lambda implementation. The latter looked a lot bigger, but as a matter of fact, was a lot less complex. The first diagram had simple boxes with a lot of functionality in it. The last one had a lot of boxes with isolated functions.
He suggested to put all features in separate github repositories and give the task of deployment to each repository. Monorepos were not easy to use.

[Link to presentation](https://www.youtube.com/watch?v=XheZQya39H0)

### A programming language for a continuous delivery world.
by [Ellen Chisa](https://2019.fullstackfest.com/speakers/ellen-chisa)
Ellen complained about how long it takes to build a simple app. She wanted a simple app to register her mood, but months later, she was finally ready with setting up Rails, Heroku, Twillio, and so on. The end result is workable for herself, but can not even be shared, so there is something wrong. Too much accidental complexity.

She's no co-founder of [dark-lang](https://darklang.com/). Dark is a holistic programming language, structured editor, and infrastructure, for building backend web services. It's for frontend, backend, and mobile engineers.

This is all in Alpha testing, but she did some cool live coding to show the basic of dark-lang. We were all very impressed and kinda speechless.

### Applied Accessibility: Practical Tips for Building More Accessible Front-Ends
by [Sara Soueidan](https://2019.fullstackfest.com/speakers/sara-soueidan)

Very good presentation on the topic of a13y. She showed why it's so important and how you can improve your apps.
Although it was already late, people wanted to hear her complete story and that's a compliment!

It has a nice contrast with the prior presentation... this feels like a lot of accidental complexity.

[Link to presentation](https://www.youtube.com/watch?v=are7ZZgA86I)

## Thursday 2019-09-05

### CSS Houdini Today
by [Una Kravets](https://2019.fullstackfest.com/speakers/una-kravets)

Una did a great job in showing the possibilities of Houdini and how this can change the way websites will look. Houdini is not available in all brwosers, but it's getting there. In Chrome you can already use it when you enable a flag; `chrome://flags/#enable-experimental-web-platform-features` Once enabled, you can start programming in CSS. See [extra-css](https://extra-css.netlify.com) for more examples.

[Link to presentation](https://www.youtube.com/watch?v=yZ-HpepLIY8)

### Your Tests Lack Vision: Adding Eyes to Your Automation Framework
by [Angie Jones](https://2019.fullstackfest.com/speakers/angie-jones)

Angie showed how you can miss a lot of things, because people are focussed on only a particular part of the app. She showed a clip [Whodunnit?](https://www.youtube.com/watch?v=ubNF9QNEQLA) to prove it.
By running automated tests, you can improve a lot. You're testing exactly what text should be on the screen and what buttons to click. This seems all fine, but can still cause problems. Are the texts visible? Are they overlapping? Are the labels located correct? These kind of bugs are not rare. All big websites sometimes suffer from these errors. Angie showed a framework which takes screenshots and uses ML to analyse the differences with a baseline. Not pixel by pixel, because that is very brittle.

[Link to presentation](https://www.youtube.com/watch?v=xVlixI92Tho)

### Why P2P deserves another chance
by [Paul Frazee](https://2019.fullstackfest.com/speakers/paul-frazee)

Paul explained why P2P on the web deserves another chance. He works on the beaker browser. He showed the history of P2P. Napster, Kazaa, LimeWire, and so on. For some reason P2P was very normal, but for some reason P2P fell off. That's a pity. Beaker re-introduces P2P nodes with the `dat://` protocol. P2P gives us Decentralization, Data Privacy, Data Ownership, No dev-ops and the code is truely open source. No hidden boxes on a server, just all code on each peer. Personally I'm passionate about P2P. We're building an [Identity Box](https://idbox.online/) using [IPFS](https://ipfs.io/). 

[Link to presentation](https://www.youtube.com/watch?v=PDpTkbBxyz0)

### Bringing WebAssembly outside the web with WASI
by [Lin Clark](https://2019.fullstackfest.com/speakers/lin-clark)

This was a very advanced talk, with probably the most impact on the world of software. [WASI (WebAssambly System Interface)](https://github.com/WebAssembly/WASI) is an initiative to run WebAssembly outside the browser. WebAssembly Interface Types interoperate with all the things; languages, wasm, but also browsers and operating systems. This can have impact on everything we currently know. The slides by @codecartoons were very beautiful. I would definitely recommend watching the presentation in the link below. 

[Link to presentation](https://www.youtube.com/watch?v=fh9WXPu0hw8)

### (Programming Languages) in Agda = Programming (Languages in Agda)
by [Philip Wadler](https://2019.fullstackfest.com/speakers/philip-wadler)

Philip Wadler has a lot of energy, especially when he's excited about something. In this case functional programming and proofing that your program is doing what you claim it does. In a language called Agda, he can write proofs. He uses github to openly write a book, and emphasises how wonderful that is. Functional Programming is becoming more and more accepted in for example banking. Philip uses Haskell and Agda in Blockchain to prove SmartContracts.

[Link to presentation](https://www.youtube.com/watch?v=R49VgxNLmsY)

### The Future of Web Animation
by [Sarah Drasner](https://2019.fullstackfest.com/speakers/sarah-drasner)

Sarah showed us a lot of examples how animations will improve the user experience. She showed a lot of (Vue / Nuxt) code examples how to achieve this.I recommend watching the presentation.

[Link to presentation](https://www.youtube.com/watch?v=FDO2jeOTUbU)

## Friday 2019-09-06

### It’s Probably Fine
by [Cate Huston](https://2019.fullstackfest.com/speakers/cate-huston)

A great talk on how you can make teams work. I especially liked the part where she talks about the mismatch between team goals and individual incentives. When they are not aligned, it's very hard to build a team. I recognized this a lot.

[Link to presentation](https://www.youtube.com/watch?v=S-Il860Tqbw)

### Standardizing JavaScript Decorators in TC39
by [Daniel Ehrenberg](https://2019.fullstackfest.com/speakers/daniel-ehrenberg)

Daniel is part of the [TC39](https://github.com/tc39). He explained how the stages work in TC39. He's currently responsible for 3 proposals in Stage 3; [BigInt](https://github.com/tc39/proposal-bigint), [Class Public Instance Fields & Private Instance Fields](https://github.com/tc39/proposal-class-fields) and [Private instance methods and accessors](https://github.com/tc39/proposal-private-methods), and 1 proposal in Stage 2; [Decorators](https://github.com/tc39/proposal-decorators). The last one you might already have seen in ember, Angular or MobX. Aligning the implementations is a very hard job. They all seem to have a slight different idea on decorators. It's up to Daniel (and TC39 which have members of the ember, angular in it) to come up with a solution that doesn't break the web.

[Link to presentation](https://www.youtube.com/watch?v=GLi37QPSOv4)

### HTTP/3 - HTTP over QUIC is the next generation
by [Daniel Stenberg](https://2019.fullstackfest.com/speakers/daniel-stenberg)

Daniel is the creator of `curl`, so he knows a few things about HTTP. HTTP/2 did improve a lot, but Daniel explained how the boxes in between the server and the client are very helpful. They see traffic passing by and they start *helping* us. This might look useful, but it is not. Especially not when you want to improve the network layer. That's why HTTP/3 will use UDP instead of TCP. Of course this gives a lot of other interesting problems. Company networks often see UDP as a DDoS attack and blocks it, but in order to improve the speed of the internet, we need to change the protocol. The Head-on-line problem shifted from HTTP level to TCP level when switching to HTTP/2. This causes all streams to be blocked if a package is missing. HTTP/3 with QUIC can resolve the HOL problem on TCP level. This means only one stream is blocked when a package is missing. But it's a long way... There are a lot of boxes in between..

[Link to presentation](https://www.youtube.com/watch?v=idViw4anA6E)

### Rust, WebAssembly, and the future of Serverless
by [Steve Klabnik](https://2019.fullstackfest.com/speakers/steve-klabnik)

I love Rust, so I'm not going to talk a lot about this presentation. Steve explains a lot about it and how Rust and the Rust Toolchain can be used for WASM. I recommend everybody to see the presentation. WASM (together with WASI) can be the future of s8s. Currently Docker is the container, but a browser can also be the container with WASM / WASI.

[Link to presentation](https://www.youtube.com/watch?v=CMB6AlE1QuI)

### Overall

FSF 2019 was again a big success. Thanks [codegram](https://conferences.codegram.com/) for organizing it. 
