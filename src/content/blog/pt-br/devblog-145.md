---
title: "This Week In Veloren 145"
guid: "https://veloren.net/blog/devblog-145/"
url: "https://veloren.net/blog/devblog-145/"
pubDate: "2021-11-08T00:00:00.000Z"
---

This week, we hear about some changes to the textures of dropped items. We also see into how some concept art for larger cities in Veloren is being created.

\- AngelOnFira, TWiV Editor

## Contributor Work

Thanks to this week's contributors, @zesterer, @Demonic, @Sam, @UncomfySilence, @jon18, and @XVar!

### New textures of item drops by @Socksonme

I've recently touched up some of the textures for item drops. Instead of having the default be `BeastMeat`, which isn't really that general, it's now `Pouch`. I've also changed `BipedLarge` to use `Pouch`, much like how `BipedSmall` does, and `Object` (for example, the turrets in tier 6 dungeons) now drops `Chest` instead of `BeastMeat`. We'd eventually want to change how the item drop textures are chosen, but as of now, they are based on the `Body` type of the entity, rather than the actual items themselves.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/907572252290187285/BeastMeat.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/907572405164199987/pouch.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/907572662996455424/chest.png)

### City concepts by @Hannibal

> Editor's note; for clarity, this section is done entirely in MagicaVoxel, and doesn't represent changes to the proc gen of current villages.

I am currently developing the concept art architecture of different biomes and races for future villages, cities, and towns. I do mockups on MagicaVoxel to show how potential biome sites could look. So far I have done one variant of desert biome rework and I am planning for the next few months to design the architecture of:

- Humans in plains
- Elves
- Danari
- Orcs

This should take me quite some time but will be a massive advancement in terms of concept art for how Veloren architecture could look.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/909124819633700874/screenshot_1633657158130.png)

_Model imported into Veloren_

The desert city mockup I made was imported on a Veloren test server in October to see how it would look and to see if the scale was right and it helped me see what could be improved in terms of design and layering. The biggest changes in the next mockups will include:

- More variants of houses and assets in general
- More structures and pathed areas
- Better polishing of the smaller assets

Of course, we are a long way from having actual cities in the game but I do think it's important to start designing concepts now so we know what to aim for in the long term. A small teaser of the Human Plain Architecture:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/909125317396955187/Screen_Shot_2021-11-13_at_11.58.32_AM.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/909126358809083955/Screen_Shot_2021-11-13_at_12.02.42_PM.png)
