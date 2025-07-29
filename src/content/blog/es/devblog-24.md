---
title: "This Week In Veloren 24"
guid: "https://veloren.net/blog/devblog-24/"
url: "https://veloren.net/blog/devblog-24/"
pubDate: "2019-07-15T00:00:00.000Z"
---

Thanks to all of the contributors this week, @Zesterer, @xacrimon, @Pfau, and @xMAC94x!

## Saturday Screenshot Winner

Thanks to @Vechro and @Pfau for this week's screenshot. We're excited to see what comes out next week!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/541307708146581519/600705713525883014/WD16ZwoA7M9VdV_JFpFTOtJ9jfm35fB2ePBLEybkua8.png)

_Peaking out of the chimney_

## Programming

### Content Additions

Recently, we've seen the addition of the savannah biome! Another task has been populating this region with objects like bones and abandoned structures. Also, @Pfau has been working on getting new structures in, such as the witch hut and the tower ruins. He is also working with @Vechro on better heads and hairstyles for female orcs.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/600763428197367867/screenshot_1563303537857.png)

_The savannah biome_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/599622299490189322/screenshot_1563031375359.png)

_@Pfau's witch hut_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/599343458800500749/unknown.png)

_A female orc's new head_

### Nightly Downloading

While @Songtronix is working on Airshipper, we need a reliable way for users to download new versions of Veloren when they come out. @LunarEclipse made a nice gif to show how to go about this from [the book](https://book.veloren.net/download/index.html)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/541307708146581519/600707695586050049/3h4k8Hk.gif)

_How to download a CI build_

### Stable Rust

@Timo has been making large strides in removing all of the nightly Rust used in the codebase. Moving away from nightly will help the project in many ways. First, upgrading stable versions of Rust is much safer than nightly. Although nightly has more features, it is intrinsically more likely to break something or regress. One of the reasons this had to happen now is that a crate broke on the newest nightly. It is common enough that regressions in nightly break crates and code that are not stable.

Also, many of the other Rust tools that are used on the project are guaranteed to run on stable. Since not all tools are built for all the nightly builds, we've had to lock to a certain version of nightly so that it would include everything we need.

This task is part of the general codebase cleanup. In the coming weeks, we are aiming to also upgrade to the latest versions of crates we use. There is still also a push on keeping the codebase clean with Clippy and no warnings.

### Community work

A community member, @Juli199696, has been doing some cool graphical things with ReShade. Let's take a look at a few of them!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/598858086383353866/veloren-voxygen_2019-07-11_14-44-32.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/598858110425366528/reshade.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/599137225908944906/veloren-voxygen_2019-07-12_09-14-26.png)

_The "comic" effect_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/599962750508335104/veloren-voxygen_2019-07-14_15-53-20.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/599962732111855616/veloren-voxygen_2019-07-14_15-55-08.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/599962761203679273/veloren-voxygen_2019-07-14_15-56-20.png)

_"Veloren mountain" with some different lighting effects_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/600050683755888650/veloren-voxygen_2019-07-14_21-46-16.png)

_A castle at sunset. See you next week! :)_
