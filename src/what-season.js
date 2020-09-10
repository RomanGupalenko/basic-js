module.exports = function getSeason(date) {
    if(arguments.length == 0) return 'Unable to determine the time of year!';
    if (date.hasOwnProperty('getMonth')) throw new Error("Uncorrect type of date!");
    let month = date.getMonth();
    let seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "fall", "fall", "fall", "winter"];
    return seasons[month];
};
