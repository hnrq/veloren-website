---
title: "This Week In Veloren 22"
guid: "https://veloren.net/blog/devblog-22/"
url: "https://veloren.net/blog/devblog-22/"
pubDate: "2019-07-01T00:00:00.000Z"
---

Thanks to all of the contributors this week, @Zesterer, @timo, @Slipped, @LunarEclipse, @Qutrin, @Cedric, @Songtronix, @Pfau, and @Mujina!

## Saturday Screenshot winner

Thanks to @LunarEclipse for this week's screenshot. We're excited to see what comes out next week!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/541307708146581519/595358502650642444/4Anm6JGeQp-wXrMWdcJb9MmeHAMFgOTSpAhZRyO9nKU.png)

_Flying with the starts at sunrise by @LunarEclipse_

## Programming

---

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/595332941316620298/unknown.png)

_A view of the current path system from above_

### Heads and hands by @Slipped

Hello!

I worked a bit on adding new player heads into the game this week. @zesterer managed to integrate some skeletal attributes that allow us to treat different player heads uniquely in the animation code. This allows each head to look proper and natural even at varying sizes, and with beards or long hair.

After @zesterer's work, I was able to get everything into place. @Pfau came through for some much-needed cleanup to get everything looking neat, tidy, and decapitation-free!

Finally, we're able to show off the six unique races that we have so far in Veloren: humans, dwarves, elves, orcs, undead, and our unique race, the danari.

Each race has a male and female option, with some races being a bit bigger or smaller than others. The result is a really unique and varied feel that we plan to continue to build on as we add more characteristics, like hair, hair color, eye color, and other unique racial traits, at a later time.

---

Your browser does not support the video tag.

---

Second, the other thing I worked on this week were wielding animations, which allow the player to actually hold their weapon instead of just putting it right back onto their back each time they swing it.

These animations are the first step toward fleshing out combat, they should work as a nice compliment to every future combat animation, tying everything together. These animations are in the game but not triggered yet so they're never seen, but that should come in the next few days.

The next plan is to start building out unique animations per-weapon, so that axes, swords, etc. have some unique behavior.

## Screenshots

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/542712513767145484/595243901388849172/unknown-1.png)

_Avengers assemble!_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/595327162479935638/unknown.png)

_A look at the current fog system_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/595256448426967051/unknown.png)

_A good looking cliff_
