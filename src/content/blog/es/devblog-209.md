---
title: "Three Weeks in Veloren 209"
guid: "https://veloren.net/blog/devblog-209/"
url: "https://veloren.net/blog/devblog-209/"
pubDate: "2023-04-24T00:00:00.000Z"
---

These weeks, durability and rtsim2 became part of the game.

\- Christof, TWiV Contributor

## Contributor Work

Thanks to last three weeks' contributors @aweinstock, @tony, @imbris, @UncomfySilence, @Christof, @hudson, @Sam, @floppy, @zesterer, @Isse, @taoist, @Corvella, @apricote, @ubruntu, @pegasus4903, @walpo, @amaiolamo, @tygyh, @xMAC94x.

These changes include inventory list mode, an underwater fall damage fix, dependency updates, sword tweaks, multiple models in one VOX file, loot scrolling fixes, equipment wear on death ("durability"), drawing optimizations, salamander animation, resource exhaustion and NPC professions and detailed behavior ("rtsim2"), dullahan attacks, many further NPC behavior fixes, shader fixes, riding fixes, "multi-loot", translation updates and more sounds.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1093617416623370270/Veloren_11_14_2022_5_36_40_PM.png)

Ongoing (unmerged) work is happening on adlets, combat balancing, Frost Gigas, accessibility, NPC behavior, sea chapel, economy, sit-enabled sprites, faster server startup, airship docks, charms, pyroscope, civilization simulation, and "zoomy worldgen".

Link to the weekly meeting minutes: [April 22nd](https://hackmd.io/@veloren/rJDqEFbQ3)

_Code reading for rtsim2_

## Many new animations by @floppy

Veloren seems to become a much scarier place if you watch these previews:

Dullahan animations

Cyclops animations

Adlet elder animations

Drum animations

Sea chapel animations

Your browser does not support the video tag.

_an inn_

## Airship furniture by @Isse

In [TWIV 206](https://veloren.net/devblog-206) you might have noticed an airship with a set of chairs on it. That's something I've been developing on and off the last couple of months. The goal is to be able to give more detail to airships and boats using sprites (which can be furniture, doors, ropes). This also makes voxygen handles voxel colliders a lot more like normal terrain, where you can interact with some blocks, other blocks give off particles or even sounds (sounds are yet to be implemented). 4 With this feature I've also implemented a way to mount a few sprites, like chairs or a helm which lets you control the vehicle. This makes riding an airship much more seamless as you don't have to worry about falling off.

Your browser does not support the video tag.

_airship equipment_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/1100205153669349426/snap2023-04-24-19-40-15.png)

_progress on the next release party map_

## Game Gallery

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1096170653230567575/screenshot_1680812093698.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1097616174575001733/screenshot_1681762387865.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1096170017155981362/screenshot_1681313275306.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1099854398949167144/screenshot_1682277038031.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1099853988146462730/screenshot_1682176124199.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1092509677314646086/screenshot_1680544986256.png)

_Getting ready for nightfall. See you next week!_
