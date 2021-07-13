(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{538:function(t,s,n){"use strict";n.r(s);var a=n(6),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("ol",[n("li",[t._v("概念："),n("strong",[t._v("是一个集合容器")]),t._v("，存放"),n("strong",[t._v("数据库连接")]),t._v("的容器"),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("'当系统初始化好后，容器被创建，容器会申请一些连接对象，\n当用户来访问数据库时，从容器中获取连接对象，用户访问之后，会将对象归还给容器'\n")])])])]),t._v(" "),n("li",[t._v("好处：\n"),n("ol",[n("li",[t._v("节约资源")]),t._v(" "),n("li",[t._v("用户访问高效")])])]),t._v(" "),n("li",[t._v("实现：\n"),n("ol",[n("li",[t._v("标准接口：在"),n("strong",[t._v("java.sql包")]),t._v("下的"),n("strong",[t._v("DataSource")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("获取连接")]),t._v("：getConnection()")]),t._v(" "),n("li",[n("strong",[t._v("归还连接")]),t._v("：Connection.close()。如果连接对象是Connection是从"),n("strong",[t._v("连接池")]),t._v("或取的，那么调用Connection.close()方法，则"),n("strong",[t._v("不是关闭连接而是归还连接")])])])]),t._v(" "),n("li",[t._v("数据库厂商实现的连接池：\n"),n("ul",[n("li",[n("strong",[t._v("C2P0")])]),t._v(" "),n("li",[n("strong",[t._v("Druid")]),t._v("：阿里巴巴提供")])])])])])]),t._v(" "),n("h2",{attrs:{id:"c3p0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c3p0"}},[t._v("#")]),t._v(" C3P0")]),t._v(" "),n("ul",[n("li",[t._v("步骤：\n"),n("ol",[n("li",[t._v("导入"),n("strong",[t._v("c3p0-0.9.5.2.jar")]),t._v("和"),n("strong",[t._v("mchange-commons-java-0.2.12.jar")]),t._v("和"),n("strong",[t._v("mysql-connector-java-5.1.47.jar")]),t._v("包")]),t._v(" "),n("li",[t._v("定义配置文件：\n"),n("ul",[n("li",[t._v("名称："),n("strong",[t._v("c3p0.properties")]),t._v(" 或者 "),n("strong",[t._v("c3p0.config.xml")])]),t._v(" "),n("li",[t._v("路径：直接将文件"),n("strong",[t._v("放在src目录下")])])])]),t._v(" "),n("li",[t._v("创建核心对象：数据库连接池对象"),n("strong",[t._v("ComboPooledDataSource")])]),t._v(" "),n("li",[t._v("获取连接："),n("strong",[t._v("getConnection")])])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建数据库连接池对象'")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSource")]),t._v(" dataSource "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComboPooledDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'获取连接对象'")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'打印'")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),n("h2",{attrs:{id:"druid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#druid"}},[t._v("#")]),t._v(" Druid")]),t._v(" "),n("ol",[n("li",[t._v("步骤：\n"),n("ol",[n("li",[t._v("导入"),n("strong",[t._v("druid-1.1.10.jar")]),t._v("包")]),t._v(" "),n("li",[t._v("定义配置文件：\n"),n("ul",[n("li",[t._v("是"),n("strong",[t._v("properties")]),t._v("形式的")]),t._v(" "),n("li",[t._v("可以叫任意名称，可以放在任意目录")])])]),t._v(" "),n("li",[t._v("加载配置文件："),n("strong",[t._v("使用Properties")])]),t._v(" "),n("li",[t._v("获取数据库连接池对象：通过"),n("strong",[t._v("工厂类来获取,DruidDataSourceFactory")])]),t._v(" "),n("li",[t._v("获取连接："),n("strong",[t._v("getConnection")])])])]),t._v(" "),n("li",[t._v("定义工具类\n"),n("ol",[n("li",[t._v("定义一个类 "),n("strong",[t._v("JDBCUtil")])]),t._v(" "),n("li",[t._v("提供"),n("strong",[t._v("静态代码块")]),t._v("加载配置文件，初始化连接池对象")]),t._v(" "),n("li",[t._v("提供方法：\n"),n("ul",[n("li",[t._v("获取连接方法：通过数据库连接池获取连接")]),t._v(" "),n("li",[t._v("释放资源")]),t._v(" "),n("li",[t._v("获取连接池的方法")])])])])])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个DruidDataSource对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DruidDataSource")]),t._v(" druidDataSource "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DruidDataSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//驱动名")]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDriverClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.mysql.jdbc.Driver"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据库地址")]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:mysql://127.0.0.1:3306/mysql?useSSL=true&characterEncoding=UTF-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户名")]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUsername")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//密码")]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPassword")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"以下为非必填项，不设置也有默认值"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"最小连接池数量 可设置最大值"')]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMinIdle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"初始化时建立物理连接的个数"')]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInitialSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"最大连接池数量"')]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxActive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"获得连接最大等待时间 单位毫秒"')]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxWait")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"配置一个连接在池中最小生存的时间，单位是毫秒"')]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMinEvictableIdleTimeMillis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"获得连接"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" druidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"归还连接"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Conn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"关闭连接池"')]),t._v("\ndruidDataSource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);