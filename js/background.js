class BG {

    constructor(){
        this.interval = 2 * 60 * 1000;
        this.initTicker();
    }

    static init(){
        let bg = new BG();
    }

    tick(){
        $.getJSON('https://wakatime.com/api/v1/leaders', function (data) {
            BG.wakaUpdate(data);
        });
    }

    static  wakaUpdate(data){
        let text = 'Log in';
        let color = 'red';
        if(data.current_user){
            text = data.current_user.rank;
            color = 'green';
        }
        chrome.browserAction.setBadgeText({
            text: text.toString()
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: color
        });
    }

    initTicker(){
        this.tick();
        setInterval(this.tick, this.interval);
    }
}

$(function () {
   BG.init();
});