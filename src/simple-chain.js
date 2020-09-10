const chainMaker = {
    chainsArr: [],
    getLength() {
        return this.chainsArr.length; 
    },
    addLink(value) 
    {
        this.chainsArr.push(String(value));
        return this;
    },
    removeLink(position) 
    {
        if(typeof(position) != 'number'     ||
           position <= 0                    ||
           position > this.chainsArr.length ||
           Math.trunc(position) != position) 
        {
            this.chainsArr = [];
            throw new Error("Uncorrect type of number!");
        }
        this.chainsArr.splice(position - 1, 1);
        return this;
    },
    reverseChain() 
    {
        this.chainsArr.reverse();
        return this;
    },
    finishChain() 
    {
        let chain_string = "( " + this.chainsArr.join(" )~~( ") + " )";     
        this.chainsArr = [];
        return chain_string;
    }
};

module.exports = chainMaker;
