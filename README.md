## Vue 项目中接入sentry ##


  最近公司的内部Vue项目中接入sentry技术栈，跟踪运行时错误。针对这件事分享下，有不完整或者错误的地方欢迎交流。


一、sentry  错误日志收集框架
----------

> **Stop hoping your users will report errors**
Open-source error tracking that helps developers monitor and fix crashes in real time. Iterate continuously. Boost efficiency. Improve user experience.
![](https://segmentfault.com/img/bVYcpz)

如果项目允许，你可以在sentry申请一个免费账户，管理你项目上传的运行时错误。也可以在公司搭建一个sentry。关于搭建sentry这块与本文无关就暂时不说了，[可以查看][1]。

1、sentry的原理（个人见解）
---------------

（1）sentry是一个收集项目运行时错误日志的框架，这个框架就要分为服务平台和客户端了。

```
    服务平台： 可以自己自己搭建，也可以使用官网的（免费、付费）
    客户端：从他的出发点是监控项目代码来理解就知道，需要嵌入项目中。作为前端的话第一个想到的就是插件了。
```
（2）、语言的多样化，开发使用语言是多样化的所以sentry支持的语言也比较多

![](https://segmentfault.com/img/bVYcum)

（3）、错误日志的收集方式。代码中产生的错误日志怎样上传到sentry服务平台。


当你完成sentry配置的时候，你会得到一个称为“DSN”的值，看起来像一个标准的URL。
Sentry 服务支持多用户、多团队、多应用管理，每个应用都对应一个 PROJECT_ID，以及用于身份认证的 PUBLIC_KEY 和 SECRET_KEY。
由此组成一个这样的 DSN：
'{PROTOCOL}://{PUBLIC_KEY}:{SECRET_KEY}@{HOST}/{PATH}{PROJECT_ID}'
PROTOCOL 通常会是 http 或者 https，HOST 为 Sentry 服务的主机名和端口，PATH 通常为空。


二、sentry服务平台配置
--------------

1、创建项目
------
![](https://segmentfault.com/img/bVYdO3)

2、获取SENTRY_DSN（也叫Client Keys）
------

> To send data to Sentry you will need to configure an SDK with a client key (usually referred to as the SENTRY_DSN value). For more information on integrating Sentry with your application take a look at our [documentation][2].

如果是使用的免费的sentry
'{PROTOCOL}://{PUBLIC_KEY}:{SECRET_KEY}@{HOST}/{PATH}{PROJECT_ID}'
PROTOCOL 通常会是 http 或者 https，HOST 为 Sentry 服务的主机名和端口，PATH 通常为空。
具体的可以在你的项目中“Project Setting”中查看

三、客户端设置
--------------
在客户端中接入是简单的，只需要配置插件就可以了。但是要注意的是，必须在Vue配置之前。每一个的客户平台配置内容可以在官网查找。


    import Vue from 'vue';
    import Raven from 'raven-js';
    import RavenVue from 'raven-js/plugins/vue';
    
    Raven
    .config('https://60f9e820eb7b4a8f9beb62a314b1f80d@sentry.io/242345')
    .addPlugin(RavenVue, Vue)
    .install();


四、报错后
--------------

点击进去可以查看详情，且会将报错信息默认发送到注册邮箱。
![](https://segmentfault.com/img/bVYeFv)