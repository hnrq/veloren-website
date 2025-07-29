---
title: "These weeks in Veloren 244"
guid: "https://veloren.net/blog/devblog-244/"
url: "https://veloren.net/blog/devblog-244/"
pubDate: "2025-03-27T00:00:00.000Z"
---

In this second flashback episode of TWiV, we look at combat's rolling remixes, shiny new goodies, plus some puzzles and newspapers.

\- horblegorble, TWiV Contributor

## Contributor work

Thanks to everyone who contributed to veloren these last weeks: @isse, @crab, @NeuralModder, @xMAC94x, @Gemu, @Necti, @Supa, @unii, @do-no-van, @floppy, @UncomfySilence, @phoenix13032005, @fnetx, @Imbris, @souffle, @Crabo, @srpapinha, @Nikophos, and @Hrom.

Thanks to the weblate contributors who contributed these last weeks: alextecplayz, almostabsent, Axag, bov, brucekomike, Diamons, Endoril, fnetX, iming_forge, ioutora, Janez, jls, K0RR, and raresmac.

### Merged work

#### Roll cancelling gets un-cancelled

From the mind of @Necti and the coding hands of @do-no-van, roll cancelling makes a comeback to your combat repertoire.

Before this change, the remainder of an attack's duration was added to the warmup section of a roll, leaving you 'stalled' and vulnerable. Now, rolling during an attack will almost immediately put you into the roll, but with a much higher energy cost. To signal this difference during gameplay, @floppy cooked up a new sound effect.

Thanks as well to those that tested and gave feedback to get this changed tuned in.

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Stalled rolls with regular sound effect_

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Attack-cancelling rolls with new sound effect_

GitLab: [!4683](https://gitlab.com/veloren/veloren/-/merge_requests/4683)

#### Bloodmoon lighting, and smoke on the horizon

Sink your fangs into a new lantern and get that blood-red glow. See your local Bloodmoon Heiress for [details](https://wiki.veloren.net/wiki/Bloodmoon_Relic), but don't expect a warranty for belt stains.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-27_necti_bloodmoon-lighting.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-27_necti_bloodmoon-lighting.webp)

_Voxel models and @Necti modelled voxels_

Embers carried on the wind herald the approach of the Fire Gigas to Veloren. In preparation, @Gemu brings us next season's smoking hot fashion.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-20_horblegorble_ashen-armour.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-20_horblegorble_ashen-armour.webp)

_Start practicing your smouldering gaze._

Frost Gigas and Fire Gigas. Polaris and Crux. Veloren's future is full of symmetries.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-20_horblegorble_waiting-for-gigas.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-20_horblegorble_waiting-for-gigas.webp)

_When will the Fire Gigas emerge from its molten slumber?_

There's a few pieces in the puzzle of adding new items like this into the game, and it often takes a team to bring it all together:

- voxel modelling - @Gemu
- armour stats - @Necti, with input from @UncomfySilence and @unii
- in-game positioning - @Necti
- flavour texts - @UncomfySilence
- bookkeeping - @Necti + @floppy

GitLab: [!4705](https://gitlab.com/veloren/veloren/-/merge_requests/4705) + [!4707](https://gitlab.com/veloren/veloren/-/merge_requests/4707)

#### Sheeny shiny ingots

@Supa has been throwing the best kind of shade at ingot models to give them a polished look:

Ingot sprites have been redone to reflect subtle colours, and now look much cleaner up-close. Next step is to use them as decoration or as lootables in the world.

Your browser does not support the video tag. Your browser does not support the video tag.

🗘 _Before and after, before and after, yada yada_

While jealous at first, wooden logs also got a share of the spotlight.

GitLab: [!4702](https://gitlab.com/veloren/veloren/-/merge_requests/4702)

#### Training for dummies

After deciding that it was tired of its old build, the training dummy entered into the tutelage of @do-no-van to pursue a re-spec into vitality. Despite losing some of its debuff immunities, it now feels ready to face the world head on, with an orientation fix to its voxel model.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-22_horblegorble_better-dummy.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-22_horblegorble_better-dummy.webp)

_Two very different 'face-first' mugshots_

GitLab: [!4703](https://gitlab.com/veloren/veloren/-/merge_requests/4703)

#### Striking the balance

Cleavers and cripplers may need to adjust their footing with some balancing changes:

- slight damage reduction for sword M1 and axe cleave - @unii - [!4701](https://gitlab.com/veloren/veloren/-/merge_requests/4701) + [!4711](https://gitlab.com/veloren/veloren/-/merge_requests/4711)
- halved duration for crippling debuff - @srpapinha - [!4704](https://gitlab.com/veloren/veloren/-/merge_requests/4704)
- significantly reduced multipliers for crippling debuffs - @do-no-van - [!4722](https://gitlab.com/veloren/veloren/-/merge_requests/4722)

#### Woodn't you know it? More sprites!

Loading the barrels of future town updates, @Supa brushed up on his carpentry skills to fashion a suite of workshop sprites. But don't sweat getting them all around town - @unii rolled in with a hand-drawn cart.

We thank the trees that made all this possible.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_carpentry-workshop.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_carpentry-workshop.webp)

_You did your safety induction, right?_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_unii_hand-cart.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_unii_hand-cart.webp)

_We all love a good box. But what if, they had wheels?_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_more-sprites.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_more-sprites.webp)

_For all your stacking, barrelling, and bellowing needs_

Lit up by some wikipedia [inspiration](https://en.wikipedia.org/wiki/Lamplighter), @Supa also assembled a couple of modular street lanterns.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_modular-lanterns.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_modular-lanterns.webp)

_Don't lose the instruction manual_

GitLab: [!4718](https://gitlab.com/veloren/veloren/-/merge_requests/4718)

#### Sprite asset semi-automator spreadsheet

While building, colouring, and shading models is most of the process, Veloren doesn't wander around finding wild voxels to gobble up. To get them into the game, they need to be plated up with some configuration garnishes. Thankfully, chef @Supa is willing to share some of his cooking tips with us, in the form of a semi-automator spreadsheet that guides you through adding a sprite model into the game files. You can download it as a [.xlsx](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-21_Supa_asset-semi-automator.xlsx) or [.ods](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-03-21_Supa_asset-semi-automator.ods) file.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_sprite-sheet.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_Supa_sprite-sheet.webp)

_Time to cook up your own spread of tasty sprites!_

#### A different kind of compiling

The ambitious ideas and broad contributor base of Veloren mean that its future is chock-a-block full of things to juggle. It can be a lot to keep all in mind, so why not write some of it down? @Gemu and @phoenix13032005 have done the work of compiling todo lists to help coordinate efforts on models and sounds.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_Gemu_jungle-sprites.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_Gemu_jungle-sprites.webp)

_Sprite modelling for a jungle biome overhaul, compiled by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_phoenix13032005_entity-sfx.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_phoenix13032005_entity-sfx.webp)

_Various sound effects for categorised entities, compiled by @phoenix13032005_

#### More changes:

- rust toolchain update - @isse + @crab [!4694](https://gitlab.com/veloren/veloren/-/merge_requests/4694)
- update continuous integration cache image - @crab - [!4700](https://gitlab.com/veloren/veloren/-/merge_requests/4700)
- dependency updates - @NeuralModder - [!4699](https://gitlab.com/veloren/veloren/-/merge_requests/4699)
- cargo package updates - @xMAC94x - [!4708](https://gitlab.com/veloren/veloren/-/merge_requests/4708)
- hotfix for release build - @NeuralModder - [!4710](https://gitlab.com/veloren/veloren/-/merge_requests/4710)
- parsed and localised text is converted to ascii to fix a parsing failure - @imbris - [!4714](https://gitlab.com/veloren/veloren/-/merge_requests/4714)
- kelpies now swim faster in water - @souffle - [!4717](https://gitlab.com/veloren/veloren/-/merge_requests/4717)
- straw hats are now sellable and stocked by merchants - @unii - [!4716](https://gitlab.com/veloren/veloren/-/merge_requests/4716)
- dwarven cheese added to greedy miner loot table - @Crabo - [!4719](https://gitlab.com/veloren/veloren/-/merge_requests/4719)

### Ongoing unmerged work

#### Beware the bonk

On reflection, perhaps it does seem odd that a few voxels of steel can negate the impact of a giant's crushing blow. To bring some extra challenge to your David vs Goliath combat, @do-no-van is experimenting with unblockable attacks.

Your browser does not support the video tag. Your browser does not support the video tag.

_You're gonna need a bigger shield_

GitLab: [!4706](https://gitlab.com/veloren/veloren/-/merge_requests/4706)

#### Getting comfortable

After a long adventure of beast hunts and dungeon raids, your weary legs finally bring you back to town. They carry you through the doors of 'The Cheeky Legoom', where all your senses are welcomed into its cozy atmosphere. The soft crackle of a simmering fire, dancing shadows of candlelight, and boisterous conversations carried in the air - all under the gaze of the courteous but discerning barkeep.

@Supa sets the scene for a space to socialise and recharge, with a tavern's worth of sprites in the works.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Supa_Tavern-0.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Supa_Tavern-0.webp)

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Supa_Tavern-1.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Supa_Tavern-1.webp)

## Discussions

### You've thread all this before

Sailing through the brainstorms that happen across our discord channels can put ones navigation skills to the test, so it's always appreciated when things get brought into calmer waters.

@Nikophos collated [various potion ideas](https://discord.com/channels/449602562165833758/1337420659860574321)✨, ranging form buoyancy and bottle wind, to homesickness and gender change.

Food and alchemy were on @Supa's mind, as he placed some old ideas into [new threads](https://discord.com/channels/449602562165833758/646401404419833866/1338207398971838647):

- [Food: Should there be a hunger system?](https://discord.com/channels/449602562165833758/1338207874073100338)
- [Food: What stats should food give?](https://discord.com/channels/449602562165833758/1338208327192285204)
- [Food: How to add more nuance to cooking?](https://discord.com/channels/449602562165833758/1338209911351279839)
- [Food: What food-related items should be added/adjusted?](https://discord.com/channels/449602562165833758/1338213180840869959)
- [Alchemy: What stats should potions give?](https://discord.com/channels/449602562165833758/1338213393667985482)
- [Alchemy: How to add nuance to potion-making?](https://discord.com/channels/449602562165833758/1338213644445421568)
- [Alchemy: Should the potion vial return to the inventory after use?](https://discord.com/channels/449602562165833758/1338213836372578437)

### Playing your part

The players. They jostle, quarrel, and bicker. A shared consternation of unmet contestation. Looking for a banner to rally them. Yearning for more than `/join_faction`. It's time to take matters into their own hands.

Kicked off by @Hrom, there was a wide ranging discussion on faction role-playing as a gameplay element layered on top of Veloren's out-of-the-box experience. Ideas included factional quests amongst players and PvP skirmishes at towns to determine territory control, all overseen by guilds with leaders, treasurers, and regular members. A summary of the proposed ideas was [written up](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-04_phoenix13032005_Veloren-Faction-Roleplay-Proposal.pdf) by @phoenix13032005.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-02_Hrom_veloren-factions.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-02_Hrom_veloren-factions.webp)

_Thinking of a world divided — by @Hrom_

Although the war room deliberations didn't arrive at a concrete plan of attack, there's plenty of material up on the drawing board to revisit another time.

## Community showcase

### Where's Waldo, Veloren edition

The famous puzzle book makes an unlicensed expansion into the world of Veloren, with two sunny scenes each hiding Waldo (Merchant) and six other sneaky stars. Directed by @Hrom.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-savannah.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-savannah.png)

_Savannah swim day_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_meet-the-waldos.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_meet-the-waldos.webp)

_Meet the Waldos_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-desert.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-09_Hrom_wheres-waldo-desert.png)

_Desert denizens_

Solutions will be posted in the next edition of TWiV.

### Extra! Extra! Read all about it!

Armed with their keen senses and a trusty notepad, @phoenix13032005 was on assignment these weeks to document the various dramas unfolding on Veloren's official server. These are the stories told so far, in The Veloren Daily.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-30_phoenix13032005_veloren-daily.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-30_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-31_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-31_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-01_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-01_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-02_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-02_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_phoenix13032005_veloren-daily-p1.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_phoenix13032005_veloren-daily-p1.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_phoenix13032005_veloren-daily-p2.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_phoenix13032005_veloren-daily-p2.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-04_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-04_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-06_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-06_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-07_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-07_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-08_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-10_phoenix13032005_veloren-daily.webp) ](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-10_phoenix13032005_veloren-daily.webp)[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_phoenix13032005_veloren-daily.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_phoenix13032005_veloren-daily.webp)

### Events

Pre-planned events hosted on the official server (`server.veloren.net`). You can keep an eye out for future announcements on the [discord channel](https://discord.com/channels/449602562165833758/888424036143607809).

#### PvP war

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Vagabond_the-usual-suspects.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Vagabond_the-usual-suspects.webp)

_The usual suspects, extended line up — by @Vagabond_

Lakeside residents of Sporia were recently witness to a kind of reverse-Atlantis event, when a mini-city island rose up from the waters. Deserted but intact, with an architecture unknown to modern Veloreans, it holds untold promise for historical study. What better to do with this archaeological miracle than wage all-out PvP warfare.

So now, Battlemode Productions™ brings you another combat extravaganza! This time in a geared up, strat maxed, team based format. Big cheers to @unii for besting Poseidon to raise their arena from the lakebed, @Necti for promoting the event, and @Hrom for putting the teams together.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Necti_arena-image.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Necti_arena-image.webp)

_Warmup lighting — by @Necti_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_phoenix13032005_veloren-daily-p1.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_phoenix13032005_veloren-daily-p1.webp)

_A front page, bruised-eye witness account from @phoenix13032005_

@Necti was back in the hot seat with in-the-action commentary and comms. It's subtle, but she might be a fan of the new rolls.

_Mind the puddle of leaked meta_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Sam113_tournament-migration.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Sam113_tournament-migration.webp)

_A conga line from @Sam113 turned bizarre attempt to measure the arena in 'body count'_

## Screenshots

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-06_unii_shades-of-grey.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-06_unii_shades-of-grey.webp)

_Who knows what lurks between the shades of grey? — by @unii_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-25_Supa_twin-towers.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-25_Supa_twin-towers.webp)

_Casual Friday attire looks very different in these neighbouring towers — by @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-31_And_i_tribute-to-bremen.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-31_And_i_tribute-to-bremen.webp)

_A tribute to the Town Musicians of Bremen — by @And_i_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-25_Alley_Oop_bends-in-the-road.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-25_Alley_Oop_bends-in-the-road.webp)

_All about the journey, not the destination — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-07_game_r-dev_end-of-day.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-07_game_r-dev_end-of-day.webp)

_Could almost imagine your own sunset in a lantern — by @game_r/dev_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Alley_Oop_floating-finish.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-03_Alley_Oop_floating-finish.webp)

_To pack: 🗹 glider ☐ life jacket — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-30_necti_light-up-the-sky.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-30_necti_light-up-the-sky.webp)

_Last moments of an unburned retina — by @Necti_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-31_cookiengineer_gigas-remodel.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-01-31_cookiengineer_gigas-remodel.webp)

_Frost Gigas tries their hand at some urban (re)planning — by @cookiengineer_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-02_Alley_Oop_warm-adlets.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-02_Alley_Oop_warm-adlets.webp)

_These Adlets are digging their heels in against climate change — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-06_unii_biome-mixins.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-06_unii_biome-mixins.webp)

_A melting pot of cave flavours — by @unii_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_Froggy_heatwave.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/244/2025-02-11_Froggy_heatwave.webp)

_@Froggy was tempted to ride this heatwave. Catch you on the next one :)_
