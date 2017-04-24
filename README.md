## 环境配置 ##

- Tomcat
- hosts
- MailServer
- Foxmail

## 1.Tomcat ##

**目标**

以 www.estore.com 的域名访问网站

**修改conf\server.xml**

### 设置端口 ###

port = "80"

### 配置虚拟主机 ###

<Host name="www.estore.com" appBase="G:\workspace\myeclipse2014\Estore">
 <Context path="" 
   docBase="G:\workspace\myeclipse2014\Estore\WebRoot" />   
</Host>

appBase为项目在本机的真实路径

## 2.hosts ##

C:\Windows\System32\drivers\etc

- 没有权限的话，可以用新的文件替换原来的
- 在末尾添加，  127.0.0.1	www.estore.com

## 3.MailServer ##

工具-作为 互联网 邮件服务器

单域名：gzhu.cn

帐号-新建帐号-帐号：aa-密码：123

## 4.Foxmail ##

邮箱-新建邮箱账户-邮件地址：aa@gzhu.cn-密码：123

接受邮件服务器:localhost

发送邮件服务器：localhost


**注意：MailServer与Foxmail的账户要对应一致**

## 相关技术 ##

javaee经典三层架构

### 前端 ###

- jsp
- html
- css
- javascript
- ajax
- jquery

### 后端 ###

- Dbutils数据库工具类
- c3po数据源
- 单例，装饰者等常见设计模式

### 第三方工具 ###

- 易宝支付
- MailServer与Foxmail组成的邮件系统

## 具体功能 ##

### 前端 ###

- 登陆注册
- 激活验证
- 浏览商品
- 查看商品详情
- 加入购物车
- 填写订单
- 在线支付

### 后端 ###

- 上传商品
- 销售榜单下载
- 帐号权限管理