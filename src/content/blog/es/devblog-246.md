---
title: "These weeks in Veloren 246"
guid: "https://veloren.net/blog/devblog-246/"
url: "https://veloren.net/blog/devblog-246/"
pubDate: "2025-04-17T00:00:00.000Z"
---

Hold onto your hats for this leg of our journey through time, as we experience the highs and lows of airship travel, race for mushrooms, and step into the mirror-verse.

\- horblegorble, TWiV Contributor

## Contributor work

Thanks to everyone who contributed to veloren these last weeks: @isse, @Supa, @Tarhun, @Gemu, @UncomfySilence, @unii, @juliancoffee, @souffle, @JimmyDdotEXE, @xMAC94x, @imbris, @floppy, @DaforLynx, @FERIIXU, @horblegorble, @alerty264, @pat36, @GeekyGami, @hnrq, @Crabo, @fnetx, @NeuralModder, and @MStarK3002.

Thanks to the weblate translators who contributed these last weeks: alxr1795, Axag, Benny, Carrotism, celestineprower, Daxik2x, Diamons, Dinariossa, DiXiao, EatherBone, Endoril, evgenkot, fnetX, Furrior, jls, LagerJack, lucius_pilgrim, marcelodemonn, MaxSoniX, ministergoose, muhaaliss, nekoedges, Paw, pivoezhka, Positron832, RuGod, Schmarotzer, tdehtyar, Virtex, and andVladisSlave.

### Merged work

#### Eyes on the flightpath

_It has been brought to the attention of Airloren management that some of our captains have, at times, been somewhat distractable from their piloting duties. We understand that reports have been made of impulsive steering, anger management issues, and an outsized fear of fireballs. While these claims are likely to be exaggerations of hesitant flyers, this is a good time to remind our passengers of Airloren's total commitment to flight safety. To ensure that any extent of un-captainly conduct remains grounded, we engaged the services of behaviour expert @isse to resolve these matters. Our patrons can rest assured that Airloren remains the safest cross-map transit system in all of Veloren. Any rumours of crashed airships have no documented connection to the Airloren fleet._

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Two very different (alleged) flights_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-0x_x_airship-escapades.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-0x_x_airship-escapades.webp)

_When lofty freedoms met untethered guidance — by (left to right) @Supa, @Froggy, @horblegorble, @Supa_

Alongside her consulting services to Airloren, @isse also delivered some updates to the moral and monetary navigation systems of other NPCs:

- Saving a downed NPC will improve their sentiment towards you, but they won't tell other NPCs about it (perhaps out of embarrassment or bruised honour).
- New pricing formulae for traveller hiring, where `adventurer level` goes from zero (greenhorn) to three (experienced):
  - `day = 60 * 2 ^ (adventurer level)`
  - `week = 300 * 2 ^ (adventurer level)`

GitLab: [!4760](https://gitlab.com/veloren/veloren/-/merge_requests/4760)

#### Sky-bound sprites

Those long airship cruises are now a lot easier on the eyes and bum, with comfy new sprites from @Supa. For the utility-minded amongst you, there's also a helm and rope for all your aeronautical needs.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_Supa_modular-ariship-lounge.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_Supa_modular-ariship-lounge.webp)

_Do you dare to find out what lies under public transport seating?_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-20_Supa_helm-and-coil.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-20_Supa_helm-and-coil.webp)

_If the captain is getting weary, be ready to tie them to the wheel_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_Supa_airship-lanterns.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_Supa_airship-lanterns.webp)

_Lantern lighting to get hooked on_

GitLab: [!4762](https://gitlab.com/veloren/veloren/-/merge_requests/4762) + [!4812](https://gitlab.com/veloren/veloren/-/merge_requests/4812)

#### Deck the hulls

_Pre-dawn light is only just beginning to colour the shapes of the town below. Your scrunched eyes make out the form of some busy-body scurrying about the street as they make an overly enthused start to their day. Perhaps they find a special joy in filling the void of these early morning hours. You do not._

_But, there are some thing that promise chase of a different joy - a Frost Gigas sighting just outside a city some leagues away. Only a couple of weeks ago this would have meant an even earlier rise, and a relentless pace through all manner of terrain to arrive with some degree of timeliness. So, while cold, your feet are thankful they only have to stand at the docking port of an airship tower. Their gratitude does not hold up against a chilling fog that rolls in, and you shuffle back to the meagre shelter of some stacked crates, peeking over to watch for your ship's arrival._

_At very long last it comes into view and settles in to dock. You jog a little on the spot to shake off the morning thaw, and head over to jump onto the wing. You begin with the awkward clamber and claw up to the rear deck, followed by a stub of the toe as you try to find a seat in the poor lighting. At least now you can rest and maybe catch a nap, in the comfort of a narrow wooden chair that tilts ever so slightly to the left—wait, isn't this the one you were losing cards in at the tavern last week?_

_Halfway into the flight, the captain yells out a sighting of a cult-ish looking person down below, who was probably-definitely the one that killed their uncle's sister's niece's dog. Your chair goes from slight tilt to forward lurch as the ship pitches down into a nosedive. You do not reach the Frost Gigas fight._

Well friends, you can breathe a sigh of relief as this harrowing tale retires into memory with the completed renovations of the entire airship fleet. Their updated design is sporting all kinds of nifty features:

- Direct wing-to-hull boarding, prototyped by @Tarhun and refined by @Gemu
- Rear viewing platform to take in all the scenery, courtesy of @Gemu
- Warm and cozy seats and lights, jointly installed by @Tarhun, @Supa, @isse, and @Gemu
- Brand new decking to give that bit of character, laid down by @Gemu

To maximise passenger comfort, @Tarhun also made some bespoke cruising speed adjustments to match your most pleasant gliding experiences.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_deck-the-hulls.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_deck-the-hulls.webp)

_Step by step, the sun sets on the old_

A spokesperson for Airloren denied rumours that the remodelling of its fleet is part of any re-branding efforts, and is unrelated to recent media reports of captain misconduct.

GitLab: [!4775](https://gitlab.com/veloren/veloren/-/merge_requests/4775) + [!4794](https://gitlab.com/veloren/veloren/-/merge_requests/4794)

#### Metallic makeovers

Forging new fashions, the one-man armoury that is @Gemu has pumped the bellows to bring in a complete refresh of the metal lineage of armours. The trend-setting orichalcum set also gets some shiny new embroidery in its cape. So get your head in the game, with helmets now available across the board. And don't worry, this gear can tank the barrage of admiring looks you're sure to get.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_bronze-set.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_bronze-set.webp)

_Heavy and dull, but it can take a punch._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_iron-set.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_iron-set.webp)

_Sturdy and unyielding, across ages of war._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_steel-set.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_steel-set.webp)

_The metal alloy plates provide better protection and comfort._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_cobalt-set.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_cobalt-set.webp)

_Ornamental and impenetrable, the metal will never dull._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_bloodsteel-set.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_bloodsteel-set.webp)

_Forged to preserve life, at the cost of another._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_orichalcum-set.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-09_horblegorble_orichalcum-set.webp)

_An ancient alloy. Myths remain of heroes who wore this metal._

Lugging around all these voxels was more than an all-the-grocery-bags-at-once scenario. Shipping and handling was sorted out by @UncomfySilence, with @unii providing stat redistributions and @juliancoffee advising on localisation.

GitLab: [!4765](https://gitlab.com/veloren/veloren/-/merge_requests/4765) + [!4786](https://gitlab.com/veloren/veloren/-/merge_requests/4786)

#### Mirror, mirror, in the code

A sprite is just implemented as a special kind of block, right? Well, some of them have been yearning to live outside the box. In a case of breaking up to break free, woodland town furnishings went under the knife of surgeon @Supa to prepare for a more composable future. You may have seen the corner cases of this operation while the stitches were assembled to bring them back together. Here are @isse's reflections on developing the mirrored modularity for that recovery:

_In preparation for more tile-able sprites I added an attribute for sprites to be able to mirror them._

_At first I had an issue with the sprites turning inside out when mirrored._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-22_isse_mirroring-stations.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-22_isse_mirroring-stations.webp)

_But got it working with some [clever shader code](https://gitlab.com/veloren/veloren/-/blob/master/assets/voxygen/shaders/sprite-vert.glsl?ref_type=heads#L98)._

[![An excerpt of @isse's shader code, with an image below of the 'clever girl' meme from the movie 'Jurassic Park'](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-08_horblegorble_clever-girl.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-08_horblegorble_clever-girl.webp)

Clever girl

_If you played the game this last month you might've noticed that chairs were rotated wrong, beds and tables were just one corner... That's because we updated most of the town sprites to be tile-able, but hadn't updated the code yet. Which was the next thing I started working on, expanding our system to generate composed sprites from when I added the lanterns earlier. I added some methods for placing both one, and two dimensional tile-able sprites. Examples of one dimensional are benches, wardrobes and bookshelves. And two dimensional are tables and beds._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-23_isse_1d-mirroring.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-23_isse_1d-mirroring.webp)

_I got some interesting beds while coding this._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-26_isse_funny-beds.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-26_isse_funny-beds.webp)

_But got it working eventually. So try our new beds with a "roommate"!_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-23_isse_working-mirroring.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-23_isse_working-mirroring.webp)

GitLab: [!4758](https://gitlab.com/veloren/veloren/-/merge_requests/4758) + [!4768](https://gitlab.com/veloren/veloren/-/merge_requests/4768)

#### Bed and bookfest

Books and bodies can rest easy with new furniture models from @unii. In light of the sprite mirroring changes, they have all been sliced and diced into tiled pieces. See if you can spot the seams.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_unii_beds-beds-beds.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_unii_beds-beds-beds.webp)

_Hard, soft, wood, stone. Could start counting choices to fall asleep_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_unii_bookcase-and-ladder.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-24_unii_bookcase-and-ladder.webp)

_Bookshelves: where they go to sleep between being read_

GitLab: [!4764](https://gitlab.com/veloren/veloren/-/merge_requests/4764)

#### Instrumentally, my dear Watson

New sounds of triumph have been filling the chambers of demoted bosses, and joining in the concerts and parades of victory back in town. Meet the latest additions to your boastful ensemble:

- [Starlight Conch](https://wiki.veloren.net/wiki/Starlight_Conch): a honking great idea from @floppy, with @Gemu's model touch ups
- [Viola Pizzicato](https://wiki.veloren.net/wiki/Viola_Pizzicato): hand plucked by @DaforLynx, modelled by @floppy and recoloured for a blood-red vibe by @Supa
- [Timbrel of Chaos](https://wiki.veloren.net/wiki/Timbrel_of_Chaos): what began as a tambourine by @floppy, @Gemu transformed into the Mindflayer's instrument of pain
- [Rhythmo](https://wiki.veloren.net/wiki/Rhythmo): keys, lights, and banger boops by @floppy - do you reckon it could run DOOM?

Your browser does not support the video tag. Your browser does not support the video tag.

🔊 _Beat-ing bosses_

GitLab: [!4772](https://gitlab.com/veloren/veloren/-/merge_requests/4772) + [!4816](https://gitlab.com/veloren/veloren/-/merge_requests/4816)

#### Paving the way

@isse had always heard plenty of advice about watching where you step, but nothing on what to do when you don't like what you see. So she took her own ideas to the town planning hall for a much prettier outcome. Plazas and paths play by the new rules in all towns, though mesa/cliff ones are skipped in these photos for brevity.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_woodland-paving.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_woodland-paving.webp)

_Some will miss the impromptu mud baths on a rainy day_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_desert-paving.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_desert-paving.webp)

_Much easier to sweep away the latest sandstorm_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_savannah-paving.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-11_horblegorble_savannah-paving.webp)

_If the earth is good enough for building, it's good enough for walking_

GitLab: [!4749](https://gitlab.com/veloren/veloren/-/merge_requests/4749)

#### Change what you can control

Though Veloren has been developed with keyboard and mouse front of mind for the most part, we hold no grudge against our gamepad compatriots. @JimmyDdotEXE opens that door a little further by making their controls easier to navigate.

Your browser does not support the video tag. Your browser does not support the video tag.

_No illusions of control here_

GitLab: [!4436](https://gitlab.com/veloren/veloren/-/merge_requests/4436)

#### You asked, they answered

Cracking into the archives, @xMAC94x went digging for questions asked of the Tutorial bot on the official server in days gone by. These forgotten lessons have been passed on to a new generation of 'proper' NPCs. See if you can catch them in a chatty mood.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-13_horblegorble_tutorial-chatter.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-13_horblegorble_tutorial-chatter.webp)

_Wisdoms of the crowd_

GitLab: [!4771](https://gitlab.com/veloren/veloren/-/merge_requests/4771)

#### Going places

Ever catch the travel bug, but the thought of all that planning just makes you feel sick? Don't worry, @souffle has got a solution for your impulsive fancies:

_There now exists a `/goto_rand` command available to admins to teleport to a random position._

Your browser does not support the video tag. Your browser does not support the video tag.

Mind the terrain

GitLab: [!4698](https://gitlab.com/veloren/veloren/-/merge_requests/4698)

#### Getting the message

Say no to character screen FOMO, with a message queue implemented by @imbris that will catch those previously fugitive chat entries.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-13_horblegorble_chat-haiku.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-13_horblegorble_chat-haiku.webp)

_Finishing each other's haiku_

This was created as one part of the arsenal deployed in a manhunt for an elusive `/tell` notification that was never quite sure who wanted to talk to who. A search party of additional logging eventually tracked down the filtering accomplices, who gave up the notification to be humanely 'removed' from the codebase. Whispers of fear have become audible in the open issue list as marshal @imbris counts up yet another successful pursuit.

GitLab: [!4777](https://gitlab.com/veloren/veloren/-/merge_requests/4777)

#### Keeping the flames in check

Any experienced Veloren player will know that the dramatic effect power (secret stat) of a shockwave is all in the timing, so @Supa was surprised to see that two of the heavy hitters in the Dwarven Mines were jumping the gun. After taking them back through drama class lessons, they were quick to catch on (but not too quick now).

Your browser does not support the video tag. Your browser does not support the video tag.

_Before (left) and after (right) for Flamekeeper (top) and Forgemaster (bottom)_

GitLab: [!4805](https://gitlab.com/veloren/veloren/-/merge_requests/4805)

#### Zoomies, chill out

@FERIIXU arrived with their first MR✨ to fix an [issue](https://gitlab.com/veloren/veloren/-/issues/2042) raised in mid-January by @imbris. While either on-screen buttons or the `+` and `-` keys do the job of mini-map zooming, the latter would show up with much more enthusiasm to the job.

Your browser does not support the video tag. Your browser does not support the video tag.

_Well behaved click buttons, and their (previously) cheeky keyboard cousins_

The behaviours of both methods are now aligned with the more well-behaved approach, along with clamping guard rails. Improved logging and some comments for future developers also leave behind some tasty breadcrumbs.

GitLab: [!4761](https://gitlab.com/veloren/veloren/-/merge_requests/4761)

#### More changes:

- orientation and movement modifiers added to each stage of melee abilities, for future balancing - @srpapinha - [!4753](https://gitlab.com/veloren/veloren/-/merge_requests/4753)
- readability improvements were (carefully) made to physics code - @xMAC94x - [!4763](https://gitlab.com/veloren/veloren/-/merge_requests/4763)
- sword's bloody gash ability no longer gives energy regen - @unii - [!4745](https://gitlab.com/veloren/veloren/-/merge_requests/4745)
- soldier crabs scuttled out from under the sahagin dungeon floor - @horblegorble - [!4729](https://gitlab.com/veloren/veloren/-/merge_requests/4729)
- fixed game crash caused by slicing multi-byte characters in non-English languages - @alerty264 - [!4755](https://gitlab.com/veloren/veloren/-/merge_requests/4755)✨
- broken matrix user count badge removed from readme - @JimmyDdotEXE - [!4623](https://gitlab.com/veloren/veloren/-/merge_requests/4623)
- typo fix in economy testing code - @pat36 + @xMAC94x - [!4766](https://gitlab.com/veloren/veloren/-/merge_requests/4766)✨
- lints can now be configured across the entire cargo workspace - @imbris - [!4769](https://gitlab.com/veloren/veloren/-/merge_requests/4769)
- credits and licensing added for @GeekyGami's music tracks - [!4767](https://gitlab.com/veloren/veloren/-/merge_requests/4767)
- removed old `toggle_keybinding_mode` from voxygen - @hnrq - [!4773](https://gitlab.com/veloren/veloren/-/merge_requests/4773)✨
- large horn added to NPC trading stocks - @Crabo - [!4754](https://gitlab.com/veloren/veloren/-/merge_requests/4754)
- improvements for new inventory methods - @imbris - [!4757](https://gitlab.com/veloren/veloren/-/merge_requests/4757)
- fixed "Uid was not mapped to any entity" client error; included airships in rtsim ID map - @imbris - [!4776](https://gitlab.com/veloren/veloren/-/merge_requests/4776)
- added `find_unused` binary to check for unusable loot tables, loadouts, items, or recipes - @isse - [!4779](https://gitlab.com/veloren/veloren/-/merge_requests/4779)
- applied most compatibility lints in preparation for moving to rust 2024 edition - @imbris - [!4770](https://gitlab.com/veloren/veloren/-/merge_requests/4770)
- fixed up syntax changes that could have caused server crash, with new tests added - @isse - [!4785](https://gitlab.com/veloren/veloren/-/merge_requests/4785)
- various improvements to the sever event system - @imbris - [!4782](https://gitlab.com/veloren/veloren/-/merge_requests/4782)
- de-aliased a conflict in NPC translations - @fnetx - [!4788](https://gitlab.com/veloren/veloren/-/merge_requests/4788)
- fix for `Cargo.lock` - @NeuralModder - [!4800](https://gitlab.com/veloren/veloren/-/merge_requests/4800)
- fixed hot reloading warnings caused by rust 2024 edition changes - @isse - [!4791](https://gitlab.com/veloren/veloren/-/merge_requests/4791)
- added check for git LFS pointers in CI job to resolve recurring issue - @MStarK3002 + @imbris - [!4797](https://gitlab.com/veloren/veloren/-/merge_requests/4797)
- window size update limited to window resize event - @isse - [!4810](https://gitlab.com/veloren/veloren/-/merge_requests/4810)
- well-fed bear config moved: `common.entity.wild.peaceful.bear` -> `common.entity.spot.bear` - @souffle - [!4809](https://gitlab.com/veloren/veloren/-/merge_requests/4809)
- wolves got faster and tougher - @Supa - [!4804](https://gitlab.com/veloren/veloren/-/merge_requests/4804)
- new message-of-the-day variations for singleplayer worlds - @horblegorble - [!4815](https://gitlab.com/veloren/veloren/-/merge_requests/4815)

### Ongoing unmerged work

#### Fresh shoots on the bow skill tree

Spring is beginning to arrive for the bow as its skill tree starts to leaf out in full colour. The new season brings on-the-fly arrow modifications and a variety of formations to draw from. You can look back at where the [discussion started](https://hackmd.io/sxLfuSElSJujHZt2_cRSWA), then checkout the [Gitlab `bow` branch](https://gitlab.com/veloren/dev/veloren/-/tree/bow) to see what @Sam has honed in on. We look forward to the final fletching.

Your browser does not support the video tag. Your browser does not support the video tag.

_Bow and tell with neighbourhood 'volunteers'_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/202x_Sam_bow-mood-board.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/202x_Sam_bow-mood-board.webp)

_Notching up a mood board_

This is the fourth of the weapon skill tree reworks, and the first of the ranged weapons.

## Discussions

### Translation migration

Winds of a different kind of season change have been blowing across the Discord plains as of late. Getting ahead of the weather, the translation working group has moved its operations over to Veloren's [Zulip server](https://veloren.zulipchat.com/), specifically the [`#wg-translation`](https://veloren.zulipchat.com/#narrow/channel/482740-wg-translation) channel. If you're new in town, feel free to drop into this [`#New contributors`](https://veloren.zulipchat.com/#narrow/channel/482725-New-contributors/topic/Coming.20from.20discord/with/511730311) thread first. And for folks hesitant to try out Zulip, the [`#new-contributors`](https://discord.com/channels/449602562165833758/851517587337773056) channel of our discord is still a good runway for your translation take-off.

### Airship evolutions

A new RFC has [docked at our Gitlab](https://gitlab.com/veloren/rfcs/-/merge_requests/48), ready to load up on your well-considered feedback. @Tarhun lays out the charts for all things airships:

- Docking infrastructure and local destination maps
- Destination and route distributions, to meet the needs of a public transportation network
- Finding the right fleet numbers, including multiple ships on extra long routes
- Resolving matters of turbulence and friction to make it safe to move about in-flight

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-27_Tarhun_airship-evolutions.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-27_Tarhun_airship-evolutions.webp)

_Notable offsets relative to the captain_

As mentioned in an earlier section, progress has already been made on matters of boarding and airspeed. You can also join in the [discussion](https://discord.com/channels/449602562165833758/797421546871324712/1344471654130253906) on Discord, which has so far covered air resistance and player vs airship interpolation.

### Locking on to what matters

@GeekyGami prompted a [discussion](https://discord.com/channels/449602562165833758/450065020878061600/1345195188041285633) on having lock-on mechanics, which brought in @Sam to [spell out](https://discord.com/channels/449602562165833758/450065020878061600/1346638782287446149) some of the core 'tenets' of combat in Veloren. Here's the short and sweet:

- Preparation is key: scouting the layout, enemies, and hazards of an area, then picking the right gear and strategy to go with
- Players are not special from other humanoid NPCs: capabilities, strengths, and weakness are shared by all
- The power gap between early-game and 'end-game' characters is not very large
- Most combat choices have some inherent trade-offs: a benefit has a downside, or takes from a fixed budget

## Community showcase

### Concept art

First-hand accounts of various explorations in voxel space. A mix of things intended for use in-game, and more experimental ideations.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-28_Gemu_sandshark-update.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-28_Gemu_sandshark-update.webp)

_Not a child-friendly sand pit — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-28_SrKStarK_iron-chakram.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-28_SrKStarK_iron-chakram.webp)

_A high-res iron chakram — by @SrKStarK_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-25_Gemu_jungle-tree-wip-or-dead.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-25_Gemu_jungle-tree-wip-or-dead.webp)

_Arboreal artistry — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/202x_unii_evolution-of-beer.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/202x_unii_evolution-of-beer.webp)

_Of brew and bottle — by @unii_

### Carpet challenge

Calling all rugged adventures! Sheath your sword, grab a cuppa, and take a seat at the voxel loom - @Supa has an artistic call to arms for you to meet. Flex your skills of symmetry by weaving together colours for a tiling carpet design. You can download this [`.vox` file](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-25_Supa_carpet-challenge.vox) as a reference, but don't feel it has to constrain your aesthetic ambitions. Here is the display room so far:

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-06_Sam113_carpet-challenge-entry.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-06_Sam113_carpet-challenge-entry.webp)

_Target practice for a sleepy head — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025_0x_Joe_Cool_carpet-challenge.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025_0x_Joe_Cool_carpet-challenge.webp)

_New crosshair designs perhaps? — by @Joe_Cool_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-12_horblegorble_jachobi-carpet-recreation.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-12_horblegorble_jachobi-carpet-recreation.webp)

_Fractal form over function — by @Jachobi ✨_

### Having some fun

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-06_souffle_helloren-logo.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-06_souffle_helloren-logo.webp)

_Doom and gloom — by @souffle_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-27_unii_legoom-fashion.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-02-27_unii_legoom-fashion.webp)

_The latest in legoom fashions — by @unii_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-0x_Dan113_baby-danari-in-a-mech-suit.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-0x_Dan113_baby-danari-in-a-mech-suit.webp)

_Intellectual property infringement, or baby Danari in a mech suit? — by @Dan113_

### Events

Pre-planned events hosted on the official server (`server.veloren.net`). You can keep an eye out for future announcements on the [discord channel](https://discord.com/channels/449602562165833758/888424036143607809).

#### Shroom Cup 2

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-02_Hrom_cart-poster.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-02_Hrom_cart-poster.webp)

_Mush! Mush! — by @Hrom_

Spores of racing fever were in the air as the day warmed up for the 2nd Shroom Cup. A downhill slope from Primore took drivers through treacherous mesa terrain before levelling out to a stretch of undulating dunes to reach the finish line at the Bridge of Blodelic. Competitive spirits were fired up with passengers free to use any weapon against opposing vehicles (or terrain). To keep things from getting into too much truffle, the races were officiated by @Gemu as the overhead umpire, who was piloting the aptly named 'Flying Dutchman'.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_horblegorble_pre-dawn-lineup.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_horblegorble_pre-dawn-lineup.webp)

_Morning shadows kept shifting the starting line — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-4.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-4.webp)

_In the heat of the moment — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-5.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-5.webp)

_View from the referee's sky cam — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-3.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-3.webp)

_Now that's pile driving — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-8.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-03-03_Gemu_shrrom-cup-8.webp)

_The much calmer, post-racing lineup — by @Gemu_

To let off pre-sprint steam, some drivers took turns behind the wheel of a 'safety' cart, putting its all-terrain features to the test across desert dunes and mesa cliffs. A few brave riders clung on behind in the 'very-much-not-safety' trailer. The many twists and twangs of the tether eventually came to a rest at the foot of what seemed to be a regular old savannah tree. But history will remember it well as the birthplace of Veloren's space program. Some have raised doubts about the capabilities of a supercharged trailer-trampoline to achieve orbital velocity, while proponents claim that further cheese and player testing will prove out the technology.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-17_horblegorble_trampoline-space-program.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/2025-04-17_horblegorble_trampoline-space-program.webp)

_Bounce for the stars! — @horblegorble_

## Screenshots

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-03_Iskava_primore-before-shroomcup.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-03_Iskava_primore-before-shroomcup.webp)

_Before the shroom cup, Primore's peaceful panorama — by @Iskava_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-01_Gemu_gigas-battle.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-01_Gemu_gigas-battle.webp)

_No time to chill out — by @Gemu_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-04_horblegorble_almost-a-whole-tree.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-04_horblegorble_almost-a-whole-tree.webp)

_Almost a whole tree — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-04_EatherBone_waoubi-optics.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-04_EatherBone_waoubi-optics.webp)

_On the wing to Waoubi — by @EatherBone_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-04_horblegorble_looking-in-on-tavern-tales.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-04_horblegorble_looking-in-on-tavern-tales.webp)

_Looking in on tavern tales — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-08_souffle_lighting-up-venton.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-08_souffle_lighting-up-venton.webp)

_The night lines of Venton — by @souffle_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-10_horblegorble_the-incompetent_cube.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-10_horblegorble_the-incompetent_cube.webp)

_Some honest branding — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-14_Alley_Oop_the-call-of-the-void.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-14_Alley_Oop_the-call-of-the-void.webp)

_Fall before the throne — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-15_Supa_dusk-at-askajan.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-15_Supa_dusk-at-askajan.webp)

_Sun-rise living — by @Supa_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-01_Crabo_well-fed-crabo.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/246/screenshots/2025-03-01_Crabo_well-fed-crabo.webp)

_A very well fed @Crabo. Stay hungry for the next one :)_
