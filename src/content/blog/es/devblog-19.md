---
title: "This Week In Veloren 19"
guid: "https://veloren.net/blog/devblog-19/"
url: "https://veloren.net/blog/devblog-19/"
pubDate: "2019-06-10T00:00:00.000Z"
---

Thanks to all of the contributors from the last two weeks, @zesterer, @desttinghim, @scorpion9979, @cody, @timo, @Pfau, @imbris, @JMS, and @Songtronix!

## Saturday Screenshot winner

Thanks to @Qutrin for this week's screenshot. We're excited to see what comes out next week!

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/585537727190269972/screenshot_1559673462249.png)

_An interesting biome transition by @Qutrin_

## Programming

Lots of work has been this week in improving the game's performance. @desttinghim changed how friction was calculated so that the player could reach top speed at any FPS. @zesterer implemented frustum culling which reduces how much needs to be rendered. @Midge is working on setting up a FPS slider in the settings as well. With all of these improvements, the game is becoming more capable on a wider range of devices.

@zesterer has been working on worldgen again, and this time we are seeing the beginning of cliffs! There is still a lot of work to go on it, but there are already some pretty cool images of them.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/587626309249662977/unknown.png)

_A cave going through a cliff_

Another idea that has been going around is varying the look terrain a little. Each block won't look exactly the same as the one beside it, but quite similar. This gives an interesting variation that makes the terrain feel more alive. Also, shadows from trees interact really nicely with them.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/587574129486725131/unknown.png)

_A player in the forest with the new terrain._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/586148057897500683/unknown.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/586148304165797899/unknown.png)

_Improved shadows from trees and in caves_

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/586088715491737600/unknown.png)

_Showing how only terrain that needs to rendered is shown. Terrain that is beyond the fog doesn't get rendered._

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/585970361439485982/unknown.png)

_Gliding over a desert of trees (to be fixed :P)_
