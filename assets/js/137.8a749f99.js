(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{638:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("分布式系统服务追踪")])]),t._v(" "),a("h2",{attrs:{id:"sleuth-zipkin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleuth-zipkin"}},[t._v("#")]),t._v(" Sleuth+Zipkin")]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("链路追踪组件有Google的Dapper，Twitter和Zipkin以及阿里的Eagleeye等")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Span(跨度)")]),t._v("：基本工作单元，"),a("strong",[t._v("发送一个远程调度任务就会产生一个Span")]),t._v("，Span是一个64位ID唯一的标识，Trace是用另一个64位ID唯一标识的，Span还有其他数据信息，比如摘要、时间戳时间、Span的ID、以及进度ID")]),t._v(" "),a("li",[a("code",[t._v("Trace(跟踪)")]),t._v("："),a("strong",[t._v("一系列Span组成的一个树状结构")]),t._v("。请求一个微服务系统的API接口，这个API接口，需要调用多个微服务，"),a("strong",[t._v("调用每个微服务都会产生一个新的Span")]),t._v("，所有由这个请求产生的Span组成了这个Trace")]),t._v(" "),a("li",[a("code",[t._v("Annotation(标注)")]),t._v("：用来及时记录一个事件的，一些核心注解用来定义一个请求的开始和结束\n"),a("ol",[a("li",[a("code",[t._v("cs")]),t._v("：Client Send 客户端发送一个请求，这个注解"),a("strong",[t._v("描述了这个Span的开始")])]),t._v(" "),a("li",[a("code",[t._v("sr")]),t._v("：Server Received 服务端获得请求并准备开始处理它，如果将其"),a("strong",[t._v("sr减去cs时间戳便可以得出网络传输的时间")])]),t._v(" "),a("li",[a("code",[t._v("ss")]),t._v("：Server Send 服务端发送响应，该注解表明请求处理的完成(当请求返回客户端)，如果"),a("strong",[t._v("ss的时间戳减去sr时间戳，就可以得到服务器请求的时间")])]),t._v(" "),a("li",[a("code",[t._v("cr")]),t._v("：Client Received 客户端接收响应，此时Span的结束，如果"),a("strong",[t._v("cr的时间戳减去cs时间戳便可以得到整个请求所消耗的时间")])])])])]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h4",{attrs:{id:"安装zipkin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装zipkin"}},[t._v("#")]),t._v(" 安装zipkin")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据存储到内存中")]),t._v("\ndocker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v(":9411 openzipkin/zipkin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据存储到es")]),t._v("\ndocker run --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("STORAGE_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("elasticsearch --env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ES_HOSTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.12:9200 openzipkin/zipkin-dependencies\n")])])]),a("h4",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- zipkin自动引入了sleuth --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-zipkin"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipkin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zipkin服务器地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("base-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9411/\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭服务发现，否则SpringCloud会把zipkin的url当做服务名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discoveryClientEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置使用htpp的方式传输数据")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sleuth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sampler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置抽样采集率为100%，默认是0.1，10%")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("probability")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);