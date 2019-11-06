### Freeman 后台管理系统

<div style="text-align: center">

[![AUR](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/elunez/eladmin/blob/master/LICENSE)
![https://img.shields.io/badge/license-Apache%202.0-blue.svg?longCache=true&style=flat-square](https://img.shields.io/badge/license-Apache%202.0-blue.svg?longCache=true&style=flat-square)
![https://img.shields.io/badge/springboot-2.1.4-yellow.svg?longCache=true&style=flat-square](https://img.shields.io/badge/springboot-2.1.4-yellow.svg?longCache=true&style=flat-square)
![https://img.shields.io/badge/shiro-1.4.0-orange.svg?longCache=true&style=flat-square](https://img.shields.io/badge/shiro-1.4.0-orange.svg?longCache=true&style=flat-square)
![https://img.shields.io/badge/vue-2.6.10-brightgreen.svg?longCache=true&style=flat-square](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg?longCache=true&style=flat-square)

</div>

#### 项目简介
Freeman是基于 Spring Boot、Jpa、Shiro、Vue、JWT 的前后端分离的后台管理系统，角色的功能权限控制方式为基于RBAC规范的SHiro，角色数据范围控制是根据用户的所属机构、数据的创建者(用户ID)实现。项目支持前端菜单动态路由。前后端交互使用JWT验证权限，使用Redis调用lua脚本的方式，并且在令牌刷新时，旧令牌续命30秒进行平滑过渡，丝般顺滑地达到了用户无感知动态刷新JWT的目的。

//我之所以写这个项目的原因是：看到网上开源的后台管理项目核心架构大多是基于SSM。jpa和mybatis各有优缺点，我觉得jpa`动态条件查询写起来麻烦`，`项目的逻辑复杂的时候，代码冗长、sql逻辑不直观`的坑，努力填一下，
//项目集成的功能不多，但是、有亮点。

**开发文档**  [https://lzxorz.github.io/](https://lzxorz.github.io/)

**体验地址**  [http://139.199.112.93](http://139.199.112.93)

**账号密码** ```system/123456```

#### 项目源码

|  平台   |   源码链接  |
|---  |------ |
|  github   |  https://github.com/lzxorz/freeman   |
|  码云   |  https://gitee.com/lzxorz/freeman   |

####  系统功能
- 用户管理：提供用户的相关配置，新增用户后，默认密码为123456
- 角色管理：对权限与菜单进行分配，可以设置角色的数据范围
- 权限管理：权限细化到接口，可以理解成按钮权限
- 菜单管理：已实现菜单动态路由，后端可配置化，支持多级菜单
- 部门管理：可配置系统组织架构，树形表格展示
- 岗位管理：配置各个部门的职位
- 字典管理：应广大码友的要求加入字典管理，可维护常用一些固定的数据，如：状态，性别等
- 操作日志：记录用户操作的日志
- 异常日志：记录异常日志，方便开发人员定位错误
- 系统缓存：使用jedis将缓存操作可视化，并提供对redis的基本操作，可根据需求自行扩展
- SQL监控：采用druid 监控数据库访问性能，默认用户名admin，密码123456
- 定时任务：整合Quartz做定时任务，加入任务日志，任务运行情况一目了然
- 代码生成：高灵活度一键生成前后端代码，减少百分之80左右的工作任务
- 邮件工具：配合富文本，发送html格式的邮件
- 免费图床：使用sm.ms图床，用作公共图片上传使用
- 七牛云存储：可同步七牛云存储的数据到系统，无需登录七牛云直接操作云数据
- 支付宝支付：整合了支付宝支付并且提供了测试账号，可自行测试

#### 项目结构
项目采用分模块开发方式，将通用的配置放在公共模块，```system```模块为系统核心模块也是项目入口模块，```logging``` 模块为系统的日志模块，```tools``` 为第三方工具模块，包含了图床、邮件、七牛云、支付宝，```generator``` 为系统的代码生成模块
- eladmin-common 公共模块
    - exception 项目统一异常的处理
    - mapper mapstruct的通用mapper
    - redis redis缓存相关配置
    - swagger2 接口文档配置
    - utils 系统通用工具类
- eladmin-system 系统核心模块（系统启动入口）
	- config 配置跨域与静态资源，与数据权限
	- modules 系统相关模块(登录授权、定时任务等)
- eladmin-logging 系统日志模块
- eladmin-tools 系统第三方工具模块
- eladmin-generator 系统代码生成模块

#### 系统预览
<table>
    <tr>
        <td><img src="https://i.loli.net/2019/05/18/5cdf77fa8144d68788.png"/></td>
        <td><img src="https://i.loli.net/2019/05/18/5cdf7763993e361778.png"/></td>
    </tr>
    <tr>
        <td><img src="https://i.loli.net/2019/05/18/5cdf7763971d453615.png"/></td>
        <td><img src="https://i.loli.net/2019/05/18/5cdf77632e85a60423.png"/></td>
    </tr>
    <tr>
        <td><img src="https://i.loli.net/2019/05/18/5cdf77632b4b090165.png"/></td>
        <td><img src="https://i.loli.net/2019/05/18/5cdf77639929277783.png"/></td>
    </tr>
    <tr>   
 <td><img src="https://i.loli.net/2019/05/18/5cdf78969adc389599.png"/></td>
    </tr>
</table>

#### 项目捐赠
如果你用爽了，可以请作者喝杯咖啡表示支持 ☕️！ [Donate](https://docs.auauz.net/#/jz)
#### 反馈交流
- QQ交流群：891137268

## 项目介绍
Freeman项目是努力打造springboot框架的极致细腻的脚手架。包括一套漂亮的前台。无其他杂七杂八的功能，原生纯净。
基于springboot的一款纯净脚手架。努力打造完美注释跟文档。方便快速二次开发。


组织架构
Springboot
├─doc  项目SQL语句以及文档
│
├─common 公共模块
│  ├─base Base继承通用类
│  ├─conf springBoot所有配置
│  ├─domain 前台返回包
│  ├─exception 异常处理包
│  ├─interceptor 拦截器
│  ├─domain 前台返回包
│  ├─quartz Spring定时器
│  └─support 工具包
│
├─controller 请求访问模块
│  ├─admin 模版后台请求包
│  └─HomeController.java 首页访问类
│
├─Mapper Dao模块
│  ├─auto mybatis-generator.xml自动生成Dao
│  └─custom 自定义Dao
│
├─Model 实体类模块
│  ├─auto mybatis-generator.xml自动生成实体包
│  └─custom 自定义实体
│
├─Service 服务层模块[没写抽象模块，因为我觉得没什么用，可能我能力不足]
│
├─shiro 权限模块
│  ├─config shiro配置
│  ├─service shiro服务层
│  └─util shiro通用方法
│
├─util 工具模块
│
├─SpringbootSwagger2Application 启动类
│ 
├─SpringbootWebInitializer tomcat启动类
│
├─test 测试类
│
├─resources 配置文件夹
│  ├─ehcache shiro权限缓存配置
│  ├─mybatis mybatis Mapper.xml生成文件夹
│  │   ├─auto自动生成的Mapper.xml文件夹
│  │   └─custom 手写Mapper.xml文件夹
│  │
│  ├─static 静态文件存放文件夹
│  ├─templates 前台HTML存放文件夹
│  ├─application-dev.yml 开发环境配置
│  ├─application-prod.yml 生产环境配置
│  ├─application.yml springboot配置
│  ├─banner1.txt springboot 启动动画
│  ├─logback.xml log4j配置文件
│  └─mybatis-generator.xml mybates自动生成 xml、dao、model
│  
└─pom.xml   maven.xml



###部署流程
导入doc文件夹里面的test.sql到数据库
确认自己的mysql版本 进行修改jar 在pom.xml 73-84行
修改application-dev.yml 里面自己数据库版本对应的jdbc链接
正常启动run SpringbootSwagger2Application.java
打包发布编译流程
maven编译安装pom.xml文件即可打包成war
登陆地址
http://localhost:8081 默认帐号密码: admin/admin
swagger http://localhost:8081/swagger-ui.html
启动类
SpringbootSwagger2Application 启动类
数据库模型




后期功能
功能 描述
字典表 
部署文档 
文件上传 
再次优化 
add跟eidt页面js写出js文件 
500页面 完成
404页面 完成
权限错误页面 完成

