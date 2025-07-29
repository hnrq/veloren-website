---
title: "These weeks in Veloren 248"
guid: "https://veloren.net/blog/devblog-248/"
url: "https://veloren.net/blog/devblog-248/"
pubDate: "2025-06-13T00:00:00.000Z"
---

Let's hop back on the blog-wagon, loaded up with fixes, kits, and seasonal fun. Hopefully not too much luggage for catching the i18n train.

\- horblegorble, TWiV Contributor

Contributor work
----------------

Thanks to everyone who contributed to veloren these last weeks: @drunicornthe1, @Crabo, @unii, @juliancoffee, @isse, @horblegorble, @do-no-van, @walpo, @xMAC94X, @Knightress\_Paladin, @coffee-compiler, @Caigh, @imbris, @floppy, and @srpapinha.

Thanks to the weblate translators who contributed these last weeks:

Language

Translators

Czech

Janez

English

evgenkot | Arriona

French

Limina

German

coffee-compiler

Korean

juliancoffee

Russian

evgenkot | caesarrxx | LevmurDev | MBKenny | Arriona | Trauvel | Manifure | LuckyCoin | Carrotism | lucius\_pilgrim | VVolsha

Ukrainian

juliancoffee | Akumo33 | ministergoose | Sinari | Iced | lomkada | Karaya | DDmytroO

### Merged work

#### Chatty changes

Are you a chatterbox that loves to have a bunch of conversations going at once, but the friction of switching gears is slowing you down? @drunicornthe1 knows the feeling - and what to do about it. For their first merge request, they got their hands into the grime of the gearbox to tune up the mode swap transmission. Now it feels like driving a race car, with spacebar as the snappy paddle shifter.

 Your browser does not support the video tag.  Your browser does not support the video tag.

_Clear up the clutter and stay on message_

GitLab: [!4849](https://gitlab.com/veloren/veloren/-/merge_requests/4849) ✨

  

@Crabo has opened up the chat window for us to jump straight into Veloren's wiki:

_I added the `/wiki` command. The idea came from a GitLab [issue](https://gitlab.com/veloren/veloren/-/issues/779) created in September of 2020. It was easy to do because it uses REST to delegate the searching and redirecting to the wiki itself. I'm starting to see more people use it to point newcomers to the right wiki pages. I tell people to type "/wiki recipes" and "/wiki weapons" all the time._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_wiki-link-out.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_wiki-link-out.webp)

Answers at your fingertips

Do keep in mind that the wiki is community driven, and doesn't always keep up with the traffic of development.

GitLab: [!4823](https://gitlab.com/veloren/veloren/-/merge_requests/4823)

#### Axe juggling

A recalibration may be in order for your knife-on-a-stick playstyle, with lower combo for several abilities and changes to fierce raze.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-14_horblegorble_axe-juggling.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-14_horblegorble_axe-juggling.webp)

_Pulling off another balancing act_

Let's spell out the details of @unii's tweaks:

*   combo reductions: bulkhead, capsize, execute, maelstrom, riptide
*   one-hand fierce raze: reduced damage
*   two-hand fierce raze: increased damage, reduced range, increased energy cost

Combo-related ability descriptions have also been updated to have their numerical values separate from i18n files. That's one less ball in the air for future jugglers.

GitLab: [!4850](https://gitlab.com/veloren/veloren/-/merge_requests/4850)

#### Fixing up fonts

If it felt like the voxel style of Veloren was being taken a bit too far with some languages, @juliancoffee would agree. The sight of all these blocks activated his mining instinct, and he swung the coding pickaxe to reveal their true forms:

_We've tweaked our fonts a bit._

_TL;DR: Complicated Latin languages like Norwegian or Czech can now be rendered properly. Arabic can be rendered now. You can't use `convert_utf8_to_ascii` anymore, because we've removed it._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_fancy-fonts.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_fancy-fonts.webp)

High fidelity pickaxe sculpting

_As for a more in-depth explanation, each language had 5 fonts attached:_

*   _`Alkhemikal`, super fancy font._
*   _`OpenSans`, super generic font._
*   _`Cyri`, which I believe stands for Cyrillic, is used as a regular font for most text you see on the screen._
*   _`Wizard`, unused._
*   _`Metamorph`, unused._

_We've removed the unused `Wizard` and `Metamorph` fonts, and we've replaced `OpenSans` with `GoNotoCurrent.ttf`. The point of `OpenSans` is to be a universal font for formal information where we want the most complete coverage, for example, in chat. Except it didn't cover a lot of languages, so we've replaced it with another font that now covers almost everything, except Korean. And, because this is the font that should be the same for all languages, it's added by default, you don't need to specify it in the language's manifest._

_Additionally, we've added `EnterCommand` from Font End Dev, which is a bit different, but supports more Latin characters, so I take it as a win. Oh, and we set `GoNotoCurrent` font as regular font for Arabic. How good is support for RTL languages is to be seen, I know it's not ideal, but at least we can render it now. Oh, and I've added ґ Ґ characters to our `Cyri` font, I'm an artist now_ 👀

GitLab: [!4875](https://gitlab.com/veloren/veloren/-/merge_requests/4875)

#### No need to shout

@isse has been a busy bee, patching up all kinds of quirks in the codebase.

Town NPCs can save their voice with much more reasonable interaction distances.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-11_horblegorble_save-your-voice.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-11_horblegorble_save-your-voice.webp)

_Boombox -> voicebox_

Airships return to their normal docking positions, taking the pressure off of player's knees.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-13_horblegorble_airship-docking.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-13_horblegorble_airship-docking.webp)

_No more spring-loaded boarding process_

Caving is back to being a subterranean adventure, as their markers come out of hiding on the map.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-13_horblegorble_cave-markers.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-13_horblegorble_cave-markers.webp)

_Let's call it early practice for discoverable maps_

But wait, there's more!

*   throwable items get a pickup sound
*   desert town NPCs can direct you to crafting workshops
*   waterlogged cave entrances are less likely to be marked on the map
*   using interpolated character positions make it easier to perform interactions at high speed, e.g. with sprites on airships

GitLab: [!4851](https://gitlab.com/veloren/veloren/-/merge_requests/4851) + [!4854](https://gitlab.com/veloren/veloren/-/merge_requests/4854)

#### Kitting out

If you're allergic to Nth-wall breaking narrations, turn back now. It's @horblegorble with the lowdown on loadouts:

_The `/kit` emporium has expanded its catalogue of adventuring supplies to include a variety of new bits and bobs, outfits and bombs. Some are new to the store, while others are more bespoke bundles of existing products. As always, simply flash your admin badge at the door to unlock the unlimited shopping experience! New customers may wish to pickup an "Admin's Black Hole" bag before getting lost in the aisles. A complimentary one is included in the `/kit debug` package._

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-11_horblegorble_booty-a-plenty.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-11_horblegorble_booty-a-plenty.webp)

_Booty a-plenty_

_For those curious about details further up the supply chain, here's a look at the adjustments to the specification and generation of modular weapons for kit and loadout configs._

_`KitSpec::ModularWeapon` got split by suffix into `Set` and `Random` variants that generate (respectively) a full set of compatible weapons, or a single one chosen at random. The handling of handedness was adjusted to properly enforce the optional `hands` argument across all primary and secondary component combinations. With these two changes, `/kit pirate` could be set up to give two randomly selected one-handed swords. The hand compatibility also applied to `ItemSpec::ModularWeapon` for loadouts, which got Grim Salvagers to stick to their spec of two-handed hammers. No more smuggling in a close enough one-hander and calling it a day._

_Cheers to @juliancoffee for advice on the coding process, as well as @Tarhun and @Sam for review feedback._

_On a housekeeping note (and where this merge request started off), the new multi-model metal armour sets now have consistent names and ordering in their `.vox` files. This tidied up the `.ron` manifests, and hopefully mitigates the re-occurrence of some index mixups that arose from copy-paste modifications._

GitLab: [!4798](https://gitlab.com/veloren/veloren/-/merge_requests/4798)

#### Better beams

@do-no-van had always heard it was advantageous to have a well-rounded skillset, but found that beam attacks were taking this advice a bit far. Specifically, it got a bit funky when their radius was being added onto their nominal range. After a small trim, things lined up much neater.

 Your browser does not support the video tag.  Your browser does not support the video tag.

_Mind the gap_

GitLab: [!4869](https://gitlab.com/veloren/veloren/-/merge_requests/4869)

#### One iter to rule them all

It began with the forging of the Great Data Structures. Fields were given to the Structs; immortal, simplest and pointiest of all beings. Variants to the Enum Lords, great matchers and unionisers of the double colon halls. And traits... Traits were gifted to the Race of Types, who above all else desire strictness.

For within these structures was bound the memory addresses and assembly to govern each abstraction. But they were all of them deceived, for another abstraction was made. In the land of Ukraine, in the fires of Neovim, the Dark Lord @juliancoffee forged, in secret, declarative macros to enumerate all others. And into these macros he poured all his caffeination, his rust-fu and his will to iterate all variants:

_Ok, this is a super technical thing, but hey, it's a dev blog. Let me introduce you to a few macros I've been working on, with @imbris's help._

_Well, you_ \[may\] _know you can define `enum` in Rust:_

    enum Dir {
       Up,
       Down,
    }
    

_Let's say you have some function that takes `Dir` as output, so it'd be cool to automatically test it on all `Dirs` and check that it doesn't throws errors or something like that. Except, you can't get all `Dirs`, Rust doesn't provide such functionality..._

_Except, you can write such functionality yourself with a bit of dark magic by rewriting Rust code at compile time. One such magical rewriter is the `strum` crate, which we are using, which will generate a method `iter()` that will do just that. Unfortunately, `strum` can't handle anything more complex._

_Let's say you want to nest these enums:_

    enum Boost {
       Health,
       Gravity(Dir),
    }
    

_You'd expect to get `Boost::Health`, `Boost::Gravity(Dir::Up)`, `Boost::Gravity(Dir::Down)`, but `strum` won't generate them, because ... it won't._

_So I made a macro that would generate them. And that's not all. What if you don't have just `enum`? What if you have some `struct` you want to iterate over?_

    enum Species { Butterfly, Bird }
    enum BodyType { Male, Female }
    struct Body {
       species: Species,
       body_type: BodyType,
    }
    

_Well, that's another macro I've added which generates you all possible combinations of these `Bodies`, which would contain male and female versions for `Butterflies` and `Birds`. And if we already have that, why don't we apply that to exactly such an enum in our codebase: `Body`, which defines every possible "entity" we can have. **By entity, I mean something abstract, but it includes everything from humanoids to rabbits, to even items and objects and airships. Not campfires though, which are entities as well, but well, special.**_

_So this MR adds `Body::iter` function, which gives you a list of all possible entities. As a nice bonus, it will also generate some constants for you, like the number of kinds an enum has or if you ask it nicely, it will also give you all variants it can get. Unfortunately, the latter doesn't work with nested enums._

    enum_iter! {
        ~const_array(ALL)
        #[derive(Eq, PartialEq, Debug)]
        enum Shade {
            Good,
            Meh,
            Bad,
        }
    }
    // it is, in fact, three kinds, as you can see
    assert_eq!(Shade::NUM_KINDS, 3);
    // and these shades are really what you'd expect
    const ALL_SHADES: [Shade; Shade::NUM_KINDS] = Shade::ALL;
    assert_eq!(ALL_SHADES, [Shade::Good, Shade::Meh, Shade::Bad]);
    

_This is all done using so-called declarative macros or macros-by-example, which are powerful enough to achieve what I just showed you, but still not as convenient to write (or use) compared to more powerful kinds of macros: procedural macros. These ones don't just rewrite your code, they let you write the code to write new code._

_In the future, we plan to come up with alternative versions of these using procedural macros, and I'd personally want to release them to the general Rust ecosystem._

GitLab: [!4843](https://gitlab.com/veloren/veloren/-/merge_requests/4843)

#### Making mug shots

Whether you want to create wanted posters, a future bestiary, or establish the database for a surveillance dystopia - @isse's expansion of `img_export` to NPCs has got you covered.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-05_isse_mug-shots-w-legooms.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-05_isse_mug-shots-w-legooms.webp)

_Pick your fighter_

Here's a simple example that'll give you everything at once:

    cargo run --bin img_export -- --all-npcs
    

And another one with some of the bells and whistles:

    cargo run --bin img_export -- --all-npcs --filter traveler --seed 0 20
    

This will give you an image for all NPC paths that contain 'traveler', with a `seed` value to control randomised characteristics. Note that the final positional `scale` argument is applied to a 10x10 image, so the default of 20 gives 200x200 output. The command can be run from the top `veloren` directory of a [git repository](https://book.veloren.net/contributors/working-with-git.html), with output saved in a `img-export` folder.

If you're looking for pixel-perfect results, be aware there's still some [minor glitches](https://discord.com/channels/449602562165833758/467073814208053248/1358092772539891862) in the rendering at lower resolutions.

GitLab: [!4871](https://gitlab.com/veloren/veloren/-/merge_requests/4871)

#### Don't git confused

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-15_horblegorble_sayori-git-meme.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-15_horblegorble_sayori-git-meme.webp)

_Know your repo_

Mirror, mirror, in the cloud; why are my changes not allowed?

_Famed is thy git commit;_

_

but hold, this kitty is not it.

Ears cannot hide the tentacle.

_

_Alas, vulpes vulpes is where you fit._

A lash for thee, that heed not @walpo's note:

_Due to user feedback, @walpo and @xMAC94x have updated the mirror repositories on GitHub in order to mitigate confusion with real repositories. The changes are:_

*   _New pull requests are automatically closed._
*   _Some features of those repositories have been disabled to make them look "less real"._

_Remember folks, development takes place on GitLab, and not GitHub!_

GitLab: [!4853](https://gitlab.com/veloren/veloren/-/merge_requests/4853) + [!4857](https://gitlab.com/veloren/veloren/-/merge_requests/4857) + [!4859](https://gitlab.com/veloren/veloren/-/merge_requests/4859) + [!4868](https://gitlab.com/veloren/veloren/-/merge_requests/4868) + [!4870](https://gitlab.com/veloren/veloren/-/merge_requests/4870)

#### UI gooey

With a light makeover from @Crabo, crafting scrollbars are feeling much more confident in standing out to their mouse crush. This also inspired the footer section to give up their barefoot phase and slip on a 'boot bar' for some tidy delineation of their own.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-21_horblegorble_crafting-window.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-21_horblegorble_crafting-window.webp)

_A bit of brightening up around the edges_

GitLab: [!4801](https://gitlab.com/veloren/veloren/-/merge_requests/4801)

#### All aboard the i18n train

##### Dodging the bus factor

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-16_horblegorble_dodging-the-bus-factor.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-16_horblegorble_dodging-the-bus-factor.webp)

_Based on a true story_

Headlight eyes cut through the night. A low roar rumbles up through radiator jaws. All barrelling down at you with 7 tonnes of fury. The star of the show is ready, but @juliancoffee wants out of this road-rage thriller:

_So there was a problem of bus-factor with our i18n system, in that, frankly, I was probably the only person who fully understood how it works and how to interact with it, so well, I decided to fix this problem._

_[This guide](https://book.veloren.net/contributors/translators/developers-guide.html) covers:_

*   _all the i18n crates (or well, ones that do matter, I'm pretending that i18n-helpers doesn't exist, because)_
*   _best practices and how to properly make UIs localizable_
*   _a few simple examples_

_(Oh, and btw, I've added a [section about fonts](https://book.veloren.net/contributors/translators/weblate-admin.html#about-the-manifest-file) to "Managing Weblate'", which is inspired by the post above.)_

[!211](https://gitlab.com/veloren/book/-/merge_requests/211)

##### What shall I call thee?

They have went by many names, floating between anonymities as boss after boss has called them to arms. After all these years of thankless, nameless service, @juliancoffee finally gives them something they can identify with.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_a-history-of-summons.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_a-history-of-summons.webp)

_A history of summons_

GitLab: [!4883](https://gitlab.com/veloren/veloren/-/merge_requests/4883)

##### Back in the bottle

Some buffing items were overflowing with power, eager to info-dump into your inventory. Keeping them in line was @Knightress\_Paladin, by removing a doubled up concatenation and separating out duration information. At least this work was easier than putting toothpaste back in its tube.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_overflowing-potions-2.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_overflowing-potions-2.webp)

_Don't cry over spilled potion_

GitLab: [!4873](https://gitlab.com/veloren/veloren/-/merge_requests/4873) + [!4877](https://gitlab.com/veloren/veloren/-/merge_requests/4877)

##### All the other carriages

*   localised some trade messages - @coffee-compiler [!4862](https://gitlab.com/veloren/veloren/-/merge_requests/4862)
*   changed "gigas frost" to "frost gigas" in English i18n - @Crabo - [!4865](https://gitlab.com/veloren/veloren/-/merge_requests/4865)
*   consolidated HUD `.ftl` files that aren't yet components in weblate - @coffee-compiler - [!4820](https://gitlab.com/veloren/veloren/-/merge_requests/4820)
*   localised player names in the trade interface - @Caigh - [!4880](https://gitlab.com/veloren/veloren/-/merge_requests/4880) ✨
*   localised `/players` command - @Caigh - [!4882](https://gitlab.com/veloren/veloren/-/merge_requests/4882)
*   merged weblate translations - @juliancoffee - [!4884](https://gitlab.com/veloren/veloren/-/merge_requests/4884)
*   localised `CommandResult` in voxygen - @Caigh + @juliancoffee [!4893](https://gitlab.com/veloren/veloren/-/merge_requests/4893)

#### New names, old stories

Grab your marshmallows and settle in by the campfire. @juliancoffee has a yarn to spin:

_Ok, I don't even know where to start with this._

_We can now translate NPC names!_ 🥳

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_multilingual-guard.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-12_horblegorble_multilingual-guard.webp)

The shortcut to getting a 'new' job title

_TL;DR_

_For devs:_

*   _in `assets/common/npc_names.ron` the `generic` field had been changed to represent an i18n key_
*   _in `assets/common/entity` configs, the name now uses `Translate` with an i18n key_

_For devs and translators:_

*   _animals are now translated like this:_

    name-body-quadruped_medium-lion =
        .fem = Lioness
        .masc = Lion
    

*   _profession names and such are translated in an identical way:_

    name-custom-village-hunter =
        .fem = Huntress
        .masc = Hunter
    

*   _objects don't have any gendering information, so they only request one attribute: `neut`_

    name-custom-dungeon-cultist-turret =
        .neut = Possessed Turret
    

_And frankly, it was an MR_ \[Merge Request\] _with a fairly small diff, only 1977 lines added and 665 removed. The internalization system saw bigger ones._

_

But it's the one that brings me _a lot_ of joy, because in some way, it is the last internationalization MR.

_

_**A** last internationalization MR. We've come a long way._

##### _A beginning_

_When I joined the project around April 2021, a fair amount of work was poured into Veloren's translation, and most of the user interface could be translated via our in-house system of `.ron` files (`json`\-like config files for Rust ). We even supported fallbacks if your current language didn't have all its strings translated (thanks to `@Christof`). It worked fine, but obviously it had its limitations; after all, it's just a key-value store. You ask for translated "yes" and receive "Yes" in return. Or "Oui", or "Ja", or "Так", or "はい". You get the point. It becomes complicated when you want to pass some values or, even act slightly differently depending on these values, for example, you don't want to end up in a situation where an item costs "one coins"._

_So, in early August 2022, we fixed it. We adopted a new format: [Fluent](https://projectfluent.org/), created by Mozilla. It was similar enough in its flow to our existing system, but at the same time, it's super expressive, probably the most expressive format at that point and even today. You can read about it more in a [blog post](https://veloren.net/blog/devblog-186) about all that or in the [RFC document](https://gitlab.com/juliancoffee/kotygoroshko/-/blob/veloren-rfc/RFC.md), which quickly describes how it all works. (I think that RFC is the cooler one, but you can decide for yourself_ 😉_)_

_Fluent is a cool format, and it's enough of a reason to adopt it, but there was more to it. First of all, there was an issue with the translation experience itself. At the time, if you wanted to add localization to your language, you had to go through the same procedure all developers use, create a Gitlab account, learn how to work with Git, create a Merge Request, potentially manage your branch in case it needed updating... it wasn't easy._

_So yeah, to solve that problem, we picked [Weblate](https://weblate.org/). It's a web service that provides a more human-oriented interface and an improved management system. It took us some time to migrate, and I must thank `@walpo` and `@fnetx` for pushing through it; it wasn't easy. As well as the [Codeberg](https://codeberg.org/about) project for hosting. Right now, we're using it for all translations._

##### _The tale of two worlds_

_We were working on creating and improving the internal framework for localization, but I must mention a significant limitation of said framework. You can only translate a message into a language, if you know what language to translate to. And while it would be possible to thread this information from the client you're using (and today, we do that to display server rules), it wouldn't be as convenient as you'd need to pretty much create two localization systems. Instead, we come up with the idea of delayed evaluation of messages. I could claim the idea here, but credit goes to `@zesterer` when he implemented the `Content` type while working on NPC messages. The process is simple: instead of giving the client the final string, we give it a key for a string and the required context to evaluate this key._

_What this meant is that now you can translate not only the user interface. Now you can translate everything._

_We started with translations for NPC messages, continued with server commands, items and finally, NPC professions and animal names. And at this point, we've translated pretty much all there is. Of course, there is stuff we forgot here and there, but it's a matter of someone going through beginner issues and implementing left-out pieces. You, dear reader, can [do it as well](https://gitlab.com/veloren/veloren/-/issues/?label_name%5B%5D=wg%3A%3Atranslation)._

_Hit me up at [Discord](https://discord.com/channels/449602562165833758/851517587337773056) or [Zulip](https://veloren.zulipchat.com/#narrow/channel/482740-wg-translation), I'll probably be able to guide you. And if you're a translator and notice that something is missing from the game and there are no issues for that, feel free to create one (don't forget to add `wg:translation` label)._

##### _The future_

_So what would be the next chapter for Veloren internationalization? With our near complete coverage, we need to fill small holes, probably also implement i18n for plugins, and focus on QoL improvements. Maybe even contribute to Weblate, who knows?_

_But if I'd draw a big theme, I would say one word: Gender._

_It's a complicated topic, but that makes it even more exciting. And I think I'll share some thoughts on it with you all. To begin, we already have a (bit shaky) foundation to build on. Check out `assets/voxygen/i18n/it/hud/chat.ftl`:_

    hud-chat-connection_lost =
        { $user_gender ->
            [she] Connessione persa. Verrai scollegata tra { $time } secondi.
           *[he] Connessione persa. Verrai scollegato tra { $time } secondi.
        }
    

_I don't read Italian, but I bet you'd have an even harder time with the Ukrainian example, so bear with me. You can see the power of `Fluent` here, every message can not just splice passed arguments to it, it can act on them. Which is especially useful for numbers, as Fluent supports the whole [Unicode standard](https://www.unicode.org/cldr/cldr-aux/charts/30/supplemental/language_plural_rules.html) for them, but it can be used for other stuff as well._

_Almost all strings in chat have one or multiple arguments which specify the gender attribute of an actor in context. In this case, we check if the user's gender is masculine - we use one form, if the user's gender is feminine - we use another. (`scollegata` vs `scollegato`). (If we don't know, we default to masculine in this case, that is what `*` is for)_

_And if you go to the [beginning](https://gitlab.com/veloren/veloren/-/blob/master/assets/voxygen/i18n/it/hud/chat.ftl#L14) of that file, NPC names follow a similar pattern, except here we employ a different tactic. The reason is that in both cases we 'match' on gender, but it's not the same _kind_ of gender. There is more than one gender; in fact, there are more than two. As you can guess, `hud-chat-connection_lost` in English has no matches. That's because English lacks the concept of _grammatical_ genders almost completely. It has the concept of sex, and it has the concept of gender. After all, we have all the pronouns._

_Yet the word "left" is the same whether it's "she" who left, or "he", or "they" or even "it". There's no "scollegata" and "scollegato". And most importantly, while most languages have a similar concept of sex and gender, because it's not really a linguistic thing, the concept of grammatical genders can be wildly different, so we couldn't just expose one attribute to handle everything._

_By the way, if you're still wondering, what I mean by grammatical gender, let me very quickly explain it. In some languages, _every_ word has a gender. In most European languages, it influences the article and the word's ending. So "cat" in German would be "die Katze", which declares cats are inherently feminine. In Spanish, "the red cat" would be "el gato rojo" while "the red flower" would be "la flor roja". And so on. Read the [Wikipedia page](https://en.wikipedia.org/wiki/Grammatical_gender) on it, if you want to know more._

_With all that, I define three concepts we need to consider. Sex, social gender, and grammatical gender._

_These are linked, and we're most interested in social (for names and such) and grammatical gender (for everything else). Unfortunately, at this point, we only have one: sex, which we in our codebase call the `BodyType`, a binary enumeration for Male and Female. We need to extend this system, create the concept of social gender for players and NPCs and then figure out a way to infer or define grammatical gender. The challenge lies in the fact that grammatical gender rules are kinda totally different for every language, so it will be _fun_._

_I'll end it there. Feel free to jump to our [Zulip](https://veloren.zulipchat.com/#narrow/channel/482740-wg-translation) or [Gitlab issues](https://gitlab.com/veloren/veloren/-/issues/2078) if you have some ideas._

GitLab: [!4829](https://gitlab.com/veloren/veloren/-/merge_requests/4829)

Zulip: [\[review\] Name i18n !4829](https://veloren.zulipchat.com/#narrow/channel/482740-wg-translation/topic/.E2.9C.94.20.5Breview.5D.20Name.20i18n.20!4829/with/517278837)

#### More changes:

*   updated sponsorship link on github - @walpo - [!4852](https://gitlab.com/veloren/veloren/-/merge_requests/4852)
*   re-oriented Level of Detail (LoD) model for Haniwa Catacombs - @horblegorble - [!4844](https://gitlab.com/veloren/veloren/-/merge_requests/4844)
*   solidified a floor of the Myrmidon dungeon - @floppy - [!4855](https://gitlab.com/veloren/veloren/-/merge_requests/4855)
*   updated item quality ratings for recipes, bombs, and medium potions - @horblegorble - [!4867](https://gitlab.com/veloren/veloren/-/merge_requests/4867)
*   the re-orient express chugged along with modifiers for ranged attacks - @srpapinha - [!4861](https://gitlab.com/veloren/veloren/-/merge_requests/4861)
*   reverted some duplicate commits for a cleaner history - @juliancoffee - [!4876](https://gitlab.com/veloren/veloren/-/merge_requests/4876)
*   fixed armour manifest entry for dwarven guard hands - @horblegorble - [!4878](https://gitlab.com/veloren/veloren/-/merge_requests/4878)
*   limited `git lfs` checks to correct use of pointers - @imbris - [!4879](https://gitlab.com/veloren/veloren/-/merge_requests/4879)
*   replaced string arrays with enums for diary sections and skill trees - @coffee-compiler - [!4888](https://gitlab.com/veloren/veloren/-/merge_requests/4888)
*   rotated totems summoned by Gnarling Chieftain to face their target - @horblegorble - [!4887](https://gitlab.com/veloren/veloren/-/merge_requests/4887)

### Ongoing unmerged work

#### (Re)trial by fire

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-04_Necti_supercritical-steam-engine.gif)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-04_Necti_supercritical-steam-engine.gif)

_The hypercritical steam engine — by @Necti_

@do-no-van's coding and @Necti's balancing was put through the crucible of combat in round 2 of Spicy Gigas playtesting. The big fella faced up against players and NPCs alike; thankfully all the commotion didn't cook @isse's server.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-06_horblegorble_pyretic-pillars.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-06_horblegorble_pyretic-pillars.webp)

_Pyretic pillars — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-06_horblegorble_gangup-on-gigas.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-06_horblegorble_gangup-on-gigas.webp)

_Travellers gang up on Gigas — @horblegorble_

### Discussions

#### Begun, the storage wars have

@Knightress\_Paladin has penned the [latest chapter](https://veloren.net/blog/devblog-248/\(https://gitlab.com/veloren/rfcs/-/merge_requests/50\)) in the Veloren RFC anthology, with an ode to bags, banks, and boxes. Given the different roads to travel, they've charted and articulated a course to travel, along with hazards of the terrain. All to reach one destination: a place for all things, be they necessity or novelty.

Let's take a look inside:

*   Per player, town based persistent storage at 'bank' structures

*   Can transfer between characters via stashes
*   Map UI toggle to show active stashes

*   Motivations
    *   Can dedicate your inventory to a particular outing, freeing space to grab shiny new things
    *   Dethrones inventory bag size from being the top stat
    *   Developers get some freedom to add items without encumbering players
*   Site shuffles automatically transfer stashes to their nearest town
    *   Done at time of player login, to avoid drifting over multiple shuffles
    *   Possible courier system to alleviate work of relocating items after site shuffle
    *   Differentiating between underground and above-ground settlements in the future
*   Open questions
    *   How to decide which towns have storage? e.g. requires an airship dock
    *   How do NPCs interact with the storage system?
    *   Should there be theft from storage and couriers?
*   Future possibilities
    *   Upgrades of storage at each town (capacity, security?)
        *   Could range from one-time fee(s) to embedding with a quest system
    *   Faction / sentiment influences
        *   Out of scope for the moment, but likely to influence things in the future
        *   Alignments between towns could scale courier costs
        *   Various settlements could have their own pricing systems and rates
        *   Non-friendly alignment might mean upfront/time-based costs for storage
        *   Hostile settlement should not receive items after a site shuffle

Although landing a persistent storage feature would provide the staging area for [weight based inventories](https://gitlab.com/veloren/rfcs/-/merge_requests/44) (or other inventory nerfs), it is not desired for these to take place before matters of storage are properly unboxed. Wouldn't want to end up with the worst of both worlds.

#### Counting critters

The open sky breaks through the canopy's shade as you step into the open glade. Before you now, a sight to perplex the ecological mind: half a dozen wolves, packed up against a flock of sheep. Neither with a care in the world for the other. As it has always been, but maybe not in futures yet to be seen.

Rather than wildlife as islands unto themselves, what other geographies might be possible? A grand [RTSIM](https://docs.veloren.net/veloren_rtsim/index.html) archipelago would be the straight road guess, but could make quite a mess of the tracking budget. So instead of a world-scale game of "this little piggy", taking a more zoomed out view could avoid slimming down the CPU's piggy bank.

The Pangea Project is leading an expedition into this game design space, with a recent [brainstorming session](https://discord.com/channels/449602562165833758/523568428905398283/1354528867104063761) on linking up regionally tracked populations. In attendance amongst the crowd of khaki was @Neura, @zesterer, @isse, @juliancoffee, @Gemu, and @Knightress\_Paladin. Here are their ideas so far:

*   Wildlife spawns based on population counts that are tracked by region/chunk
    *   Terrain permitting, these populations diffuse and spread between adjacent regions
    *   Entity interactions lead to a kill, death, or retreat that is tallied up against the population
*   Dynamic predator/prey modelling ([simple](https://en.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations) or [complex](https://en.wikipedia.org/wiki/Generalized_Lotka%E2%80%93Volterra_equation)) running alongside gameplay interactions
    *   With enough fudge in the numbers (sounds yummy!), this should lead to stable systems
    *   There's a few different ways to split up wildlife categories for tracking
        *   Species, body kind, ecosystem role (prey, (apex) predator)
    *   Clamping effects and repopulation mechanics may be necessary to avoid global extinctions
        *   e.g. a local extinction may trigger the re-seeding of the population elsewhere
    *   Since post-apocalyptic settings are all the rage, could always let players roam free and annihilate everything - we love seeing that our actions have consequences, right?
*   A [follow up point](https://discord.com/channels/449602562165833758/1230311096880070776/1358950683235320040): NPCs could maintain sentiments towards particular species of wildlife (rather than individuals), communicating this to other NPCs and feeding into a quest generating system.

### A questing checklist

You there, traveller! Fetch me 10 randomly dropped Gnarling bracelets and I shall grant you full gameplay immersion. That sounds realistic, right? @isse begs to differ, and reckons the recipe for quests is gonna be more than some microwave meal:

_Just to name a few properties we want of the top of my head:_

*   _It has to be implemented in [rtsim](https://veloren.net/blog/devblog-248/\(https://docs.veloren.net/veloren_rtsim/index.html\)), our world simulation, and have effects on that._
*   _Quests should be based on actual needs the npc/faction has. If there has been a cyclops attacking recently they could generate a quest to slay that. (We lack a lot of simulation for the needs of more interesting quests though)._
*   _We want a global tracker for quests, but each quest should have an actor/faction that gave the quest to also return to to complete it. And an actor/faction that received the quest._
*   _Since quests are based on needs, that means they're also somewhat time based as needs can be fulfilled. Someone else could kill the cyclops, or the quest taker took to long so the npc decided to do it themselves etc. And the quest system should be able to handle this, in some way._
*   _Not needed for first iteration, but quests should be able to handle cases where the original npc that gave the quest died. And migrate the quest to potentially another npc that npc knew._
*   _Also not needed for first iterations, but since a huge majority of a veloren world's population are npcs, they should be able to take on quests too._

Community showcase
------------------

### Concept art

First-hand accounts of various explorations in voxel space. A mix of things intended for use in-game, and more experimental ideations.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-04_GoodMan29_go-go-slimer-rangers.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-04_GoodMan29_go-go-slimer-rangers.webp)

_Go, go, slimer rangers! — by @GoodMan29_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-08_Supa_aviator-cap.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-08_Supa_aviator-cap.webp)

_High altitude headgear — by @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-x_Supa_Dan113_pipe-dreams.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-x_Supa_Dan113_pipe-dreams.webp)

_Pipe dreams — by @Supa + a recolouring by @Dan113_

### This is the way

Airships are great for travelling fast, but a good map is what you want to travel smart. To help us plan out our commutes, @Limina swapped hats from translator to tool builder, taking a blog driven development approach to the task:

_After seeing the full map of airship routes by @Froggy in [devblog 245](https://veloren.net/blog/devblog-245), I took it upon myself to fulfil the comment under it: "Now we just need a trip planner app."_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-30_horblegorble_personally-cutout.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-05-30_horblegorble_personally-cutout.webp)

_Ask and ye shall receive! The Veloren Trip Planner for Veloren's official server is available at [itch.io](https://limina-wayfarer.itch.io/veloren-trip-planner), all on the web - no download required! Code is over at [github](https://github.com/LiminaWayfarer/Veloren-Trip-Planner), under the GPLv3 license. I'll update any incorrect paths I come across - feel free to let me know if there are any I missed! For those that want more details, read on - else, you can just skip to the next section. I won't judge (much)._

 Your browser does not support the video tag.  Your browser does not support the video tag.

_The tool was made with [Godot](https://godotengine.org/) 4.1.1, as it's my preferred engine to work with (and it's open source, too!). It uses [A\* pathfinding](https://en.wikipedia.org/wiki/A*_search_algorithm) to figure out the shortest path between cities - paths are hardcoded, since we know all of them. They're easy enough to swap out though: each "town" is a node that hold a list of every other city it's connected to. That came especially in handy when I noticed some of the paths had changed since @Froggy's map was made!_

_Currently, it recreates paths every time we ask it for one - admittedly, I could skip that step and just generate it once, but it doesn't matter much given the amount of paths is quite low. That would also allow for dynamically ignoring cities or even adding/deleting them at runtime if we want to - although that's not a thing yet. :P Once we know the starting and ending cities, we can just use the paths that are created with the A\* algorithm, and voila, we have a path!_

_I don't really have a to-do list, so any suggestions are welcome - or even pull requests if you so wish~_

### Weave got a new challenger

Looming over the competition is a new entry from @Moaaswell to the [previously featured](https://veloren.net/blog/devblog-246) carpet challenge. Taking us beyond the simple square, will this stretch the fabric of the contest?

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-08_Moaaswell_carpet-challenge.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-08_Moaaswell_carpet-challenge.webp)

_Think outside the box. Be an even bigger box!_

### Explosive new meta

Get ready to have your mind blown by @Necti's feature of the throwable bomb meta that is blasting away all other playstyles. Learn about shockwave proofing your loadout, dig into make-your-own trench warfare, and stick around for some charming tips on dealing even more damage.

_Not hard to imagine an aerial bombardment support role_

Veloren's coconut farmers are greedily rubbing their palms together in anticipation of increased demand. But time will tell if player's appetities are lasting, and whether these would-be profiteers will survive the fallout.

### Phoenix fireworks

After converting their inventories into dedicated bomb factories, the players of Sporia faced a shortage of velorite and coconuts that threatened to derail their regularly scheluded fireworks display. To fill in for the local pyrotechnics shortfall, some resourceful individuals decided to import a brand new light show.

@horblegorble brings us a photographic account of the family un-friendly event that followed. Identities and profanities have been redacted to protect the (not so) innocent.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_0-reeling-er-in.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_0-reeling-er-in.webp)

_Reel 'er in_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_1-main-street.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_1-main-street.webp)

_Lighting up main street_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_2-spicy-crafting.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_2-spicy-crafting.webp)

_Recipes for disaster_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_3-waned-enthusiasm.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_3-waned-enthusiasm.webp)

_Waned enthusiasm_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_4-raining-down.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_4-raining-down.webp)

_Here comes the rain_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_5-a-new-sun.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_5-a-new-sun.webp)

_A new sun rises_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_6-upstaged.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_6-upstaged.webp)

_Getting upstaged_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_7-bullet-time.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_7-bullet-time.webp)

_Arrow time_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_8-birds-eye-view.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_8-birds-eye-view.webp)

_Bird's eye view_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_9-aftermath.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/phoenix-fireworks/2025-04-07_horblegorble_9-aftermath.webp)

_A crispy aftermath_

### Events

'twas the season of springtime sillyness in Veloren, when familiar tricksters and treasure eggs popped into play. But this year also threw an unexpected curlball into the mix.

#### April fools

We'll let @Necti do the grand reveal, with this inside scoop on Veloren's newest celebrity.

_Pay no heed to false leads — by @Necti_

The master has arrived  

The [Pigmaster](https://wiki.veloren.net/wiki/Pigmaster) is a swine to swoon over - at least, that's what their possy of rats will tell you if you ask them about forming this leaning tower of trouble. Finish off the smolest one (without losing track of it) for a chance at getting a [Rat Tail](https://wiki.veloren.net/wiki/Rat_Tail) of your own.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_x_pigmaster.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_x_pigmaster.webp)

_Master, rat, small, tiny, mini, smol — @horblegorble | @Alley\_Oop | @Crabo_

This stack of suprises was smuggled bundled into a package of ['small changes'](https://gitlab.com/veloren/veloren/-/merge_requests/4828) by @isse, along with collaborators unknown.

Exciting as it all was, the new buzz didn't steal the whole show. Folks got up to a lot of the usual unusual [April Fools](https://wiki.veloren.net/wiki/Events#April_Fools) fun.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-04_Supa_tripping-over-tricksters-to-the-concert.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-04_Supa_tripping-over-tricksters-to-the-concert.webp)

_Hop, skip, and a roll to get to the concert on time — by @Supa_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_souffle_tricks-all-round.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_souffle_tricks-all-round.webp)

_An annual tradition — by @souffle_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_x_tricky-spots.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_x_tricky-spots.webp)

_They get themselves into all sorts of tricky spots — by (➜) @souffle | @horblegorble x3_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_blazing-trails-1.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_blazing-trails-1.webp)

_Blazing trails — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_necti-leads-the-band.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_necti-leads-the-band.webp)

_@Necti blends in to lead the band — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_tables-turned.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_tables-turned.webp)

_A curious potion turns the tables on @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_rooftop-rats.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_horblegorble_rooftop-rats.webp)

_Rooftop rats — @horblegorble_

#### Easter

Although slightly overshadowed by the fresh excitement of foolish festivities, players were still keen to hop into the [Easter](https://wiki.veloren.net/wiki/Events#Easter) event. After all, you don't get to throw around surprise eggs for the rest of the year without stocking up first.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_x_turn-up-the-volume.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_x_turn-up-the-volume.webp)

_Ear ye, ear ye! — by @souffle | @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_souffle_easter-tooth-fairy.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/2025-04-01_souffle_easter-tooth-fairy.webp)

_@souffle woke up to find out the tooth fairy was helping with Easter deliveries this year_

### In the wild

#### There and back again

Let yourself be carried away by the narration of @Gbone, as they regale us a tale of marvel and mishap. Will this band of adventurers conquer all, or will the world conquer them? See them face up against wolves, caves, dungeons, and even airships and town NPCs - as well as unintentional levels of friendly fire. All in good fun as they find their way back home.

_Fame, fortune, glory, and tomato salad! — @Gbone_

Screenshots
-----------

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-06_isse_townland.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-06_isse_townland.webp)

_We've only got the one bridge, so it better be sturdy — by @isse_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-07_Alley_Oop_small-world-big-festival.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-07_Alley_Oop_small-world-big-festival.webp)

_Small worlds make for big parties — by @Alley\_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-08_unii_flexible-neck.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-08_unii_flexible-neck.webp)

_Demonstrating the value of all those neck stretches — by @unii_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-06_isse_inviting-aroma.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-06_isse_inviting-aroma.webp)

_Inviting aromas — by @isse_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-x_x_snagged-airship.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-x_x_snagged-airship.webp)

_Catching a ride — by (➜) @Val | @Limina | @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-02_horblegorble_flying-into-the-new-day.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-02_horblegorble_flying-into-the-new-day.webp)

_Flying into fresh dawns — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-05_Alley_Oop_volcanaurora.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-05_Alley_Oop_volcanaurora.webp)

_Volcanaurora — @Alley\_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-01_horblegorble_aurora-valley.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-01_horblegorble_aurora-valley.webp)

_Valley of light — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-04_horblegorble_honeyroot-0.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-04_horblegorble_honeyroot-0.webp)

_Foraging for honey-root — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Trentus_boing-boing-boing.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Trentus_boing-boing-boing.webp)

_Boing boing boing... — @Trentus_

 Your browser does not support the video tag.  Your browser does not support the video tag.

_Vibing — @Limina_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-06_isse_did-i-find-atlantis.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-06_isse_did-i-find-atlantis.webp)

_Did I find Atlantis? — @isse_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Alley_Oop_haniwa-island.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Alley_Oop_haniwa-island.webp)

_Sahagin envy — by @Alley\_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Sam113_foggy-humps.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Sam113_foggy-humps.webp)

_Foggy humps — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-03_term_junkie_gnarly-tree-0.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-03_term_junkie_gnarly-tree-0.webp)

_Living the well-shaded life — by @term\_junkie_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-07_horblegorble_pinelands.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-07_horblegorble_pinelands.webp)

_Pining for a new day — @horblegorble_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Sam113_beach-legoom.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Sam113_beach-legoom.webp)

_Late nights on the beachfront — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Sam113_peninsula-tower-0.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Sam113_peninsula-tower-0.webp)

_Pointed reflections — by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-15_Alley_Oop_highrise-district.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-15_Alley_Oop_highrise-district.webp)

_Highrise district — by @Alley\_Oop_

Heard you like silly scribbles

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-05-07_horblegorble_highrise-scribbles.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-05-07_horblegorble_highrise-scribbles.webp)

_Surprised tower-chu face_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Supa_bigflyingrock-dubbed-by-Sam113-1.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-10_Supa_bigflyingrock-dubbed-by-Sam113-1.webp)

_'bigflyingrock' — by @Supa, named by @Sam113_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-14_horblegorble_floating-grave.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-14_horblegorble_floating-grave.webp)

_Grave of the flying hero — @horblegorble, found by @Alley\_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-08_DaforLynx_definitely-some-kind-of-cave-entrance.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-08_DaforLynx_definitely-some-kind-of-cave-entrance.webp)

_Definitely some kind of cave entrance — @DaforLynx_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-11_Alley_Oop_spicy-mushrooms.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-11_Alley_Oop_spicy-mushrooms.webp)

_Extra spicy shrooms — by @Alley\_Oop_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_And_i_liminal-lines.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_And_i_liminal-lines.webp)

_Liminal lines — by @And\_i_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_And_i_sparkle-sparkle.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_And_i_sparkle-sparkle.webp)

_Sparkling spelunking (say that five times fast) — by @And\_i_

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_Limina_icy-waters-0.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_Limina_icy-waters-0.webp)

_Chillwater cliffs — by @Limina_

This developer blog is based on information collected in [#blog-content](https://discord.com/channels/449602562165833758/597826574095613962), where game contributors are always invited to communicate their updates or simply post a link to a different channel.

[![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_Alley_Oop_leggom-contemplates-a-darker-path.webp)](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/248/screenshots/2025-04-16_Alley_Oop_leggom-contemplates-a-darker-path.webp)

_The lost legoom contemplates a darker path. Let's hope they find their way back to us :)_