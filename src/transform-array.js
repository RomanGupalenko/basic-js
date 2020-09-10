module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error('Uncorrect type of array!');
    let flagForDiscard = false;
    return arr.map((el, i, array) => {
        if (flagForDiscard) 
        {
            flagForDiscard = false;
            return '';
        }
        if (i > 0) 
        {
            if (array[i] === '--double-prev') 
            {
                if(i > 1 && array[i - 2] ==='--discard-next') 
                    return '';
                return array[i - 1];
            }
        }
        if (i < array.length - 1) 
        {
            if (array[i + 1] === '--discard-prev')
                return '';
            if (array[i] === '--discard-next')
                flagForDiscard = true;
            if (array[i] === '--double-next')
                return array[i + 1];
        }
        if (el === '--double-prev'  ||
            el === '--double-next'  ||
            el === '--discard-prev' || 
            el === '--discard-next') 
            return '';
        return el;
    }).filter(item => item !== '');
};
