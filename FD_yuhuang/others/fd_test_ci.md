前端同样需要测试，你的css改动可能导致页面错位、js改动可能导致功能不正常。
由于前端偏向GUI软件的特殊性，尽管测试领域工具层出不穷，在前端的自动化测试上面却实施并不广泛，很多人依旧以手工测试为主。
自动化的收益 = 迭代次数 * 全手动执行成本 - 首次自动化成本 - 维护次数 * 维护成本
对于自动化测试来说，相对于发现未知的问题，更倾向于避免可能的问题。
单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。
前端自动化测试可以在几个方向进行尝试：

界面回归测试 测试界面是否正常，这是前端测试最基础的环节

功能测试 测试功能操作是否正常，由于涉及交互，这部分测试比界面测试会更复杂

性能测试 页面性能越来越受到关注，并且性能需要在开发过程中持续关注，否则很容易随着业务迭代而下降。

页面特征检测 有些动态区域无法通过界面对比进行测试、也没有功能上的异常，但可能不符合需求。例如性能测试中移动端大图素材检测就是一种特征检测，另外常见的还有页面区块静态资源是否符合预期等等。

减小使用和维护成本

自动化测试为人诟病的地方无外乎使用效果和使用成本，使用效果可以对症下药选择合适的工具，而使用成本则可以通过一系列措施来减小到合理程度：

与构建工具结合

grunt、FIS，将自动化测试与构建工具结合能更早的发现问题，也能减小使用和维护成本

与持续基础结合

与CI系统的结合能更大范围更有效的发挥自动化测试的作用

与工作流结合

与日常工作流结合同样是为了减少使用成本，如将结果通过自定义的方式反馈给用户等。

测试配置化

测试配置化能让用户使用和维护更加简单、大部分情况下只需要维护配置脚本即可

should 
test framework agnostic BDD-style assertions
兼容性



npm WARN grunt-underscore-jst@0.3.0 requires a peer of grunt@~0.4.2 but none was installed.
yuhuangdeiMac:fd-test-ci yuhuang$ npm install grunt@"0.4.2"


phtomjs-prebuilt
karma-firefox-launcher
 UNMET PEER DEPENDENCY phantomjs-prebuilt@>=1.9
karma-phantomjs-launcher：PhantomJS环境￼

front end
automated testing
Continuous integration 

Automated Front-End Tests


Then?
Continuous Integration
master-slave

优秀的CI系统
GitLab-CI
Jenkins
Gerrit
Travis-CI

macaca-master
并发任务
节点管理
WEB平台集成
沉淀数据、报表
Docker D

macaca-slave
配置管理
测试框架集成
slave条件负载
￼