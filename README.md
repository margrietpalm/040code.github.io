# 040 code blog


## Writing a post

### asciinema player
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