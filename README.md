# 040 code blog

## Purpose

This repo contains the source of the [040 code blog](https://040code.github.io).

## The blog

The 040 code blog is an initiative from Developers that have a relation with the city [Eindhoven](https://www.thisiseindhoven.com/en), in the [Netherlands](https://www.youtube.com/watch?v=eE_IUPInEuc). The name `040` points to area code used at the time we used the old landline for calling our friends and family.

Articles on this blog are our ideas, experiments and opinion. For each blog post we make a nice picture from a place in Eindhoven that we like for some reason.

## Credits

This blog is created with the [Gatsby](https://www.gatsbyjs.org/), an awesome framework to create a static blog using [React](https://reactjs.org/) and [GraphQL](https://graphql.org/). And to get even faster started we have based the blog on the React Starter [gatsby-starter-morning-dew](https://github.com/maxpou/gatsby-starter-morning-dew)

## How to contribute

Fork the repo, do your changes and create a pull request. Everybody is welcome to write an article.
The main branch to work from is: `source`

The `master` contains the static page created by travis-ci and gatsby.

## How to run

```
yarn
yarn dev
```

Visit: [http://localhost:8000](http://localhost:8000)
Gatsby also delivers a graphiql interface in development mode: [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## Writing a post

### Directory
Create a directory with the following format: `YYYY-MM-DD-<slug>` in the `/content/posts/` directory. Simply copy an existing posts directory f.e. [this post](https://github.com/040code/gatsby/tree/master/content/posts/2017-04-20-discovery-agent).

### Post
Change the `index.md` file. This is basically where you write your post. 

### Images
Images needed for the post can be stored in the same directory and referred to in the post with: 

```
<a href="#">
    <img src="./image-name.png" height="100%" width="100%" alt="alttext">
</a>
```

### Frontmatter

A frontmatter is needed for Gatsby to know how to display the post.

Example of a frontmatter:

```
---
title:      "Git Bisect"
slug:       "2019/03/13/git-bisect"
subtitle:   "Find the bug-introducing commit with Git Bisect"
date:       2019-03-13
cover:      "./background.png"
coverLink:  "https://goo.gl/maps/jSKonnGYR1u"
coverDescription: "Frits Philipslaan"
imageFb:    "./2019-03-13-git-bisect-fb.png"
imageTw:    "./2019-03-13-git-bisect-tw.png"
asciinema:  true
type:       post
tags:
  - 'git'
  - 'rust'
authors:    
  - jeroen
---
```

Most fields are self-explaining. We formatted the `slug` with backslashes so the urls are nice.
`cover` is the header image.
`coverLink` and `coverDescription` are optional. When given, a link to google maps is shown in the right bottom corner. 
`imageFb` and `imageTw` are thumbnails for socialmedia. They can be automatically created by running: `yarn generatePostPreviewImages`.
`asciinema` can be set to true to use the awesome asciinema player.
`type` must be set to `post`.
`authors` must be set to an existing author in the `content/authors` directory. If you're new, feel free to add yourself as an author. 

#### More info on asciinema player
To add terminal recordings we use [asciinema](https://asciinema.org/docs/usage).

Once you have captured the `json` of you recording add the file to a folder in `static/<slug>`. This folder will be served as static content.

In the post you have to enable `asciinema` by setting the frontmatter property. In the post you can now embed the asciinema player. The `src` attribute is not post processed. It should match with the folder that you have created as static content.

```
---
slug:       "<slug>"
...
asciinema:  true
---

...

<asciinema-player src="/<slug>/source.json"
  cols="166" rows="18">
</asciinema-player>

```

## License
MIT

## Authors
[Contributors](https://github.com/040code/040code.github.io/graphs/contributors)
