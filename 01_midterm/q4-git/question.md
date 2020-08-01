1. What is the difference between `git pull` and `git fetch`?

2. Why is the "index" or "staging area" needed in git? Put another way, why do you use the command `git add`?

## Answer
1. "git pull" makes a copy from the remote repo and merge it in to your local repo.
   "git fetch" makes a copy of the remote repo and does not do any changes to the local repo.

2. So you don't have to commit all your files in the working directory. 
   You can just commit the files are staged.