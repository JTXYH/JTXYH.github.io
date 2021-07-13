(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{529:function(s,t,a){"use strict";a.r(t);var r=a(6),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ul",[a("li",[s._v("概念：Htyper Text Transfer Protocol "),a("strong",[s._v("超文本传输协议")]),s._v(" "),a("ul",[a("li",[s._v("传输协议："),a("strong",[s._v("定义了客户端和服务器端发送数据的格式")])])])]),s._v(" "),a("li",[s._v("特点：\n"),a("ol",[a("li",[a("strong",[s._v("基于TCP/IP")]),s._v("的高级协议")]),s._v(" "),a("li",[s._v("默认端口号："),a("strong",[s._v("80")])]),s._v(" "),a("li",[s._v("基于请求/响应模型："),a("strong",[s._v("一次请求对应一次响应")])]),s._v(" "),a("li",[s._v("无状态的：每次请求之间"),a("strong",[s._v("相互独立，不能交互数据")])])])]),s._v(" "),a("li",[s._v("版本区别：\n"),a("ul",[a("li",[s._v("1.0："),a("strong",[s._v("每一次请求响应都会建立新的连接")])]),s._v(" "),a("li",[s._v("1.1："),a("strong",[s._v("复用连接")])])])])]),s._v(" "),a("h2",{attrs:{id:"请求消息数据格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求消息数据格式"}},[s._v("#")]),s._v(" 请求消息数据格式")]),s._v(" "),a("h3",{attrs:{id:"请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[s._v("#")]),s._v(" 请求行")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("请求方式 请求url 请求协议/版本")]),s._v("：：GET /login.html\tHTTP/1.1")]),s._v(" "),a("li",[s._v("请求方式：\n"),a("ul",[a("li",[s._v("HTTP协议有"),a("strong",[s._v("7种")]),s._v("请求方式，常用的有2种\n"),a("ul",[a("li",[a("strong",[s._v("GET")]),s._v("：\n"),a("ol",[a("li",[s._v("请求参数"),a("strong",[s._v("在请求行中")]),s._v("，在url后。")]),s._v(" "),a("li",[s._v("请求的url"),a("strong",[s._v("长度有限制")]),s._v("的")]),s._v(" "),a("li",[s._v("不太安全")])])]),s._v(" "),a("li",[a("strong",[s._v("POST")]),s._v("：\n"),a("ol",[a("li",[s._v("请求参数"),a("strong",[s._v("在请求体中")])]),s._v(" "),a("li",[s._v("请求的url"),a("strong",[s._v("长度没有限制")]),s._v("的")]),s._v(" "),a("li",[s._v("相对安全")])])])])])])])]),s._v(" "),a("h3",{attrs:{id:"请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[s._v("#")]),s._v(" 请求头")]),s._v(" "),a("ul",[a("li",[s._v("客户端浏览器告诉服务器一些信息："),a("strong",[s._v("请求头名称: 请求头值")])]),s._v(" "),a("li",[s._v("常见的请求头：\n"),a("ol",[a("li",[a("strong",[s._v("User-Agent")]),s._v("：浏览器告诉服务器使用的浏览器版本信息\n"),a("ul",[a("li",[s._v("可以在服务器端获取该头的信息，解决浏览器的兼容性问题")])])]),s._v(" "),a("li",[a("strong",[s._v("Referer")]),s._v("：http://localhost/login.html\n"),a("ul",[a("li",[s._v("告诉服务器，我(当前请求)从哪里来？\n"),a("ul",[a("li",[s._v("作用：\n"),a("ol",[a("li",[a("strong",[s._v("防盗链")])]),s._v(" "),a("li",[a("strong",[s._v("统计工作")])])])])])])])])])])]),s._v(" "),a("h3",{attrs:{id:"请求空行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求空行"}},[s._v("#")]),s._v(" 请求空行")]),s._v(" "),a("ul",[a("li",[s._v("空行，就是"),a("strong",[s._v("用于分割POST请求的请求头和请求体的")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"请求体-正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求体-正文"}},[s._v("#")]),s._v(" 请求体(正文)")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("封装POST请求消息的请求参数的")])])]),s._v(" "),a("h3",{attrs:{id:"字符串格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串格式"}},[s._v("#")]),s._v(" 字符串格式")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    POST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\tHTTP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" localhost\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("agent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mozilla")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Windows")]),s._v(" NT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Win64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppleWebKit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Gecko")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Chrome")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("77.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3865")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".90")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Safari")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Accept")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xhtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*;q=0.8\n    Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2\n    Accept-Encoding: gzip, deflate\n    Referer: http://localhost/login.html\n    Connection: keep-alive\n    Upgrade-Insecure-Requests: 1\n    username=zhangsan\t\n")])])])]),a("h2",{attrs:{id:"响应消息数据格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应消息数据格式"}},[s._v("#")]),s._v(" 响应消息数据格式")]),s._v(" "),a("h3",{attrs:{id:"响应行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应行"}},[s._v("#")]),s._v(" 响应行")]),s._v(" "),a("ol",[a("li",[s._v("组成："),a("em",[s._v("HTTP/1.1 200 OK")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("协议/版本 响应状态码 状态码描述")])])])]),s._v(" "),a("li",[a("strong",[s._v("响应状态码")]),s._v("：服务器给客户端浏览器本次请求和响应的一个状态\n"),a("ul",[a("li",[s._v("状态码都是"),a("strong",[s._v("3位数字")])]),s._v(" "),a("li",[s._v("分类：\n"),a("ol",[a("li",[a("strong",[s._v("1xx")]),s._v("：服务器接收客户端消息但没有接收完成，等待一段时间后，发送1xx的状态码")]),s._v(" "),a("li",[a("strong",[s._v("2xx")]),s._v("：成功。代表：200")]),s._v(" "),a("li",[a("strong",[s._v("3xx")]),s._v("："),a("strong",[s._v("重定向")]),s._v("。代表：302(重定向)，304(访问缓存)")]),s._v(" "),a("li",[a("strong",[s._v("4xx")]),s._v("：客户端错误\n"),a("ul",[a("li",[a("strong",[s._v("404：请求路径没有对应的路径")])]),s._v(" "),a("li",[a("strong",[s._v("405：请求方式没有对应的doXXX方法")])])])]),s._v(" "),a("li",[a("strong",[s._v("5xx")]),s._v("：服务器端错误。代表：500(服务器内部出现异常)")])])])])])]),s._v(" "),a("h3",{attrs:{id:"响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应头"}},[s._v("#")]),s._v(" 响应头")]),s._v(" "),a("ol",[a("li",[s._v("格式："),a("strong",[s._v("头格式：值")])]),s._v(" "),a("li",[s._v("常见响应头：\n"),a("ol",[a("li",[a("strong",[s._v("Content-Type")]),s._v("：服务器告诉客户端本次响应体数据格式以及编码格式")]),s._v(" "),a("li",[a("strong",[s._v("Content-disposition")]),s._v("：服务器告诉客户端以什么格式打开响应体数据\n"),a("ul",[a("li",[a("strong",[s._v("in-line")]),s._v("：默认值，在当前页面内打开")]),s._v(" "),a("li",[a("strong",[s._v("attachement;filename=xxx")]),s._v("：以附件形式打开响应体。(下载)")])])])])])]),s._v(" "),a("h3",{attrs:{id:"响应空行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应空行"}},[s._v("#")]),s._v(" 响应空行")]),s._v(" "),a("ul",[a("li",[s._v("空行")])]),s._v(" "),a("h3",{attrs:{id:"响应体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应体"}},[s._v("#")]),s._v(" 响应体")]),s._v(" "),a("ul",[a("li",[s._v("传输的数据")]),s._v(" "),a("li",[s._v("响应字符串格式")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("HTTP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Length")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("124")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Tue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Oct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("07")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("09")]),s._v(" GMT\n\n"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v("\n哈哈哈哈\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);