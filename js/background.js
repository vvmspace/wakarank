class BG {

    constructor(){
        this.interval = 2 * 60 * 1000;
        this.initTicker();
    }

    static init(){
        let bg = new BG();
    }

    tick(){

    }

    initTicker(){
        this.tick();
        setInterval(this.tick, this.interval);
    }
}

$(function () {
   BG.init();
});