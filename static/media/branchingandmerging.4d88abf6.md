# Branching and Merging

There are many reasons why you might want to use branching. One reason might be that you want to have people in your group work on separate parts of the code at once without interfering with each other or worrying heavily about merge conflicts, or maybe you want to keep track of github issues easier and dedicate a branch to working on a single issue. There are many git branching methodologies. One method I was taught was [this](https://nvie.com/posts/a-successful-git-branching-model/). Your workplace may use different ones, so it's important to understand what happens when you make and merge new branches so you can adapt. 

## Making a new branch

To make a new branch, you run this command:

```bash
git checkout -b newbranchname
```

## Changing to an existing branch

To change to an existing branch, run this command:

```bash
git checkout existingbranchname
```

## Pushing a branch

To push a certain branch run

```bash
git push origin nameofbranch
```

or alternatively, 

```bash
git push --set-upstream origin nameofbranch
```

then the next subsequent `git push` commands will push that branch.

## Merging a branch

Go to the branch you want to have things merged to first, then run

```bash
git merge otherbranch
```

That will merge `otherbranch` to the branch you are currently on. Merge conflicts may arise. To fix them, check out the [merge conflicts](/blog/mergeconflicts) page.


## Read more

A more in depth guide and explanation can be found [here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

More git branch commands [here](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)

---

[< Back to Info tutor hub](/blog/infotutor-home)