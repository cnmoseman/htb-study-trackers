# Study Trackers

Interactive, single-file day-by-day study trackers for Hack The Box certifications, gathered in one place with a landing page. Open the hosted site to pick a cert, or download any tracker's single HTML file to use offline.

## What you get

Each tracker turns a certification path into a day-by-day plan:

- **Progress dashboard** with an overall completion ring, days done, best streak, current phase, a weekly progress chart, and an ahead or behind pace indicator.
- **Five timelines** based on how many hours a week you can study. The same curriculum repacks into more or fewer days, and progress carries over when you switch.
- **Resource library** per cert: the official HTB cert and path pages, every module in study order, video reviews, first-hand exam write-ups, reporting templates, and core tooling.
- **Notes** on every day for commands, credentials, and things to revisit.

## How to use

1. Open a tracker from the landing page, or download its HTML file for offline use.
2. Set your start date and pick a timeline that fits your week.
3. Check off tasks as you finish them. A day completes when all its tasks are done.
4. Use **Export backup** to save a copy of your progress.

## How they work

- Each tracker is one self-contained HTML file. No install, no account, no server, runs offline.
- Progress is stored in your browser (localStorage), separately per tracker. It does not sync across devices, so use Export/Import to move it.
- Module time estimates come from HTB's own per-module hours, so the pacing is realistic.

## Hosted vs. downloaded

Using a tracker in the browser here is the easy way to start, and most updates are safe: fixing wording, resources, hours, or timelines keeps your checkmarks in place. But the hosted version can change whenever the site is updated, and a structural change (reordering or adding days or tasks) can shift your saved progress onto the wrong items. For a copy that never changes under you, **download the HTML file** and run it locally, and **export a backup** regularly either way.

## Trackers

CJCA, CPTS, CWES, CWEE, CDSA, CAPE, CWPE, COAE. Each lives in its own folder with an `index.html`.

Built on [mattrfield's coae-study-tracker](https://github.com/mattrfield/coae-study-tracker), the original inspiration for this project. These are independent study aids and are not affiliated with or endorsed by Hack The Box.
