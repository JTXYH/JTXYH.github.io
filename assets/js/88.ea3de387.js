(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{587:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("使用rvm")])]),s._v(" "),t("h3",{attrs:{id:"安装ruby"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装ruby"}},[s._v("#")]),s._v(" 安装Ruby")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y rubygems ruby-devel\n")])])]),t("h3",{attrs:{id:"删除原来的rubygems仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除原来的rubygems仓库"}},[s._v("#")]),s._v(" 删除原来的rubygems仓库")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("gem sources --remove https://rubygems.org/\n")])])]),t("h3",{attrs:{id:"添加aliyun的rubygems仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加aliyun的rubygems仓库"}},[s._v("#")]),s._v(" 添加aliyun的rubygems仓库")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("gem sources -a https://mirrors.aliyun.com/rubygems/\n")])])]),t("h3",{attrs:{id:"查看rubygems仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看rubygems仓库"}},[s._v("#")]),s._v(" 查看rubygems仓库")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("gem sources -l\n")])])]),t("h3",{attrs:{id:"导入密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入密钥"}},[s._v("#")]),s._v(" 导入密钥")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://rvm.io/mpapis.asc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gpg --import -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://rvm.io/pkuczynski.asc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" gpg --import -\n")])])]),t("h3",{attrs:{id:"安装稳定版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装稳定版"}},[s._v("#")]),s._v(" 安装稳定版")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("curl -sSL https://get.rvm.io "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s stable\n")])])]),t("h3",{attrs:{id:"执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[s._v("#")]),s._v(" 执行")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile.d/rvm.sh\n")])])]),t("h3",{attrs:{id:"查看可安装的ruby的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看可安装的ruby的版本"}},[s._v("#")]),s._v(" 查看可安装的ruby的版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rvm list known\n")])])]),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v("\n")])])]),t("h3",{attrs:{id:"查看是否安装成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看是否安装成功"}},[s._v("#")]),s._v(" 查看是否安装成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ruby -v\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);