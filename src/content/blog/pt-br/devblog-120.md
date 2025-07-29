---
title: "This Week In Veloren 120"
guid: "https://veloren.net/blog/devblog-120/"
url: "https://veloren.net/blog/devblog-120/"
pubDate: "2021-05-17T00:00:00.000Z"
---

This week, we have some nice visuals to check out. We also see some updates to the minimap.

\- AngelOnFira, TWiV Editor

## Contributor Work

Thanks to this week's contributors, @Snowram, @James, @xMAC94x, @nwildner, @Sharp, @Slipped, @juliancoffee, @Same, @holychowders, @Pfau, @hqurve, and @imbris!

You can see this week's meeting notes [here](https://hackmd.io/8dw3TxavS-2RxTO3T3Qa3g).

Your browser does not support the video tag.

_Out of the house and through the valley, by u/Russhang_

@Yusdacra packaged Airshipper for NixOS and implemented NixOS-specific executable patching, so now it can be used on NixOS without Flatpak. Currently, these changes are on the staging branch of Airshipper repository.

@R.A.B added a chat tab system. It allows players to select filters for different tabs of the chat. @holychowders got NPCs to hear and respond to sounds.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/843176472911151134/unknown.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/843176815874408448/unknown.png)

### Minimap by @aweinstock

This week, I added a minimap mode where voxel terrain data is visible on the minimap. For each loaded chunk with some radius of the player, it builds a map of what's visible looking downwards from each z-level. It uses the maps to efficiently build a composite image of the currently loaded chunks from the ceiling above the player, in a manner that works nicely with dungeons, caves, and houses.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/767442908767977473/842561508562829322/screenshot_1620952676084.png)

I also fixed the mind flayer AI so it can summon minions at HP thresholds again, and added a purple fireball attack that it uses when the player is out of range.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/767442908767977473/843599106416705576/screenshot_1621198801176.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/843516373106688000/screenshot_1621157404939.png)

_Blossoming trees. See you next week!_
