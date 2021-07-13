(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{583:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("流行的微服务容器")])]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("ol",[a("li",[t._v("优点：与传统虚拟机相比，Docker优势体现在"),a("strong",[t._v("启动速度快，占用体积小")])]),t._v(" "),a("li",[t._v("Docker是一个客户端-服务器(C/S)的架构程序")]),t._v(" "),a("li",[t._v("Docker镜像与容器："),a("strong",[t._v("镜像是用来运行容器")]),t._v("，一个镜像可以构建"),a("strong",[t._v("多个容器")])]),t._v(" "),a("li",[t._v("Registry(注册中心)：Docker用Registry来保存用户的镜像，用户可以在"),a("a",{attrs:{href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("DockerHub"),a("OutboundLink")],1),t._v("保存自己的镜像")])]),t._v(" "),a("h2",{attrs:{id:"安装和启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和启动"}},[t._v("#")]),t._v(" 安装和启动")]),t._v(" "),a("h3",{attrs:{id:"centos7-x版本安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7-x版本安装"}},[t._v("#")]),t._v(" Centos7.x版本安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新源")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载旧版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum remove docker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-client-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-common "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-latest-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("docker-engine\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装支持devicemapper存储类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("device-mapper-persistent-data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("lvm2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加软件源")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repoo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装Docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n")])])]),a("h3",{attrs:{id:"ubuntu安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装"}},[t._v("#")]),t._v(" Ubuntu安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" gnupg-agent software-properties-common\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' stable"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n")])])]),a("h3",{attrs:{id:"设置ustc镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置ustc镜像"}},[t._v("#")]),t._v(" 设置USTC镜像")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://mirror.ccs.tencentyun.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行")]),t._v("\nsystemctl daemon-reload\nsystemctl restart docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://get.daocloud.io/daotools/set_mirror.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -s http://f1361db2.m.daocloud.io\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" docker restart\n")])])]),a("h3",{attrs:{id:"docker启动与停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker启动与停止"}},[t._v("#")]),t._v(" Docker启动与停止")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("systemctl start docker")])]),t._v(" "),a("td",[t._v("启动Docker")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("systemctl stop docker")])]),t._v(" "),a("td",[t._v("停止Docker")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("systemctl restart docker")])]),t._v(" "),a("td",[t._v("重启Docker")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("systemctl status docker")])]),t._v(" "),a("td",[t._v("查看Docker状态")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("systemctl enable docker")])]),t._v(" "),a("td",[t._v("设置开机启动")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("docker info")])]),t._v(" "),a("td",[t._v("查看Docker概要信息")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("docker --help")])]),t._v(" "),a("td",[t._v("查看Docker帮助文档")])])])]),t._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("h3",{attrs:{id:"镜像相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关命令"}},[t._v("#")]),t._v(" 镜像相关命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地镜像，这些镜像都存储在Docker宿主机的/var/lib/docker目录下")]),t._v("\ndocker images\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像名称")]),t._v("\nREPOSITORY\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像标签")]),t._v("\nTAG\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像创建时间")]),t._v("\nCREATED\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像大小")]),t._v("\nSIZE\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索镜像")]),t._v("\ndocker search + 镜像名称\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仓库名称")]),t._v("\nNAME\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像描述")]),t._v("\nDESCRIPTION\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户评价")]),t._v("\nSTARS\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否是官方的")]),t._v("\nOFFICIAL\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动构建，表示是由Docker Hub自动构建形成的：AUTOMATED")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取镜像")]),t._v("\ndocker pull + 查看到的镜像名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aq\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止所有容器")]),t._v("\ndocker stop "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aq"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除所有容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aq"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除所有的镜像")]),t._v("\ndocker rmi "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("docker images -q"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),a("h3",{attrs:{id:"容器相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器相关命令"}},[t._v("#")]),t._v(" 容器相关命令")]),t._v(" "),a("ul",[a("li",[t._v("查看正在运行的容器："),a("strong",[t._v("docker ps")]),t._v("，\n"),a("ul",[a("li",[a("strong",[t._v("加上-a")]),t._v("查看所有容器")]),t._v(" "),a("li",[a("strong",[t._v("加上-l")]),t._v("查看最后一次运行的容器")]),t._v(" "),a("li",[a("strong",[t._v("加上-f status-exited")]),t._v("查看停止的容器")])])]),t._v(" "),a("li",[t._v("创建容器："),a("strong",[t._v("docker run")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行容器")]),t._v("\n-i\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器启动后会进入命令行。和-i一起用会登录进入这个容器，创建一个伪终端")]),t._v("\n-t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为创建的容器命名")]),t._v("\n--name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录映射关系，把宿主机中的一个目录和容器的目录形成映射，操作宿主机目录相当于操作容器目录")]),t._v("\n-v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个守护式容器在后台运行")]),t._v("\n-d\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 端口映射")]),t._v("\n-p\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出当前容器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 交互式方式创建容器：退出容器，容器自动关闭")]),t._v("\ndocker run -it --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("容器名称 镜像名称:标签 /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 守护式方式创建容器：退出容器，容器不关闭，仍然在后台运行")]),t._v("\ndocker run -di --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("容器名称 镜像名称:标签\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it 容器名称 /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止容器")]),t._v("\ndocker stop 容器名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("或容器ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动容器")]),t._v("\ndocker start 容器名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("或容器ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件拷贝到容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" 需要拷贝的文件或目录 容器名称:容器目录\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件拷贝出容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" 容器名称:容器目录 需要拷贝的文件或目录\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录挂载")]),t._v("\ndocker run -di -v 宿主机目录:容器目录 --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("容器名称 镜像名称:标签\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看容器IP地址")]),t._v("\ndocker inspect --format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{.NetworkSettings.IPAddress}}'")]),t._v(" 容器名称\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看容器所有信息")]),t._v("\ndocker inspect 容器名称\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 容器名称\n")])])]),a("h2",{attrs:{id:"备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份与恢复"}},[t._v("#")]),t._v(" 备份与恢复")]),t._v(" "),a("h3",{attrs:{id:"容器保存为镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器保存为镜像"}},[t._v("#")]),t._v(" 容器保存为镜像")]),t._v(" "),a("p",[t._v("docker commit 需要保存的容器名称 需要保存为镜像的镜像名称")]),t._v(" "),a("h3",{attrs:{id:"镜像备份为tar文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像备份为tar文件"}},[t._v("#")]),t._v(" 镜像备份为tar文件")]),t._v(" "),a("p",[t._v("docker save -o 备份后镜像名称.tar 原镜像名称")]),t._v(" "),a("h3",{attrs:{id:"镜像恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像恢复"}},[t._v("#")]),t._v(" 镜像恢复")]),t._v(" "),a("p",[t._v("先删除原镜像，再执行docker load -i 需要恢复的tar镜像")]),t._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),a("p",[a("strong",[t._v("是一系列命令和参数构成的脚本")]),t._v("，这些命令应用于基础镜像并最终创建一个新的镜像")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行Dockerfile文件")]),t._v("\ndocker build -t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'镜像名称'")]),t._v(" 指定Dockerfile存在的位置\n")])])]),a("h3",{attrs:{id:"常用命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("FROM 镜像名称:标签")])]),t._v(" "),a("td",[t._v("定义了使用哪个基础镜像启动构建流程")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("MAINTAINER 名字")])]),t._v(" "),a("td",[t._v("声明镜像的创建者")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("ENV key value")])]),t._v(" "),a("td",[t._v("设置环境变量")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("RUN command")])]),t._v(" "),a("td",[t._v("是Docker的核心部分(可以写多条)")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("ADD 源目录文件"),a("br"),t._v("家目录文件")])]),t._v(" "),a("td",[t._v("将宿主机的文件复制到容器中"),a("br"),t._v("如果是一个压缩文件将会在复制后自动解压")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("COPY 源目录文件"),a("br"),t._v("家目录文件")])]),t._v(" "),a("td",[t._v("和ADD相似，但如果有压缩文件不能解压")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("WORKDIR 目录名称")])]),t._v(" "),a("td",[t._v("设置工作目录")])])])]),t._v(" "),a("h3",{attrs:{id:"书写java环境搭建的dockerfile文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#书写java环境搭建的dockerfile文件"}},[t._v("#")]),t._v(" 书写JAVA环境搭建的Dockerfile文件")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("FROM centos:7   声明基础镜像\nMAINTAINER jtx  声明名称\nWORKDIR  /usr   设置当前目录\nRUN mkdir /usr/local/java  创建一个目录\nADD jdk-8u11-linux-x64.tar.gz /usr/local/java  添加压缩文件(压缩文件必须在宿主机中)\n\nENV JAVA_HOME /usr/local/java/jdk1.8.0_171  设置jdk环境变量\nEVN JRE_HOME $JAVA_HOME/jre  设置jre环境变量\nENV CLASSPATH $JAVA_HOME/bin/dt.jar:$JAVA_HOM/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH    设置CLASS环境变量\nEVN PATH $JAVA_HOME/bin:$PATH  设置PATH环境变量\n")])])]),a("h2",{attrs:{id:"docker私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker私有仓库"}},[t._v("#")]),t._v(" Docker私有仓库")]),t._v(" "),a("h3",{attrs:{id:"搭建和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建和配置"}},[t._v("#")]),t._v(" 搭建和配置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取私有仓库镜像")]),t._v("\ndocker pull registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动私有仓库容器")]),t._v("\ndocker run -di --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("registry -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(":5000 registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浏览器打开输入ip地址:5000/v2/_catalog")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 看到{"repositories":[]}表示搭建成功，且内容为空')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改/etc/docker/daemon.json添加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insecure-registries"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ip地址:5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启docker")]),t._v("\nsystemctl restart docker\n")])])]),a("h3",{attrs:{id:"上传镜像到私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传镜像到私有仓库"}},[t._v("#")]),t._v(" 上传镜像到私有仓库")]),t._v(" "),a("ol",[a("li",[t._v("对需要上传的镜像打标签："),a("strong",[t._v("docker tag 镜像名称 私有仓库地址:5000/镜像名称")])]),t._v(" "),a("li",[t._v("启动私有仓库容器："),a("strong",[t._v("docker start registry")])]),t._v(" "),a("li",[t._v("上传："),a("strong",[t._v("docker push 私有仓库地址:5000/镜像名称")])])]),t._v(" "),a("h3",{attrs:{id:"下载私有仓库镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载私有仓库镜像"}},[t._v("#")]),t._v(" 下载私有仓库镜像")]),t._v(" "),a("ol",[a("li",[t._v("重复搭建的命令")]),t._v(" "),a("li",[t._v("启动私有仓库容器："),a("strong",[t._v("docker start registry")])]),t._v(" "),a("li",[t._v("执行："),a("strong",[t._v("docker pull 私有仓库地址:5000/镜像名称")])])]),t._v(" "),a("h2",{attrs:{id:"docker出错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker出错"}},[t._v("#")]),t._v(" Docker出错")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"docker出错解决",href:"https://gitee.com/jtxyh/blogImg/raw/master/docker出错解决.png"}},[a("img",{attrs:{src:"https://gitee.com/jtxyh/blogImg/raw/master/docker%E5%87%BA%E9%94%99%E8%A7%A3%E5%86%B3.png",alt:"docker出错解决"}})])]),t._v(" "),a("h2",{attrs:{id:"查看挂载信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看挂载信息"}},[t._v("#")]),t._v(" 查看挂载信息")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker inspect 容器名称 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" Mounts -A "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);