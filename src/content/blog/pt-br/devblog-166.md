---
title: "This Week In Veloren 166"
guid: "https://veloren.net/blog/devblog-166/"
url: "https://veloren.net/blog/devblog-166/"
pubDate: "2022-04-04T00:00:00.000Z"
---

This week, we see Veloren's participation in /r/place. We also have a new Veloren Reading Club episode out!

\- AngelOnFira, TWiV Editor

## Contributor Work

Thanks to this week's contributors, @xMAC94x, @JakobDev, @James, @Sam, and @Tormod!

Last weekend, Veloren participated in Reddit's /r/place project. Veloren was able to get a spot on the map by allying with /r/Rust and building beside them. A template was created so that everyone in the area could know what colours to place, which made it easy to protect the area. It was a lot of fun, and we got a pretty great result eternalized in the final image (before the destruction of the whole map 😛).

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/539518074106413056/962418544564379698/unknown.png)

_Day one on the left, day two on the right._

If you missed it, be sure to check out [Veloren's April Fools post](https://veloren.net/veloren-direction)!

### Veloren Reading Club #7 by @aweinstock

This week, another Veloren Reading Club was held! The topic was profiling Veloren with the [Tracy profiler](https://github.com/wolfpld/tracy).

As a supplement to the talk, here are some commands to follow along and try Tracy yourself:

Compiling and running Tracy:

    git clone https://github.com/wolfpld/tracy
    cd tracy
    git checkout tags/v0.7.8 -b tags_v0.7.8
    cd profiler/build/unix
    make
    ./Tracy-release

Compiling and running Veloren with Tracy support:

    cargo run --features=tracy --bin veloren-server-cli
    cargo run --features=tracy --bin veloren-voxygen

Running Veloren's "swarm" client (requires running the server with --no-auth and making swarm0 an admin):

    cargo run --features='bin_bot tick_network' --bin swarm
