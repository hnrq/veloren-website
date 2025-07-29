---
title: "This Week In Veloren 113"
guid: "https://veloren.net/blog/devblog-113/"
url: "https://veloren.net/blog/devblog-113/"
pubDate: "2021-03-29T00:00:00.000Z"
---

This week, we have lots of work being done on optimization fronts, as well as world improvements. We hear from several developers about what they've been working on this week.

\- AngelOnFira, TWiV Editor

## Contributor Work

Thanks to this week's contributors, @Snowram, @Sam, @zesterer, @xMAC94x, @Capucho, @imbris, @Treeco, @XVar, @Sharp, @aweinstock, @SWilliamsGames, @Christof, @Pfau, @Slipped, @Desttinghim, @aljazerzen, @yusdacra, @Quibble, @Synis, @steanne, and @heydabop!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/824340312805605376/Bildschirmfoto_von_2021-03-24_18-53-27.png)

This week, @Sam got the Mind flayer merged. @Songtronix was working on some bot upgrades. @YuriMomo has been keeping up with testing new features. @zesterer overhauled clouds to make them faster and prettier. @Treeco added a command to teleport to sites by name, and a server setting to specify the player spawn site. @Treeco also generated a new default map, and another larger one for the server to switch to. @XVar completed the switch from Diesel to Rusqlite, which should make working with the database code simpler as well as provide full SQL trace logging.

@Desttinghim added commands to define build areas. This allows admins to set up specific areas where building can be done. Individual players can be given permission to build in these.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/824640058145243176/screenshot_1616679562802.png)

### Mind flayer by @Sam

The Mind flayer has 4 new abilities. It can attack you with cursed flames, which not only burn you, but also drain away your max health. It can create a necrotic vortex to drain the life from surrounding creatures and replenish its own. It can step through dimensions, to instantly teleport to you across short distances. And it can summon husks of previous victims it has devoured to fight for it.

### Terrain messages by @xMAC94x

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/825845678647410758/unknown.png)

Terrain messages are now handled in multiple threads. You can see a visual improvement from the left side to the right. Especially on HIGH load, such as release parties, this helps us stay stable. It also increases our Multi-core usage from 69% to 71%, therefore increasing the efficiency of high CPU core servers that we provision for large events.

### Various goodies by @aweinstock

- I fixed a server-side `.expect` failure on entity/UID lookups when a player disconnected during a trade.
- I added coin-denominated prices to the item tooltips during a trade.
- A few price-related fixes:
  - Glowing Remains were previously `Ingredients` instead of `Armor`, resulting in it being 15x cheaper than the finished Mind flayer Spell bag.
  - Diamonds (and gems in general) were too cheap because the weights of the loot tables containing them didn't match rates at which the loot tables would be rolled in-game.
- I added some steeper spiral stairs to dungeons, with a hole in the center that can be glided down.
- Airships/birds now cast multiple rays below/in front of them, so it's more likely that they'll detect trees/cliffs and rise in time not to get stuck.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/827360681438609468/Joe_screenshot_1617234898596.jpg)

_Wating for the ride to the next village. See you next week!_
