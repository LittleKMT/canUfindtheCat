# Project Status

Last audited: 2026-08-11

This file is the single source of truth for current product state, open work,
architecture, decisions, and roadmap. `README.md` remains the public product
overview. `AGENTS.md` defines how future work is managed.

## Product

Can You Find the Cat? is a mobile-first, browser-based hidden-object game. A
player opens a picture, taps hidden cats, loses one of five hearts for a wrong
tap, may use three hints, and earns one to three stars after finding every cat.

The current release has 75 puzzles and 495 cats, including 20 appended ten-cat
scenes and a dedicated Product Owner Review mode.

## Implemented and smoke-tested

- Static GitHub Pages delivery from `main`; the public site returned HTTP 200.
- Home, level picker, full-screen puzzle, result modal, and next-level flow.
- All 75 levels are selectable.
- The code implements tap targets, orange answer overlays, five-heart scoring,
  three hints, timer, stars, sound toggle, dark/light treatment for monochrome
  scenes, reset view, pinch zoom, and pan.
- Browser-local persistence for progress, scores, best time, sound, palette,
  content version, and level ordering.
- Score migration logic for several earlier level orders.
- Responsive layout: the 75-level build passed smoke testing at 375x812 with no
  horizontal overflow or console errors. The final level image loaded at its
  expected 1254x1254 size.
- The local Review mode was verified at 375x812: direct advancement, separate
  reviewer position, level 75-to-1 wraparound, and restoration of the player's
  prior Play level all passed without console errors.
- The unreleased 20-level pipeline has a structural QA report covering 20
  levels / 200 cats, shared player-answer alpha masks, bounds, unchanged source
  backgrounds, and expected cat sizes.

These are smoke and structural checks, not proof that every interaction, cat
target, or puzzle's visual quality has been manually accepted.

## Incomplete, broken, or uncertain

- Roughly 215 MiB of source and intermediate production material remains outside
  the deployed runtime and is not yet organized for long-term retention.
- The new QA verifies files and compositing, but not whether cats look naturally
  embedded, are enjoyable to find, or are fair on a phone. Five late levels
  (`next-16` through `next-20`) reuse the same coordinate pattern, which makes
  the expansion visibly template-driven and needs product review.
- No automated browser regression suite or CI exists. The repository has no
  package manifest or one-command test workflow.
- Image load failure has no user-facing error or retry path; a missing/corrupt
  level can leave the loading card displayed indefinitely.
- Stored JSON is parsed without recovery. Corrupted browser storage can prevent
  the app from starting.
- The end-of-catalog copy says "today's puzzles" although there is no daily
  puzzle selection or daily reset.
- Best times are stored but not shown in the level picker or elsewhere after the
  result screen, so part of the saved data has no visible product benefit.
- Runtime typography depends on Google Fonts; the app falls back to system fonts
  when that external request is unavailable.

## Unnecessary, duplicated, or abandoned candidates

Do not delete these without a reviewed cleanup decision.

- Eight tracked legacy images (`01.webp`, `02.webp`, `04.webp`, `05.webp`,
  `06.webp`, `08.webp`, `10.webp`, `14.webp`) are not referenced by the app.
- `app.js` carries three historical level-order arrays plus the active order.
  They support migrations, but keeping all migration data inline makes the main
  file harder to understand.
- `production/next20-samples`, `next20-samples-v2-front-face`, and
  `next20-samples-v3-integrated` are successive experiments retained beside the
  latest `next20-full` output. They contain duplicated previews, layers, and
  Python bytecode caches.
- The production tree duplicates final player/answer images in PNG while the app
  keeps WebP delivery copies. Some duplication is useful for reproducibility,
  but there is no written retention rule.
- Two different levels are named "Old Bakery Kitchen" (`ten-05` and
  `next-11`).
- Git contains a complete removed `tiny-*` attempt in history. It should remain
  historical, not be restored implicitly; the current `next-*` experiment is a
  separate replacement attempt.

## Architecture and data flow

The released app is a dependency-free static website:

1. `index.html` supplies three screens and the result modal.
2. `styles.css` supplies the responsive presentation and zoom/puzzle framing.
3. `app.js` contains both the entire level catalog and all game behavior.
4. Each level points to a player WebP plus an answer WebP. Cat coordinates in
   `app.js` determine hit areas, hint position, and which oval region of the
   answer image is revealed.
5. The browser stores progress in `localStorage`; there is no account, server,
   API, analytics service, or database.
6. GitHub Pages serves the files from `main`.

The unreleased content pipeline uses Python, Pillow, and NumPy to combine
backgrounds with reusable cat layers and export player/answer pairs. It is not
self-contained: it imports successive experimental scripts and its manifest
points to absolute background paths in the sibling `Find the Cat 圖片` folder.
A fresh clone cannot currently reproduce those levels by itself.

## Important decisions and assumptions already present

- Mobile-first, square 1254x1254 artwork, static hosting, and no login/backend.
- All level cards are currently unlocked; `unlocked` is still stored and used by
  the Play button but no longer gates the level picker.
- A level always starts with five hearts and three hints; partial play is not
  persisted.
- Stars depend only on hearts remaining, not completion time.
- Wrong guesses eventually reveal all cats and restart the same level.
- Existing local progress should survive catalog reordering through content
  version and filename-based migration.
- Player and orange-answer images should come from the same cat placement data.

## Project health

**Needs cleanup.** The released runtime is small, understandable, and working,
so significant architectural restructuring is not justified now. Health is
reduced by a large unorganized production workspace, a non-self-contained and
repetitive asset pipeline, weak product-quality validation, and the absence of
automated regression coverage.

## Current objective

Support fast Product Owner review before doing more catalog expansion. The
approved first improvement is a separate Review mode that can skip directly
through levels without changing player scores or progress. Use that mode to
review the 75-level catalog before doing more expansion.

## Active review-mode increment

- Status: implemented, mobile-verified, and included in the current release.
- Home screen has a dedicated Review mode entry.
- Review mode shows the current review position and a persistent `Next` button
  over each puzzle, including wraparound from the last level to the first.
- Reviewer position is stored separately as `cat-review-current`.
- Entering or advancing Review mode must not write player progress, scores,
  hearts, or hints.
- Leaving through Home restores normal player mode.

## Artwork repair batch: levels 56-58

- Status: implemented and mobile-verified; included in the current release.
- `next-01` through `next-03` were rebuilt from their clean scene backgrounds
  with ten small, distinct cats naturally concealed by scene objects.
- Rejected pasted-on cat layers are no longer used by these three levels.
- Player and orange-answer assets share the same ten coordinates; the catalog
  tap targets were updated to those positions.
- At 375x812, all thirty targets across levels 56-58 were tapped successfully;
  each level reached 10/10 with five hearts remaining and no browser errors.
- Acceptance reference: the friendly cat treatment in early levels, especially
  levels 16, 20, and 26; normal faces with one black pupil per eye.

## Artwork repair batch: levels 59-63

- Status: implemented as an interim review deployment while work continues on
  levels 64-75.
- `next-04` through `next-08` now use rebuilt player and orange-answer assets,
  ten reviewed cat coordinates per level, and a cache-busting asset version.
- The batch follows the approved level 56-58 standard: varied partial poses,
  scene-object occlusion, clear faces, and no rectangular pasted-cat layers.

## Recovery roadmap

1. Define the desired player experience and a small set of puzzle acceptance
   criteria, especially visibility, difficulty, natural placement, and mobile
   fairness.
2. Review the 75 released levels against those criteria; decide keep, revise, or
   reject by content group.
3. Stabilize the chosen baseline with lightweight catalog/asset checks, critical
   browser-flow tests, and an explicit error state for failed images.
4. Make only the approved, highest-impact product improvements in small
   reviewable batches, updating this file after each batch.
5. After the product direction is validated, make the production pipeline
   reproducible, define asset-retention rules, remove approved obsolete material,
   then commit, push, and verify the public mobile site.

## Later ideas

- Additional level generation beyond the current experiment.
- Major visual redesign, framework migration, backend accounts, cloud sync,
  analytics, or a daily-puzzle system.
- Broad code refactoring before product acceptance criteria are settled.

## Technical debt register

- Split level data from runtime behavior only when active development warrants
  it; do not refactor solely for aesthetics.
- Add graceful recovery for invalid local storage and image-load failures.
- Decide whether best time and `unlocked` remain product features; remove only
  after Product Owner approval if behavior changes.
- Add a minimal automated check for unique level IDs, valid coordinates,
  referenced asset existence, catalog totals, and browser startup.
- Add a repository `.gitignore` before any production cleanup so Python caches
  and generated scratch files cannot be committed accidentally.
- Make the approved generation pipeline use repository-relative, documented
  inputs and dependencies.
- Review, then either retain intentionally or remove the unreferenced legacy
  assets and superseded production experiments.
