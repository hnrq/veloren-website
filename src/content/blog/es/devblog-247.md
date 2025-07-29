---
title: "These weeks in Veloren 247"
guid: "https://veloren.net/blog/devblog-247/"
url: "https://veloren.net/blog/devblog-247/"
pubDate: "2025-05-02T00:00:00.000Z"
---

You may experience some slight turbulence as a volley of new throwables, tunes, and banter fill the air. Here we go!

\- horblegorble, TWiV Contributor

## Announcement

Whether you're a casual snapper or full-on shutterbug, we want you to take a shot at this photo contest being organised by @walpo:

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/veloren_old-gitlab-banner.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/veloren_old-gitlab-banner.webp)

Veloren of yore

_We are looking for a new cover image for the [README file](https://gitlab.com/veloren/veloren) of Veloren._

_If you think you have a cool picture to share with the community, feel free to post it in the [Discord](https://discord.com/channels/449602562165833758/1366507117892341780) or [Zulip](https://veloren.zulipchat.com/#narrow/channel/482720-General/topic/README.20Image.20Submissions) submission threads!_

_Rules:_

1.  _Submissions are open from now until Thursday, June 12 at 21:00 UTC (about 1 month and a half). Any content submitted later will not be included._
2.  _You are free to use our [current (textual) Veloren logo](https://gitlab.com/veloren/site/-/blob/ce41729da6294c1fab7f49c1864abc43861b7720/static/logo.png) on your submitted images, but it is not mandatory._
3.  _Your submitted images must have a minimum height of 600 pixels and have a 16:9 aspect ratio._
4.  _Each participant can submit up to three images. If a participant has submitted more than three images by the time the submission window is closed, we will ask them privately which images to include in the voting phase. If the participant does not reply in a timely manner, we reserve the right to choose the three most recent images by default._
5.  _After the time window for submissions is closed, we will decide on a voting system for our community to pick their favorite. Emoji reactions on Discord do not count towards the vote._
6.  _You must be the copyright owner of the submitted image. This implies you cannot use generative artificial intelligence (GenAI) to create part or the whole image (currently, a legal grey area)._
7.  _You agree to share your submissions under an open licence. For example, some licences in the [Creative Commons suite](https://creativecommons.org/share-your-work/cclicenses/)._
8.  _If your image wins the contest, our team will contact you to discuss what licence you want to share your work with and how to handle attribution._

## Contributor work

Thanks to everyone who contributed to veloren these last weeks: @do-no-van, @Supa, @Gemu, @floppy, @Joe_Cool, @Crabo, @isse, @juliancoffee, @Synis, @srpapinha, @zesterer, @souffle, @unii, @imbris, @Tarhun, @UncomfySilence, @Nikophos, and @violetwillow.

Thanks to the weblate translators who contributed these last weeks:

Language

Translators

Czech

Janez

English

Janez | EatherBone | ministergoose

French

Limina | sandraev

German

coffee-compiler | CodeVlogs | Benny | Virtex | fnetX

Polish

K0RR

Russian

EatherBone | aleeo | lucius_pilgrim

Swedish

IsseW

Ukrainian

ministergoose

### Merged work

#### Sparkling action at a distance

Unable to wait for the bow rework, @do-no-van took projectiles into their own hands with a hefty refactoring. Best have your eye protection ready as sparks fly across town.

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _All kinds of light shows. Music by @Crow_

And hope that nothing ominous has been waiting for _"the day that dummies fly"_.

GitLab: [!4593](https://gitlab.com/veloren/veloren/-/merge_requests/4593)

#### Oud and a lute

What started out as a remodelled [Lute](https://wiki.veloren.net/wiki/Lute) in @Joe_Cool's first foray with MagicaVoxel, became a catalyst for the arrival of the new [Oud](https://wiki.veloren.net/wiki/Oud) instrument. @Supa was the supervising chemist for this reaction, mixing together voxels from @Gemu and audio from @floppy. You can hit up the crafting bench to enjoy the silver linings in these new notes.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-20_horblegorble_oud-and-lute.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-20_horblegorble_oud-and-lute.webp)

_The newcomer (left) and their restyled cousin (right)_

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _New strings attached_

With his lab coat still on, @Supa continued with some instrumental tinkering:

- _The icy talharpa instrument now faces the correct way in the inventory_
- _Sprite image sizes for instruments are changed to be consistent with each other_
- _Small recipe tweaks for banjo and kora_

GitLab: [!4778](https://gitlab.com/veloren/veloren/-/merge_requests/4778)

#### Friend or foe

Whether you're looking to pick a fight, or keep the peace, @Crabo's changes to the player list take the guesswork out of battlemode negotiations and moderator status. Sword icons were supplied by a secretive arms dealer that looked an awful lot like @Supa.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-28_horblegorble_crabo-social-menu.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-28_horblegorble_crabo-social-menu.webp)

_Your duelling career is but a click away_

GitLab: [!4790](https://gitlab.com/veloren/veloren/-/merge_requests/4790)

#### Mise en place

With the prep-work done on tile-able sprites, @isse got to cooking up a system for piecing together furniture mosaics:

_The way we place composable sprites in [`site2`](https://docs.veloren.net/veloren_world/site2/index.html) is an extension trait for [`Painter`](https://docs.veloren.net/veloren_world/site2/struct.Painter.html), which is what we use to define how blocks are placed for `site2`, and as sprites are blocks it includes those._

\_

On this I have created both helper methods for placing generic tiled sprites and functions that directly refer to some configuration of sprites creating a bigger thing, like a bed.

There are different kinds of generic helper methods. Right now I have a one dimensional and a two dimensional. The 1D one, which is called [`tileable1`](https://docs.veloren.net/veloren_world/site2/util/sprites/trait.PainterSpriteExt.html#tymethod.tileable1) takes a side sprite and a middle sprite, it also takes parameters for position, facing direction, and width. This assumes that the sprite with the maximum position has to be mirrored.

\_

_Some ASCII+ to demonstrate this:_

    width: 4 blocks    < □ □ >    center sprite: □
           2 blocks      < >      side sprite: <
                                    mirrored: >

_The 2D one is called [`tileable2`](https://docs.veloren.net/veloren_world/site2/util/sprites/trait.PainterSpriteExt.html#tymethod.tileable2). This needed a bit more arguments so it takes a struct [`Tileable2`](https://docs.veloren.net/veloren_world/site2/util/sprites/struct.Tileable2.html) to define it. Which stores a rectangle and an altitude to define position. A center sprite, side sprite and a corner sprite. Both the side and corner sprites can vary by which side/corner they're placed on. It also has it's own direction to rotate the whole construct. For a table where all corners and sides are the same this looks like:_

    +y                   size: 5x3 blocks (x by y)
     ⭡                   center sprite: □
     ╵  ┌ ∧ ∧ ┐          side sprite: <
     ╵  < □ □ >            rotated/mirrored: >  ∧  ∨
     ╵  └ ∨ ∨ ┘          corner sprite: └
     └ ─ ─ ─ ─ ─ ⭢ +x      rotated/mirrored: ┘  ┌  ┐

_For a bed it looks like:_

    +y                 size: 3x2 blocks (x by y)
     ⭡                 side sprite: ∧ | ∨
     ╵  ╔ ∧ ┐          (-x) corner sprite: ╚ | ╔
     ╵  ╚ ∨ ┘          (+x) corner sprite: ┘ | ┐
     └ ─ ─ ─ ⭢ +x

_Because there are different corner sprites used for the diagonals that face `-x` and `+x`._

_There are also helper methods like [`chairs_around`](https://docs.veloren.net/veloren_world/site2/struct.Painter.html#method.chairs_around) which places sprites around a specific bounds. And specific ones for sprites that don't fit any generic pattern we have, for example `lanternpost_wood`. When there are more sprites that need that specific pattern more generic methods will be created._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-22_horblegorble_tiled-tileables.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-22_horblegorble_tiled-tileables.webp)

A tiling of tile-ables

GitLab: [!4799](https://gitlab.com/veloren/veloren/-/merge_requests/4799)

#### Turn down the heat

@juliancoffee understands that, like a good vegemite sandwich, you only want a bit of spread. So now when you're campfire moshing with mates, the chance of lighting each other up scales with time and buff strength of the source. And when the heat does catch on, it'll only be the world to blame. A relief to town guards that've been busy dousing feuds between hot-headed neighbours.

Your browser does not support the video tag. Your browser does not support the video tag.

_Their new release is a real slow burner_

GitLab: [!4832](https://gitlab.com/veloren/veloren/-/merge_requests/4832)

#### More vertical progression

No, not that kind. The other one. Yeah, climbing.

Anyway, @Synis has heard the feedback on their recent changes, and put together the next shift-to-release-candidate version. This lets you overcome fear to drop straight out of climbing, and also features the return of uphill bounding. Other changes include a persistence of wielding state, as well as fixes to energy cost calculations and infinite wall jumping.

Your browser does not support the video tag. Your browser does not support the video tag.

_Sliding down and scooting up_

GitLab: [!4811](https://gitlab.com/veloren/veloren/-/merge_requests/4811)

#### War of the names

And on the seventh day, the user made a typo in naming their new world. Luckily, @juliancoffee let them rewrite history:

_You can now change the world_ 🏔️ _name even after it is generated_ ✍️

Your browser does not support the video tag. Your browser does not support the video tag.

Somebody once told me

GitLab: [!4830](https://gitlab.com/veloren/veloren/-/merge_requests/4830)

#### Worldly estimates

Watching water boil, grass grow, paint dry, or waiting for the next tick in the erosion process for a new world. These are universal expressions for wearing down the soul. But there is now relief for the latter, with updates from @isse to put your mind at ease:

_Added some additional info when generating worlds, it now shows more fine grained progress and a time estimate for how long erosion will take_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-26_isse_worldly-estimates.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-26_isse_worldly-estimates.webp)

Might be able to sync up with a New Year's countdown

GitLab: [!4834](https://gitlab.com/veloren/veloren/-/merge_requests/4834)

#### Jungle jumble

@juliancoffee went around the colour wheel to spin up a remix of our tropical ambience:

_Jungles look a bit more like jungles now. I in collaboration with @Gemu changed their colour scheme to make their bark darker and more recognisable._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-21_horblegorble_jungle-jumble.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-21_horblegorble_jungle-jumble.webp)

Rainforest Red -> Botanical Brown

GitLab: [!4831](https://gitlab.com/veloren/veloren/-/merge_requests/4831)

#### All spin and no swing make Jack a dizzy boy

After some coaching sessions with @srpapinha, your not-so-friendly dance partners have learned to get some step in their rhythm. A broad set of melee orientation modifiers have retired their aim-botting 'robot' routines.

Your browser does not support the video tag. Your browser does not support the video tag.

🌪️ 🤢 _Round and round we go_

GitLab: [!4803](https://gitlab.com/veloren/veloren/-/merge_requests/4803)

#### Same sprite, different loot

No doubt we've all heard the expression _"You shouldn't judge a sprite by its voxels."_ It's a sound bit of wisdom that @juliancoffee has put it into practice for wordgen:

_Ok, it finally happened. We merged an MR that allows you to override the default loot for sprites when you place them._

_Currently, the way containers/pickables work is via `SpriteKind::default_loot_spec()` method (previously known as `SpriteKind::collectible_id`), which is a big list of sprites and their corresponding loot tables. That's fine and even desirable for 70% of sprites. When you pick up an Apple, you don't want anything else. And chests in boss rooms in our new breathtaking dungeons greatly benefit from stylistic conformance with the environment._

_But we have a lot of generic containers like crates and barrels in towns and caves and, most importantly, spots, which inevitably forced to have the same boring loot tables. Well, not anymore! Look at the spot config for the Saurok altar:_

    #![enable(implicit_some)]
    #![enable(unwrap_newtypes)]
    [
        (
            specifier: "world.structure.spots.saurok-altar",
            center: (10, 13, 3),
            custom_indices: {
    +            11: SpriteWithCfg(DungeonChest0, (
    +                loot_table: "common.loot_tables.spot.saurok_altar",
    +            )),
                105: Filled(GlowingRock, (r: 161, g: 255, b: 133)),
                113: Filled(GlowingRock, (r: 139, g: 245, b: 104)),
            },
        ),
    ]

_This line allows us to override the default chest with `DungeonChest0` and its own loot table! For those who are new to the spot system, spots are usually small pre-made models that have specific blocks which we re-interpret using custom indices from MagicaVoxel palette. 0-16 are pre-defined, and 11 stands for the default chest, but you can override those._

_And you can do that in virtually every situation if you can place a sprite along with `SpriteConfig`, which includes caves, towns, procedurally generated spots, dungeons, et cetera._

_At the moment, the MR only enables such functionality and we need balance people and testers to make the world truly alive using this system_ 🙂

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-22_horblegorble_sites-to-visit.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-22_horblegorble_sites-to-visit.webp)

Ground zero, one, and two for the new loot setup

GitLab: [!4354](https://gitlab.com/veloren/veloren/-/merge_requests/4354)

#### Mark my words

They say locals always know the best place in town, but they've been tight-lipped on sharing tips. @zesterer has loosened their tongues enough to at least point out the local landmarks. If we keep playing our cards right, they may yet tell us where to get the best sunflower ice tea.

Your browser does not support the video tag. Your browser does not support the video tag.

_Can't always navigate the skyline at ground level_

GitLab: [!4750](https://gitlab.com/veloren/veloren/-/merge_requests/4750)

#### Busy with battles and barter

Rather than see everything in life through a trading window, @souffle has given merchants some clarity in expressing their preoccupations.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-24_horblegorble_live-to-trade-another-day.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-04-24_horblegorble_live-to-trade-another-day.webp)

_Trading hits vs trading bits_

GitLab: [!4814](https://gitlab.com/veloren/veloren/-/merge_requests/4814)

#### You know a good spot?

What do cleaning products and Veloren have in common?

Spot testing is good practice. And even easier now with some polish from @juliancoffee:

_Oh, and I also extended `/spot` command to work with all spots (these mini-sites, like gnarling totem). `/spot` command was originally created by @isse , but worked only for spots defined in `.ron` files. Most older spots aren't defined in `.ron` files, so we needed to fix it. Bonus point: now it teleports you 100 blocks above the spot, so get your glider ready and fly!_

Your browser does not support the video tag. Your browser does not support the video tag.

Just dropping by

GitLab: [!4836](https://gitlab.com/veloren/veloren/-/merge_requests/4836) + [!4839](https://gitlab.com/veloren/veloren/-/merge_requests/4839)

#### Big cow evicts old milk

Cheese merchants have been setting up shop in Minotaur's colosseum, and that bull is no fan of dairy degenerates. But he felt trapped in the ring as a mere franchise manager, having butted heads with Myrmopolis™ management before. This behooved the great Minotaur to enlist the representation of @unii, who was well received by corporate. @floppy was dispatched to patch things up, with their testing sidekick @Supa helping to iron out some of the repositioning kinks.

Your browser does not support the video tag. Your browser does not support the video tag.

_Cheese on a platter, not by the player_

GitLab: [!4783](https://gitlab.com/veloren/veloren/-/merge_requests/4783)

#### Throwing their weight around

From bovine negotiations to safety inspections, @unii swapped hats to remind us of the gravitational hazards involved in setting entity mass:

_I've reduced the mass of Frost Gigas's summons (Boreal Warriors), so that they're less vulnerable to collision/fall damage as a result. This mostly impacts the encounters where elevation differences come into play._

Your browser does not support the video tag. Your browser does not support the video tag.

Gonna need a lot more snow to break that fall

GitLab: [!4827](https://gitlab.com/veloren/veloren/-/merge_requests/4827)

#### More changes:

- addressed a TODO fix in hostile npc feeling speech - @souffle - [!4813](https://gitlab.com/veloren/veloren/-/merge_requests/4813)
- damage tweaks to left mouse attacks for sword and axe - @unii - [!4806](https://gitlab.com/veloren/veloren/-/merge_requests/4806)
- buff icons for skills swapped to the respective skill where possible - @Supa - [!4821](https://gitlab.com/veloren/veloren/-/merge_requests/4821)
- window size saving logic was moved - @imbris - [!4819](https://gitlab.com/veloren/veloren/-/merge_requests/4819)
- window saving was disabled if it is zero size in any direction - @isse - [!4825](https://gitlab.com/veloren/veloren/-/merge_requests/4825)
- added detection for stuck airships along with remedial actions - @Tarhun - [!4822](https://gitlab.com/veloren/veloren/-/merge_requests/4822)
- removed old mining tool check for directly lootable sprites - @juliancoffee - [!4837](https://gitlab.com/veloren/veloren/-/merge_requests/4837)
- switched to fluent upstream - @juliancoffee - [!4840](https://gitlab.com/veloren/veloren/-/merge_requests/4840)
- 'PlotKindMeta' used instead of just 'PotKind' for npc directions - @isse - [!4848](https://gitlab.com/veloren/veloren/-/merge_requests/4848)
- small fixes, definitely nothing serious - @isse - [!4828](https://gitlab.com/veloren/veloren/-/merge_requests/4828)

### Ongoing unmerged work

#### This Gigas on fire

Now might be the time to refamiliarise yourself with local wildfire response plans. What was dismissed as a drifting haze has become distant but visible flames. The molten menace is preparing to erupt.

Let's take a look through the [geological record](https://discord.com/channels/449602562165833758/1304024660458864640) to see where it all began.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2024-11-18_Gemu_attack-sketches.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2024-11-18_Gemu_attack-sketches.webp)

_Plans of attack — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2024-11-18_Gemu_flame-sketches.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2024-11-18_Gemu_flame-sketches.webp)

_This is no spectator sport — by @Gemu_

Your browser does not support the video tag. Your browser does not support the video tag.

_Roleplaying as a very hot potato — by @do-no-van_

Your browser does not support the video tag. Your browser does not support the video tag.

_♪ I fell into a burning ring of fire ♪ — by @do-no-van_

{{ imgzoom(width=718, height=689, caption="Assembling the ashen arsenal — by @Gemu", src="https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2024-12-02\_Gemu\_ashen-warrior.webp", ) }}

Your browser does not support the video tag. Your browser does not support the video tag.

_Today's forecast: rolling heatwaves — by @do-no-van_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-17_Necti_fire-gigas-thumbnail.webp)](https://www.youtube.com/live/eYpYRarukDE)

_The streaming hot playtest debut — by @Necti_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-17_And_i_fire-gigas-craters.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-17_And_i_fire-gigas-craters.webp)

_Fiery fallout — by @And_i_

GitLab: [!4638](https://gitlab.com/veloren/veloren/-/merge_requests/4638)

#### Throw ALL the things!

Ballistic bottles and flying flasks were on the radar of @UncomfySilence's [prototyping efforts](https://gitlab.com/veloren/veloren/-/merge_requests/4846) to extend the range of the throwables refactor. But why stop at potions? These hands were made for hurling, so let's get things airborne!

Alas, the existing controls and item definitions aren't quite as dextrous for the task at hand. So [conversation](https://discord.com/channels/449602562165833758/1355470600843296860) turned to juggling the dynamics at play: equipping, throwing, consuming, and whacking. From hotbar slots and special inventories, to utility belts and radial menus; there were a lot of ideas in flight. Eventually air traffic control was called in to setup a dedicated airspace within a [Request for Comment (RFC)](https://gitlab.com/veloren/rfcs/-/merge_requests/49). The lofty goals remain for just about every item to be something you can pickup, throw, and swing around.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-05-01_horblegorble_dont-catch-a-cold.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-05-01_horblegorble_dont-catch-a-cold.webp)

_Don't catch a cold_

GitLab: [!4846](https://gitlab.com/veloren/veloren/-/merge_requests/4846)

### Discussions

#### Who's next?

Clowns to left of me, jokers to the right - who do I punch first? We know that NPCs aren't the ones to ask; they love to play trivial pursuit in a game of whack-a-mole. But if we took off the blinders and cleared their minds, could we teach these old dogs some new tricks? When @James put this question on the table, he was painting a bulls-eye for brain cannons on himself. It wasn't long before the [discussion](https://discord.com/channels/449602562165833758/1230311096880070776/1354888825041719488) was firing off on a few trajectories:

- A threat/aggro index for each target entity could be used to make prioritised decisions. Some fuzzy logic and coarse-grained updates might keep it from thrashing or getting too expensive.
- Should the personality and saviness of an entity have an influence on how they choose their battles, get into position, or pick their loadout? Perhaps they've a logistical mind to notice and take out players that give buffs and support.
- Sprinkling in some unpredictability may be helpful to feel like we're fighting beings of awareness, rather than walking algorithms. The experienced among them could even have the agency to mix together their own combat ingredients.
- Can all this be pulled off in a system that allows for varying depths of complexity? From Gnarlings to Gigas, and solo fighters to team players.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-05-01_horblegorble_whos-next.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-05-01_horblegorble_whos-next.webp)

_Target acquired_

### Brewing up a storm

After the ideation concoctions of @Nikophos overflowed the cooking pot and town cauldron, he went for a short stay retreat at a (conveniently vacant) witch hut. Free to steep in the potent, unventilated ambience of basement broths and cauldron fumes, the real distillation could begin. What [bubbled up](https://discord.com/channels/449602562165833758/449667182683619339/1343748247440855101) to the [surface](https://discord.com/channels/449602562165833758/449667182683619339/1344028655583629466) was an 'essence' based system for crafting potions.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-02-26_Nikophos_essences.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-02-26_Nikophos_essences.webp)

_Cause and effect — by @Nikophos_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-02-26_Nikophos_item-examples.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-02-26_Nikophos_item-examples.webp)

_The essential ingredients — by @Nikophos_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-02-26_Nikophos_potion-examples.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-02-26_Nikophos_potion-examples.webp)

_A mixologist's cheat sheet — by @Nikophos_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-16_Nikophos_alchemical-essences.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-16_Nikophos_alchemical-essences.webp)

_Alchemical alternatives — by @Nikophos + @violetwillow_

@violetwillow, the partner in slime, arrived after these brainstorming batches to help infuse fresh thoughts into an [octagonal blender concept](https://discord.com/channels/449602562165833758/449667182683619339/1350600997759877221). Various quantities of ingredients would take you around the segments to create different potions. A rarer cocktail might have a narrow target to hit, while the region for a more common potion might span across several segments.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-16_Nikophos_octagon-cauldron.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-16_Nikophos_octagon-cauldron.webp)

_Will it blend? — by @Nikophos_

## Community showcase

### Out goes the tide

Knowing the Sahagin warrior isn't much for words, @unii devised a shell-breaker activity for them to open up to.

_Beware the hidden fees on charges_

### Doom-loren

@horblegorble drilled down past the lava biomes of their screenshot folders to fire up just the right mood with @souffle's logo design.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-31_horblegorble_helloren-poster.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-31_horblegorble_helloren-poster.webp)

_Is this the future of an unstoppable Gigas?_

### Mastering the forge

With the right moves and a steady rhythm, who even needs armour? Certainly not @And_i.

_Hot temper meets cool tempo_

### Picnic at goblet rock

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-24_Supa_goblet-rock.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-24_Supa_goblet-rock.webp)

_The postcard that started it all — by @Supa_

The story began like any other in Veloren. Your standard affair of airships, dungeons, and general gallivanting about. It was when our band of misfits got wind of a unique rock formation that things went off script into some voxelated production of the Motley Crew and the Holy Goblet. Rumours spiralled and reason was lost - it was said that drinking of its snowmelt would let you _see_ the worldgen seed.

Whatever the soundness of their minds at this point, the mission was clear. How to climb the darn thing was a bit more clouded. Yet altitude sickness and buffeting winds were just extra spice for the ascent, and a mutual mix of encouragement and slander got the whole party to the top. Now at last atop Goblet Rock, they found fantastic views, outstanding acoustics, and joyous jubilation. But no matter how much snow they ate, the great wisdoms were not granted to them. Perhaps the real treasure was indeed the friends made along the way.

After recovering from their over-eager hydration, the gang decided to embark on vampire ventures at the nearby Zaluj Keep. What lay inside were trials of teamwork, much spilled blood, and quite a lot of nonsense. Many shenanigans and one viola later, a very unrelated discovery was made: their coconut cavalry could be converted into holy hand grenades. It was promptly agreed that Zaluj was no Camelot, and the town below of Ochreseaux was where they could get up to rather silly things. Most records of what happened next were turned to ash, and what survived was badly singed. Though much evidence was destroyed, it was no mystery who the chief troublemaker was.

Here is the adventure album from @horblegorble.

Do you like silly scribbles?

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-24_Supa_horblegorble_goblet-scribbles.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-24_Supa_horblegorble_goblet-scribbles.webp)

_Visitors tolerated_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-0_misty-morning.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-0_misty-morning.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-1_light-turbulence.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-1_light-turbulence.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-2_cozy-couching.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-2_cozy-couching.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-3_under-darkness.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-3_under-darkness.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-4_climbing-the-goblet.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-4_climbing-the-goblet.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-4a_filling-the-cup.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-4a_filling-the-cup.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-6_cheese-and-bombs.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-6_cheese-and-bombs.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-7_goblet-shenanigans.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-7_goblet-shenanigans.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-5a_dungeon-at-dusk.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-5a_dungeon-at-dusk.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-8_airborne-approach.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-8_airborne-approach.webp)

Your browser does not support the video tag. Your browser does not support the video tag.

_Dropdown drama_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-9_queuing-up.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-9_queuing-up.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-10_multi-story-mayhem.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-10_multi-story-mayhem.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-11_mob-the-boss.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-11_mob-the-boss.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-11a_serving-up-the-blood.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-11a_serving-up-the-blood.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-12_clear-the-air.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-12_clear-the-air.webp)

Your browser does not support the video tag. Your browser does not support the video tag.

_Bloodmoon battle_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-13_viola-victory.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-13_viola-victory.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-14_conch-and-climbing.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-14_conch-and-climbing.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-15_sparkling-lineup.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-15_sparkling-lineup.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-16_reset-regroup.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-16_reset-regroup.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-17_round-2-rollout.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-17_round-2-rollout.webp)

Your browser does not support the video tag. Your browser does not support the video tag.

_Snail squadron_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-18_insert-yakety-sax.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-18_insert-yakety-sax.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-20_in-we-go.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-20_in-we-go.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-24_moving-on.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-24_moving-on.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-25_public-transport-never-stops.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/goblet-rock/2025-03-28_horblegorble_goblet-rock-25_public-transport-never-stops.webp)

Your browser does not support the video tag. Your browser does not support the video tag.

_Nefarious Necti_

### Gigas gladiatoris

A colossal crab pot.

Becomes an ice rink.

Catching frosty prey.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-31_horblegorble_gigas-gladiatoris.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/2025-03-31_horblegorble_gigas-gladiatoris.webp)

_Now playing: The Real Stadium Blues_

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Front row seats at the gig_

## Screenshots

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-20_Indragedall_shimmerring-waters.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-20_Indragedall_shimmerring-waters.webp)

_Vibrant sky, shimmering waters — by @Indragedall_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_Retromaster_something-special.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_Retromaster_something-special.webp)

_Something special — @Retromaster_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_horblegorble_speck-in-the-sky.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_horblegorble_speck-in-the-sky.webp)

_A mote of stardust — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-18_Supa_spores-under-sporia.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-18_Supa_spores-under-sporia.webp)

_Spores under Sporia — by @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-18_isse_buoyant-farming.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-18_isse_buoyant-farming.webp)

_Some very buoyant crops — by @isse_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-16_horblegorble_airflow-arrangements.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-16_horblegorble_airflow-arrangements.webp)

_Airflow arrangements — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-20_Sam113_icy-echoes.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-20_Sam113_icy-echoes.webp)

_Do these echoes make my voice sound cold? — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-23_Supa_clearing-the-air.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-23_Supa_clearing-the-air.webp)

_Don't forget to check the forecast — by @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-26_juliancoffee_day-is-ruined.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-26_juliancoffee_day-is-ruined.webp)

_Torrential temples — by @juliancoffee_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_Sam113_wet-weather-flying.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_Sam113_wet-weather-flying.webp)

_♪ I'm flyyying in the rain, oh flyyying in the rain ♪ — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-20_Sam113_rainy-days.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-20_Sam113_rainy-days.webp)

_Under the weather — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-04-19_Crabo_Supa_strangers-v-squad.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-04-19_Crabo_Supa_strangers-v-squad.webp)

_Tolerating strangers vs riding with the squad — by @Crabo + @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-23_Muerto_very-deep-waters.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-23_Muerto_very-deep-waters.webp)

_Diving for the deepest blacks — by @Muerto_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-28_And_i_ravine.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-28_And_i_ravine.webp)

_Screaming into the void, staring into the abyss - where do ravines fit in? — by @And_i_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-29_Sam113_many-more-mushrooms.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-29_Sam113_many-more-mushrooms.webp)

_Moving on from mushrooms — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-27_juliancoffee_face-off.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-27_juliancoffee_face-off.webp)

_Not so tall now, are we? — by @juliancoffee_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-29_horblegorble_airshippin.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-29_horblegorble_airshippin.webp)

_Airshippin' around — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_Sam113_rising-up.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-31_Sam113_rising-up.webp)

_The beginnings of a smog problem? — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-30_horblegorble_sounds-of-dawn.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-30_horblegorble_sounds-of-dawn.webp)

_Melodies of dawn, ft. The Songbirds — @horblegorble_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-30_Supa_airship-queues.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/247/screenshots/2025-03-30_Supa_airship-queues.webp)

_@Supa and friends queueing up for their favourite ride. Don't miss the next flight :)_
