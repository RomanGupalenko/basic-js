module.exports = function countCats(matrix) 
{
    if(arguments.length == 0) return 0;
    return ([].concat(...matrix)).filter(function(el) {
        return el == "^^";
    }).length;
};
