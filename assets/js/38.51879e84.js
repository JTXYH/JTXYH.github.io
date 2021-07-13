(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{537:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" Filter")]),t._v(" "),a("ul",[a("li",[t._v("作用：用于当访问服务器资源时，"),a("strong",[t._v("过滤器可以将请求拦截下来，完成一些功能")])]),t._v(" "),a("li",[t._v("简单使用步骤：\n"),a("ol",[a("li",[t._v("定义一个类实现接口"),a("strong",[t._v("Filter")])]),t._v(" "),a("li",[t._v("重新接口的抽象方法")]),t._v(" "),a("li",[a("strong",[t._v("配置拦截路径")]),t._v(" "),a("ul",[a("li",[t._v("在web.xml里配置")]),t._v(" "),a("li",[t._v("使用@WebFilter()注解")])])])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有资源在被访问之前都会经过过滤器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterDemo1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO Auto-generated method stub")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterChain")]),t._v(" chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"过滤器执行了。。。。。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放行")]),t._v("\n        chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterConfig")]),t._v(" filterConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO Auto-generated method stub")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"web-xml配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-xml配置"}},[t._v("#")]),t._v(" web.xml配置")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.jtxyh.controller.FilterDemo1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这下面这个路径是拦截路径 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"执行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[t._v("#")]),t._v(" 执行流程")]),t._v(" "),a("ol",[a("li",[t._v("执行"),a("strong",[t._v("过滤器")])]),t._v(" "),a("li",[t._v("执行"),a("strong",[t._v("放行后")]),t._v("的资源")]),t._v(" "),a("li",[a("strong",[t._v("回来")]),t._v("执行过滤器放行代码下边的代码")])]),t._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("init")]),t._v("：在服务器启动后，会创建Filter对象，然后调用init方法。"),a("strong",[t._v("只执行一次")])]),t._v(" "),a("li",[a("strong",[t._v("doFilter")]),t._v("：在每一次请求被拦截资源时，会执行。"),a("strong",[t._v("执行多次")])]),t._v(" "),a("li",[a("strong",[t._v("destroy")]),t._v("：在服务器关闭后，Filter对象被销毁，如果服务器"),a("strong",[t._v("正常关闭")]),t._v("，则会执行destroy方法。"),a("strong",[t._v("只执行一次")]),t._v("，用于释放资源")])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("拦截路径配置")]),t._v(" "),a("ol",[a("li",[t._v("具体的资源路径："),a("strong",[t._v("/index.jsp")]),t._v(" "),a("ul",[a("li",[t._v("只有访问"),a("strong",[t._v("index.jsp资源")]),t._v("时，才会执行")])])]),t._v(" "),a("li",[t._v("拦截目录："),a("strong",[t._v("/user/*")]),t._v(" "),a("ul",[a("li",[t._v("访问**/user下的所有资源**时，才会执行")])])]),t._v(" "),a("li",[t._v("后缀名拦截："),a("strong",[t._v("*.jsp")]),t._v(" "),a("ul",[a("li",[t._v("访问"),a("strong",[t._v("后缀名为jsp资源")]),t._v("时，才会执行")])])]),t._v(" "),a("li",[t._v("拦截所有资源："),a("strong",[t._v("/*")]),t._v(" "),a("ul",[a("li",[t._v("访问所有资源时都会执行")])])])])]),t._v(" "),a("li",[a("strong",[t._v("拦截方式配置，注解配置")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设置"),a("strong",[t._v("dispatcherTypes")]),t._v("属性")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("REQUEST")]),t._v("："),a("strong",[t._v("默认值。浏览器直接请求")]),t._v("资源")]),t._v(" "),a("li",[a("strong",[t._v("FORWARD")]),t._v("："),a("strong",[t._v("转发")]),t._v("访问资源")]),t._v(" "),a("li",[a("strong",[t._v("INCLUDE")]),t._v("："),a("strong",[t._v("包含")]),t._v("访问资源")]),t._v(" "),a("li",[a("strong",[t._v("ERROR")]),t._v("："),a("strong",[t._v("错误")]),t._v("跳转资源")]),t._v(" "),a("li",[a("strong",[t._v("ASYNC")]),t._v("："),a("strong",[t._v("异步")]),t._v("访问资源")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dispatcherTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DispatcherType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("web.xml配置")]),t._v(" "),a("ul",[a("li",[t._v("设置<dispatcher></dispatcher>标签")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- \t这下面这个路径是拦截路径 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/index.jsp"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dispatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("FORWARD"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dispatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"链-配置多个过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链-配置多个过滤器"}},[t._v("#")]),t._v(" 链-配置多个过滤器")]),t._v(" "),a("ul",[a("li",[t._v("执行"),a("strong",[t._v("顺序")]),t._v("：有"),a("strong",[t._v("两个过滤器")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("执行过滤器1")])]),t._v(" "),a("li",[a("em",[t._v("执行过滤器2")])]),t._v(" "),a("li",[a("em",[t._v("资源执行")])]),t._v(" "),a("li",[a("em",[t._v("执行过滤器2")])]),t._v(" "),a("li",[a("em",[t._v("执行过滤器1")])])])]),t._v(" "),a("li",[t._v("过滤器"),a("strong",[t._v("先后顺序")]),t._v(" "),a("ol",[a("li",[t._v("注解配置：按照"),a("strong",[t._v("类名的字符串比较")]),t._v("规则比较，"),a("strong",[t._v("值小的先执行")])]),t._v(" "),a("li",[t._v("web.xml配置："),a("strong",[t._v("<filter-mapping>定义在上面的先执行")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);