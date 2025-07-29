---
title: "These Weeks in Veloren 240"
guid: "https://veloren.net/blog/devblog-240/"
url: "https://veloren.net/blog/devblog-240/"
pubDate: "2024-10-15T00:00:00.000Z"
---

This month has been very active with many contributions from many contributors! The blog post is being published a bit delayed but hopefully you still enjoy reading the recap :)

\- Crab, another TWiV editor

## Contributor Work

Thanks to everyone who contributed this month: @uniior, @isse, @skygrango, @Gemu, @Supa, @isse, @fnetX, @floppy, @horblegorble, @Papinha, @imbris, @xMAC, @crab, @do-no-van, @Christof and @Thibagon !

Thanks to all translators who contributed on weblate this month: @fnetX, @Janez, @polauf, @bov, @Jungso, @nokoe, @metamuffin, @CodeVlogs, @Enlive, @coffee-compiler, @2b33rs, @Zughy, @kanym, @evgenkot, @lucius_pilgrim, @Paw, @guillermytho, @Positron832, @Sinari and @Akumo33.

### Merged work

#### Vampire Castles, by @floppy

A new vampire-themed T4 dungeon, the worldgen is impressive as always :D

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/vampire_castle_1.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/vampire_castle_2.webp)

GitLab: [!4473](https://gitlab.com/veloren/veloren/-/merge_requests/4473)

#### Transform on death effect, by @crab

NPCs can now be configured to transform into another entity on death, the vampire castle boss and fake terracotta cursekeepers are already making use of this for multi-stage bosses!

GitLab: [!4581](https://gitlab.com/veloren/veloren/-/merge_requests/4581)

#### LoD object rotations, by @isse

Originally intended to be used for procedural glider course LoD models, this allows rotating LoD models in steps of 90 degrees. Currently only trees are randomly rotated, but we also want to make other plot LoD models rotate correctly in future, such as the Haniwa dungeon wich is one of the most notable ones.

GitLab: [!4589](https://gitlab.com/veloren/veloren/-/merge_requests/4589)

#### Jet engine model, by @horblegorble

The _Vroom_ admin glider added by @juliancoffee finally has it's own model now!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/vroom_glider.webp)

GitLab: [!4452](https://gitlab.com/veloren/veloren/-/merge_requests/4452)

#### `/spot` command, by @isse

Another command making testing changes easier 🎉. It works similar to the `/site` command, but as spots are not named this command takes a spot kind instead and teleports you to the nearest one.

GitLab: [!4597](https://gitlab.com/veloren/veloren/-/merge_requests/4597)

#### Hardcore characters, by @do-no-van

Think veloren is too easy and want something more challenging? This is for you! Players can now choose to make new characters hardcore, dying now means loosing your character.

GitLab: [!4571](https://gitlab.com/veloren/veloren/-/merge_requests/4571)

#### Kora instrument, by @floppy and @Supa

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/kora.png)

_Model of the new Kora instrument_

GitLab: [!4585](https://gitlab.com/veloren/veloren/-/merge_requests/4585)

#### `/kit recipes` command, by @uniior

This command mostly helps with testing, but if you're playing on singleplayer and aren't satisfied with the recipe system you can use it there too. Other ways of obtaining recipes that don't require grinding dungeons are also being discussed :)

GitLab: [!4598](https://gitlab.com/veloren/veloren/-/merge_requests/4598)

#### Karkatha, by @floppy and @Gemu

The Sahagin dungeon got a new boss, Karkatha 🦀. Tidal Warrior was moved one floor below and is now a miniboss with a reworked skill set.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/karkatha.webp)

_Karkatha waiting for its prey in the sahagin dungeon boss room_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/karkatha_summon.webp)

_Karkatha's summons, Soldier crabs_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/tidal_warrior.webp)

_Tidal Warrior got downgraded to a miniboss :/_

GitLab: [!4590](https://gitlab.com/veloren/veloren/-/merge_requests/4590)

#### Player counts in Airshipper, by @crab

As announced in [an earlier blog posts](/blog/query-serverbrowser-announce/), Airshipper has now released player counts in the server browser! This should make it easier to find a server geographically near you with active players.

There's still a handful of server which haven't activated the new query system on their servers yet, if you're a server owner on the server browser list reading this, please check out the blog linked above.

GitLab: [airshipper!160](https://gitlab.com/veloren/airshipper/-/merge_requests/160)

#### Overriding game assets from Airshipper, by @juliancoffee

I've added a special field in Airshipper settings that allows you to set VELOREN_ASSETS_OVERRIDE ([https://book.veloren.net/players/env-vars.html#veloren_assets_override](https://book.veloren.net/players/env-vars.html#veloren_assets_override)) to make it more visible and hence useful to more people.

Additionally, you can now click on a little book icon near this text and environment variables field to go to the link I put above.

GitLab: [airshipper!162](https://gitlab.com/veloren/airshipper/-/merge_requests/162)

#### Beam collisions, by @Papinha

A neat trick to make it appear as if particles collide with terrain, only enabled for beam particles for now due to the cost of having to do one raycast per-particle.

Your browser does not support the video tag.

GitLab: [!4562](https://gitlab.com/veloren/veloren/-/merge_requests/4562)

#### Entity balance, by @necti

Improved the balance of most dungeon entities, as well as sword, axe and hammer abilities.

Welcome @necti as our new Balance Lead 🎉

GitLab: [!4586](https://gitlab.com/veloren/veloren/-/merge_requests/4586)

#### Golemite armor set and loot table balancing, by @necti

A new armor set was added, crafted with items dropped from Terracotta and Haniwa enemies. Loot tables were also rebalanced to no longer allow easily skipping progression.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/golemite.webp)

_The new golemite armor set, shown with the weapon of a terracotta enemy_

GitLab: [!4600](https://gitlab.com/veloren/veloren/-/merge_requests/4600)

#### NPCs in plugins, by @Christof

Another great addition from @Christof to make plugins more useful! Entities, their models and animations can now be defined in plugins. Here's an example plugin making use of this: [plugin/examples/anim](https://gitlab.com/veloren/veloren/-/tree/13074f6e12fafec523fbd9ddc443b82736f3578c/plugin/examples/anim).

GitLab: [!4351](https://gitlab.com/veloren/veloren/-/merge_requests/4351)

#### Require multiple hits to mine gems and ores, by @crab

This was already announced a while ago, and has finally been merged. Thanks a ton to @Gemu and @Supa for the models, and to @floppy for creating the new pickaxe SFX!

Every ore/gem now has a specific number of hits it can take before breaking, every one or two hits (depending on the quality of the ore) the sprite will go into a next 'stage', changing the model and having a chance to drop an extra item (increased by the corresponding mining skill).

Your browser does not support the video tag.

GitLab: [!4266](https://gitlab.com/veloren/veloren/-/merge_requests/4266)

---

More changes:

- Adding missing changelog entries, by @horblegorble
- Cheesing fixes for the Vampire castle, by @floppy [!4588](https://gitlab.com/veloren/veloren/-/merge_requests/4588)
- Dependency upgrades, by @xMAC [!4580](https://gitlab.com/veloren/veloren/-/merge_requests/4580) + [!4582](https://gitlab.com/veloren/veloren/-/merge_requests/4582)
- Taiwanese translation work, by @skygrango [!4592](https://gitlab.com/veloren/veloren/-/merge_requests/4592)
- Fixing errors in translation files, by @Thibagon and @fnetX [!4528](https://gitlab.com/veloren/veloren/-/merge_requests/4528) + [!4576](https://gitlab.com/veloren/veloren/-/merge_requests/4576)
- Fixing server crashes caused by the `/buff` command, by @crab [!4594](https://gitlab.com/veloren/veloren/-/merge_requests/4594)
- Updating tracy-client to the latest version, by @imbris [!4578](https://gitlab.com/veloren/veloren/-/merge_requests/4578)
- Fixing how buff strength is displayed, by @horblegorble [!4574](https://gitlab.com/veloren/veloren/-/merge_requests/4574)
- Updating the contribution guidelines, by @isse [!4529](https://gitlab.com/veloren/veloren/-/merge_requests/4529)
- Improvements to the sprite manifest, by @imbris [!4577](https://gitlab.com/veloren/veloren/-/merge_requests/4577)
- WGPU fixes and re-enabling shaderc optimizations, by @imbris [!4579](https://gitlab.com/veloren/veloren/-/merge_requests/4579)  
  Fixes an issue on some windows systems with AMD graphics using the Vulkan backend, if this caused any regressions please open an issue on [GitLab](https://gitlab.com/veloren/veloren/-/issues/new) or report it in the discord.

### Ongoing unmerged work:

The myrmidon dungeon is getting a rework:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/myrmidon_rework_1.webp)

_Reworked myrmidon dungeon, by @floppy_

@juliancoffee is working on adding `LootSpec` to `SpriteCfg`. This will allow specifying separate loot tables for the same sprite kind in worldgen, making it easier to handle keys or other special drops in dungeons without creating more sprites [!4354](https://gitlab.com/veloren/veloren/-/merge_requests/4354)

@do-no-van is reworking throwables, they can now be equipped and used like other weapons! [!4593](https://gitlab.com/veloren/veloren/-/merge_requests/4593)

Your browser does not support the video tag.

@Hromina is working on adding @Green12's snow sprites into the game

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/snowsprites.webp)

## Screenshots

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/cinema.webp)

_Gliding at the release party map. Speaking of, when release party?_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/gradientsobel.webp)

_Someone's having fun playing around with experimental shaders!_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/large_arrows.webp)

_An animation bug creating very large floating arrows_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/nice_bridge.webp)

_A very nice bridge found by @isse_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/messy_bridges.webp)

_The architects clearly weren't very experienced when they built these..._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/screenshot_1727095943937.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/Screenshot_From_2024-10-10_17-49-04.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/screenshot_1727380510816.webp)

_Bloodmoon bat in the Vampire castle, the form of the first boss stage_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/Screenshot_from_2024-10-02_09-11-35.webp)

_Jamming at the central town_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/240/screenshots/stage.webp)

_The stage is back, see you in the next one!_
