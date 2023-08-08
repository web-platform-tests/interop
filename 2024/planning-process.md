# Proposal for Interop 2024 Process

## The Purpose of the Interop Project

*Improve interoperability significantly for the benefit of web developers and users.*

The goal of the Interop Project is to improve the web by making it easier to make websites and web apps that work in every browser or browser engine at the same time.

This is done by increasing the amount of “interoperability” between browsers — when each browser engine has implemented the same technology the exact same way, as bug-free as possible.

Today’s browsers have made a commitment to implement web technology according to a shared web standard, created in organizations such as the W3C or WHATWG, where technologies such as CSS and HTML are officially defined.

There is a seemingly infinite amount of work that browser engineering teams could be focused on. The Interop Project provides incentives to focus on the specific and practical work that will help web developers most in the coming year.

## Scope

The Interop Project is a collaboration between organizations that implement web technology in browser engines. It’s a shared agreement to prioritize work on certain web technologies to improve interoperability. And to keep track of that work by using automated tests to score how much progress each participating browser has made reaching the shared goals.

There are many fantastic ideas for what the web could become. But the Interop Project is not the place to begin making those dreams a reality. This is a place to focus on interoperable implementations of ideas that have already been defined in detail in web standards. And it’s a place to focus on interoperability through the use of automated tests to evaluate whether or not a particular browser matches what the web standard says it should be doing. In order for this to be possible, the Interop Project only focuses on specific kinds of web technology.

Everything chosen for the next year’s project must be defined in a sufficiently mature standards-track web specification. If there is no web standard, then there is no definition of what a particular technology “should” be doing. The Interop Project is not an organization for defining web standards. That work is important, and must happen in the appropriate bodies, not here.

Everything chosen for the next year’s project must be testable using automated tests on existing testing platforms. A proposal cannot be accepted if there are no automated tests to evaluate conformance to the web standard; if it’s not possible to test the technology being proposed; or if the tests would need to run in environments that are not yet available on the infrastructure for Web Platform Tests (for example, in 2022 and 2023, testing on mobile operating systems was not possible).

If there is a particular blocker making it hard to test a certain feature, that could make for a good Investigation Project proposal. And ideas about how the WPT/Interop Project testing infrastructure can be improved for the future can be proposed as Investigation Projects, to be considered as work for the Interop Project to take on in the next year.

### **Requirements for Focus Area proposals**

* This feature has a mature-enough web standard from an established standards development organization such as IETF, Khronos Group, TC39, WHATWG, or the W3C.
* This feature has high quality tests in WPT or Test262.

### **Guidance for Prioritizing Focus Area proposals**

We should prioritize areas where web developers have had problems using them because of differences between browsers, or because they aren’t implemented in all browsers. There are many sources for such information:

* Perhaps there are issues filed about such problems in the Chromium, Gecko, or WebKit bug trackers.
* Perhaps there are many complaints about this feature in public discussions on sites like Stack Overflow.
* Perhaps this feature ranks in high-demand or as a pain-point consistently in polls and surveys of web developers.
* Perhaps there are documented examples of sites or libraries working around the fact that it is missing or not interoperable.

When assessing the prioritization of existing web technology, it can be helpful to assess how often the technology is being used currently. (Such thinking should also consider important technology might not be in popular use if a lack of interoperability is a painful barrier.)

* The feature has high usage via Chrome use counters.
* The feature has high usage via HTTP Archive.
* The feature has a high number of mentions on developer resources like Stack Overflow.

There are also guiding values that should be taken into consideration, beyond pure demand:

* This feature has a positive impact on accessibility.
* This feature has a positive impact on internationalization.
* This feature has a positive impact on privacy.
* This feature has a positive impact on security.



## Process

### Timeline — 10 weeks total

1. Call for Proposal Period — three weeks (Sep 14 – Oct 5)
2. Continued discussion and refinement of proposals — one week (Oct 5 – Oct 12)
3. Elimination Round 1: Disqualification — one week (Oct 12 – Oct 19)
4. Elimination Round 2: Reduction — two weeks (Oct 19 – Nov 2)
5. Elimination Round 3: Prioritization — three weeks (Nov 2 – Nov 30, exc. North America Thanksgiving)



### Call for Proposal Period

An open call for proposals will begin on a specific date, and run for three weeks.

1. Anyone can submit a proposal.
2. Proposals should be for either:
    1. Focus Area, or
    2. Investigation Project
3. Related proposals should be filed separately. For example, all the ideas for “Web Compat” should be filed as a set of separate issues, not one issue. This makes it easier to discuss and prioritize each separately. Bundles of proposals risk being rejected or deprioritized.
4. Focus Area proposals must:
    1. Name a specific web technology.
        1. This can be a web technology that has not yet been implemented in any or all browser engines.
        2. Or this can be a web technology that has already been implemented in all three engines, but those implementations have multiple test failures that reveal a lack of compliance to the web standard, causing a lack of interoperability.
    2. The feature must be defined in a sufficiently mature standards-track web specification from one the following organizations. Please provide link to the web standard.
        1. [IETF](https://www.ietf.org/) (Standard Track)
        2. [Khronos Group](https://www.khronos.org/)
        3. [TC39](https://tc39.es/) (Stage 2+)
        4. [W3C](https://www.w3.org/) (Recommendation Track)
        5. [WHATWG](https://whatwg.org/)
    3. Describe the benefit to web developers and the web itself
    4. Link to existing tests (if any) and/or describe plan to create needed tests
5. Investigation Project proposals must:
    1. Outline their scope and their goals,
    2. Not substantially be work better suited to a group within a standards development organization,
    3. Clearly provide present or future impact on cross-browser interoperability.

As soon as each proposal is submitted as a GitHub issue, discussion of that proposal can begin. Questions can be asked. The proposal can be edited and refined.

At the end of the three weeks, the deadline will end the period when brand new proposals can be submitted.

A fourth week will allow for continued discussion and refinement. The deadline at the end of the fourth week ends the opportunity to significantly change the scope of the proposal.  The proposal will be evaluated on its state at that time.


## Focus Area Selection

### Elimination Round 1 : Disqualification

After the Call of Proposals Period has ended, the organizing committee will finalize an official list of all Focus Area proposals.

Any Focus Area proposal that does not meet the minimum publicly-stated selection criteria will be considered for preliminary elimination. For example:

1. The proposal is overly vague or broad.
2. The proposed technology is already interoperable according to WPT results.
3. The proposed technology is not on a standards track, or its standard is not sufficiently mature.

Decisions will be made at a specific meeting for discussion of preliminary eliminations. Any member organization can bring up a proposal they believe should be eliminated. Brief debate can be had. If **there is quick consensus**, that proposal will be eliminated. If there is not consensus and a longer debate is needed, the proposal will be not be eliminated and will instead move on to the next round.

1. Setup *Disqualification meeting*
2. Each organization can propose items for disqualification.
3. Brief debate on each proposal:
    1. if there is quick consensus, disqualify the proposal
    2. otherwise, send the proposal to Round 2
4. Publish the list of proposals pushed to Round 2.

### Elimination Round 2: Reduction

At this point, there is a clear list of Focus Area proposals under consideration. Each organization has two weeks to review the list of proposals and make Round 2 decisions.

Each member organization chooses `N` number of proposals they would like to see move on to Round 3. There is no ranking or scoring at this point, a simple “yes, we want this proposal to stay in consideration”. Once all the “yeses” are gathered, any proposal that does not have the support of at least one organization is eliminated.

For example, let’s imagine there are 112 focus area proposals submitted. Let’s set `N` to 10 — so each of the six organizations gets to choose 10 proposals. There will likely be significant overlap, but not complete. So imagine 32 proposals get chosen by at least one organization. (It will be no less than 10, and no more than 60.) This means the remaining 80 proposals are eliminated.

If `N` is increased, then more proposals will make it into the next round. The goal is to find a balance so all of the proposals that are most likely to be considered high priority will make it into the next round. While eliminating as many as possible, to reduce the workload of the Interop 2024 organizations. There’s no need to extensively evaluate proposals of lower priority.

### Elimination Round 3: Prioritization

The official list of Focus Area proposals is updated to reflect the elimination of proposals not chosen by any organization. Each organization now has 20 days to review the list of remaining proposals and make their Round 3 decisions.

In this round, each organization ranks the proposals in order of importance from most to least. And submits any vetos they may wish to exercise.

Any proposal that gets a veto is immediately eliminated.

Each proposal gets assigned points from each organization, according to their rank, and an ordered list of all remaining proposals is created. Where `X` is number of proposals that are ranked, and `Y` is the ranking a particular proposal gets from a certain organization, then that proposal gets `X-Y`  points from that organization. Once all 6 rankings are in for that proposal, the total points from all six organizations is known. If that proposal is not eliminated by a veto, then it has a certain number of points, and can be listed in order among the other proposals.

For example, if there are 20 remaining proposals, each organization will choose a number 1, number 2, down to number 20. Let’s say a proposal for flying cars gets the following ranks: 1, 5, 7, 10, 14, 20. That will give it the following points: 20, 15, 13, 10, 6, 1 = 65 points total.

(If there appear to be quite a few proposals remaining in this round, the group can decide to only ask for each organization to submit their Top `X` number, while rating the rest zero. For example, if 50 proposals remain at this point, it likely makes sense to only submit a Top 25, and to not worry about ranking 26-50 in a specific order.)

After Round 3, every remaining proposal can be listed in order, with the group’s highest priority at the top, and the lowest at the bottom.

NOTE: in the past, “Exclude” was a way to express many different kinds of sentiments — including: does not meet the minimum qualifications, or this is low priority to us. We expect “veto” to be used much less than “exclude”, because there are other ways to express those sentiments. Vetoing is specifically for objecting to a particular proposal being included *at all,* no matter how highly ranked other organizations might find it. It’s for expressing objection to a particular web technology, perhaps to something an organization has already expressed an objection to in the web standards process or otherwise has an objection to implementing.

## Interop 2023 Evaluation

During the same period organizations are making Round 3 decisions, the organizing committee should evaluate the status of Interop 2023, and decide which Focus Areas will be retired, and which will be carried over.

\[XXX]

* * *

# Decision point — what to do about Interop 2023?

## There seem to be 3 options:

### 1. Assume carryover.  Retire some.  Add how many ever that leaves space for.

1. Start with the assumption that all Interop 2023 projects will be carried over — except for the ones that are “complete”
    1. Figure out a process for determining what should be retired.
        1. Perhaps by voting for each proposal one-by-one, to keep it or not (that’s what we did last year).
        2. Perhaps by score — everything above 95% Interop gets retired, or something similar.
    2. Decide how many total Focus Areas we want for Interop 2024. Perhaps 20? 15?
    3. That determines how many “open slots” we have.
        1. 26 - the number retired = the number carried over.
        2. If we are aiming for 20 areas in 2024, and 18 are carried over (retiring 6)... then we have space to add 2 new areas.

### 2. Automatically ‘reapply’ all Focus Areas

1. Carryover nothing.
2. Take all 26 Focus Areas from Interop 2023, and put them into the selection process.

### 3. Make every Focus Area ‘reapply’

1. Carryover nothing.
2. Let people propose any focus area they believe is worthwhile still having included.

* * *

# Decision point — Investigation Project Selection

Largely the same as Interop 2023?