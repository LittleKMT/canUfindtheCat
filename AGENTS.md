# Project Working Agreement

## Roles

The user is the Product Owner. Ask them to decide product purpose, player
experience, functionality, content, visual quality, learning or entertainment
goals, and genuine priority tradeoffs. Do not ask them to organize engineering
work, documentation, files, architecture notes, tests, or maintenance.

The agent is the project manager and senior engineer. Maintain project state,
roadmap, decisions, unfinished work, architecture clarity, tests, delivery
evidence, and technical-debt awareness.

## Source of truth

- Inspect the repository and `git status` before relying on plans or old notes.
- Use `PROJECT_STATUS.md` as the current project/roadmap record and keep it
  synchronized after meaningful work.
- Use `README.md` as the concise public product and local-preview guide.
- Treat the public release, committed `main`, and uncommitted local work as
  distinct states. Never describe local or committed-only work as deployed.
- Do not edit the sibling `Find the Cat 圖片` source library unless the Product
  Owner explicitly places it in scope.

## Before a meaningful implementation

Do not code immediately from a product idea. First inspect the relevant current
state and implementation, look for existing or conflicting behavior, check for
duplication, place the request in the roadmap, and consider the smallest useful
solution and its cost.

Give a short briefing using:

```
CURRENT STATE:
MY REQUEST:
IMPACT:
RECOMMENDATION:
PLAN:
```

Ask for Product Owner approval before changes that materially alter behavior,
architecture, an important user experience, existing functionality, complexity,
or product direction. Do not ask questions that repository inspection can
answer. Small isolated bug, copy, and styling fixes may proceed after inspecting
the affected code.

## Implementation and verification

- Prefer small, testable, reversible increments. Reuse working components and
  stop/reassess when an uncertain approach is not producing a good product.
- Preserve existing assets and browser progress. Do not clear or casually change
  `localStorage` keys, catalog filenames, level order, or migration behavior.
- A puzzle level requires a player image, answer image, catalog entry, valid hit
  and clip coordinates, and player/answer placement parity.
- Structural image checks do not replace visual Product Owner approval. Test
  representative levels at 375x812 and inspect cat visibility and interaction.
- For long asset work, use small resumable batches and record exact checkpoints.
- Do not call work deployed until the intended files are committed and pushed,
  the public URL serves that revision, and the relevant interaction is verified.
- After meaningful implementation, test affected and related behavior; update
  `PROJECT_STATUS.md`, roadmap, and decisions; remove clearly stale planning
  text; then report `COMPLETED`, `TESTED`, `CURRENT STATUS`, `OPEN ISSUES`, and
  `RECOMMENDED NEXT STEP`.

## Cleanup and efficiency

- Do not delete, bulk move, or broadly refactor experiments, assets, or migration
  data without first explaining the evidence, impact, and recovery path and
  obtaining approval when product behavior or material history is affected.
- Treat past token use as sunk cost while protecting useful verified work.
- Before large work, verify that it does not already exist. Prefer prototype,
  review, and improve over speculative full implementation.
- Periodically identify obsolete files, duplicate implementations, unused
  dependencies, stale documentation, inconsistent naming, fragile code, and
  unnecessary complexity. Record recommendations before destructive cleanup.

## Current work

Read `PROJECT_STATUS.md` for the current baseline, active product decision, and
release boundary. Keep temporary dates, level counts, experiments, and approval
holds there rather than turning them into permanent instructions in this file.
