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

## Hidden-cat artwork standard

The approved visual reference is the scene-integrated treatment used in released
levels 70-75 and approved previews 76-77. A cat must look painted into the scene,
not pasted over it.

- Add cats through scene-aware image editing so their rendering matches the
  background's illustration style, lighting, color temperature, texture,
  perspective, scale, grain, and shadow.
- Every cat must be physically related to a real scene object: behind a railing,
  window frame, stair baluster, shelf, machinery, table edge, crate, basket,
  foliage, fabric, or another credible foreground occluder.
- Preserve a recognizable cat face with two ears and two eyes. Partial bodies are
  acceptable, but floating heads, symbols, circles, icons, or ambiguous blobs are
  not.
- Never build a batch by placing the same transparent photo-cat library at a
  repeated coordinate template. Changing tint, opacity, size, or a generic alpha
  mask does not make a pasted cat scene-integrated.
- Do not reuse one level's ten-position pattern, pose order, or occlusion recipe
  in another scene. Choose every hiding place against that specific background.
- For new batches, produce one player-image prototype first and inspect it
  visually at full size and mobile scale. Continue only after the Product Owner
  approves the scene integration. Structural checks cannot approve artwork.
- Derive the orange answer image from the accepted player image and the same ten
  cat geometries. Do not add rings, arrows, glow, or markers.
- If any cat looks pasted on, stop the batch, reject that version, and repair
  only the affected level or cat before app integration, commit, push, or
  deployment.

### Efficient artwork workflow

For a continuation request, inspect only `git status -sb`, `PROJECT_STATUS.md`,
the approved reference levels, the active batch folder, the relevant catalog
entries, and the selected backgrounds. Do not rescan the repository or reopen
all historical experiments unless a required file is missing or the current
state conflicts with the status record.

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
