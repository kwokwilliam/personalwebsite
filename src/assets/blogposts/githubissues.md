# Github Issues

Github issues are used for tracking bugs that need to be fixed in your code, features requests, etc. On a lot of open source projects, you'll see issues being used as a discussion board for code reviews and deliberation about a certain feature. On an open source project, you might want to make a contribution by programming something in, commenting on the existing issue that you solved the problem, and show them your code branch (and possibly open up a [pull request](/blog/githubpullrequests)). Others will comment on the issue until it is solved all the way, and someone with editing rights will pull your code into the master branch. 

One way I have seen github issues used with branches is having a branch named after a github issue with the number. For example, an issue might be named and numbered "#97 Top box displays overlap", and the assocated branch would be "bug97/topboxdisplay". Or another issue would be "#73 Admin rights need to be added" and the branch would be "feature73/adminrights". These are examples for organizing code branches a lot easier, and your workplace may have different practices in the future. 

## Referencing Issues in Commits

A github issue has a number associated with it. You can push your code with a commit message `"abc abc #11"`, and that commit will be visible in issue #11 on github, so people can easily access it.

## Closing Github Issues

You can either close/comment and close an issue manually via github, or you can close it via a commit message (if the commit is to master). For example, a commit message of `"Made changes to file.js, fixes #12"` will close issue 12. See all the keywords [here](https://help.github.com/articles/closing-issues-using-keywords/)

---

[< Back to Info tutor hub](/blog/infotutor-home)