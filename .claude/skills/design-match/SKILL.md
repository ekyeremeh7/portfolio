---
name: design-match
description: Use when a project must be redesigned or brought in line with an approved design (an exported design HTML/canvas, a design package with tokens and screens, or a handoff doc). Walks through inventorying screens, extracting tokens, aligning shared components, comparing each page to the design, and verifying the result, with the pitfalls found on the OBTRA project.
---

# Design match

Use this to make a codebase match an approved design "to a T", in the same way Lawrence's Gaddy design package is meant to be used: tokens as the source of truth, one source per screen, and a handoff doc that says what is built and what is not.

## 0a. If no approved design exists yet (create it first)

Do this before matching anything. It is how OBTRA and Gaddy were made.

1. **Collect the brief.** The project brief document, any flyer or reference image from the founder, the users and their roles, and the market (for OBTRA: Ghana as well as global health software).
2. **Ask for the one decision that matters:** the aesthetic direction. Propose 2 to 4 directions with a one-line personality each, plus a palette for the favoured one. Anchor the palette on colours the product already uses, so the redesign feels like the same product. Wait for approval.
3. **Write the design prompt** from the approved direction: aesthetic, brand feel, every screen needed per role, and the interactions (swipe, tabs, map, dialogs).
4. **Build one interactive canvas** with every screen (for Gaddy: 15 screens in one canvas; for OBTRA: 14 screens across 4 portals). Keep the screens as separate source files (HTML per screen plus a layout file).
5. **Export** the screenshots, a PDF of the screens, and the screen sources into the project's `design/` folder. If the hosted canvas is private, rebuild it from those local files rather than relying on the link.
6. **Extract tokens** into one source of truth (JSON), mirrored into CSS and the app's theme code. Only then start section 1.

Gate: do not start matching until the direction and the canvas are approved.

## 0. Gather inputs

Ask for, or locate, these before changing code:
- The design source: exported HTML (e.g. `OBTRA Design.html`), a canvas link, or a design package folder with `tokens/`, `screens/`, `screenshots/` and a PDF.
- The handoff doc or README that explains the rules (Gaddy: `docs/HANDOFF.md`, `design/README.md`).
- Which surfaces count: web portals, mobile app, or both. Do one at a time.

Read the whole design file, not just the first part. Long exports get cut off in a single read, so read in chunks until every screen definition has been seen.

## 1. Inventory

- List every screen in the design (for OBTRA the labels were in `data-label` attributes; grep for them).
- Map each design screen to a route in the project. Note screens with no route yet.
- List the navigation items in the design (sidebars, tab bars, More menus) and compare with the code. Items without a page should be listed, not linked to a 404.
- Note any design item with no data source in the schema (trend numbers, progress charts, meal guides). Do not invent sample numbers. Compute real equivalents or leave the item out and say so.

## 2. Tokens first

Pull values from the design into the project's theme before touching screens:
- Colours (every token on `:root`), fonts (heading and body families and their weights), radii, shadows, spacing, the page background, and the padding of the main content area.
- Put them in one place (Tailwind `@theme` / CSS variables, or Flutter `AppColors` / `AppTextStyles`). Check that the existing theme already matches before changing it.
- Gradients (login/hero backgrounds) and background patterns: copy the exact values, including SVG patterns and opacity.

## 3. Shared components

Fix the shared pieces once so every screen inherits them: buttons, badges (check the status-to-colour mapping against the design's badge classes), tables (header background, label size, cell padding), KPI/stat cards (is there an icon? the design decides), form fields (label gap, input padding, focus ring), page header (title size, subtitle, action button size), sidebar/tab bar, and money or date formatting (e.g. `GH₵ 4,200`, not `4200.00`).

## 4. Page-by-page comparison

For each screen, compare structure, not just colours:
- Header: title size, subtitle content, action buttons (count them; the design may have one primary button and a chip).
- Layout: column counts, gaps, card grouping, section order.
- Components: tables vs lists, banners and alerts (text must match the design wording), tabs and filters.
- Copy: labels and empty-state wording must match the design exactly.
- Interactions: buttons that do nothing in the design should be left out, not left dead.

Keep a short table per screen: design item, code item, status (matches / changed / missing / intentionally different and why).

## 5. Things that are intentionally different

If the design drops fields the app stores (clinical data, consent, payments), keep them and place them as extra sections. Say so in the handoff. Never delete stored data to match a mock-up.

## 6. Verification

- Type check and lint (`tsc --noEmit`, `eslint`, `flutter analyze`), then a production build (`npm run build`).
- Query every new or changed read against the real database as a test user, to catch missing columns. Missing columns caused runtime errors on several screens.
- Run the app and check each screen in a browser or on a device. Type checks do not prove the UI is right. If you cannot test the UI, say so explicitly.
- Check the design's empty, loading and error states as well as the happy path.

## 7. Hand off

Write the result as a status list: built, changed, intentionally different, not built (with the reason, e.g. "no data source yet"). Commit in small logical groups, one per portal or per shared-component change. Do not include attribution lines if the user's global instructions forbid them.

## Pitfalls seen on OBTRA

- A formatter run over a whole folder (`dart format lib/app`) rewrote about 25 unrelated files. Format only the files you changed, and check `git status` afterwards.
- `Obx` must read observables inside its own builder. Wrapping a widget that reads values in its own `build` throws at runtime. Put the reads inside a nested `Obx` in that widget, or drop the outer `Obx` if nothing observable is read.
- Next.js 16 with `cacheComponents` rejects `export const dynamic`; Next 16 build route types are generated, so new routes need typed props declared directly if the generated types lag.
- Dead links: check that every nav link and button target exists before shipping (`ls` the route folder).
- Browser-extension attributes (e.g. `cz-shortcut-listen` on `<body>`) cause hydration warnings that are not app bugs. Confirm in a clean profile.
- Supabase row-level security: a client-facing insert may be blocked for a reason that looks like a bug. Check the policy before changing the UI.
- Deleting `supabase/.temp/` removes the CLI's project link; relink with `supabase link --project-ref <ref>`.
- Don't guess credentials or run destructive database commands without confirmation. A test change to live data must be restored.
