---
world: <% tp.user.getThisWorld(tp) %>
campaign: <% tp.file.folder(false) %>
status: active
role: player
system:
type: world
title: "{{title}}"
---
# The World of <% tp.file.folder(false) %>

## Player Characters

- 

## Sessions

```button
name Add Session
type note(TTRPGs/<% tp.file.folder(false) %>/Sessions/<% tp.user.createWorldSessionbtn(tp) %>_<% tp.user.getSessionDate(tp) %>, split) template
action session-player
templater true
```
^button-NewSession
Replace session player with session gm if gm

```dataview
table summary as "Summary" from "TTRPGs/<% tp.file.folder(false) %>/Sessions"
where contains(type,"session")
SORT sessionNum ASC
```
