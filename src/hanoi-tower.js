const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 2 ** disksNumber - 1;
    turnsSpeed = turnsSpeed / SECONDS_IN_HOUR;
    let seconds =  Math.floor(turns / turnsSpeed);
    return {turns, seconds};
};
