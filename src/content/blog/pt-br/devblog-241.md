---
title: "These weeks in Veloren 241"
guid: "https://veloren.net/blog/devblog-241/"
url: "https://veloren.net/blog/devblog-241/"
pubDate: "2024-11-15T00:00:00.000Z"
---

There have been many changes this month, most notably: Switching audio frameworks, myrmidon rework, procedural glider courses, water splashes, farms, cactids, legooms ... yeah this is getting a bit long, just read the blog :P

\- Crab, TWiV contributor (and since recently a Core Developer too 🦀)

## Contributor Work

Thanks to everyone who contributed this month: @daniel, @Sam, @uniior, @isse, @imbris, @zesterer, @horblegorble, @DungeonLord, @necti, @crab, @floppy, @do-no-van, @DaforLynx, @James, @Hgrebnednav and @fotkurz.

Thanks to all translators who contributed to weblate this month: @StartaBafras, @Positron832, @Zerothas, @l3nemy, @bov, @Janez, @Thiagod86 and @Vilma !

### Merged work

#### New themed airship dock variants, by @floppy

Towns other than the default settlements now have their own airship dock variants too. As airship captains haven't learned to actually land on them yet, the docks have temporary 'Service Interrupted!' signs.

A few sample screenshots:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/airship_dock_1.webp)

_A desert airship dock_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/airship_dock_2.webp)

_A clifftown airship dock_

GitLab: [!4643](https://gitlab.com/veloren/veloren/-/merge_requests/4643)

#### Procedural glider courses, by @James

After a long wait in the review queue, the glider courses have finally been merged! Initially part of a manually placed release party event, glider courses will now generate procedurally near mountain peaks and are a fun gliding challenge :)

Your browser does not support the video tag.

GitLab: [!4568](https://gitlab.com/veloren/veloren/-/merge_requests/4568)

#### Swapping Audio Frameworks, by @DaforLynx

In the past week or two I've been working on porting the audio framework Veloren uses from Rodio to Kira. There are a few reasons for doing this:

- Rodio has a few bugs, like spatial sound glitching out
- Rodio is not built explicitly for games, meaning we have to build a lot of systems in our own janky way
- Rodio is incapable of handling DSP effects in a dynamic way

Kira has turned out to be very good as a game audio framework, chiefly because that's what it was built to be.

At first, when I decided on doing this a year ago, this endeavor was going to be a simple port - wherever Rodio calls are made, replace them with Kira calls, that sort of thing. However, after experimenting with Kira on my own, I quickly found out that it would not be so simple.

##### Rodio vs Kira

Rodio is very simple, at least from my reading. You read sound data, perform alterations such as effects, and append them to a sink's queue. Each sink has a separate queue with its own volume and state. Each sink feeds into a single stream which is then output through cpal.

Kira is markedly different. Cpal is still used as a backend, but the framework around it is more complex. It's sort of component-based. A manager is responsible for playing sounds through either a track or an emitter. Tracks can be routed to other tracks, but all tracks and emitters are eventually routed to one main track. A single track can output multiple sounds at a time, but has effectively no control over each sound.

Additionally, sounds are routed to a destination per sound. Additional data can be held by an individual sound, including its amplitude and looping parameters. Every component - sound, emitter, track, manager, and more - should be tracked by Voxygen's systems.

Nearly every function in Kira uses a tween. This allows the audio to be shaped over time, instead of instantly. For example, when you `stop()` a sound, you can have it happen instantly, or fade it out over a duration. Tweens make things much easier and simpler, but their lack of transparency can lead to problems.

###### Kira requires some rewriting

These features, and many more, mean the entire audio system has to be pretty much rewritten if I want to take advantage of them. All the handles for things like tracks, sounds, effects, etc. must be tracked. Our current "channel" structure is actually perfect for this - they are abstract structures which the engine uses to allocate sounds. I have each channel "hold" a track (they only really store the handles; the actual data is held by Kira's manager) routed to the main track, as well as all the needed handles. I have to construct sounds in a way that allows them to be `play`ed by the manager, instead of the channel, as well as potentially be altered while playing. Therefore, I make it so, as with the current system, each channel can have one sound at a time routed to its track, and holds the handle to its sound.

Instead of our bespoke `Fader` system, I can simply use adjustable tweens to smoothly control volume. Sounds cannot be easily appended to each other any more, so I have to rewrite our looping and transition systems. Luckily, Kira has yet more features to replace these. You see the picture forming?

The scope of the experiment has ballooned from simply making things play through Kira, instead of Rodio, to rewriting the audio system to take advantage of Kira's game-focused features. This means my dream of making Voxygen's audio system completely framework-agnostic is trashed, but I think that's a worthy sacrifice for cleaner and more performant audio code. In any case, the audio module as a whole can still be completely swapped out for a new one if a developer chooses.

Among the rewrites, I updated the way some Voxygen features work:

- Ambience does not have to be just looping audio. This means the thunder sounds that correspond to lightning are now controlled by the ambience volume slider, instead of the UI volume slider. Yes, thunder was technically a UI sound before.
- Instead of performing DSP on sounds before they are played, I route their outputs to a track with dynamic effects. This means ambience is now affected by the filter as well, and longer sound effects can be filtered while playing. In the future, there is great potential to have spatial reverb (courtesy of Kira) based on the camera's position (this is probably what I'm most excited to implement).
- Looping audio such as ambience is handled entirely by Kira, meaning no more awkward split-second gaps between the sound ending and beginning.
- Instead of the length of the gap between music tracks being decided when a track is played, it is now decided when a track ends. The entire music transition system was rewritten, and as such it doesn't really...work that well. I plan on fully rewriting it soon. So as of now combat music is disabled (not that it would play anywhere as of recently when all the legacy dungeons were removed).

On that note, here are some of my plans for features coming soon™:

- Redo the river ambience system to be less bad, mainly by making it ambience instead of spatial sfx.
- Redo the music system so 1) it actually works as intended and 2) combat music is less scuffed. After that I can work in music layering for the full combat music system.
- Also, dynamic music. Things like pausing/fading down when diegetic music is playing, stopping and starting new tracks in certain situations, maybe even changing entirely how music is categorized.
- Listener-based reverb and occlusion. I've been researching modern methods of doing this sort of thing, but it'll be difficult implementing it for a non-static procedural game such as Veloren. The current methods are for games with set level design with defined room volumes...never mind. But the possibility exists now!

But you can expect these to be implemented in anywhere from two months to four years.

Huge kudos to @crab for implementing sound streaming and @isse for refactoring and fixing my code.

GitLab: [!4627](https://gitlab.com/veloren/veloren/-/merge_requests/4627) (fixes and follow-ups: [!4649](https://gitlab.com/veloren/veloren/-/merge_requests/4649) + [!4641](https://gitlab.com/veloren/veloren/-/merge_requests/4641) + [!4639](https://gitlab.com/veloren/veloren/-/merge_requests/4639))

#### Stealing items owned by villagers, by @isse

Taking resources from the village inhabitants who worked relentlessly to obtain them (no they didn't, lazy bunch of rtsim npcs) will now get mad at you for committing thief.

Your browser does not support the video tag.

GitLab: [!4637](https://gitlab.com/veloren/veloren/-/merge_requests/4637) + [!4642](https://gitlab.com/veloren/veloren/-/merge_requests/4642)

#### Water splashes and river particles, by @isse

Your browser does not support the video tag.

_Splish splosh!_

GitLab: [!4640](https://gitlab.com/veloren/veloren/-/merge_requests/4640)

#### Toggle to show all recipes in the crafting menu, by @Sam and @isse

A common problem with recipes was new players no longer being able to decide whether an item was worth keeping by checking which other items could be crafted with it by searching `input:item name` in the crafting menu, if not all recipes have been obtained yet. The newly added toggle allows using this feature without limitations again.

GitLab: [!4601](https://gitlab.com/veloren/veloren/-/merge_requests/4601)

#### Myrmidon rework, by @floppy

And with that, the last old style dungeon has been removed from the map 🎉 Unlike other reworked dungeons, this one went with more of an open design, which created some beautiful results :)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/myrmidon.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/myrmidon_maze.webp)

_The underground maze of the myrmidon dungeon_

GitLab: [!4606](https://gitlab.com/veloren/veloren/-/merge_requests/4606)

#### Enabling cactids, by @floppy

Cactids have been present in the codebase for a long time it seems, but they weren't set to spawn in the world. Thanks @floppy for finishing- and giving them a loot table ♥️

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/cactid.png)

_The cactid model_

GitLab: [!4631](https://gitlab.com/veloren/veloren/-/merge_requests/4631)

#### Farm plots, by @DungeonLord and @zesterer

A plot we missed a lot from `site1`, farms are back once again!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/farm_legoom.webp)

_A legoom at a sunflower farm :legoom:_

GitLab: [!4567](https://gitlab.com/veloren/veloren/-/merge_requests/4567)

#### Legooms and Goblins, by @Gemu and @floppy

To balance out the large pool of late game enemies in the game, @Gemu and @floppy have been working on adding various smaller opponents more balanced for new players, here being some of the latest examples:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/goblin.png)

_Goblins can be found in caves and plains_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/legoom_red.png)

_Legooms spawn in newbie areas such as temperate woods, plains and rainforests_

GitLab: [!4622](https://gitlab.com/veloren/veloren/-/merge_requests/4622) + [!4626](https://gitlab.com/veloren/veloren/-/merge_requests/4626)

#### Overhaul stat scaling of armor, by @uniior

Player armor stats were rebalanced to closer match the recent balance changes done to weapons.

GitLab: [!4494](https://gitlab.com/veloren/veloren/-/merge_requests/4494) + [!4648](https://gitlab.com/veloren/veloren/-/merge_requests/4648)

#### Tracking health of entities in RTSim, by @isse

RTSim entities now remain at the same health percentage when loaded/unloaded, this was done in preparations for reworking our spawn system (still under discussion).

GitLab: [!4644](https://gitlab.com/veloren/veloren/-/merge_requests/4644)

#### Halloween event tweaks, by @crab

I introduced a new event item for halloween, Scarlet Spectacles, which turn your eyes into a red glow for a bit of extra precision power:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/scarlet_spectacles.png)

_Scarlet Spectacles_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/halloween.webp)

This change also made Bloodservants and Strigoi from the Vampire Castle spawn in the wild during the event, which I thought would be quite fitting :)

GitLab: [!4614](https://gitlab.com/veloren/veloren/-/merge_requests/4614)

#### Changes made due to recent moderation incidents, by @crab

This month hasn't been short on _✨interesting and new✨_ moderation incidents, most notably: We got hit by an automated spam attack on the official server.

To counter this, the 2 year old IP banning MR [!3363](https://gitlab.com/veloren/veloren/-/merge_requests/3363) a combined effort by @zesterer, @imbris, @isse and @crab) was rebased, the remaining comments addressed and merged, finally! More mitigations against future spam attacks are also on the way (see 'email verification' in [Ongoing unmerged work](https://veloren.net/blog/devblog-241/#ongoing-unmerged-work))

A few other changes that were implemented to mitigate and help moderate client-authoritative physics abuse:

- Improvements to the client-side physics anticheat [!4611](https://gitlab.com/veloren/veloren/-/merge_requests/4611)
- Silent spectator mode for moderators [!4608](https://gitlab.com/veloren/veloren/-/merge_requests/4608)  
  Allows moderators to log on silently without emitting any login/logout messages or appearing on the player list. If you moderate any server and want to make use this, add the following environment variable in Airshipper `VELOREN_CLIENT_TYPE=silent_spectator`, don't forget to undo this when you want to play normally again!
- Persisting server authoritative physics [!4211](https://gitlab.com/veloren/veloren/-/merge_requests/4211)
- Expose the duration of bans to clients [!4616](https://gitlab.com/veloren/veloren/-/merge_requests/4616)

#### Mindflayer fight rework, by @floppy

After being moved into the new dungeon, the old mindflayer attack patterns were not very fitting anymore. With testing help from @necti a new strategy was created which was better adapted to the new environment.

_The video for this one was lost, sorry :(_

GitLab: [!4625](https://gitlab.com/veloren/veloren/-/merge_requests/4625)

---

More changes:

- Improvements to sprite models, by @uniior and @Supa [!4635](https://gitlab.com/veloren/veloren/-/merge_requests/4635)
- Ensuring every house has a bed, by @fotkurz [!4609](https://gitlab.com/veloren/veloren/-/merge_requests/4609)
- Riposte and defensive stance balance, by @necti [!4634](https://gitlab.com/veloren/veloren/-/merge_requests/4634) and @do-no-van [!4526](https://gitlab.com/veloren/veloren/-/merge_requests/4526)
- Making sceptres use the default equip/unequip SFX, by @horblegorble [!4628](https://gitlab.com/veloren/veloren/-/merge_requests/4628)
- Make Iron Tempest (Hammer ability) multi-target, by @necti [!4633](https://gitlab.com/veloren/veloren/-/merge_requests/4633)
- Adding missing changelog entries, by @horblegorble [!4624](https://gitlab.com/veloren/veloren/-/merge_requests/4624) + [!4615](https://gitlab.com/veloren/veloren/-/merge_requests/4615)
- Various cheesing fixes, by @floppy [!4621](https://gitlab.com/veloren/veloren/-/merge_requests/4621) + [!4620](https://gitlab.com/veloren/veloren/-/merge_requests/4620)
- Adding a deletion timeout for all sprite summon abilities, by @horblegorble [!4630](https://gitlab.com/veloren/veloren/-/merge_requests/4630)
- Fixing the mod badge location in group and faction chats, by @Hgrebnednav [!4636](https://gitlab.com/veloren/veloren/-/merge_requests/4636)
- Removing the code used to render old dungeons, by @floppy [!4613](https://gitlab.com/veloren/veloren/-/merge_requests/4613)

### Ongoing unmerged work

@floppy is working on a Fire Gigas.

Your browser does not support the video tag.

@Tarhun is working on reducing the chance for towns to generate without any plots. [!4646](https://gitlab.com/veloren/veloren/-/merge_requests/4646)

@uniior is working on an updated fence (gate) sprite.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/fence_gate.png)

@crab Is working on adding email verification to authentication servers.  
This has been long overdue, but comes with a few challenges such as requiring a captcha for account creation. On the bright side, once this is implemented, password resetting can be implemented too!

@floppy, @Supa and @Gemu have been working on creating a consistent set of themed sprite variants for all town kinds.

@GeekyGami is working on custom SFX for legooms.

@Supa is working o updating the pumpkin sprites.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/pumkins.png)

### PvP event on the official server

@necti will be hosting a Bow PvP event on the official server at 19:00 GMT this Sunday (2024-11-17) in a custom arena. For more info check the discord [announcement](https://discord.com/channels/449602562165833758/888424036143607809).

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/bow_pvp_map.webp)

## Screenshots

![A large glowing mushroom inside a cave](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/cave_mushroom.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/coastal_town_tower.webp)

_The new coastal town airship docks_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1727806169833.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1729640037874.webp)

_A neat bridge found on the official server_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1729909110274.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1729990125676.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1730322979507.webp)

_Radio voice: Heavy rainfalls have caused floodings in the nearby Myrmidon site, please ensure you are carrying appropriate equipment before entering the facility..._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1730389073984.webp)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1731099564461.webp)

_These NPC dialogues sure sound menacing..._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1731191078298.webp)

_meow :3_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/screenshot_1731214640956.webp)

_Scary fish in veloren seas_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/241/screenshots/pool_party.webp)

_Pool party at the main town. See you in the next one!_
