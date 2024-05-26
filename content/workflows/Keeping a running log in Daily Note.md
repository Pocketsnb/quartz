---
date: 2022-07-18
---
# [[Keeping a running log in Daily Note]]


## Description

This workflow helps you:
- Add something to the `## Log` section of your Daily Note without leaving the note you're in.

## Plugins Used

- Periodic Notes (daily)
- Templater
- Quick Add
- Hotkeys

## Instructions

1. Open up the Command Pane (CMD/CTRL P) and select `Quick Add: Capture - Log in Daily Note`.
2. In the dialog box, type the text you'd like to add to today's daily note and hit *Enter*.
3. Verify that the text has been logged correctly by visiting today's daily note. The text should be under the `## Log` section.
4. (optional) Change the keyboard shortcut for `Quick Add: Capture - Log in Daily Note` to something you'll remember (it's currently set to `CMD SHIFT OPTION K`).

For more information, see my video on the Quick Add community plugin.

### Troubleshooting

If nothing happens after Step 4, *and* you are on Windows, go to Obsidian Settings > Quick Add > `Capture - Log in Daily Note` Settings and in *File name*, type `reviews/daily/{{DATE:YYYY-MM-DD}}` (the old one has a `/` before `reviews`). This is due to a difference in the way Windows and Mac handle folders.