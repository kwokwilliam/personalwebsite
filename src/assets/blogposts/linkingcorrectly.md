# Linking files correctly

If you are using live server in the exercise directory, this problem might not be apparent (especially since it isn't caught by the tests). If you are doing one of these things, the problem is more apparent:

1. You are opening your html via just opening the index.html file in chrome without using live server
2. You are using live-server on the directory outside of the exercise (eg `ps-1-yourusername` instead of `exercise-1`).

What is actually happening is that you might have `<link rel="stylesheet" href="/css/style.css">` linking your CSS.

Note that `/css/style.css` is *wrong*. Because the css folder is in the same directory as the index.html file, you actually want `css/style.css`.

I would highly suggest you take a look at this, because this is something that could make it not appear correctly if you put it on your student server.

---

[< Back to Info tutor hub](/blog/infotutor-home)