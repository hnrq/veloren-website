---
title: "These weeks in Veloren 242"
guid: "https://veloren.net/blog/devblog-242/"
url: "https://veloren.net/blog/devblog-242/"
pubDate: "2024-12-25T00:00:00.000Z"
---

The last few weeks we've been busy preparing for the release party, so here's a recap with everything that's happened in veloren during this time.

\- Crab, TWiV Contributor

## Contributor work

Thanks to everyone who contributed to veloren these last weeks: @miocore, @DaforLynx, @Vaga, @do-no-van, @Necti, @uniior, @Hrom, @DungeonLord, @floppy, @isse, @crab, @Tarhun, @NeuralModder, @Hgrebnednav and @horblegorble.

Thanks to the weblate contributors who contributed these last weeks: @Alerty, @ArDu, @Blesk, @bov, @crab, @fnetX, @Janez, @jecasadiego, @Jungso, @l3nemy, @loglizzy, @NeonLife, @Positron832, @spartan195, @StartaBafras, @sungbinma, @ttanesque, and @Zerotha.

### Merged work

#### Downed State, by @isse

As preparations for the ongoing respawn rework RFC (linked [here](https://veloren.net/blog/devblog-242/#rfc-discussions)), humanoids will now enter a 'downed' state instead of being killed. In this downed state, entities are still vulnerable and can only move slowly while being unable to attack, interact, or make any inventory modifications. Nearby NPCs or players can help downed entities out of this state again.

Your browser does not support the video tag.

GitLab: [!4656](https://gitlab.com/veloren/veloren/-/merge_requests/4656)

#### Snow Sprite variations, by @Green12 @Hrom and @do-no-van

@Green12 made a set of snowy sprite variations, which @Hrom created a MR for and @do-no-van added an attribute to the existing sprites to define whether to use the snowy or non-snowy variant.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/snow_sprites.png)

_The snowy sprites rendered in MagicaVoxel. Note: The hanging tree leave sprites couldn't be implemented yet._

GitLab: [!4605](https://gitlab.com/veloren/veloren/-/merge_requests/4605)

#### Attack timing balance and Frost Gigas summon rework, by @Necti

The Frost Gigas will now spawn 2 (larger) summons instead of a bunch, which got a reworked skill set and attack AI. This MR also slowed down the attack recovery duration for most entities, which should make it easier to land more hits between dodging and blocking incoming attacks.

GitLab: [!4666](https://gitlab.com/veloren/veloren/-/merge_requests/4666)

#### Sprite model updates, by @uniior

Another nice set of updated sprites:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/crate.png)

_The updated crate model rendered in MagicaVoxel_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/anvil.png)

_The updated anvil model, the easter egg is still present ;)_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/crafting_bench.png)

GitLab: [!4665](https://gitlab.com/veloren/veloren/-/merge_requests/4665) + [!4660](https://gitlab.com/veloren/veloren/-/merge_requests/4660)

#### Adding a sprite attribute to determine fence adjacency, by @DungeonLord

Instead of there being one separate sprite for each possible fence adjacency, there is now only one fence sprite with an adjacency attribute defining which model to use. This should make it easier to add more sprite style variants in the future too.

GitLab: [!4661](https://gitlab.com/veloren/veloren/-/merge_requests/4661)

#### Banjo instrument, by @floppy and @Sinari

A new crafted instrument, model by @Sinari and the audio by @floppy:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/banjo-23.png)

GitLab: [!4658](https://gitlab.com/veloren/veloren/-/merge_requests/4658)

#### Make empty town generation less likely, by @Tarhun

Most towns will now generate an initial plaza, which should remove many cases where towns don't generate with any buildings at all. There are still a few edge cases but we are working on getting rid of those too 🛠️.

GitLab: [!4646](https://gitlab.com/veloren/veloren/-/merge_requests/4646)

#### Add an indicator on learned recipe items, by @Hgrebnednav

To no longer accidentally trade a recipe you already know from a merchant or player, recipes will now indicate if you have or haven't learned a recipe yet in the item hover tooltip:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/learned_indicator.png)

GitLab: [!4652](https://gitlab.com/veloren/veloren/-/merge_requests/4652)

#### Upgrading `iced` and other dependencies in Airshipper, by @NeuralModder

Airshipper received many dependency updates, including `iced`, which should fix a few graphics issues some people were having with the launcher. In addition the caching system now automatically removes images which are no longer needed to save disk space.

Note that these changes haven't been included in an Airshipper release yet, but they will hopefully soon be.

GitLab: [airshipper!164](https://gitlab.com/veloren/airshipper/-/merge_requests/164)

#### Fix being unable to cast abilities when wallrunning, by @miocore

Instead of getting stuck in an equip-unequip cycle when trying to use abilities while wallrunning, you can once again use abilities as one would expect.

GitLab: [!4662](https://gitlab.com/veloren/veloren/-/merge_requests/4662)

#### Item price and availability balance, by @uniior

Merchants will no longer sell late-game materials such as sunsilk, diamonds and other high tier gems. In addition the price of other materials has been rebalanced to better fit the recent loot changes.

GitLab: [!4657](https://gitlab.com/veloren/veloren/-/merge_requests/4657)

#### More changes:

- Fixing a typo and the flurry ability icon not showing when not in agility stance, by @Vaga [!4670](https://gitlab.com/veloren/veloren/-/merge_requests/4670)
- Legoom sounds, by @GeekyGami and @DaforLynx [!4655](https://gitlab.com/veloren/veloren/-/merge_requests/4655)
- Fixing the hammer/axe block animation, by @miocore [!4669](https://gitlab.com/veloren/veloren/-/merge_requests/4669)
- Updating `rustls` and `idna` to address RUSTSEC advisories, by @crab [!4668](https://gitlab.com/veloren/veloren/-/merge_requests/4668)
- Updating dependencies, by @NeuralModder [!4653](https://gitlab.com/veloren/veloren/-/merge_requests/4653)
- Fix RTsim NPCs dying permanently, by @crab [!4650](https://gitlab.com/veloren/veloren/-/merge_requests/4650)

### Ongoing unmerged work

@DungeonLord is working on a new Barn structure:

![The inside of a barn with cattles](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/barns_1.webp)

![Barns generating in a coastal town](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/barns_2.webp)

@Tarhun is making airships actually _dock_ at docks:

Your browser does not support the video tag.

@uniior is working on balancing Axe ⚖️

@do-no-van is working on a fishing mechanic. Still awaiting some #game-design discussion, but here's an early preview:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/fishing.png)

### RFC discussions

As a result of a few cyclic arguments in the game design chat, we're trying to move most game desing discussions off to RFCs. Here are the ones which were discussed this month (more to be opened soon):

- Respawn rework, by @isse [rfcs!46](https://gitlab.com/veloren/rfcs/-/merge_requests/46)
- **DRAFT**: Removing/Deprecating the general combat skill tree, by @DaforLynx [rfcs!45](https://gitlab.com/veloren/rfcs/-/merge_requests/45)

## Events

@Necti hosted a sword PvP tournament on the official server in an arena made by @uniior.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/sword_pvp_1.webp)

_The beautiful arena made by @uniior_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/sword_pvp_2.webp)

_And the winner was 🥁 Necti, who would've thought..._

More events will follow up soon ;)

## Screenshots

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/cacti.webp)

_Cheap rng creating some patterns again..._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/image.webp)

_Distant town LoD_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/snow_lake.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/2024-12-16_11-26-36.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/screenshot_1733405638337.webp)

_meow :3_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/screenshot_1733913176914.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/screenshot_1734657767920.webp)

_An adlet hideout in the wild_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/screenshot_1734966787003.webp)

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/242/screenshots/christmas_event.webp)

_The christmas event started again! See you in the next post :)_
