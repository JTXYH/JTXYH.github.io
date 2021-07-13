(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{572:function(t,e,n){"use strict";n.r(e);var s=n(6),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[t._v("部署项目知识")])]),t._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("nginx.conf")]),t._v("文件中指定其他配置文件的全路径位置"),n("code",[t._v("include 全路径;")])]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('user root root;\nworker_processes  1;\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n    # 指定其他配置文件位置\n    include /etc/nginx/conf/*.conf;\n}\n')])])]),n("p",[t._v("在"),n("code",[t._v("/etc/nginx/conf/")]),t._v("创建test.conf")]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("server {\n    listen       80;\n    server_name  www.xxxx.com;\n\n    location ^~/test/ {\n       root   /opt/test;\n       index  index.html index.htm;\n\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n    }\n\n}\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);