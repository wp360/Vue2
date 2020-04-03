# 小米商城项目

## 前期准备
* 1. git安装
[安装地址： https://git-scm.com/downloads](https://git-scm.com/downloads)
* 2. 配置VSCode的Git地址
```
打开 文件-首选项-设置-搜索git.path 打开setting.json

添加“git.path”： Git实际安装地址
```
* 3. git配置ssh公钥
`git config --list`

`git clone git项目链接地址`

`git config --global credential.helper store`

> 公钥
`ssh-keygen -t rsa -C "2897406527@qq.com"`

#### 注意：无需输入密码，两次回车即可