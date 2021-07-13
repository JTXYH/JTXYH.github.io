(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{524:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("被称为"),a("strong",[t._v("框架设计的灵魂")])]),t._v(" "),a("ul",[a("li",[t._v("介绍："),a("strong",[t._v("将类的各个组成部分封装为其他对象")]),t._v("，称为反射机制")]),t._v(" "),a("li",[t._v("好处：\n"),a("ol",[a("li",[t._v("可以在程序运行过程中，操作这些对象")]),t._v(" "),a("li",[t._v("可以解耦，提高程序可扩展性")])])])]),t._v(" "),a("h3",{attrs:{id:"获取class对象的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取class对象的方式"}},[t._v("#")]),t._v(" 获取Class对象的方式")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v('Class.forName("全类名")')]),t._v("：将字节码文件"),a("strong",[t._v("加载进内存")]),t._v("，返回Class对象\n"),a("ul",[a("li",[a("strong",[t._v("多用于配置文件")]),t._v("，将类定义在配置文件中，读取文件，加载类")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" cls1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.jtxyh.demo.Person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("类名.class")]),t._v("：通过类名的属性class获取\n"),a("ul",[a("li",[a("strong",[t._v("多用于参数的传递")])])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" cls2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("对象.getClass()")]),t._v("：getClass()方法在"),a("strong",[t._v("Object类中定义")]),t._v("，所有对象都有这个方法\n"),a("ul",[a("li",[a("strong",[t._v("多用于对象获取字节码的方式")])])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" cls3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("结论")]),t._v("：同一个字节码文件(*.class)在一次程序的运行过程中，"),a("strong",[t._v("只会被加载一次，不论是通过哪一种方式获取的Class对象都是同一个")])])]),t._v(" "),a("h3",{attrs:{id:"使用class对象功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用class对象功能"}},[t._v("#")]),t._v(" 使用Class对象功能")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("获取成员变量")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Field[]")]),t._v(" "),a("strong",[t._v("getFields()")]),t._v("：获取所有"),a("strong",[t._v("public")]),t._v("修饰的成员变量")]),t._v(" "),a("li",[a("em",[t._v("Field")]),t._v(" "),a("strong",[t._v("getField(String name)")]),t._v("：获取"),a("strong",[t._v("指定名称")]),t._v("的"),a("strong",[t._v("public")]),t._v("修饰的成员变量")]),t._v(" "),a("li",[a("em",[t._v("Field[]")]),t._v(" "),a("strong",[t._v("getDeclaredFields()")]),t._v("：获取所有的成员变量")]),t._v(" "),a("li",[a("em",[t._v("Field")]),t._v(" "),a("strong",[t._v("getDeclaredField(String name)")]),t._v("：获取"),a("strong",[t._v("指定名称")]),t._v("的成员变量")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fie1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cls1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Field")]),t._v(" field "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" fie1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// public java.lang.String io.jtxyh.demo.Person.a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("strong",[t._v("获取构造方法")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Constructor<?>[]")]),t._v(" "),a("strong",[t._v("getConstructors()")]),t._v("：获取所有"),a("strong",[t._v("public")]),t._v("修饰的构造器")]),t._v(" "),a("li",[a("em",[t._v("Constructor<T>")]),t._v(" "),a("strong",[t._v("getConstructor(类<?>... parameterTypes)")]),t._v("：获取一个"),a("strong",[t._v("指定名称")]),t._v("的"),a("strong",[t._v("public")]),t._v("修饰的构造器")]),t._v(" "),a("li",[a("em",[t._v("Constructor<?>[]")]),t._v(" "),a("strong",[t._v("getDeclaredConstructors()")]),t._v("：获取所有的构造器")]),t._v(" "),a("li",[a("em",[t._v("Constructor<T>")]),t._v(" "),a("strong",[t._v("getDeclaredConstructors(类<?>... parameterTypes)")]),t._v("：获取所有"),a("strong",[t._v("指定名称")]),t._v("的构造器")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),t._v(" cos1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cls1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConstructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取有参的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cos1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("strong",[t._v("获取成员方法")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Method[]")]),t._v(" "),a("strong",[t._v("getMethods()")]),t._v("：获取所有"),a("strong",[t._v("public")]),t._v("修饰的成员方法")]),t._v(" "),a("li",[a("em",[t._v("Method")]),t._v(" "),a("strong",[t._v("getMethods(String name, 类<?>... parameterTypes)")]),t._v("：获取一个"),a("strong",[t._v("指定名称")]),t._v("的"),a("strong",[t._v("public")]),t._v("修饰的成员方法")]),t._v(" "),a("li",[a("em",[t._v("Method[]")]),t._v(" "),a("strong",[t._v("getDeclaredMethods()")]),t._v("：获取所有的成员方法")]),t._v(" "),a("li",[a("em",[t._v("Method")]),t._v(" "),a("strong",[t._v("getDeclaredMethods(String name, 类<?>... parameterTypes)")]),t._v("：获取所有"),a("strong",[t._v("指定名称")]),t._v("的成员方法")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" meth2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cls1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定一个有一个参数的eat方法")]),t._v("\nmeth2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"西瓜"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("strong",[t._v("获取类名")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("String")]),t._v(" "),a("strong",[t._v("getName()")]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meth2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Field")]),t._v("：成员变量\n"),a("ol",[a("li",[t._v("设置值："),a("em",[t._v("void")]),t._v(" "),a("strong",[t._v("set(Object obj, Object value)")])]),t._v(" "),a("li",[t._v("获取值："),a("strong",[t._v("get(Object obj)")])]),t._v(" "),a("li",[t._v("忽略访问权限修饰符的安全检查："),a("strong",[t._v("setAccessible(true)")]),t._v(" "),a("em",[t._v("暴力反射")])])])]),t._v(" "),a("li",[a("strong",[t._v("Constructor")]),t._v("：构造方法\n"),a("ol",[a("li",[t._v("创建对象："),a("em",[t._v("T")]),t._v(" "),a("strong",[t._v("newInstance(Object... initargs)")])]),t._v(" "),a("li",[t._v("如果是用空参数构造方法创建对象,直接可以使用："),a("strong",[t._v("Class对象的newInstance方法")])])])]),t._v(" "),a("li",[a("strong",[t._v("Method")]),t._v("：方法对象\n"),a("ol",[a("li",[t._v("执行方法："),a("em",[t._v("Object")]),t._v(" "),a("strong",[t._v("invoke(Object obj, Object...args)")])]),t._v(" "),a("li",[t._v("获取方法名称："),a("em",[t._v("String")]),t._v(" "),a("strong",[t._v("getName")])])])])]),t._v(" "),a("h2",{attrs:{id:"注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),a("ul",[a("li",[t._v("定义："),a("strong",[t._v("注解(Annotation)")]),t._v("，也叫元数据。一种代码级别的说明，是"),a("strong",[t._v("JDK1.5以后")]),t._v("引入的一个新特性，与"),a("strong",[t._v("类、接口、枚举在同一层次")]),t._v("。可以"),a("strong",[t._v("声明包、类、字段、方法、局部变量、方法参数的前面")]),t._v("，用来"),a("strong",[t._v("对元素进行说明，注释")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("JDK1.5后的新特性")])]),t._v(" "),a("li",[a("strong",[t._v("说明程序")])]),t._v(" "),a("li",[t._v("使用注解方法："),a("strong",[t._v("@注解名称")])])])])]),t._v(" "),a("h3",{attrs:{id:"作用分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用分类"}},[t._v("#")]),t._v(" 作用分类")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("编写文档")]),t._v("：通过代码里标识的注解"),a("strong",[t._v("生成doc文档")])]),t._v(" "),a("li",[a("strong",[t._v("代码分析")]),t._v("：通过代码里标识的注解"),a("strong",[t._v("进行分析(使用反射)")])]),t._v(" "),a("li",[a("strong",[t._v("编译检查")]),t._v("：通过代码里标识的注解"),a("strong",[t._v("让编译器能够时间基本的编译检查(@Override)")])])]),t._v(" "),a("h3",{attrs:{id:"jdk预定义注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk预定义注解"}},[t._v("#")]),t._v(" JDK预定义注解")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("@Override")]),t._v("：检测被注解标注的方法"),a("strong",[t._v("是否继承自父类(接口)的")])]),t._v(" "),a("li",[a("strong",[t._v("@Deprecated")]),t._v("：该注解标注的内容，表示"),a("strong",[t._v("已过时")])]),t._v(" "),a("li",[a("strong",[t._v("@SuppressWarnings")]),t._v("："),a("strong",[t._v("压制警告")]),t._v(" "),a("ul",[a("li",[t._v("一般传递一个参数"),a("strong",[t._v("all")]),t._v(" "),a("strong",[t._v('@SuppressWarnings("all")')])])])])]),t._v(" "),a("h3",{attrs:{id:"自定义注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义注解"}},[t._v("#")]),t._v(" 自定义注解")]),t._v(" "),a("ul",[a("li",[t._v("格式")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'元注解'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" 注解名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'属性列表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("本质：注解"),a("strong",[t._v("本质上就是一个接口")]),t._v("，该接口默认"),a("strong",[t._v("继承Annotation接口")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("public interface MyAnno extends java.lang.annotation.Annotation {}")])])])]),t._v(" "),a("li",[t._v("属性："),a("strong",[t._v("接口")]),t._v("中可以定义的成员方法注解中都可以定义，就是"),a("strong",[t._v("接口中的抽象方法")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("属性的返回值类型要求")]),t._v("：\n"),a("ul",[a("li",[t._v("基本数据类型")]),t._v(" "),a("li",[t._v("String")]),t._v(" "),a("li",[t._v("枚举")]),t._v(" "),a("li",[t._v("注解")]),t._v(" "),a("li",[t._v("以上类型的数组")])])]),t._v(" "),a("li",[a("strong",[t._v("定义了属性，在使用时需要给属性赋值")]),t._v(" "),a("ul",[a("li",[t._v("如果定义属性时，使用"),a("strong",[t._v("default")]),t._v("关键字给属性默认初始化值，则使用注解时，可以不进行赋值")]),t._v(" "),a("li",[t._v("如果只有一个属性需要赋值，并且"),a("strong",[t._v("属性的名称是value")]),t._v("，则value可以省略，直接定义值即可")]),t._v(" "),a("li",[t._v("数组赋值时，值"),a("strong",[t._v("使用{}包裹")]),t._v("，如果数组中只有一个值，"),a("strong",[t._v("则{}可以省略")])])])])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定义注解'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAnno")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整数型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("per")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 枚举类型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAnno2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("anno2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注解型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'属性赋值'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@MyAnno")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" per "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("P1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anno2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@MyAnno2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cde"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"元注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元注解"}},[t._v("#")]),t._v(" 元注解")]),t._v(" "),a("p",[a("strong",[t._v("用于描述注解的注解")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("@Target")]),t._v("：描述注解"),a("strong",[t._v("能够作用的位置")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("ElementType")]),t._v("取值：\n"),a("ol",[a("li",[a("strong",[t._v("TYPE")]),t._v("：可以作用于"),a("strong",[t._v("类")]),t._v("上")]),t._v(" "),a("li",[a("strong",[t._v("METHOD")]),t._v("：可以作用于"),a("strong",[t._v("方法")]),t._v("上")]),t._v(" "),a("li",[a("strong",[t._v("FIELD")]),t._v("：可以作用于"),a("strong",[t._v("成员变量")]),t._v("上")])])])])]),t._v(" "),a("li",[a("strong",[t._v("@Retention")]),t._v("：描述注解"),a("strong",[t._v("被保留的阶段")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("@Retention(RetentionPolicy.RUNTIME)")]),t._v("：当前被描述的注解，会保"),a("strong",[t._v("留到class字节码文件中")]),t._v("，并被JVM读取到")])])]),t._v(" "),a("li",[a("strong",[t._v("@Documented")]),t._v("：描述注解"),a("strong",[t._v("是否被抽取到api文档中")])]),t._v(" "),a("li",[a("strong",[t._v("@Inherited")]),t._v("：描述注解"),a("strong",[t._v("是否被子类继承")])])]),t._v(" "),a("h3",{attrs:{id:"使用-解析-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-解析-注解"}},[t._v("#")]),t._v(" 使用(解析)注解")]),t._v(" "),a("p",[a("strong",[t._v("获取注解中定义的属性值")])]),t._v(" "),a("ol",[a("li",[t._v("获取注解定义的位置的对象，"),a("strong",[t._v("(Class,Method,Field)")])]),t._v(" "),a("li",[t._v("获取指定的注解\n"),a("ul",[a("li",[a("strong",[t._v("getAnnotation(Class)")])])])]),t._v(" "),a("li",[t._v("调用注解中的抽象方法获取配置的属性值")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'注解类'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作用于类上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 能被JVM读取到")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTestAnno")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'==============================================='")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'一个对象'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jtxyh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show ....."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'==============================================='")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'使用注解执行一个类中的方法'")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@MyTestAnno")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.jtxyh.annotation.Person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定注解")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTestAnnoTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'解析注解'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'获取该类的字节码文件对象'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTestAnnoTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" class1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTestAnnoTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 获取上边的注解对象'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTestAnno")]),t._v(" anno "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" class1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAnnotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTestAnno")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 调用注解对象的方法'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" className "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" classAge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 加载该类进内存'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),t._v(" class2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 创建对象'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" class2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 获取方法发对象'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" class2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("classAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 执行方法'")]),t._v("\n\t\tmethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);