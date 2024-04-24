# Interop 2024 Process

The Interop Project is an ongoing effort to make the web more interoperable in key areas, prioritized by user and web developer needs. It’s part of the [_Web Platform Tests_](https://github.com/web-platform-tests/wpt) project, the main test suite for the web platform. And it’s facilitated by the [_Interop Team_](https://github.com/web-platform-tests/interop/blob/main/supporters.md).

The goal of the Interop Project is to improve the web by making it easier to make websites and web apps that work in every browser or browser engine at the same time. There are many great ways to do so, but limited resources, so hard decisions must be made about what to prioritize.

Determining what will be included in the following year’s Interop Project begins with an open call for proposals, followed by a multi-round selection process, described below. Decisions made by the consensus of the Interop Team.
* * *

## Timeline

1. Call for Proposal Period — three weeks (Sep 14 – Oct 7)
2. Continued discussion and refinement of proposals — one week (Oct 8 – Oct 14)
3. Round 1: Disqualification — one week (Oct 15 – Oct 19)
4. Round 2: Reduction — two weeks (Oct 20 – Nov 2)
5. Round 3: Prioritization — three weeks (Nov 3 – Nov 30)
6. Round 4: Decision — two weeks (Dec 1 – 14, plus time in Jan as needed)

Interop 2024 and the set of accepted proposals will be announced in January 2024. 

This timeline can be adjusted as needed, at any time, by consensus of the Interop Team. 
* * *

## Open Call for Focus Area and Investigation Proposals

An open call for proposals will begin on a specific date, and run for three weeks.

1. Anyone can submit a proposal.
2. Proposals should be for either:
     1. Focus Area, or
     2. Investigation Project
4. Related proposals should be filed separately. For example, a group of specific features to address under “Typography” should be filed as separate issues, not one issue. This makes it easier to discuss and prioritize each separately. Bundles of proposals risk being rejected or deprioritized.
5. Focus Area proposals must: 
    1. Name a specific web technology. 
        1. This can be a web technology that has not yet been implemented in any or all browser engines.
        2. Or this can be a web technology that has already been implemented in all browser engines, but those implementations have test failures that reveal a lack of compliance to the web standard, causing a lack of interoperability.
    2. The feature must be defined in a sufficiently mature standards-track web specification from one the following organizations. Please provide a link to the web standard. 
        1. [Alliance for Open Media](https://aomedia.org/)
        2. [IETF](https://www.ietf.org/) (Standard Track)
        3. [ISO](https://www.iso.org/)
        4. [Khronos Group](https://www.khronos.org/)
        5. [TC39](https://tc39.es/) (Stage 2+)
        6. [W3C](https://www.w3.org/) 
        7. [WebAssembly](https://webassembly.org/specs/) (Phase 3+)
        8. [WHATWG](https://whatwg.org/)
        9. or other similar industry web standards organizations
    3. Describe the benefit to web developers and the web itself
    4. Link to existing tests (if any) and/or describe plan to create needed tests
6. Investigation Project proposals must: 
    1. Outline their scope and their goals,
    2. Not substantially be work better suited to a group within a standards development organization,
    3. Clearly provide present or future impact on cross-browser interoperability.

As soon as each proposal is submitted as a GitHub issue, discussion of that proposal can begin. Questions can be asked. The proposal can be edited and refined.

At the end of the three weeks, the deadline will end the period when brand new proposals can be submitted.

A fourth week will allow for continued discussion and refinement of already-submitted proposals. The deadline at the end of the fourth week ends the opportunity to significantly change the scope of proposals. The proposals will be evaluated on their state at that time.
* * *

## Focus Area Selection Process

Focus area proposals will be considered, debated, selected and grouped into Focus Areas by the Interop Team in a four-round, consensus-based process.

### Round 1: Disqualification

After the Call of Proposals Period has ended, the Interop Team will finalize an official list of all proposals under consideration for inclusion in a Focus Area.

Any Focus Area proposal that does not meet the minimum publicly-stated selection criteria will be considered for preliminary elimination. For example:

* The proposal is overly vague or broad.
* The proposed technology is already interoperable according to test results.
* The proposed technology is yet not on a standards track, or its standard is not sufficiently mature.
* The proposed technology cannot be tested by the currently-available automated testing infrastructure.

One or more meetings will be held to discuss preliminary eliminations. Any member organization can bring up a proposal they believe should be eliminated. Brief debate will be had. If there is quick consensus, that proposal will be eliminated. If there is no consensus or if a longer debate is needed, the proposal will not be eliminated and will instead move on to the next round.

The positions of individual member organizations are confidential to the Interop Team.

At the end of Round 1, the Interop Team will create a clear list of proposals still under consideration for Round 2. If desired, the team may decide to let each of the rejected proposals know that they did not meet the qualifications for further consideration in the discussion thread. 

### Round 2: Reduction

Next, each member organization goes through the list of Focus Area proposals still under consideration, and chooses up to 40 proposals to nominate for consideration in Round 3. They submit their nominations to the Interop Team, where their choices remain confidential. There is no ranking or scoring at this point. It’s a simple “yes, we want this proposal to stay in consideration”.

Once all the nominations are gathered, any proposal that does not have the support of at least one organization is eliminated.

At the end of Round 2, the Interop Team will create a clear list of proposals still under consideration for Round 3. This list will remain private to the team.

### Round 3: Prioritization

In Round 3, each organization reviews the list of remaining Focus Area proposals, and ranks them in order of importance from most to least. They can choose to leave any proposal off their list. And they can declare an objection to any proposal. 

The ordered list, along with any objections, is submitted to the Interop Team.
 
An objection may come with a brief explanation to explain its reason, but this is not required. These lists and the resulting point assignments remain confidential to the team.
 
Each Focus Area proposal now gets assigned points from each organization, according to their rank, creating a collectively-ordered list of all remaining proposals.
 
Where `X` is the number of proposals, and `Y` is the ranking a particular proposal gets from a certain organization, then that proposal is awarded `X+1-Y` points from that organization. Once all 6 rankings are in for that proposal, the total points from all six organizations is known. If that proposal is not eliminated by an objection, then it has a certain number of points, and can be listed in order among the other proposals.

For example, if there are 20 remaining proposals, each organization will rank each between 1 and 20, while leaving off any they don’t want to rank. Let’s say a proposal for flying cars gets the following ranks: 1, 5, 9, 14, 20, and no rank. That will give it the following points: 20, 16, 12, 7, 1, and zero = 56 points total.

If there appear to be quite a few proposals remaining in this round, the group can decide to only ask for each organization to submit their Top `X` number, while rating the rest zero. For example, if 65 proposals remain at this point, it might make sense to only submit a Top 35, and to not worry about ranking 35-65 in a specific order.

At the end of Round 3, the Interop Team will have a clear list of all remaining Focus Area proposals, in order of collective priority. If the team decides they want to publish this ordered list, they may, as long as it’s presented as a collective decision of the Interop Team, and neither blame nor credit is assigned to any particular individual organization. 

### Round 4: Decision

At this point, the Interop Team will have made final decisions about how many Focus Areas from the previous year will be carried over (see below for that process). And they will have a collectively-prioritized list of remaining Focus Area proposals.
 
Through continuing group discussion, the Interop team will decide by consensus which of the proposals will be included in next year’s Interop Project. Not all proposals will be accepted. The team will determine how much effort is possible, and select the top proposals that fill the amount of resources available. Taking on too much work waters down the impact of what is selected. It’s better to focus on a reasonable handful of areas than to stretch browser teams so thin that it’s not possible to reach true interoperability.
 
The Interop team will also decide how to group the selected proposals into Focus Areas for scoring and presentation. 
* * *

## Carrying Over or Retiring Current Focus Areas

Each year, the Interop project selects a number of Focus Areas to include and score. The hope is that they will no longer have interoperability problems by the end of the next calendar year, and can be retired into the “Previous Focus Areas” section of the Interop Dashboard, no longer counting towards the main score.

The Interop Team will evaluate each of the current Focus Areas towards the end of the year, to decide whether to retire them, or to carry them forward into the future. To organize the discussion, the team will file an issue on GitHub for each one, encouraging participants to comment. Possibly relevant information includes:

* The current scores
* Which tests are not yet interoperable
* Information about whether significant changes are planned/expected in the near future in their implementations
* Additional context they can share around remaining failures (e.g. reasons that they might not represent significant interop concerns)
* Any additional coverage that's missing from the focus area and should be included if the focus area is carried forward

Given this information, the Interop Team will compile a list of Focus Areas to carry forward. This would include any where we believe there is still meaningful Interop work to be completed, either because we can see the remaining failures are meaningful (i.e. it's not a collection of unlikely edge cases), or because we believe that the tests/scope of the focus area should be increased. The score alone is not a determinant in whether or not a Focus Area is carried over.
 
Current Focus Areas may be modified by consensus — tests removed to narrow its scope, or partially retiring the area while carrying over the rest. Any proposal to significantly expand a Focus Area should be submitted through the Focus Area proposal process for consideration.
 
How many previous Focus Areas are retired will help determine how much additional capacity the Interop project has to add new Focus Areas. 
* * *

## Investigation Effort Selection Process

Investigation Effort proposals will be considered, debated, and selected by the Interop Team in a consensus-driven process.
 
Proposals for Investigation Efforts can also be disqualified in Round 1, if they are vaguely defined or otherwise don’t meet the basic requirements for an Interop Investigation.

Then, likely towards the end of the process for selecting Focus Areas or soon thereafter, the Interop Team will go through the Investigation Effort Proposals one by one, consider their merits and feasibility, and make a decision on which investigations to conduct in the following year. The decisions will be announced when the new Interop Project is launched. 

