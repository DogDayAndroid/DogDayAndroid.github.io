---
lang: zh-CN
title: 项目摘要
description: 关于项目的摘要
---
# DogDayAndroid项目介绍

::: tip 
本系统基于[Pixel Experience GSI 项目](https://github.com/ponces/treble_build_pe)修改而来。
:::

## 摘要

在Android应用加固过程中，一些恶意软件作者，他们通过编写恶意病毒程序或通过静态注入恶意代码并修改其控制流以执行某些恶意操作危害我们的安卓手机系统，原本用来防止应用程序被逆向分析、破解修改、重打包的加壳技术也被恶意程序利用攻击者利用加壳技术隐藏木马病毒程序的真正代码来躲避安全软件杀毒引擎的扫描与移动安全研究人员的分析。

现有的分类技术很难检测到加固过的恶意软件，其中有一部分原因是它们与正常的应用程序行为相似且代码不易于查看，因此对加壳软件进行脱壳可以协助安全人员分析应用程序原本的代码是否包含恶意病毒，其中的基本思想就是 Android 应用运行的内存空间中存在完整的 Dex 文件,直接将对应区域的内存读出即可。

但是由于加壳技术的发展,当加壳过后的程序检测到在上述脱壳环境中运行时,可以通过直接退出、大量形成虚假的 Dex 内存空间、Dex 动态修改等对抗手段让其失效．使得我们要么不能得到 Dex,要么得到错误或不完整的 Dex.传统内存 dump 出 Dex 的脱壳软件对于加固厂商的新型壳已经不适用。

因此本文提出了一种基于 Android 系统源码的改造,实现一种针对新型壳通用的脱壳系统，从而协助安全技术人员检测软件中是否存在病毒或其他风险。

## 实现理论

如果你想了解其中的原理和具体技术细节，请查看我们具体的[项目介绍](/introduce/)。

本项目的[自动构建脚本](https://github.com/DogDayAndroid/Treble_DogDayAndroid)托管在我的Github上。

## 构建

::: warning
在生成OTA更新文件过程中，请确保你的系统拥有 [jq](https://stedolan.github.io/jq/) 命令。
:::

开始构建本镜像之前, 你需要对[Git与Repo](https://source.android.com/source/using-repo.html) 和 [如何构建GSI](https://github.com/phhusson/treble_experimentations/wiki/How-to-build-a-GSI%3F)有一定了解再继续。

+ 构建一个目录用于存放镜像源码
+ 克隆此仓库
+ 调用脚本进行构建

例如：
``` bash
# 创建目录并进入
mkdir pixel; cd pixel
# 克隆本项目
git clone https://gitee.com/DogDayAndroid/Treble_DogDayAndroid.git -b DogDayAndroid_twelve
# 执行构建脚本（初始化构建）
bash Treble_DogDayAndroid/build.sh
```

### 初始化构建成功后本地构建

有时由于本仓库的补丁稍滞后于`Pixel Experience`源码，因此同步后打补丁会出现一些错误。如果您不了解如何去修复这些错误，请在第一次成功运行`build.sh`并成功构建之后，通过本地构建脚本进行构建，这样可以避免源码更新带来的一些错误。
``` bash
# 执行本地构建脚本（不进行仓库同步和打补丁）
bash Treble_DogDayAndroid/build.sh
```

## 致谢
首先需要感谢本脚本的来源者，为本项目的自动化构建提供了极大帮助：
- [ponces](https://github.com/ponces)
  
其次是这些以某种方式帮助了这个项目而有所功劳的人：
- [Pixel Experience Team](https://download.pixelexperience.org/about)
- [phhusson](https://github.com/phhusson)
- [AndyYan](https://github.com/AndyCGYan)
- [eremitein](https://github.com/eremitein)
- [kdrag0n](https://github.com/kdrag0n)