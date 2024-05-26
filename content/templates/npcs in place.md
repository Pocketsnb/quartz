```dataview
table description as "Description" from "TTRPGs/<% tp.file.folder(false) %>"
WHERE contains(type,"NPC") or contains(type,"faction") and contains(location,"<% tp.frontmatter.location %>")
SORT file.name ASC
```