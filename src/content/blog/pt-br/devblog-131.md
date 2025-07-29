---
title: "This Week In Veloren 131"
guid: "https://veloren.net/blog/devblog-131/"
url: "https://veloren.net/blog/devblog-131/"
pubDate: "2021-08-02T00:00:00.000Z"
---

This week, we see some work on translation, as well as where towers are headed.

\- AngelOnFira, TWiV Editor

## Contributor Work

Thanks to this week's contributors, @KnightressPaladin, @Pfau, @xMAC94x, @zesterer, @tygyh, @imbris, @lboklin, @Capucho, @Snowram, @mohs8421, @juliancoffee, @XVar, @kilpkonn, @AngelOnFira, @aweinstock, @Fxsch, and @Fungoid!

@juliancoffee has been working on a PvP and PvE server switch. @Dr.Dystopia spent the week extracting methods across the codebase. @xMAC94x has been working on translation cleanups, with a unique translation scheme. These improvements have also increased the translation test times by 4x. Work was also done to get this information into Grafana, which can be seen below.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/872052036257087538/unknown.png)

You can check out this week's meeting minutes [here](https://hackmd.io/_fGyJ9atS_2tah3qtou1fw).

### @aweinstock

I've been working on towers (aboveground dungeons, intended to be populated with things like mages and golems and animated books).

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/767442908767977473/870823373742162021/screenshot_1627690860819.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/767442908767977473/870801441147740200/screenshot_1627685603417.png)

In the process, I found that site2 structure blitting accidentally had quadratic runtime complexity. Generation of each chunk was trying to iterate over each primitive in the structure, instead of only the intersection of those primitives with the chunk. This fix was merged ahead of the rest of towers, and makes dungeons load faster.

Videos showing the performance difference:

Your browser does not support the video tag.

Your browser does not support the video tag.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/872191456931086346/screenshot_1628016925271.png)

_Crossing the vast desert. See you next week!_
