---
title: "Three Weeks in Veloren 214"
guid: "https://veloren.net/blog/devblog-214/"
url: "https://veloren.net/blog/devblog-214/"
pubDate: "2023-07-26T00:00:00.000Z"
---

These weeks, we take a look at the many things going on at veloren development at the moment.

\- Christof, TWiV editor

Your browser does not support the video tag.

_A very visual reminder_

## Contributor Work

Thanks to last three weeks' contributors @xMAC94x, @RunRobDog, @Qsto, @sglorch, Jaroslav Lichtblau, @Pfau, @floppy, @imbris, @aweinstock, .

The merged work includes TCP receive buffer increase, spawn tab completion, loot changes, translation updates, dwarven quarry⛏️ (still inactive in game), coastal town, desert city fixes, CI optimization, shorter item count texts.

Ongoing (unmerged) work is happening on vampire castle, terracotta ruins, more loot cleanup, medicine, defensive stance, moving crabs, avoiding dungeon cave intersections, iron pan, axe, controllers, readme clean-up, balancing, wgpu 0.17, wyverns, mines, winit update, jungle ruin, chieftain mask, agent debug menu, marketplace.

Link to the developer meeting's [minutes](https://hackmd.io/@veloren/B1WzHud9h).

## Ongoing work

@crabman implemented adding discord links to the merge request in GitLab, so now we have bi-directional linking.

@Hannibal initiated a veloren roadmap, the current [draft version is available in GitLab](https://gitlab.com/veloren/book/-/blob/587f1a8653d51601ad74fa200298d8480f1d975e/src/players/roadmap.md).

@walpo set up web based [veloren translation in Codeberg Weblate](https://translate.codeberg.org/engage/veloren/), this is integrated with [our GitLab instance](https://gitlab.com/veloren/dev/veloren/-/tree/weblate-translation). [This document](https://docs.weblate.org/en/latest/user/translating.html) explains how to add translations.

@Floppy, @Gemu, and @Hannibal have been working on creating small sites that would serve as a replacement to the 'spot' system. The goal is to have a variation of points of interest, smaller than dungeons, that will populate the wilderness of the world. Some of the planned ideas include moving the spots to site2, having more outposts, ruins, abandoned buildings, etc. To start off, we have been working on jungle ruins and temperate ruins, using handmade assets in site2.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/1134937730799915068/image_1.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/1134937731202551930/image_2.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/1134937731638775911/Screenshot_from_2023-07-14_10-50-02.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/1134937732091744376/Screenshot_from_2023-07-14_10-39-51.png)

@Gemu, @Qsto and @Uncomfy are working on resource scarcity and more horizontal ways of obtaining them. They are cleaning the dungeons chests and moving woods to other droppers. They plan to decrease the occurrence of natural world materials in dungeons and incentivize foraging and wandering over the world to gather them.

Prototype implementation of portals in dungeons by @crabman (teleportation is unlikely to be added to the main game):

Your browser does not support the video tag.

@floppy and @Zion have been working on getting wyvern attack AI ready to match this fearful opponent.

More food types with more diverse effects by @Borbop.

Your browser does not support the video tag.

## Another Frost Giga sighting

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/1133489307894698104/image.png)

_Frost Giga was here_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/1133843702482223165/Screenshot_from_2023-07-26_21-27-13.png)

_Concert with a colorful light show. See you next time!_
