# Interop 2023 Planning Process

_This is original README for Interop 2023, describing the planning process and timeline. For an overview of our process after the fact, see the [proposal selection summary](./proposal-selection.md)._

The overall timeline for the planning process is:

- Public call for proposals beginning September 15.
- Proposal review by the team, with an opportunity for refinement.
- Selection of proposals by the team, based on consensus.
- Public launch in early 2023.

A more detailed timeline is available in the [Interop 2023 RFC](https://github.com/web-platform-tests/rfcs/blob/master/rfcs/interop_2023.md) and below.

If you would like to make a proposal or contribute in other ways, read on.

## Making a proposal

If you've had problems using a feature on the web because of differences between browsers, or because it isn't implemented in all browsers, it may be a good proposal for Interop 2023!

Before making a proposal, here's what to expect:

- There are two kinds of proposals:
  - **Focus Area**: Most proposals should fall into this category, where the goal is for browsers to pass a set of tests for a feature. Only features which have high quality specifications and tests are in scope.
  - **Investigation Effort**: If a feature is widely implemented, but lacks a high quality specification or tests, an investigation effort may be appropriate. An investigation efforts consists of a set of tasks that will bring the feature up to the bar required for a Focus Area in the future. If this involves any standards work, that work must be done in the appropriate standards group, and those doing the work need to join that group.
- Interop 2023 is not a venue for specifying new features; that work happens in working groups within organizations such as W3C and WHATWG.
- Interop 2023 is not a process for making browser vendors work on things they're opposed to. Decisions are made by consensus, so highly contentious features are unlikely to be accepted.
- Even great proposals may ultimately not be accepted, since we have to prioritize.

The process for making and driving a proposal is:

- **September 15 to October 15**: Submit your [Focus Area](https://github.com/web-platform-tests/interop/issues/new?template=focus-area-proposal.yml) or [Investigation Effort](https://github.com/web-platform-tests/interop/issues/new?template=investigation-effort-proposal.yml) proposal and fill in as many details as you can.
- **October 16 to October 31**: The Interop team review and discuss proposals. During this time some refinements to the proposal can still be made. After this point no further action is required, but continued participation is certainly welcome, particularly to answer any questions.
- **November 1 to November 30**: The Interop team decide, by consensus, which proposals to accept. Accepted proposals will require a pull request to document the accepted proposal in the repository. Help with this is appreciated, but not required.

The [Interop 2023 RFC]([https://github.com/web-platform-tests/rfcs/blob/master/rfcs/interop_2023.md](https://github.com/web-platform-tests/rfcs/blob/master/rfcs/interop_2023.md#proposal-selection)) describes the proposal selection in more detail.

## After a proposal is accepted

The Interop team is responsible for driving everything after a proposal is accepted. Here's what to expect:

- **December 1 to December 16**: Detailed review of the tests, and possibly writing some additional tests. Creation  of a public dashboard showing the accepted proposals.
- **January 9 to January 20**:
  - Finalize test selection.
  - Complete announcement plans. Prepare dashboard for launch.
- **January 23 to January 27**: Public launch.
- **Throughout 2023**: Track progress on the public dashboard. If issues with the test suite are found, anyone can make [test change proposals](https://github.com/web-platform-tests/interop/issues/new?template=test-change-proposal.yml), for review by the Interop team. Significant changes to the scope are unlikely to be accepted.

Ultimately, the outcome we hope for is that interoperability significantly improves, and that web developers and users benefit.
