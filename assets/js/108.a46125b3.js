(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{608:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[t._v("微服务基本组成")])]),t._v(" "),s("h2",{attrs:{id:"ribbon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ribbon"}},[t._v("#")]),t._v(" Ribbon")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("SpringCloud Ribbon是基于Netflix Ribbon实现的一套"),s("strong",[t._v("客户端负载均衡工具")]),t._v("，主要是提供"),s("strong",[t._v("客户端的软件负载均衡算法和服务调用")]),t._v("，一句话就是"),s("strong",[t._v("负载均衡+RedisTemplate调用")])]),t._v(" "),s("p",[s("strong",[t._v("Ribbon本地负载均衡和Nginx服务端负载均衡区别")])]),t._v(" "),s("ul",[s("li",[t._v("Nginx是服务器负载均衡，客户端所有请求都会交给Nginx，然后由Nginx实现转发请求，"),s("strong",[t._v("负载均衡由服务端调用")])]),t._v(" "),s("li",[t._v("Ribbon本地负载均衡，在调用服务接口时候，会在注册中心上获取注册信息服务列表之后缓存到JVM本地，从而在本地实现RPC远程服务调用技术")])]),t._v(" "),s("p",[s("strong",[t._v("新版的Eureka-Client")]),t._v("已经自带了Ribbon了，不用再引入")]),t._v(" "),s("h3",{attrs:{id:"redistemplate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redistemplate"}},[t._v("#")]),t._v(" RedisTemplate")]),t._v(" "),s("p",[t._v("getForObject/postForObject方法：返回对象为"),s("strong",[t._v("响应体中数据转化成的对象，基本上可以说是Json")])]),t._v(" "),s("p",[t._v("getForEntity/postForEntity方法：返回对象为"),s("strong",[t._v("ResponseEntity对象，包含响应头，响应码等相关信息")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContextConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当有多个服务时不写会报错")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@LoadBalanced")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestTemplate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRestTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"irule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#irule"}},[t._v("#")]),t._v(" IRule")]),t._v(" "),s("p",[t._v("Ribbon自带负载均衡算法接口")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"Rule接口实现",href:"https://gitee.com/jtxyh/blogImg/raw/master/Rule接口实现.png"}},[s("img",{attrs:{src:"https://gitee.com/jtxyh/blogImg/raw/master/Rule%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0.png",alt:"Rule接口实现"}})])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("负载均衡方式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("RoundRobinRule")]),t._v(" "),s("td",[s("strong",[t._v("轮询")])])]),t._v(" "),s("tr",[s("td",[t._v("RandomRule")]),t._v(" "),s("td",[s("strong",[t._v("随机")])])]),t._v(" "),s("tr",[s("td",[t._v("RetryRule")]),t._v(" "),s("td",[s("strong",[t._v("先按照RoundRobinRule")]),t._v("的策略获取服务"),s("br"),t._v("如果获取服务失败则在指定时间内会进行重试")])]),t._v(" "),s("tr",[s("td",[t._v("WeightedResponseTimeRule")]),t._v(" "),s("td",[s("strong",[t._v("对RoundRobinRule的扩展")]),t._v("，响应速度越快的实例选择权重越大，越容易被选择")])]),t._v(" "),s("tr",[s("td",[t._v("BestAvailableRule")]),t._v(" "),s("td",[t._v("会"),s("strong",[t._v("先过滤掉由于多次访问故障而处于断路器跳闸状态的服务")]),t._v("，然后选择一个并发量最小的服务")])]),t._v(" "),s("tr",[s("td",[t._v("AvailabilityFilteringRule")]),t._v(" "),s("td",[s("strong",[t._v("先过滤掉故障实例")]),t._v("，再选择并发较小的实例")])]),t._v(" "),s("tr",[s("td",[t._v("ZoneAvoidanceRule")]),t._v(" "),s("td",[t._v("默认规则，复合判断server所在区域的性能和server的可用性选择服务器")])])])]),t._v(" "),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[s("strong",[t._v("修改Ribbon默认的负载均衡方式配置，不能和主启动类在一个包下，即不能被@ComponentScan扫描到")])]),t._v(" "),s("p",[t._v("自定义规则")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySelfRule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IRule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义为随机")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RandomRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("主启动类上配置注解")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableEurekaClient")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name代表访问的微服务是这个，configuration指定不使用默认配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RibbonClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CLOUD-PAYMENT-SERVICE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("configuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySelfRule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderMain80")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderMain80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"负载均衡轮询算法",href:"https://gitee.com/jtxyh/blogImg/raw/master/负载均衡轮询算法.png"}},[s("img",{attrs:{src:"https://gitee.com/jtxyh/blogImg/raw/master/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E8%BD%AE%E8%AF%A2%E7%AE%97%E6%B3%95.png",alt:"负载均衡轮询算法"}})])]),t._v(" "),s("h2",{attrs:{id:"openfeign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openfeign"}},[t._v("#")]),t._v(" OpenFeign")]),t._v(" "),s("h3",{attrs:{id:"简介-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Feign是一个声明式WebService客户端，使用Feign能让编写WebService客户端更简单")]),t._v(" "),s("p",[t._v("它的使用用方法是"),s("strong",[t._v("定义一个服务接口然后在上面添加注解")]),t._v("，Feign也支持"),s("strong",[t._v("可拔插式的编码器和解码器")]),t._v("。SpringCloud对Feign进行了封装，使其支持了SpringMVC标准注释和HTTPMessageConverters，Feign可以与Eureka和Ribbon组合使用来负载均衡")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"Feign概述",href:"https://gitee.com/jtxyh/blogImg/raw/master/Feign概述.png"}},[s("img",{attrs:{src:"https://gitee.com/jtxyh/blogImg/raw/master/Feign%E6%A6%82%E8%BF%B0.png",alt:"Feign概述"}})]),t._v(" "),s("a",{attrs:{"data-fancybox":"",title:"Feign和OpenFeign区别",href:"https://gitee.com/jtxyh/blogImg/raw/master/Feign和OpenFeign区别.bmp"}},[s("img",{attrs:{src:"https://gitee.com/jtxyh/blogImg/raw/master/Feign%E5%92%8COpenFeign%E5%8C%BA%E5%88%AB.bmp",alt:"Feign和OpenFeign区别"}})])]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("导入pom")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-openfeign"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("启动类开启")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启Feign")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeignOrderMain80")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeignOrderMain80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("配置接口类")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FeignClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CLOUD-PAYMENT-SERVICE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定要调用的微服务名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentFeignService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 和服务端调用的方法一样\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/payment/select/{id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommonResult")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Payment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPaymentById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"Feign使用解析",href:"https://gitee.com/jtxyh/blogImg/raw/master/Feign使用解析.bmp"}},[s("img",{attrs:{src:"https://gitee.com/jtxyh/blogImg/raw/master/Feign%E4%BD%BF%E7%94%A8%E8%A7%A3%E6%9E%90.bmp",alt:"Feign使用解析"}})])]),t._v(" "),s("h3",{attrs:{id:"超时配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超时配置"}},[t._v("#")]),t._v(" 超时配置")]),t._v(" "),s("p",[t._v("OpenFeign默认等待的时间是1秒钟，超时就报错，因为OpenFeign默认集成了Ribbon，有负载均衡的功能，所以可以在yml文件中设置超时等待时间")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ribbon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指的是建立连接所用的时间，适用于网络状况正常的情况下，两端所用的时间")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ReadTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指的是建立连接从服务器读取到可用资源所用的时间")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ConnectTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n")])])]),s("h3",{attrs:{id:"日志增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志增强"}},[t._v("#")]),t._v(" 日志增强")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("级别")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("NONE")])]),t._v(" "),s("td",[s("strong",[t._v("默认")]),t._v("，不显示日志")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("BASIC")])]),t._v(" "),s("td",[t._v("仅记录请求"),s("strong",[t._v("方法、URL、响应状态码及执行时间")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("HEADERS")])]),t._v(" "),s("td",[t._v("除了BASIC中定义的信息外，还有"),s("strong",[t._v("请求和响应的头信息")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("FULL")])]),t._v(" "),s("td",[t._v("除了HEADERS中的信息外，还有"),s("strong",[t._v("请求和响应的正文及元数据")])])])])]),t._v(" "),s("p",[s("strong",[t._v("设置配置类")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeignConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Level")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("feignLoggerLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FULL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("添加yml")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Feign日志以什么级别监控那个接口")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("top.jtxyh.feign.service.PaymentFeignService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" debug\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);