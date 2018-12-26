# Git upstream

In your coursework, if your teacher makes changes to the original repository that your current work is based off of, you will either want to make the same changes yourself, or you can pull from upstream.

```bash
git remote add upstream https://github.com/classnumber/starterrepo.git
```

Once you add this from upstream, you first need to `commit` your current changes, then do `git pull upstream master`, and changes should be there. If you encounter merge conflicts, please refer to the [merge conflicts](/blog/mergeconflicts) guide.

---

[< Back to Info tutor hub](/blog/infotutor-home)