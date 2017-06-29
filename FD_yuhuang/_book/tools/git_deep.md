1version
2集中化的版本控制系统（Centralized Version Control Systems）应运而生。这类系统，诸如CVS、Subversion等，都有一个单一的集中管理服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。
3这样做最大的缺点就是中央服务器的单点故障。如果宕机一小时，那么在一小时内所有人都无法提交更新，也就无法协同工作。要是中央服务器的磁盘发生故障，碰巧没有备份或者备份不及时，就会有丢失数据的风险。最坏的情况是彻底丢失整个项目的所有历史更改记录，而被客户端提取出来的某些快照数据除外，但是不能够保证所有的数据都已经有人事先完整的提取出来。

本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。
3分布式版本管理系统就是为了解决这个单点问题，在这类系统中，像Git、Mercurial、Bazaar以及Darcs等，客户端并不只是提取最新的文件快照，而是把原始的代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的提取操作，实际上都是一次对代码仓库的完整备份。更进一步，这类系统都可以指定和若干不同的远端代码仓库进行交互。

#youdian
Git 并不保存这些前后变化的差异数据。实际上，Git 更像是把变化的文件作快照后，记录在一个微型的文件系统中。每次提交更新时，它会纵览一遍所有文件的指纹信息并对文件作一快照，然后保存一个指向这次快照 的索引。为提高性能，若文件没有变化，Git 不会再次保存，而只对上次保存的快照作一链接。
 2、支持离线工作（近乎所有操作都是本地执行），本地提交可以稍后提交到服务器上；
 3、时刻保持数据完整性；


# 命令
3、抓取远程仓库的信息

     git fetch [remote-name]

     此命令会到远程仓库中拉取所有你本地仓库中还没有的数据。运行完成后，你就可以在本地访问该远程仓库中的所有分支，将其中某个分支合并到本地，或者只是取出某个分支，一探究竟。如果是克隆了一个仓库，此命令会自动将远程仓库归于 origin 名下。所以，git fetch origin 会抓取从你上次克隆以来别人上传到此远程仓库中的所有更新（或是上次 fetch 以来别人提交的更新）。有一点很重要，需要记住，fetch 命令只是将远端的数据拉到本地仓库，并不自动合并到当前工作分支，只有当你确实准备好了，才能手工合并。
     6. 标签
在git里有两种类型的标签 - 轻量级标签和带注释标签。记住技巧2里说过git是基于指针的，这两者之间的差异也很简单。轻量级标签只是一个简单的指向一次提交的带名字指针。你随时都可以将它指向另一个提交。带注释标签是一个指向标签对象的带名字指针，带有自己的信息和历史。因为有自己的信息，它可以根据需要用GPG签名。

建立这两种类型的标签都很简单（只有一个命令行开关的差异）

$ git tag to-be-tested
$ git tag -a v1.1.0 # 会提示输入标签的信息

3
并不常见的使用场景。

git reset
git reset --soft

既没修改index也没修改working tree，只是将当前HEAD指针放到ORIG_HEAD里，然后将HEAD指向目标Commit(默认为HEAD)。

如果要撤销git reset --soft，只需要使用git reflog找到最近的一次提交，然后对其再做一次reset即可，比如git reset --soft HEAD@{0}。

git reset --mixed

重置index，不修改working tree。通常用于将git add的改动移出index，不会修改文件内容。

git reset --hard

重置index和working tree，完全恢复到目标comit(默认是HEAD)的状态。所有未commit或stash的改动都会丢失，使用此命令需多加小心。


在文章任何区域双击击即可给文章添加【评注】！浮到评注点上可以查看详情。
隐藏标注
@董林 希望我讲一下这三个命令，我看了一下，这三个命令虽然平时用得较少，但是在特定的情况下还是非常有用的，所以我就详细讲解一下。

注意：下面的内容可能有点难，大家要集中精力了。

一、squash

squash准确来说并不是一个命令，而是rebase命令的一个功能。squash的作用很简单——合并多个commit。

来看用法：

git rebase -i HEAD~5

-i的意思是使用“交互式”的修改方法。加了这个参数之后，Git会把所有commit列出来，让你进行一些修改，修改完成之后会根据你的修改来rebase。HEAD-5的意思是只修改最近的5个commit。

运行完这条命令之后，会进入一个编辑界面，大概是这样的：

pick awe Add sth pick add Have a rest pick xxc Wow pick cxz Yeah pick dsa Finish it

可以看到一共有5行，这就是最近的5个commit以及它们的信息。

假设我们现在想把它们合并成一个commit，要怎么做呢？直接看例子：

pick awe Add sth squash add Have a rest squash xxc Wow squash cxz Yeah squash dsa Finish it

我们把后4个commit的pick都改成了squash，修改完成之后保存退出，Git就会继续执行rebase命令了。执行完可以看一下结果，最后的4条commit都消失了，它们都被合并到了倒数第5条中。

现在大家应该理解了，squash的作用就是把当前commit向前合并，一直合并到pick为止。

rebase完成之后大家可以看一下最后一个commit的信息，里面会包含rebase之前最后5条的所有commit信息，也就是诸如“Add sth Have a rest Wow Yeah Finish it”这些东西。

二、fixup

fixup和squash非常类似，把pick修改成fixup，同样会向前合并到pick，唯一的区别就是，fixup会忽略当前commit的信息，只会应用修改。

怎么理解呢？还用上面的例子说，假设我们使用fixup代替squash：

pick awe Add sth fixup add Have a rest fixup xxc Wow fixup cxz Yeah fixup dsa Finish it

保存退出之后，等Git执行完rebase我们查看一下最后一条commit的信息，会发现里面只有“Add sth”，另外四条commit的信息比如“Have a rest”都没有了。

三、stash

stash是一条Git命令，作用非常简单——保存当前状态。

假设我们现在正在进行工作，修改了一些文件，添加了一些文件。这时我们突然想切换到另一个分支工作，但是又不想commit当前的修改（可能因为它们还不能运行），那该怎么办呢？答案就是stash。

来看命令——git stash

执行完命令之后，Git会把当前的状态保存，同时清理当前目录。我们可以运行一下 git status，会发现当前目录没有任何修改。这时我们就可以放心地切换分支工作了。

等其他工作结束，想继续之前的工作时，可以运行 git stash apply，Git会把保存的状态复原。

stash可以运行多次，会保存多个状态，可以运行 git stash list 来查看所有状态。运行 git stash apply 会默认复原到最近一次保存的状态，如果想指定复原状态可以使用 git stash apply stash@{2} ，这条命令会复原到 stash@{0} 状态。

运行 apply 之后，被复原的状态并不会自动删除，仍然在 stash list 当中。可以运行 git stash drop stash@{0} 来删除 stash@{0} 状态，或者使用 git stash pop 命令来代替 git stash apply 命令，这样复原之后会自动删除被复原状态。

如果 apply 的时候出现冲突（因为你 stash 之后对文件进行了修改），那么需要手动解决冲突。

最后需要注意一点：stash 复原的时候默认不复原 staged 文件，也就是说如果你运行过 add 命令，使用 git status 查看的话文件应当处于 staged 状态，但是如果你 stash 并复原再看，那个文件的状态又变回 unstaged 了。解决办法就是运行 git stash apply 命令时加上 –index 参数：git stash apply –index，这样就可以完全恢复到 stash 之前的状态。