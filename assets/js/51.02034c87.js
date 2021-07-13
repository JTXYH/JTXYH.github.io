(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{551:function(t,s,n){"use strict";n.r(s);var a=n(6),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"nosql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nosql"}},[t._v("#")]),t._v(" NOSql")]),t._v(" "),n("ul",[n("li",[t._v("概念："),n("strong",[t._v("指的是非关系型的数据库")]),t._v("。NoSQL有时也称作"),n("strong",[t._v("Not Only SQL")]),t._v("的缩写，是"),n("strong",[t._v("对不同于传统的关系型数据库的数据库管理系统的统称")])]),t._v(" "),n("li",[t._v("常见的NOSql数据库:\n"),n("ol",[n("li",[n("strong",[t._v("键值数据库")]),t._v("：可以理解为一个"),n("strong",[t._v("HashMap")]),t._v("，支持"),n("strong",[t._v("SET/GET操作")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("值")]),t._v("可以是："),n("strong",[t._v("string，list，set，hash")])])])]),t._v(" "),n("li",[n("strong",[t._v("列式数据库")]),t._v("：每行"),n("strong",[t._v("列数可变")]),t._v("的数据库")]),t._v(" "),n("li",[n("strong",[t._v("文档数据库")]),t._v("："),n("strong",[t._v("键值对")]),t._v("形式存储\n"),n("ul",[n("li",[n("strong",[t._v("文档格式")]),t._v("可以是："),n("strong",[t._v("XML，YAML，JSON，BSON，二进制文件")])])])]),t._v(" "),n("li",[n("strong",[t._v("图形数据库")]),t._v("："),n("strong",[t._v("以图为数据模型来存储数据")]),t._v("，图来表示对象的集合以及关系")])])])]),t._v(" "),n("h2",{attrs:{id:"redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Redis属于键值数据库")])]),t._v(" "),n("li",[t._v("它支持存储的类型包括"),n("strong",[t._v("string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）")]),t._v("。这些数据类型都支持"),n("strong",[t._v("push/pop、add/remove及取交集并集和差集")]),t._v("，而且这些操作都是"),n("strong",[t._v("原子性的")])]),t._v(" "),n("li",[t._v("redis支持"),n("strong",[t._v("各种不同方式的排序")]),t._v("，数据都是"),n("strong",[t._v("缓存在内存")]),t._v("中")]),t._v(" "),n("li",[t._v("redis会"),n("strong",[t._v("周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件")]),t._v("，并且在此基础上实现了"),n("strong",[t._v("master-slave(主从)同步")])])]),t._v(" "),n("h3",{attrs:{id:"特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("高性能，持久存储，适应高并发的")]),t._v("应用场景")]),t._v(" "),n("li",[t._v("相比许多键值数据存储，Redis拥有一套较为丰富的数据类型")]),t._v(" "),n("li",[t._v("Redis数据库"),n("strong",[t._v("完全在内存中")]),t._v("，使用磁盘仅用于持久性")]),t._v(" "),n("li",[t._v("Redis可以将"),n("strong",[t._v("数据复制到任意数量的从服务器")])]),t._v(" "),n("li",[n("strong",[t._v("Redis操作是原子性的")]),t._v("，这保证了如果"),n("strong",[t._v("两个客户端同时访问的Redis服务器将获得更新后的值")])]),t._v(" "),n("li",[n("strong",[t._v("Redis是单线程")])])]),t._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Windows安装")]),t._v(" "),n("ol",[n("li",[t._v("下载安装包："),n("strong",[n("a",{attrs:{href:"https://github.com/MicrosoftArchive/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis下载"),n("OutboundLink")],1)])]),t._v(" "),n("li",[t._v("解压即可使用")])])]),t._v(" "),n("li",[n("strong",[t._v("Linux安装")]),t._v("："),n("strong",[n("a",{attrs:{href:"https://redis.io/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis官网"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("strong",[t._v("配置文件解析")]),t._v(" "),n("a",{attrs:{"data-fancybox":"",title:"redis配置.png",href:"https://i.loli.net/2019/11/25/CRybZmDiSE5N38k.png"}},[n("img",{attrs:{src:"https://i.loli.net/2019/11/25/CRybZmDiSE5N38k.png",alt:"redis配置.png"}})])])]),t._v(" "),n("h3",{attrs:{id:"核心文件配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心文件配置"}},[t._v("#")]),t._v(" 核心文件配置")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"核心文件配置.png",href:"https://i.loli.net/2019/11/25/AZzQTvPIe5lWyME.png"}},[n("img",{attrs:{src:"https://i.loli.net/2019/11/25/AZzQTvPIe5lWyME.png",alt:"核心文件配置.png"}})])]),t._v(" "),n("h3",{attrs:{id:"服务启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务启动"}},[t._v("#")]),t._v(" 服务启动")]),t._v(" "),n("ol",[n("li",[t._v("启动redis"),n("strong",[t._v("服务器服务")]),t._v(" "),n("ul",[n("li",[t._v("在cmd中输入："),n("strong",[t._v("redis-server.exe redis-windows.conf")])])])]),t._v(" "),n("li",[t._v("启动redis"),n("strong",[t._v("客户端服务")]),t._v(" "),n("ul",[n("li",[t._v("在cmd中输入："),n("strong",[t._v("redis-cli.exe -h ip地址 -p 端口 -a 密码")])])])])]),t._v(" "),n("ul",[n("li",[t._v("可视化"),n("strong",[t._v("客户端工具")]),t._v("："),n("strong",[n("a",{attrs:{href:"https://github.com/JTXYH/JTXYH.github.io/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载RedisDesktopManager"),n("OutboundLink")],1)]),t._v(" "),n("a",{attrs:{"data-fancybox":"",title:"客户端工具.png",href:"https://i.loli.net/2019/11/25/53ZcMKG9uhoXIQb.png"}},[n("img",{attrs:{src:"https://i.loli.net/2019/11/25/53ZcMKG9uhoXIQb.png",alt:"客户端工具.png"}})])])]),t._v(" "),n("h2",{attrs:{id:"使用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用命令"}},[t._v("#")]),t._v(" 使用命令")]),t._v(" "),n("h3",{attrs:{id:"string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" string")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("命令")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("新增或修改")]),t._v("key的值")]),t._v(" "),n("td",[n("strong",[t._v("set key value [px 毫秒数] [ex 秒数] [nx]")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取key的值")])]),t._v(" "),n("td",[n("strong",[t._v("get key")])])]),t._v(" "),n("tr",[n("td",[t._v("为key设置一个"),n("strong",[t._v("新的值，并且返回旧的值")])]),t._v(" "),n("td",[n("strong",[t._v("getset key value")])])]),t._v(" "),n("tr",[n("td",[t._v("将已存在的key中的"),n("strong",[t._v("value进行+1")]),t._v("(value必须为"),n("strong",[t._v("数值型")]),t._v(")")]),t._v(" "),n("td",[n("strong",[t._v("incr key")])])]),t._v(" "),n("tr",[n("td",[t._v("将已存在的key中的"),n("strong",[t._v("value进行-1")]),t._v("(value必须为"),n("strong",[t._v("数值型")]),t._v(")")]),t._v(" "),n("td",[n("strong",[t._v("decr key")])])]),t._v(" "),n("tr",[n("td",[t._v("将已存在的key中的"),n("strong",[t._v("value进行加上指定值")]),t._v("(value必须为"),n("strong",[t._v("数值型")]),t._v(")")]),t._v(" "),n("td",[n("strong",[t._v("incrby key increment(需要增加的值)")])])]),t._v(" "),n("tr",[n("td",[t._v("将已存在的key中的"),n("strong",[t._v("value进行减去指定值")]),t._v("(value必须为"),n("strong",[t._v("数值型")]),t._v(")")]),t._v(" "),n("td",[n("strong",[t._v("decrby key increment(需要减少的值)")])])])])]),t._v(" "),n("h3",{attrs:{id:"list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" list")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("命令")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("将一个或多个值插入到"),n("strong",[t._v("列表头部")])]),t._v(" "),n("td",[n("strong",[t._v("lpush key value1 value2...")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("移除并获取")]),t._v("列表的"),n("strong",[t._v("第一个")]),t._v("元素")]),t._v(" "),n("td",[n("strong",[t._v("lpop key")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取列表长度")])]),t._v(" "),n("td",[n("strong",[t._v("llen key")])])]),t._v(" "),n("tr",[n("td",[t._v("通过"),n("strong",[t._v("索引获取")]),t._v("列表中的元素")]),t._v(" "),n("td",[n("strong",[t._v("lindex key index")])])]),t._v(" "),n("tr",[n("td",[t._v("通过"),n("strong",[t._v("索引设置")]),t._v("列表元素的值")]),t._v(" "),n("td",[n("strong",[t._v("lset key index value")])])]),t._v(" "),n("tr",[n("td",[t._v("获取列表"),n("strong",[t._v("指定范围内")]),t._v("的元素")]),t._v(" "),n("td",[n("strong",[t._v("lrange key start stop")])])])])]),t._v(" "),n("h3",{attrs:{id:"hash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" Hash")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("命令")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("将哈希表"),n("strong",[t._v("key中的字段field的值设置为value")])]),t._v(" "),n("td",[n("strong",[t._v("hset key fleld value")])])]),t._v(" "),n("tr",[n("td",[t._v("获取key中"),n("strong",[t._v("field的值")])]),t._v(" "),n("td",[n("strong",[t._v("hget key fleld")])])]),t._v(" "),n("tr",[n("td",[t._v("同时将"),n("strong",[t._v("多个field-value设置到哈希表key")]),t._v("中")]),t._v(" "),n("td",[n("strong",[t._v("hmset key fleld1 value1 fleld2 value2")])])]),t._v(" "),n("tr",[n("td",[t._v("获取所有"),n("strong",[t._v("给定字段的值")])]),t._v(" "),n("td",[n("strong",[t._v("hmget key fleld1 fleld2")])])]),t._v(" "),n("tr",[n("td",[t._v("获取哈希表中"),n("strong",[t._v("所有的字段和值")])]),t._v(" "),n("td",[n("strong",[t._v("hgetall key")])])]),t._v(" "),n("tr",[n("td",[t._v("获取哈希表中"),n("strong",[t._v("所有的字段")])]),t._v(" "),n("td",[n("strong",[t._v("hkeys key")])])]),t._v(" "),n("tr",[n("td",[t._v("获取哈希表中"),n("strong",[t._v("所有的值")])]),t._v(" "),n("td",[n("strong",[t._v("hvals key")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("查看")]),t._v("哈希表中指定key中指定的"),n("strong",[t._v("字段是否存在")])]),t._v(" "),n("td",[n("strong",[t._v("hexists key fleld")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("删除")]),t._v("哈希表中指定key中"),n("strong",[t._v("指定的字段")])]),t._v(" "),n("td",[n("strong",[t._v("hdel key fleld")])])])])]),t._v(" "),n("h3",{attrs:{id:"set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("命令")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("向集合"),n("strong",[t._v("添加一个或多个")]),t._v("成员")]),t._v(" "),n("td",[n("strong",[t._v("sadd key member1 member2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("集合中"),n("strong",[t._v("所有的")]),t._v("成员")]),t._v(" "),n("td",[n("strong",[t._v("smembers key")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("删除并返回")]),t._v("集合中的一个"),n("strong",[t._v("随机元素")])]),t._v(" "),n("td",[n("strong",[t._v("spop key")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("给定集合的"),n("strong",[t._v("差集")])]),t._v(" "),n("td",[n("strong",[t._v("sdiff key1 key2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("指定的集合的"),n("strong",[t._v("差集并存储")]),t._v("至destination"),n("strong",[t._v("指定的key中")])]),t._v(" "),n("td",[n("strong",[t._v("sdiffstore destination key1 key2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("给定集合中的"),n("strong",[t._v("交集")])]),t._v(" "),n("td",[n("strong",[t._v("sinter key1 key2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("指定集合的"),n("strong",[t._v("交集并存储")]),t._v("至destination"),n("strong",[t._v("指定的key中")])]),t._v(" "),n("td",[n("strong",[t._v("sinterstore destination key1 key2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("给定集合中的"),n("strong",[t._v("并集")])]),t._v(" "),n("td",[n("strong",[t._v("sunion key1 key2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("获取")]),t._v("指定集合中的"),n("strong",[t._v("并集并存储")]),t._v("至destination"),n("strong",[t._v("指定的key中")])]),t._v(" "),n("td",[n("strong",[t._v("sunionstore destination key1 key2")])])])])]),t._v(" "),n("h3",{attrs:{id:"zset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[t._v("#")]),t._v(" zSet")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("命令")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("向集合"),n("strong",[t._v("添加一个或多个成员及分数")]),t._v(",或者"),n("strong",[t._v("更新")]),t._v("成员分数")]),t._v(" "),n("td",[n("strong",[t._v("zadd key score1 member1 score2 member2")])])]),t._v(" "),n("tr",[n("td",[t._v("有序集合中"),n("strong",[t._v("对指定成员增加increment值")])]),t._v(" "),n("td",[n("strong",[t._v("zincrby key increment member")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("返回")]),t._v("有序集合中指定索引区间的成员")]),t._v(" "),n("td",[n("strong",[t._v("zrange key start stop")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("返回")]),t._v("指定分数区间的成员"),n("strong",[t._v("升序排列")])]),t._v(" "),n("td",[n("strong",[t._v("zrangebyscore key min max")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("返回")]),t._v("指定索引区间的成员"),n("strong",[t._v("降序排列")])]),t._v(" "),n("td",[n("strong",[t._v("zrevrange key start stop")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("返回")]),t._v("指定分数区间的成员"),n("strong",[t._v("降序排列")])]),t._v(" "),n("td",[n("strong",[t._v("zrevrangebyscore key max min")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("返回")]),t._v("指定成员的"),n("strong",[t._v("排名")]),t._v(",从0开始")]),t._v(" "),n("td",[n("strong",[t._v("zrevrank key member")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("返回")]),t._v("指定成员的"),n("strong",[t._v("分数")])]),t._v(" "),n("td",[n("strong",[t._v("zscore key member")])])])])]),t._v(" "),n("h3",{attrs:{id:"key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" Key")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("介绍")]),t._v(" "),n("th",[t._v("命令")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("获取当前实例下所有的key")])]),t._v(" "),n("td",[n("strong",[t._v("keys *")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("删除")]),t._v("一个或多个key")]),t._v(" "),n("td",[n("strong",[t._v("del key1 key2...")])])]),t._v(" "),n("tr",[n("td",[t._v("判断指定key"),n("strong",[t._v("是否存在")])]),t._v(" "),n("td",[n("strong",[t._v("exists key")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("设置key超时时间")]),t._v("，过时删除")]),t._v(" "),n("td",[n("strong",[t._v("expire key seconds")])])]),t._v(" "),n("tr",[n("td",[t._v("获取key的"),n("strong",[t._v("类型")])]),t._v(" "),n("td",[n("strong",[t._v("type key")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("切换库(0-15)")])]),t._v(" "),n("td",[n("strong",[t._v("select index")])])])])]),t._v(" "),n("h2",{attrs:{id:"持久化机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#持久化机制"}},[t._v("#")]),t._v(" 持久化机制")]),t._v(" "),n("h3",{attrs:{id:"rdb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[t._v("#")]),t._v(" RDB")]),t._v(" "),n("ul",[n("li",[t._v("按照持久化测量定期"),n("strong",[t._v("持久化数据到磁盘文件")]),t._v(","),n("strong",[t._v("存的是数据（key-value）")]),t._v(" "),n("a",{attrs:{"data-fancybox":"",title:"RDB.png",href:"https://i.loli.net/2019/11/29/hzidsKSfZFUaHJj.png"}},[n("img",{attrs:{src:"https://i.loli.net/2019/11/29/hzidsKSfZFUaHJj.png",alt:"RDB.png"}})])])]),t._v(" "),n("h3",{attrs:{id:"aof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[t._v("#")]),t._v(" AOF")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("每秒持久化redis命令")]),t._v("到磁盘文件，定期做"),n("strong",[t._v("文件压缩")]),t._v(" "),n("a",{attrs:{"data-fancybox":"",title:"AOF.png",href:"https://i.loli.net/2019/11/29/EYPq82IVr4cswlT.png"}},[n("img",{attrs:{src:"https://i.loli.net/2019/11/29/EYPq82IVr4cswlT.png",alt:"AOF.png"}})])])]),t._v(" "),n("h2",{attrs:{id:"jedis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jedis"}},[t._v("#")]),t._v(" Jedis")]),t._v(" "),n("ul",[n("li",[t._v("Jedis是与"),n("strong",[t._v("java连接Redis的驱动包")])]),t._v(" "),n("li",[t._v("下载地址："),n("strong",[n("a",{attrs:{href:"https://mvnrepository.com/artifact/redis.clients/jedis/2.7.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jedis"),n("OutboundLink")],1),t._v("和"),n("a",{attrs:{href:"https://mvnrepository.com/artifact/org.apache.commons/commons-pool2/2.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commons Pool"),n("OutboundLink")],1)])])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"获取redis实例"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第一种方法"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*Jedis jedis = new Jedis("127.0.0.1",6379);\n"密码"\njedis.auth("root");*/')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第二种方法  redis://随便起个名字:redis密码@redisIP地址:端口/库"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" uri "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redis://x:root@127.0.0.1:6379/0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URI")]),t._v(" u "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("URI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//资源对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Jedis")]),t._v(" jedis "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Jedis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    jedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"释放"')]),t._v("\njedis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"连接多台实例"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisPoolConfig")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisPoolConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMinIdle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"List可以多台redis实例的连接信息"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"一个JedisShardInfo就是一台redis实例的连接信息对象"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisShardInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisShardInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("URI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redis://x:root@127.0.0.1:6379/0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JedisShardInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("URI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redis://x:root@127.0.0.1:6380/0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"全局唯一"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardedJedisPool")]),t._v(" pool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardedJedisPool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"底层对数据做分片存储或者分区存储"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardedJedis")]),t._v(" resource "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0-16384之间的数字"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hashMap存储 散列结构存储"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nresource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);