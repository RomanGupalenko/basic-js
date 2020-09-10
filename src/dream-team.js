module.exports = function createDreamTeam(members) {
    if (members === null || members == undefined) return false;
    let result = [];
    for (let i = 0; i < members.length; i++)
    {
        if (typeof(members[i]) == "string")
            result.push(members[i].trim()[0].toUpperCase());
    }
    if(result.length == 0) return false;
    result.sort();
    return result.join("");
};
