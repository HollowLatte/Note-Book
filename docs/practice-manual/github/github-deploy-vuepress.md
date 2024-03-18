---
title: GitHub Actions部署VuePress
author:
category: Github
tag: Github
---

::: tip
查看具体：[GitHub Actions文档](https://docs.github.com/en/actions/quickstart)

查看更多三方Actions：[GitHub Marketplace](https://github.com/marketplace?category=&type=actions&verification=&copilot_app=&query=)
:::

## 说明

在GitHub上部署Vuepress需要用到GitHub Action，通过特定的事件触发构建、部署操作，实现自动化部署

总的来说需要三个步骤：

1. 生成并配置Token：由于部署的操作需要有操作仓库的权限，所以需要一个Token，该Token会在workflow脚本中使用
2. 编写workflow脚本：该脚本规定触发构建的事件，脚本执行的构建目录等等
3. 配置GitHub Pages：配置已构建好的分支作为GitHub Pages展示页面

## 生成并配置Token

1. 点击 个人头像-> Settings -> Develop settings -> Personal access tokens -> Tokens(classic) -> Generate new token
2. 生成完成后去仓库的Settings -> Actions secrets and variables -> New repository
   secret，将刚刚生成的token作为值，名称命名为`ACCESS_TOKEN`（其实命名为其他也可以，只要在workflow使用该名称即可）

## 编写workflow脚本

在项目根目录创建`.github/workflows`目录，workflow脚本在该目录下都会被GitHub Action识别

下面将编写一个workflow脚本：

```yaml
name: Deploy VuePress To Github Pages

# 触发事件
on: [ push ]

jobs:
  build-and-deploy-to-page:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install Dependencies
        run: pnpm install

      - name: Build VuePress Site
        run: pnpm run docs:build

      - name: Deploy to GitHub Pages
        # 使用第三方的包
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 构建完成的文件存放的分支
          branch: github-pages
          # 构建完成的文件所在目录，与VuePress工程中配置的一致即可
          folder: dist
          # 引用Token
          token: ${{ secrets.ACCESS_TOKEN }}
```

::: warning
branch 配置的分支，在执行完流水线后，会覆盖该分支原本的内容，因此建议配置为专门用于存放构建文件的分支，而不是提交代码的分支
:::

## 配置GitHub Pages

1. 代码仓库Settings -> Pages -> Source -> Deploy from a branch
2. Branch 选择workflow脚本中指定的构建Branch，目录选择`/`即可，然后save
3. 等待一会，GitHub Page就会部署完成，GitHub Page的URL一般为：`https://{用户名}.github.io/{仓库名}`

::: warning
注意，如果VuePress工程中的base路径未配置的话，部署完成后，页面获取静态资源时，会去`https://{用户名}.github.io`获取，这样是找不到资源的

因此，需要配置VuePress中的base路径为当前仓库名，这样静态资源就会去`https://{用户名}.github.io/{仓库名}`获取
:::
