---
title: "This Week In Veloren 197"
guid: "https://veloren.net/blog/devblog-197/"
url: "https://veloren.net/blog/devblog-197/"
pubDate: "2022-11-07T00:00:00.000Z"
---

This week, we learn about doors and train tracks.

\- Christof, TWiV Contributor

## Contributor Work

Thanks to this week's code contributors, @floppy, @aweinstock and @zesterer.

[This week's meeting minutes](https://hackmd.io/@veloren/rkP57HrSs)

### Doors by @aweinstock

Opening doors were merged this week.

For now doors open consistently in one direction defined by the world orientation, because responding to a direction they get pushed in would require adding internal state to sprites.

Your browser does not support the video tag.

### Train tracks by @aweinstock

Tracks are disabled by default and can be enabled in assets/world/features.ron. Train stations and (later) trains are still under progress.

Getting the lighting correct on the tracks made this work more complicated.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/449667182683619339/1036695222584889344/screenshot_1667237861158.png)

Your browser does not support the video tag.

### Programming Veloren by @zesterer

@zesterer gave a talk at the Rust and C++ Cardiff Meetup which gives a good overview of the early history of and the ideas behind Veloren:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/634860358623821835/1037379947058180176/screenshot_1667401038109.png)

_Exploring in the rain. See you next week!_
