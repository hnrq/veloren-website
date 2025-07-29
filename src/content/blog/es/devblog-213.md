---
title: "Two Weeks in Veloren 213"
guid: "https://veloren.net/blog/devblog-213/"
url: "https://veloren.net/blog/devblog-213/"
pubDate: "2023-07-03T00:00:00.000Z"
---

These weeks, we look closer at what happened around the code freeze period.

\- Christof, TWiV editor

## Contributor Work

Thanks to last two weeks' contributors @zesterer, @xMAC95x, @Pfau, @walpo, @Christof, @Isse, @floppy, @Sam, @bd, @aweinstock, @tygyh, @Fengo.

The merged work includes anti-cheat mechanisms (speed limits), a new login background, bloom and cinematic shaders, version bumps, translation updates, wasmer update and `cfg(wasm32)` removal, a plugin fix, wildlife spawn changes, durability changes, confirmation on one-way trades and item sorting by quantity.

Ongoing (unmerged) work is happening on loot changes, coastal town, wyverns, avoiding cave dungeon intersections, map exploration, TCP buffering, iron pan, consumable cost reduction, lantern adjustments, axe skill tree, spawn entities from debug UI, voxel model spawning (a fortress), removing the coin counter, NPC searching players, wind affecting gliders and dwarven quarry.

There was no weekly meeting in the past two weeks, but there was a release party.

## 0.15 Release

Of course, you have to watch the cool trailer for this week's release with matching music:

The release party recording is available at

During the party someone used a loophole in veloren's crafting mechanism to overload the server, a fix has been developed since then.

## Ongoing work

@Oguz did some [experiments](https://discord.com/channels/449602562165833758/450039871650660374/1122605278123274330) with shiny indices, but the end result wasn't considered good enough - until shiny gets proper [implementation](https://discord.com/channels/449602562165833758/1069340367855554690/1069411255200260106).

Your browser does not support the video tag.

@floppy worked on rtsim large bird behavior, here is a test spawn of 600 crows:

Also @flopp4y improved wyvern attacks

## Assorted impressions

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1120799637192843295/158.png)

_Frost Giga was here_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1124022226446987414/screenshot_1688057530630.png)

_Artistic view with nonoise and sobel shaders. See you then!_
