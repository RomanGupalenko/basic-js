module.exports = function repeater(str, options) {
    result = "";
    let sourceString = "";
    if (str === null) sourceString = "null";
    else if (typeof(str) != 'string') sourceString = str.toString();
    else sourceString = str;    
    let repeatTimes = 1;
    let separator = "+";
    let addition = "";
    let additionRepeatTimes = 1;
    let additionSeparator = "|";
    if (arguments.length > 1) {
        if (options.hasOwnProperty('repeatTimes') == true) {
            if (options.repeatTimes != undefined) repeatTimes = options.repeatTimes;
        }
        if (options.hasOwnProperty('separator') == true) separator = options.separator;
        if (options.hasOwnProperty('additionRepeatTimes') == true) {
            if (options.additionRepeatTimes != undefined) additionRepeatTimes = options.additionRepeatTimes;
        }
        if (options.hasOwnProperty('additionSeparator') == true) additionSeparator = options.additionSeparator;
        if (options.hasOwnProperty('addition') == true) {
            if (options.addition === null) addition = "null";
            else if (typeof(options.addition) != 'string') addition = options.addition.toString();
            else addition = options.addition;
        }
    }
    let additionFull = "";
    if(addition != "") {
        for(let i = 1; i <= additionRepeatTimes; i++) {
            if (i < additionRepeatTimes)
                additionFull = additionFull + addition + additionSeparator;
            else
                additionFull = additionFull + addition;
        }
    }
    for(let i = 1; i <= repeatTimes; i++) {
        if (i < repeatTimes)
            result = result + sourceString + additionFull + separator;
        else
            result = result + sourceString + additionFull;
    }
    return result;
};
