---
title: "This Week In Veloren 154"
guid: "https://veloren.net/blog/devblog-154/"
url: "https://veloren.net/blog/devblog-154/"
pubDate: "2022-01-10T00:00:00.000Z"
---

This week, we see lots of small improvements that are being made around the codebase. @Sam has a poll to ask about what some new abilities for the sword could look like.

\- AngelOnFira, TWiV Editor

## Contributor Work

Thanks to this week's contributors, @XVar, @tygyh, @Sam, @imbris, @Yurimomo, @FreeFull, @Pfau, @zesterer, @unvariant, @fetsorn, and @voxal!

@Sam Skill persistence changes have finally merged. That means all your skill points have been reset to ensure proper migration to the new persistence format. @Pfau implemented UI visuals for crafting modular weapons:

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/927280052448661514/unknown.png)

@Voxal implemented a setting that allows players to see their own speech bubbles. Most of the code was already there, and @Voxal just needed to check if the setting is on. The main issue was wrestling with Git, somehow 135 commits were added and it took them a few days to find a way to fix.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/928708209508765756/image.png)

@Yurimomo and @imbris managed to fix black reeds which were a byproduct of getting the square root of a negative number in shader code, which produced a NaN value.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/597826574095613962/929544901853601854/unknown.png)

@FreeFull found a solution for certain players where the world wouldn't load for them 💜

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/464698017283440640/929221153401217034/unknown.png)

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/464698017283440640/929459341608767529/unknown.png)

@Christof worked on implementing physics for skiing ⛷️ and ice skating ⛸️. They have a working prototype but will need more days to create a cool video of it.

### Sword survey by @Sam

Now that the skill persistence overhaul and ability selection UI has merged, we can now begin the skill tree rework. In the rework, we plan to shift away from passive skills instead to unlocking active abilities. We are beginning the skill tree rework with the sword, and since we want to have many abilities, we have [created a poll](https://docs.google.com/forms/d/10nQqp0SOY6j1YxJa7iV4qKjWfc8mJINNFABmeQBk80I) for all of you to suggest ideas.

The sword is intended to be a weapon that is comb-focused and involves swapping between different stances. The ideas will primarily be used as a source of inspiration when designing the sword abilities.

Some things to note, being specific in your ideas can be helpful, as it allows us to have a better idea of what your idea would entail. However if your idea contains exact numbers we will be less likely to accept it.

![](https://s3.eu-central-2.wasabisys.com/veloren-blog/cdn/523568428905398283/930641637602893874/screenshot_1641952160031.png)

_Time to bargain. See you next week!_
