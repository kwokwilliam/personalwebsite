# Hosting a site on your student server

## Prerequisites

Mac users can use terminal without any huge issues with development. Unsure if git is pre-installed on macs, but that's a plus. Windows may need **git bash**, or **PuTTY** for connecting with SSH. 

## How to

1. Activate Shared Web Hosting [here](https://itconnect.uw.edu/connect/web-publishing/shared-hosting/activating-shared-web-hosting/)
    1. Will make a public_html file when you SSH in, which you'll use to organize your server
2. Find your server. [Documentation](https://itconnect.uw.edu/connect/web-publishing/shared-hosting/web-development-environments/).
    1. It will most likely be uwnetid@vergil.u.washington.edu.
3. Connecting with SSH [here](https://itconnect.uw.edu/connect/web-publishing/shared-hosting/ssh/)
    1. Mac users have SSH built in
    2. Windows will need git bash or PuTTY as I said above. [PuTTY download](https://www.chiark.greenend.org.uk/~sgtatham/putty/)
    3. `ssh uwnetid@vergil.u.washington.edu`, use your netid password.
4. Transferring files
    1. You will be using the github repo that contains the site you want to upload (with an index.html file in the main directory of it).
    2. In the SSH terminal, clone the repo using the ssh option on github.
        1. You most likely will need an SSH key. Will be making instructions for git bash, unsure of how it is for PuTTY. Instructions [here](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
        2. When logged into the student server, do `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`. Use the email that you used for your github account. 
        3. Press enter for file location (use default), and you can enter a passcode if you want.
        4. If you `cd ~/.ssh` you should see with `ls` that there are three files.
        5. `vi id_pub.rsa`, and highlight everything from `ssh-rsa` to your email at the end.
        6. Right click and copy (or use ctrl-insert)
        7. Go to github settings > SSH and GPG keys
        8. Add the ssh key
    3. Clone the repo, and if you made a separate gh-pages branch which has an index.html file (will use later with React), then do `git checkout gh-pages` or use `git checkout Development` if this is before project 3.

Your base url will be at http://students.washington.edu/uwnetid/. Going to http://students.washington.edu/uwnetid/reponame will automatically open the index.html file.

---

[< Back to Info tutor hub](/blog/infotutor-home)