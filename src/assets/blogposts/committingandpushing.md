# Committing and Pushing

When you finish editing your code, you want to push your code up to github so that it's not saved locally. If you are working in a group, you want to share the code you just made. To do this, first you have to `add` the code you want to commit and push, then `commit`, then `push`.

## Commands

For all these commands, make sure your working directory is the repository and is connected to github.

### add
```bash
git add .
```
This will add all files inside the repo that have been modified. This stages your changes for committing. 

Alternatively, you can add one file at a time
```bash
git add filename
```

### commit
```bash
git commit -m "message"
```
This will commit your changes and add a message to that commit. Note that if you ever leave out the `-m "message"` part, you will be put into a command line editor, which is hard to escape from if you don't know how. 

If you ever get into vim, know you can exit if you type the exact sequence:
```bash
:q!
```
If you know how to use Vim, then all you have to do is modify the file and save it then exit, and it'll act as the commit message.

### push
```bash
git push
```
This command will push your changes to whatever repository is upstream. 

If you ever push to a new branch, git will prompt you to add certain commands to push to the branch. It tells you the command to run very clearly, so when it asks you to, just type that command instead. After you type that command, you only need to do `git push` on that branch whenever you need to push changes.

```bash
git push --set-upstream origin ______
```

Once you push, your changes should be visible on github.

---

[< Back to Info tutor hub](/blog/infotutor-home)