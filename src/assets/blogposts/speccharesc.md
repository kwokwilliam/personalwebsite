# `spec-char-escape`

If you guys are getting `spec-char-escape` in your HTML validation test, be sure to look for the `&` symbol in your content! The `&` symbol is an escape character in HTML, mostly used for `&lt;` and `&gt;`, which corresponds to `<` and `>`. This is because the less than and greater than symbols are used for HTML tags, so they'd cause issues if you wanted to use it. Because `&` itself is an escape character, you have to use `&amp;` in replacement.

There are also other special things like `&nbsp;` which stands for non-breaking space.

---

[< Back to Info tutor hub](/blog/infotutor-home)