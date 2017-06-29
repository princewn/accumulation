# gitLab
- gitLab是针对企业定制的github应用 
- 一下要点为意识流，不是指令教程，指令请学习相关教程
### 常用操作
- 本地仓库 
- init status：
	- init+ ssh-keygen + git remote add origin /git clone git push -u origin master -u
	- 把本地的master分支和远程的master分支关联起来 
- add or commit 
	- Untracked files -> Changes to be committed 本地 ->暂存区-》本地仓库 
- git reset --hard HEAD^ git reflog
 	- 为什么要好好写commit的原因 
- git diff 
 	-查看工作区和版本库里面最新版本的区别,当前和上一次commit的差别
- git checkout 
	- file的工作时机，回复到最近的工作区 
	- 已经add了，在commit之前删除，$ git reset HEAD file，回复到最近的工作区 

- rm & git rm 

- git merge fast forward git branch -d 
	- 可是，时光机没那么好坐，关联到一个远程仓库时，放图 
- $ git log --graph --pretty=oneline --abbrev-commit * 59bc1cb conflict fixed |\ | * 75a857c AND simple * | 400b400 & simple |/ * fec145a branch test
### Git 工作流
- master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

- 干活都在dev分支上，小伙伴们每个人都在dev分支上干活，每个需求都有自己的分支。
- 到某个时候，比如1.0版本发布时，想要在在master分支发布1.0版本：
	- git tag publish/x.x.x
	- git push origin publish/x.x.x

- 强行删除分支，需要使用命令git branch -D feature-vulcan

### tips
- git remote -v 
- git branch命令，只能看到拉到本地的分支。
- 第一次git push 需要指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接：
	- $ git branch --set-upstream dev origin/dev



- 由于是定制的，付费公司可以通过git refference???定制 
	- 那么对于我们日常的发布流程就是 
	- git tag daily/2.1.1 
	- git publish daily/2.1.1 
	- git checkout master 
	- git merge daily/2.1.1

### case
- 将本地没有的远程分支拉到本地
	- git checkout master
	- git pull origin master
	- git checkout -b daily/x.x.x
	
	通过以上操作，就会把远程daily/x.x.x分支上的内容一并带到本地啦

