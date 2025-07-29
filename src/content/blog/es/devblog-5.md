---
title: "This Week In Veloren 5"
guid: "https://veloren.net/blog/devblog-5/"
url: "https://veloren.net/blog/devblog-5/"
pubDate: "2019-03-04T00:00:00.000Z"
---

With the netcode in a state that is useable, lots of functionality has been making its way into the refactor. There is also lots of new concept art, so be sure to check that out! This week's blog was written by @Pfau and @AngelOnFira.

## Programming

With netcode primed and ready, we have started to see other functionality becoming part of the refactor. @imbris has merged in their movement work, and you can now try it out in the main branch of fresh. There have also been some improvements to the netcode, as @LunarEclipse and @Zesterer have been working closely together to make sure that it is up to snuff.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/481112886308110339/551877002060103680/unknown.png)

_After the netcode was finished last week, @Zesterer got the server and client into contact. Yay! Amazing things are on their way to come._

@Zesterer sat down and gave a general idea of the next steps for the programmers. The general gist is as follows. First, we will set up a simple 2-way chat. This is based on the old engine's headless module. We will try to set up all of the core systems required to do this, including initiating connections with the server, exchanging messages, and graceful disconnects. Much of the new networking will be based off the concepts from the previous engine, as it has proven to work well enough. Finally, the synchronization of ECS components will be worked on.

Since the Veloren refactor is centered around an ECS (Entity Component System) architecture, ECS networking is a fundamental foundation for all future multiplayer in Veloren. ECS is an architecture that focuses on building entities with components rather than having entities inherit behaviour. It allows developers to design program architecture in a way that treats the game as a series of interconnected pipelines that process data. This is known as composition over inheritance. [Here is a great example of that.](https://www.youtube.com/watch?v=wfMtDGfHWpA)

## Art

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/467073814208053248/551936033781055527/unknown.png)

_Some concepts of the login menu you’ll see when opening the game. The structures in the background are our elven buildings. Later on, we will have a 3D rendered background that might even have NPCs walking through it. We also hope to provide a server index that will be accessible through the “Servers” option._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/467073814208053248/551948505216712734/Veloren_Logo_a01.png)

_The Veloren Logo got a little alpha tag!_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/551896966196363266/Logo_Square.png)

_An upgrade to the Discord server logo._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/550633452450349056/unknown.png)

_Interface Element: WIP of the “Belt-Bar” beneath the bag icon. It will lead you into sub-menus such as settings, the map, and your equipped armour and weapons. Those functions will also be accessible by hotkeys, too._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/550795590456442881/unknown.png)

_Belt-Bar integrated into the actual UI._

Your browser does not support the video tag.

_This video shows a static placeholder login menu. You can also see the grid of the skill bar, a WIP minimap frame, the belt-bar and the bag in action!_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/551457989295341568/unknown.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/551458119671087114/unknown.png)

_Our armour and weapons specialist @Seb created this unique piece. A WIP ‘Crow-Armour’_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449660795857403905/551538540517785629/unknown.png)

_This servant of a mythical underwater creature was brought to us by @Kidsnextdorks!_

## Music

An early version of a piece that @Aeronic is working on.

Your browser does not support the audio element.

_Battle Theme_
