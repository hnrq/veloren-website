---
title: "These weeks in Veloren 243"
guid: "https://veloren.net/blog/devblog-243/"
url: "https://veloren.net/blog/devblog-243/"
pubDate: "2025-03-20T00:00:00.000Z"
---

Step into the time machine, as we begin a series of catch up posts to bring ourselves up to speed with what's been happening in Veloren. It's been a relatively busy few months to start the year, with contributors new and old bringing their energy to the project. Some longer running works have also been making their debuts. Today's menu includes new mounting possibilities, pixel and voxel art updates, as well as screenshots galore.

\- horblegorble, TWiV Contributor

## Contributor work

Thanks to everyone who contributed to veloren these last weeks: @xMAC94x, @unii, @IBotDEU, @DungeonLord, @fnetx, @zesterer, @isse, @Hrom, @horblegorble, @allucaneat, @Froggy, @Anawan, @srpapinha, @crab, and @Crabo.

Thanks to the weblate contributors who contributed these last weeks: ArDu, Bandalbox, bov, fnetX, Jungso, l3nemy, NeoSlugman, Paw, Raskm, sungbinma, Tibo-Mouss, and Zerothas.

### Release... the party!

Before we see what's arrived with the new year, let's look back at how we closed out the last one.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2024-12-29_horblegorble_shenanigans.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2024-12-29_horblegorble_shenanigans.webp)

_Much of the usual shenanigans, with some new faces — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2024-12-29_horblegorble_zen-concert-1.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2024-12-29_horblegorble_zen-concert-1.webp)

_All together now! — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2024-12-29_X_migration.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2024-12-29_X_migration.webp)

_In true zen fashion: a snail's pace migration — by @Hgrebnewdnav, @Necti, @unii, @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-02_souffle_party-boating.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-02_souffle_party-boating.webp)

_An after-party boat ride — by captain @souffle_

Veloren [officially](https://gitlab.com/veloren/veloren/-/merge_requests/4674/diffs) turned 0.17 on Dec 28th, 2024. You can check out the [live stream](https://www.youtube.com/watch?v=kgK58NuBrXc) of the release party, which was again hosted at @Hannibal's [zen island](https://www.youtube.com/watch?v=weIK41W3tX0) that debuted at the 0.15 release party.

### Merged work

#### Iconic Hammer skills

Placeholder icons by @Sam finally get the bonk as new ones swing into action. Heavy lifting was done by @allucaneat, with touch ups from @Froggy to bring things over the line.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-18_horblegorble_hammer-icons.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-18_horblegorble_hammer-icons.webp)

_The hammer skill tree, now in its full pixelated glory_

GitLab: [!4450](https://gitlab.com/veloren/veloren/-/merge_requests/4450)

#### To mount or not to mount

Get yer collars and cowboy hats ready folks! @isse just rode in from a multi-merge-request code rodeo. Let's see what she's wrangled for us.

Riding capabilities are now determined mostly by mass, shepherding in a wider variety of mounts for players. However, dreams of Hirdrasil riding remain fanciful, as a few exceptions remain. Something without exception is the results of an intense game of offset catchup, with every entity getting a tailored mount point. A local tavern owner spectating @isse's performance reckons they'd be a champion at the local pin-the-tail-on-the-donkey tournament.

[![<alt>](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-19_Dan113_treant-mount.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-19_Dan113_treant-mount.webp)

_@Dan113 always wanted to level up from tree-hugger to tree-rider._

As is to be expected when striking out a new path in the world, it wasn't all smooth ground to cover. Things caught a spooky snag in the form of a kind of 'ghost of merge request past'.

Your browser does not support the video tag. Your browser does not support the video tag.

_A short-lived Veloren reboot of Ghost Rider, starring @Sam113_

Now don't think playing ghostbuster was the only fix at work here:

- voxygen updates mount animations first to prevent the rider lagging behind
- squished a bug with mounting in water that kept playing swimming animations and water noises
- other animations now work better in combination with mount movements.

Phew! What a mountain of mounting changes.

Your browser does not support the video tag. Your browser does not support the video tag.

_Some fun along the way, as @isse takes a fresh approach to rebuilding the Tower of Babel_

Though maybe the real changes were the command line fixes made along the way:

- `crustacean` added to entity list for `/body` and `/spawn`
- tab completion fixed for sub-commands
- `/outcome` get parsing for its options

GitLab: [!4689](https://gitlab.com/veloren/veloren/-/merge_requests/4689) + [!4695](https://gitlab.com/veloren/veloren/-/merge_requests/4695) + [!4691](https://gitlab.com/veloren/veloren/-/merge_requests/4691)

#### It's a whole new (default) world

Our map seed hunters have returned from another expedition, so that Veloren's default worlds may be reborn. Cooking up the final touches, from their kitchen was heard a grand chorus of excited back and forths, terrain and biome seed blending, and what this observer could only discern as a demand for pirate icebergs. The final dish was served fresh so as to bypass the small matter of voting from before.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-14_horblegorble_new-maps.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-14_horblegorble_new-maps.webp)

_new singleplayer (left) and multiplayer (right) default maps_

GitLab: [!4679](https://gitlab.com/veloren/veloren/-/merge_requests/4679)

#### Control and interaction UI updates

Sometimes it feels like everyone wants to know "where is my bag?" but no one is asking "why is my bag?". @Anawan brings us an answer to this age old question with a name change for controls from 'Bag' to 'Inventory'. Accordingly, the default keybind has been updated from \[B\] to \[I\].

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-17_horblegorble_bag-to-inventory.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-17_horblegorble_bag-to-inventory.webp)

_Time to relearn some muscle memory... (or maybe go and change the keybind)_

GitLab: [!4692](https://gitlab.com/veloren/veloren/-/merge_requests/4692) ✨

Ever find yourself adjusting the floor lighting while your valuable loot lies not more than a step away? Or does your mount insist on your attention when you're trying to pick it some apples? Never\* fear facing these frictions again, with @crab's new patented\* Interact-O-Matic system! Now featuring:

- multiple interaction targets, with each control resolved amongst them
- prioritisation of interactions, e.g. item pickup before entity petting

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-17_horblegorble_crab-interactions.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-17_horblegorble_crab-interactions.webp)

_Perhaps time to retire our keyboard wrestling belts_

\* statements pending approval from our legoom legal team.

GitLab: [!4693](https://gitlab.com/veloren/veloren/-/merge_requests/4693)

#### Admin glider goes vroom!

@zesterer lives up to his name by bringing some extra flavours to the vroom glider. These visual and acoustic updates are perfect for giving that extra bit of flare to your squadron's next airshow.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-13_zesterer_admin-glider.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-13_zesterer_admin-glider.webp)

_The night becomes his canvas_

Your browser does not support the video tag. Your browser does not support the video tag.

_🔊 A combination light show_

GitLab: [!4685](https://gitlab.com/veloren/veloren/-/merge_requests/4685)

#### Balancing acts for sword and axe

Sword and axe went up on @unii's scales of balance:

_I've rebalanced most sword and axe skills, with supervision/feedback from @Necti and a few other players. The general changes can be summarized into:_

- _M1 skills for both sword and axe had their damage significantly increased._
- _Fine-tuning the damage of most sword's adaptable skills for more consistency among them._
- _Many sword finishers have a lower combo requirement, with some tweaks (mostly nerfs) to their effectiveness to compensate for this fact._
- _Pommel Strike now deals additional poise damage if the target is blocking._
- _Most self-buffs received a nerf to their potency. In addition to this, the axe ones have received an increase in their duration._
- _A couple of axe skills that granted additional combo per hit (namely, Plunder and Rising Tide), now (partly) do so if they meet certain conditions._
- _Defiance's strength was reduced, with Hammer's Tenacity receiving a similar nerf to not overshadow the former for the time being._
- _Fracture's debuff strength was halved._
- _Axe finishers have received a slight increase to their damage output._
- _Cleave grants 1 less combo per fully-charged hit, but charges up slightly more quickly in compensation._

GitLab: [!4673](https://gitlab.com/veloren/veloren/-/merge_requests/4673) + [!4682](https://gitlab.com/veloren/veloren/-/merge_requests/4682)

#### Shield and sword go see the animation doctor

Your character's wrists can breathe a little easier after animation treatments from @srpapinha.

Your browser does not support the video tag. Your browser does not support the video tag.

_Front over flank, is what my trainer always said_

Your browser does not support the video tag. Your browser does not support the video tag.

_Guess it was possible to over-stick a landing_

Your browser does not support the video tag. Your browser does not support the video tag.

_Sharp toward enemy_

GitLab: [!4688](https://gitlab.com/veloren/veloren/-/merge_requests/4688)

#### A few more sprites get freshened up

Hot on his own heels from the [last devblog](https://veloren.net/blog/devblog-242), @unii brings us fresh updates to the airship sign, cauldron, and forest house windows.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-03_unii_fresh-sprites.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-03_unii_fresh-sprites.webp)

_Don't make any sudden movements..._

GitLab: [!4675](https://gitlab.com/veloren/veloren/-/merge_requests/4675)

#### More changes:

- Size and maximisation state of game window now gets saved, by @IBotDEU [!4097](https://gitlab.com/veloren/veloren/-/merge_requests/4097)
- Language-specific `fluent` terms removed from translations, by @fnetx [!4677](https://gitlab.com/veloren/veloren/-/merge_requests/4677)
- [Previously featured](https://veloren.net/blog/devblog-242) work on barns at the outskirts of towns got merged, by @DungeonLord [!4672](https://gitlab.com/veloren/veloren/-/merge_requests/4672)
- Realignment of tree and entrance for Haniwa Catacomb sites, by @horblegorble [!4681](https://gitlab.com/veloren/veloren/-/merge_requests/4681)
- Vampire castle chests now have the same loot as in Haniwa Catacombs, by @Crabo [!4696](https://gitlab.com/veloren/veloren/-/merge_requests/4696)
- Updated description for hammer's pommel strike, by @unii [!4697](https://gitlab.com/veloren/veloren/-/merge_requests/4697)

### Ongoing unmerged work

#### Talk of the town

The future is looking much more talkative, with an in-progress branch by @zesterer that lets NPCs explore their more conversational side.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-18_horblegorble_npc-dialogue.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-03-18_horblegorble_npc-dialogue.webp)

_With this newfound voice, travelers may well be looking to put their combat skills to work_

GitLab: [!4686](https://gitlab.com/veloren/veloren/-/merge_requests/4686)

#### Heightened alert

After hearing one too many reports of trolls and ogres 'sneaking up' on townsfolk, @James has been constructing watch towers to give guards a better view.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-12_James_guard-towers-0.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-12_James_guard-towers-0.webp)

_Will this put the town at ease?_

## Community showcase

### Frost Gigas sightings

Seasoned Gigas hunter @Hrom has compiled a heatmap of 96 sightings on the official server's previous map.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-21_Hrom_gigas-heatmap.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-21_Hrom_gigas-heatmap.webp)

_A heatmap that's cool to the touch_

### Concept art

First-hand accounts of various explorations in voxel space. A mix of things intended for use in-game, and more experimental ideations.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-XX_hulusi_terracotta-lamp_ice-staff_coin-stacks.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-XX_hulusi_terracotta-lamp_ice-staff_coin-stacks.webp)

_(left to right) | hulusi instrument concept by @Sinari | terracotta lamp by @Supa | ice staff concept by @phoenix13032005 | coin stacks concept by @unii_

### Events

Pre-planned events hosted on the official server (server.veloren.net). You can keep an eye out for future announcements on the [discord channel](https://discord.com/channels/449602562165833758/888424036143607809).

#### Geared PvP tournament

Duelists of Veloren pulled out all the stops in a full-gear, (almost) no holds barred 1v1 double elimination tournament. The action took place in a hand-crafted arena from @unii, featuring castle towers and a fighting moat. @Necti handled marketing and event streaming, and in the end emerged as the tournament champion. Speaking after the fighting, with an opponent's blood still fresh on her face, @Necti announced a swap from melee to mic for the next PvP event. Here's to a captivating career in commentary as Veloren's 'Fighting Voice'.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-06_Iskava_tournament.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-06_Iskava_tournament.webp)

_Spectators watch on under vibrant lighting — by @Iskava_

Your browser does not support the video tag. Your browser does not support the video tag.

_@unii runs through the pre-fight checklist_

_2 hours of PvP action_

Word is @unii has been cooking up his next tournament map, so stay tuned.

## Screenshots

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-26_Hrom_valley-vista.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-26_Hrom_valley-vista.webp)

_A valley vista catches the sun's last rays — by @Hrom_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-07_Alley_Oop_bull-island.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-07_Alley_Oop_bull-island.webp)

_Could this be Veloren's first ocean megafauna? — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-13_horblegorble_rainy-town.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-13_horblegorble_rainy-town.webp)

_Nestled at the foot of a mountain, this woodland town endures the rain — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-29_Sam113_scenic-savannah.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-29_Sam113_scenic-savannah.webp)

_A soft breeze carries savannah air into the jungle — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-14_Alley_Oop_gnarlings-missed-a-tree.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-14_Alley_Oop_gnarlings-missed-a-tree.webp)

_Gnarling's called a truce with this giant tree — by @Alley_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-27_VorTechnix_sunset-gliding.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-27_VorTechnix_sunset-gliding.webp)

_Who knew gliders made such good picture frames? — by @VorTechnix_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-02-22_necti_steep-road.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-02-22_necti_steep-road.webp)

_Site generation delivers us an ambitious skate ramp — by @Necti_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-17_horblegorble_tavern-views.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-17_horblegorble_tavern-views.webp)

_Tavern views in evening lighting — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-30_And_i_merry-moongazing.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2024-12-30_And_i_merry-moongazing.webp)

_Last year's merry moon gazing — by @And_i_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-21_unii_sporia-band.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/screenshots/2025-01-21_unii_sporia-band.webp)

_Another impromptu band takes the stage in Sporia — by @unii_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-21_Defo_character-art.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/243/2025-01-21_Defo_character-art.webp)

_An artistic sendoff from @Defo's elven character. Stay jolly out there :)_
