let maxDepth = 0;

module.exports = class DepthCalculator {
    calculateDepth(arr, currentDepth = 1) 
    {
        for (let i = 0; i < arr.length; i++) 
        {
            if(Array.isArray(arr[i])) maxDepth = this.calculateDepth(arr[i], currentDepth + 1);
        }
        let depth = (maxDepth > currentDepth) ? maxDepth : currentDepth;
        maxDepth = 0;
        return depth;
    }
};
