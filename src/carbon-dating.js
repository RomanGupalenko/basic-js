const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
    if(arguments.length == 0              ||
       sampleActivity === null            || 
       sampleActivity == ""               || 
       typeof(sampleActivity) != 'string' ||
       isNaN(parseFloat(sampleActivity))  ||
       parseFloat(sampleActivity) <= 0    || 
       parseFloat(sampleActivity) > 15)   return false;
    let K = LN2 / HALF_LIFE_PERIOD;
    let T = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K);
    return T;
};
