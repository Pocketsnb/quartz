---
world: The World of Icewind Dale
campaign: Rime of the Frostmaiden
status: active
role: player
system: dnd 5e
type: world
title: "The World of Icewind Dale"
---
# The World of Icewind Dale

## Player Characters

```dataview
List from "TTRPGs/The World of Icewind Dale/People"
where contains(type,"player")
```


## [[TTRPGs/The World of Icewind Dale/Quests and Questions|Quests and Questions]]

## [[TTRPGs/The World of Icewind Dale/Agenda|Agenda]]

## Sessions

```button
name Add Session
type note(TTRPGs/The World of Icewind Dale/Sessions/<% tp.user.getThisGameNum(tp) %>_<% tp.date.now("YYYYMMDD") %>, split) template
action session-player
templater true
```
^button-NewSession

```dataview
table summary as "Summary" from "TTRPGs Games Index/The World of Icewind Dale/Sessions"
where contains(type,"session")
SORT sessionNum ASC
```
## Factions

```dataview
table description as "Description" from "TTRPGs/The World of Icewind Dale/Factions"
WHERE type = "faction"
SORT file.name ASC
```
## Places
```dataview
table description as "Description" from "TTRPGs/The World of Icewind Dale/Places"
WHERE type = "place"
SORT file.name ASC
```