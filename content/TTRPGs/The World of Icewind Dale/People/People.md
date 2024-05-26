---
title: "People"
world: Icewind Dale
Campaign: Rime of the Frostmaiden
tags: [quicklink]
---
## People

```ccard
type: folder_brief_live
noteOnly: false
style: strip
``````dataview
table description as "Description" from "TTRPGs/<% tp.file.folder(false) %>"
WHERE contains(type,"NPC") or contains(type,"faction") and contains(location,"<% tp.frontmatter.location %>")
SORT file.name ASC
```