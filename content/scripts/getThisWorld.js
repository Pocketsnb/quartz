function getThisWorld (tp) {
    const thisFolder = tp.file.folder(false)
    if (thisFolder == "The World of Icewind Dale"){
        return "Icewind Dale";
    } else if (thisFolder == "Name of folder"){
        return "Name of world";
    }
    return thisFolder;
}
module.exports = getThisWorld;