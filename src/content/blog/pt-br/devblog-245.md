---
title: "These weeks in Veloren 245"
guid: "https://veloren.net/blog/devblog-245/"
url: "https://veloren.net/blog/devblog-245/"
pubDate: "2025-04-03T00:00:00.000Z"
---

The time warp continues, as we look back on the arrival of some of the most anticipated updates to Veloren.

\- horblegorble, TWiV Contributor

## Contributor work

Thanks to everyone who contributed to veloren these last weeks: @steanne, @DaforLynx, @NeuralModder, @phoenix13032005, @GeekyGami, @unii, @UncomfySilence, @do-no-van, @horblegorble, @Tarhun, @zesterer, @xMAC94x, @isse, @floppy, @Synis, and @Supa.

### Merged work

#### Airships are go for launch!

Having taken off back in December of last year, @Tarhun's uplifting changes finally make their landing:

_The age of Airship travel has arrived!_

\_

For more than a few weeks, I've been working, diligently but mostly slowly due to inexperience with the game design and the language, to automate Airship movement and travel between Sites with docks.

\_

_Thanks to @zesterer for guidance and the many code reviews. Thanks to @isse for assistance and to everyone else that offered encouragement._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-31_horblegorble_mesa-airships.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-31_horblegorble_mesa-airships.webp)

_Airships now travel a network of routes between dock sites. Every Site with an Airship Dock now has two to four routes connected to the same number of other sites. Airships stop at the dock for about 90 seconds, then lift off and fly to the destination site while following the terrain._

_There's still work to be done on smoothing out the ride, so it's best for now to jump on and take a seat, then zoom out and look around._

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 ⏩ The world suddenly feels a whole lot smaller. Music by @Zakru

_To not spoil the fun of exploring the Airship route network, I'll just say that the destination site from any particular docking position is always the same. The rest is up to you!_

GitLab: [!4671](https://gitlab.com/veloren/veloren/-/merge_requests/4671) -> [!4709](https://gitlab.com/veloren/veloren/-/merge_requests/4709) + [!4738](https://gitlab.com/veloren/veloren/-/merge_requests/4738)

#### Now we're talking

@zesterer gives NPCs the gift of the gab, unlocking big ambitions down the road:

_For the past few weeks I've been slowly working on a much-awaited feature: two-way dialogue!_

\_

It's in the early stages, but you can already use it to ask NPCs how they feel about you, who they are, where you are, and even temporarily hiring NPCs (if you're playing singleplayer, this might be useful!).

\_

_Thanks to @Pfau for his work on the UI: although it's still a work in progress, it's already looking great._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-17_zesterer_two-way-dialogue.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-17_zesterer_two-way-dialogue.webp)

A name destined to wear the chef hat

_Dialogue is passed all the way through to rtsim, allowing for dialogue sequences as part of long-running behaviours. The most exciting part, for me, is that this feature unblocks work on a lot of future things such as:_

- _Questing_
- _Factions & politics_
- _Story-telling and exposition_
- _NPC hiring and groups_

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 Talk is cheap, so keep some coins on hand to be persuasive

GitLab: [!4686](https://gitlab.com/veloren/veloren/-/merge_requests/4686) + [!4739](https://gitlab.com/veloren/veloren/-/merge_requests/4739) + [!4747](https://gitlab.com/veloren/veloren/-/merge_requests/4747)

#### Towns and dungeons play musical chairs

The tunes are a changing, with three new soundtrack additions and a reshuffle of dungeon music. First up is a delicate dance through snowland choreographed by @phoenix13032005.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-30_horblegorble_snowland.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-30_horblegorble_snowland.webp)

Your browser does not support the audio element.

🔊 _Where Frost Played — @phoenix13032005_

Striking a more jubilant tone, @phoenix13032005 also gives fresh energy to the sunshine of coastal and savannah towns.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-30_horblegorble_coastal.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-30_horblegorble_coastal.webp)

Your browser does not support the audio element.

🔊 _Fill The Mugs — @phoenix13032005_

And for the bloodthirsty adventurer, a much more sinister vibe from @GeekyGami will echo through the halls of vampire castles.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-30_horblegorble_vampire.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-30_horblegorble_vampire.webp)

Your browser does not support the audio element.

🔊 _Still Heart's Coffin — @GeekyGami_

@phoenix13032005 also played umpire for a dungeon themed round of musical chairs. When the beat stopped, here's where the sounds landed:

Dungeon

Tracks

Gnarling Fort

Jungle Ambient

The Undergrowth

Adlet Stronghold

Mysty Temple

A Heart's Ice-Cold Protection

Sahagin Island

Sacred Temple

Thrumming Waters

Haniwa Catacombs

Cobbled Halls

Vampire Castle

Vast Onslaught

Still Heart's Coffin

Sea Chapel

Mysty Temple

Ruination

Myrmidon Dungeon

Sacred Temple

Vast Onslaught

Cultist Dungeon

Sacred Temple

Ruination

Terracotta Ruins

Jungle Ambient

Dwarven Mines

Dank Dungeon

Cobbled Halls

GitLab: [!4712](https://gitlab.com/veloren/veloren/-/merge_requests/4712)

#### Bouncing off the walls

Obstacle course architects will have to rethink their designs in light of new climbing mechanics from @Synis. Make sure your climbing boots and chalk are in good nick.

Your browser does not support the video tag. Your browser does not support the video tag.

_Parkour Pete gives us some demos of new techniques_

GitLab: [!4734](https://gitlab.com/veloren/veloren/-/merge_requests/4734)

#### Towning around

That bumpy, unlit road in town now gives a smooth, lantern adorned ride all the way to the remodelled tavern. Courtesy of @isse:

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-26_isse_0-pretty-plaza-picture.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-26_isse_0-pretty-plaza-picture.webp)

_Lately I've been working a bit on our towns, both just generation wise, and adding sprites (blocks with extra details, beds, chairs etc.) from @Supa and @unii ._

\_

With these changes we've also started using a lot more "tiled" sprites. Which are sprites that take up many blocks to have better colliders, and we can do some composition with the different tiles without needing to create voxel models for each variation.

\_

_The first example of these were the lantern sprites. These are built from three parts, a base, a top and the lantern. And if you look closely you can see where the separation is because the light level is different if the lantern is lit._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_isse_1-lantern-light-composition.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_isse_1-lantern-light-composition.webp)

_Example of how it can be composed, with some issues still in the model_

_Also added a basement to tavern buildings and changed their generation a bit._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_2-tavern-inside-and-out.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_2-tavern-inside-and-out.webp)

_Our roads between towns didn't play well with our site rendering code, so I updated that._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-18_isse_3-paths-before-and-after.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-18_isse_3-paths-before-and-after.webp)

Previous (left) and new (right)

_In earlier versions we've had some issues with plazas and roads ending up underwater, and houses being a whole lot higher up. This is because when placing the house we use an approximated altitude that's based on a per chunk altitude value. And when placing the plaza we used a method to replace the top most blocks of the loaded terrain. I changed plazas and roads to instead behave more like other plots (building generators). And if any corner of the plaza would end up under water I instead place a wood platform at an appropriate altitude._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-21_isse_5-rising-tides.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-21_isse_5-rising-tides.webp)

GitLab: [!4748](https://gitlab.com/veloren/veloren/-/merge_requests/4748)

#### Hammer tweaks that haft to happen

@UncomfySilence has brought the balance hammer down across the skill tree, with changes to damage, timing, energy, and more. If you've been getting into the swing of things, you may need to switch up your tactics.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_balancing-render.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_balancing-render.webp)

_An artist rendition of the balancing process_

GitLab: [!4721](https://gitlab.com/veloren/veloren/-/merge_requests/4721)

#### Holding on to let go

While the misadventurous among us have appreciated the second chance of recovering from a downed state, there were an unfortunate few that 'jumped' to an early conclusion. But fret not, for @isse has heard your feedback, and she is giving our trigger fingers some breathing room.

Your browser does not support the video tag. Your browser does not support the video tag.

_How much do you really miss your campfire?_

GitLab: [!4759](https://gitlab.com/veloren/veloren/-/merge_requests/4759)

#### More or less

For those that can't wait till New Years for a good countdown, @do-no-van gives you the chance to experience the suspense of a boss fight in full. A new checkbox toggles the abbreviation of health points to the thousands. Have to wonder if we'll get imperial values some day...

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-31_horblegorble_health-si-prefix.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-03-31_horblegorble_health-si-prefix.webp)

_What a unit_

GitLab: [!4736](https://gitlab.com/veloren/veloren/-/merge_requests/4736)

#### Upgrading Kira

Marking another notch on the dependency doorway, @DaforLynx and @NeuralModder help Kira grow up:

_We upgraded the version of Kira (the new audio framework) to 0.10. This may help with performance in some cases, thanks to newly using sample buffers, but let us know if you experience performance problems that were not present in the past month._

GitLab: [!4727](https://gitlab.com/veloren/veloren/-/merge_requests/4727) + [!4740](https://gitlab.com/veloren/veloren/-/merge_requests/4740)

#### Paint the town in sprites

@Supa has been crafting up some more additions to our palette of town sprites.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_up-on-the-wall.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_up-on-the-wall.webp)

_Look into the mirror to complete the headshot hat-trick_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_baskets.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_baskets.webp)

_Small, medium, and large. The lesser known Three Basketeers_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_wooden-chest.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_wooden-chest.webp)

_It was an open and shut chest_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_tavern-table.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_tavern-table.webp)

_Plenty of seats at the table_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_bucket-sack-jug.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Supa_bucket-sack-jug.webp)

_They can all hold water, one just not as long_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-18_Supa_bonfire-ingame.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-18_Supa_bonfire-ingame.webp)

_@Supa stays warm by the bonfire_

GitLab: [!4751](https://gitlab.com/veloren/veloren/-/merge_requests/4751)

#### Digging up the past

@Synis has completed the excavation of code for the old cave system. To remember times gone by, we go on a nostalgic delve through a cave in the old eastern forests, known as 'Miist Tunnel'.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_1-miist-tunnel.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_1-miist-tunnel.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_2-miist-tunnel.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_2-miist-tunnel.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_3-miist-tunnel.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_3-miist-tunnel.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_4-miist-tunnel.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_4-miist-tunnel.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_5-miist-tunnel.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_5-miist-tunnel.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_6-miist-tunnel.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-02_horblegorble_6-miist-tunnel.webp)

_In and out, with a whole lotta mobs in-between_

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Green is good_

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Dances with giants_

The adventurous reader can explore the old world at commit `61573a7800`.

GitLab: [!4742](https://gitlab.com/veloren/veloren/-/merge_requests/4742)

#### More changes:

- capitalised sentence beginning for directional hint from NPC - @steanne - [!4724](https://gitlab.com/veloren/veloren/-/merge_requests/4724)
- minor potion, velorite fragment, plain cloth glider, and black lantern all moved to default recipes - @unii - [!4720](https://gitlab.com/veloren/veloren/-/merge_requests/4720)
- plugging up a drip in the security pipeline - @NeuralModder - [!4726](https://gitlab.com/veloren/veloren/-/merge_requests/4726)
- stun resilience/resistance info in UI updated to use entity stats - @do-no-van - [!4725](https://gitlab.com/veloren/veloren/-/merge_requests/4725)
- terracotta statue's blast attack made more manageable - @horblegorble - [!4728](https://gitlab.com/veloren/veloren/-/merge_requests/4728)
- poise bar is now shown by default - @horblegorble - [!4732](https://gitlab.com/veloren/veloren/-/merge_requests/4732)
- bloodmoon relic rotation fixed to face forward - @horblegorble - [!4733](https://gitlab.com/veloren/veloren/-/merge_requests/4733)
- purple geode returns to the loot tables, now from basilisks - @horblegorble - [!4730](https://gitlab.com/veloren/veloren/-/merge_requests/4730)
- toolchain update (happy valentine's day edition) - @xMAC94x - [!4737](https://gitlab.com/veloren/veloren/-/merge_requests/4737)
- a series of fixes for airship dock signs - @isse + @floppy + @horblegorble - [!4663](https://gitlab.com/veloren/veloren/-/merge_requests/4663)
- matching up `pub const DIAGONALS` ordering with similar enums - @horblegorble - [!4741](https://gitlab.com/veloren/veloren/-/merge_requests/4741)
- subtraction overflow fixed in network code - @xMAC94x - [!4746](https://gitlab.com/veloren/veloren/-/merge_requests/4746)
- velorite and velorite fragment models updated to match multi-hit mining - @Supa + @horblegorble - [!4735](https://gitlab.com/veloren/veloren/-/merge_requests/4735)
- standalone code for researching better movement algorithms - @xMAC94x - [!4756](https://gitlab.com/veloren/veloren/-/merge_requests/4756)

### Ongoing unmerged work

#### (Blood)steeling a look at armour models

The crackling whoosh of a bellow-fed flame, heavy clangs of a striking hammer, and what witnesses swear were intermittent screams of agony. These were the sounds of @Gemu's voxel armoury as he forged the first of a new set of metal armours.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_bloodsteel-backdate.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_bloodsteel-backdate.webp)

_Forged to preserve life, at the cost of another._

## Discussions

### Fire it up!

Time to rekindle those brainstorming circuits - @Sam has put out the call to share your burning desires:

_With bow soon approaching completion, we can begin thinking about the fire staff rework. Fire staffs are intended to be themed around fire (obviously), heat, smoke, and other related things. It's primary niche will be a weapon with medium range that has high burst potential, though potentially with some consequences from extended use. The rework of fire staff will also come with the introduction of a temperature system, where higher temperatures (and lower temperatures, though fire staff won't help you get there) will have various effects on you. Suggestions for fire staff abilities can be made in the form [here](https://docs.google.com/forms/d/e/1FAIpQLScLIaAzI2WGynu3L9ofPe1mXx8uQTfWQiTpJRWfz6jSZnL2jQ/viewform?usp=dialog):_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-03_horblegorble_form-by-sam.webp)](https://docs.google.com/forms/d/e/1FAIpQLScLIaAzI2WGynu3L9ofPe1mXx8uQTfWQiTpJRWfz6jSZnL2jQ/viewform?usp=dialog)

Once your own fire is burning, you can check out some of the [discussion so far](https://discord.com/channels/449602562165833758/450065020878061600/1347030264290873395).

### Quest objective: speak to the manager

@zesterer and @Pfau have been [mulling over](https://discord.com/channels/449602562165833758/1081973376198901850/1341526475387568158) the concept of an 'architect' that handles the surfacing, progression, and completion of quests. Rather than a classic mix of static roles and objectives, these quests would emerge from ongoing dynamics between entities and their alliances in the game world. This would build upon the RTSim (real-time simulation) system's ability to handle a lot of moving pieces, to being able to move the big picture as well. The devil will be in the details of course, particularly with avoiding loose ends being scattered about.

As done before, many ideas here are gratefully borrowed from work done on Dwarf Fortress.

_A casual talk on emergent narrative dynamics in a game world_

### It's all in the grip

Jack of all trades. Counter attack specialist. Mobility maximiser. What do you see as the role of the versatile sword in Veloren's combat? @UncomfySilence [spelled out](https://discord.com/channels/449602562165833758/450065020878061600/1341770970926419980) some of their thoughts in a discussion with @Gemu, wondering how to have all the ingredients of its skill tree work better together. Complicating factors included dual-wielding, finding the right place alongside axe and hammer, and the differences between PvP and PvE. An important point was made that the sword was first of the melee weapons to be reworked, during a time of multiple significant changes to rolling mechanics.

## Community showcase

### Veloren's first public transport map

Taking @Tarhun up on their invitation, @Froggy ferried himself all over the world to map out the new airship routes on the official server. To save himself some jet lag, a few of the routes were taken by other players that phoned in their findings. Getting the route colours to behave themselves was another matter.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-23_Froggy_flight-paths.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-23_Froggy_flight-paths.webp)

_Now we just need a trip planner app — by @Froggy_

### The Veloren Daily

The printing press winds down as @phoenix13032005 sends out the last issue of The Veloren Daily for this season. We wish them all the best on their journeys, and hope to read more headlines about their own endeavours in the future.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-13_phoenix13032005_veloren-daily.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-13_phoenix13032005_veloren-daily.webp)

_A farewell concert and underground marvels_

### There's Waldo (Merchant)

As promised, here we deliver the solutions to [last issue's](https://veloren.net/blog/devblog-244) search party. If you didn't find all these characters, feel free to have another crack at it before uncovering them. Don't forget about Waldo the merchant.

Click to see original puzzles

You can click on each image to view it in full.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-savannah.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-savannah.png)

_Savannah swim day_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-desert.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-desert.png)

_Desert denizens_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_meet-the-waldos.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_meet-the-waldos.webp)

_Waldo reunion_

Click to reveal solutions for Savannah Swim Day

You can click on the image to view it in full.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-18_horblegorble_theres-waldo-savannah-swim-day_v2.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-18_horblegorble_theres-waldo-savannah-swim-day_v2.png)

_Savannah swim day secrets surfaced_

Click to reveal solutions for Desert Denizens

You can click on the image to view it in full.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-18_horblegorble_theres-waldo-desert-denizens_v2.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-04-18_horblegorble_theres-waldo-desert-denizens_v2.png)

_Desert denizens discovered_

### Concept art

First-hand accounts of various explorations in voxel space. A mix of things intended for use in-game, and more experimental ideations.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-14_Supa_lilypads-assembled.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-14_Supa_lilypads-assembled.webp)

_Lovely lily pads in bloom, grown by @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-1x_unii_planting-ideas.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-1x_unii_planting-ideas.webp)

_A few species of ideas were planted by @unii: (left to right) | Rafflesia | Passiflora | Jungle reeds | Modular moss_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-17_FBI873_orange-leafy-plants.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-17_FBI873_orange-leafy-plants.webp)

_Orange leafy plants from @FBI873, to sprout in the jungle sprite overhaul_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-18_Sam113_bookshelf-and-sign.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-18_Sam113_bookshelf-and-sign.webp)

_@Sam113 got into the woodworks, with a new bookcase and updated shading for hanging signs_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Hrom_unii_mahjong.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-02-19_Hrom_unii_mahjong.webp)

_Mahjong fans @Hrom and @unii prepare a sales pitch for tavern owners_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-01-31_unii_maid-modelling.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/2025-01-31_unii_maid-modelling.webp)

_Veloren's armoury didn't have quite the right aesthetic, so @unii maid his own_

## Screenshots

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-14_necti_red-lights.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-14_necti_red-lights.webp)

_Not that kind of red light district — by @Necti_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-14_unii_seeing-red.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-14_unii_seeing-red.webp)

_Myrmidons amidst mist — by @unii_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-15_horblegorble_scuba-stag.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-15_horblegorble_scuba-stag.webp)

_A 'scuba stag' waits for an unsuspecting traveller — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-15_James_canyon-cut.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-15_James_canyon-cut.webp)

_The many colours of erosion — by @James_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-17_Alley_Oop_icy-attitudes.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-17_Alley_Oop_icy-attitudes.webp)

_Playing it cool — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-16_unii_the-noise-upstairs.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-16_unii_the-noise-upstairs.webp)

_A rowdy upstairs housemate — by @unii_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-17_horblegorble_goblin-in-the-light.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-17_horblegorble_goblin-in-the-light.webp)

_The chosen goblin — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-17_FBI873_crystalised-caving.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-17_FBI873_crystalised-caving.webp)

_Roleplaying as a crystal — by @FBI873_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-20_DaforLynx_an-inclination-for-faming.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-20_DaforLynx_an-inclination-for-faming.webp)

_They always were inclined towards farming — by @DaforLynx_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-21_isse_we-have-an-opening.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-21_isse_we-have-an-opening.webp)

_Yes, we have an opening for you — by @isse_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-21_Sam113_get-the-cultist.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-21_Sam113_get-the-cultist.webp)

_They say holding grudges will bring you down — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-22_Alley_Oop_brain-freeze.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-22_Alley_Oop_brain-freeze.webp)

_Brain freeze — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-23_isse_airship-attitude.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-23_isse_airship-attitude.webp)

_Now this is a captain with an upwards attitude — by @isse_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-22_Gemu_the-lost-legoom.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/245/screenshots/2025-02-22_Gemu_the-lost-legoom.webp)

_@Gemu came across a very lost legoom. Maybe they'll find us in the next devblog :)_
