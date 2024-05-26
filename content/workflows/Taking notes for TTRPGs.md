---
date: 2022-05-02
---
# [[Taking notes for TTRPGs]]


## Description

This workflow does the following things:
- Create a new TTRPG world for your campaign within the `ttrpgs` folder, using the [[templates/world|World template]].
- Populate a list of all of your games in [[TTRPGs Games Index/TTRPGs]].
- Create a new session according to the [[session-player]] template.
- Create new notes for NPCs, items, locations, etc. according to the [[TTRPG frontmatter]] template, bringing in details from the current campaign.
- Populate a list of all sessions for a particular world/campaign.

## Plugins used

- Obsidian Templater
- Obsidian Buttons
- Obsidian QuickAdd
- Obsidian Callouts
- Obsidian Fantasy Calendar
- Obsidian Dataview


## Instructions

1. Go to [[TTRPGs Games Index/TTRPGs]].
2. Click on the _Add New World_ button.
3. When prompted, enter the name of your new world.
4. Edit the frontmatter as required, entering your world, campaign, role, and system.
5. Add player characters.
6. When you're ready to create a new session note, click the _Add Session_.
7. While playing, type out your notes in the _Log_ section.
8. After the game, fill out the _location_, _long rest_, _short rest_, and _summary_ (one phrase or sentence) parameters.
9. Add a longer summary in the _Session Summary_ section.

## Options

### GM session template

By default, the session template used is [[session-player]]. However, there is another template specifically for GMs: [[session-gm]]. To use it, you'll need to modify the code for the _Add New Session_ button before you click on it. 

Within the code block for the button, replace the line:

`action session-player`

with:

`action session-gm`

Then, click on the button and the GM session template should be created.

### Changing world name

By default, the name of the world is the same as the name of the folder within `ttrpgs`. However, in case you're like me and you prefer to use the name of the _Campaign_ or the name of the adventuring party as the folder name and would like to use something else as the world name, you'll need to change it!

To do that, open up this vault with a text editor (not Obsidian). Go into the `scripts` folder and open the file `getThisWorld.js`. JavaScript files cannot be opened by Obsidian, which is why you should use another text editor (VSCode, TextEdit, or Notepad will do). You'll see the following script:

```js
function getThisWorld (tp) {
    const thisFolder = tp.file.folder(false)
    if (thisFolder == "Name of folder"){
        return "Name of world";
    }
    return thisFolder;
}
module.exports = getThisWorld;
```

Change two things:
- Replace `Name of folder` with your folder name.
- Replace `Name of world` with the name of the world for that campaign.

Save that file, and this time, when you create *new* notes or sessions for that campaign, you'll see the world has been changed to the one that you specified.