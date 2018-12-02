# Cloning a repository 

> Note: This page is only for learning how to clone a repo to your desktop. If you want to learn how to clone it to your student server, please see the [student server](/blog/studentserver) page.

To clone a repository from github...

1. Click on the big green "Clone or download" button on the repository 
    * for your homeworks you should _never_ need to click on the fork button
1. copy the link when you are under "Clone with HTTPS" 
    * do not use SSH unless you are copying it for the student server
1. Use your terminal to navigate to the folder you want to clone the repository into
    * the cloning process creates a folder with the name of the repository inside the folder you clone it into
    * You can navigate using the `cd` command. IE `cd Desktop/INFO_201`. You can use the tab key on your keyboard to auto complete.
    * Print your current directory by typing `pwd` to see your location.
    * Print a list of files and folders in your current directory by running the `ls` command. Do `ls -l` to see more details.
1. Run `git clone <link>`. Replace `<link>` with the link you copied earlier. On Windows you can press Shift-Insert to paste in (or right click > paste).
1. Once it loads, you can now `cd` into that directory and see the files from github.

---

[< Back to Info tutor hub](/blog/infotutor-home)