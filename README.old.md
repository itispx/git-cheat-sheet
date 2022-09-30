# Git Cheat Sheet

---

# Config

## List your config

    $ git config --list

## Change your name

    $ git config --global user.name "[name]"

## Change your e-mail

    $ git config --global user.email "[email]"

# Create

## Initialize a git repository inside a directory

    $ git init

## Clone an existing repository

### **HTTPS**

    $ git clone [url]

### **GitHub CLI**

    $ gh repo clone [username]/[repository]

# Status

## Show changed files in working directory

    $ git status

# Log

## History of commits of the repo

    $ git log

# Add

## Add all modified files to the next commit

    $ git add .

## Add only one file to next commit

    $ git add [file]

# Commit

## Commit added files

    $ git commit -m "[descriptive message]"

## Get information about the last commit

    $ git log

## **Shortcut**

## Add & Commit all modified files

    $ git commit -a -m "[descriptive message]"

# Remote

## Link your local code to remote repository

    $ git remote add origin [url]

## Lists remote repositories you have link to your project

    $ git remote

### Also provide the URL

    $ git remote -v

# Push

## First push

    $ git push origin master -u

## Others

    $ git push

# Pull

## Combines fetch & merge

    $ git pull

### **Side note:** Will fail if your directory has uncommited changes

# Fetch

## Fetch the lastest changes to local repo

    $ git fetch

# Merge

### origin/master being the brench to merge on top of the local code

    $ git merge origin/master
