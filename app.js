
var oWaitSecs = 500;
let 我的 = find_我的();
let 搜尋框 = find_搜尋框();

// init();
let run = 3;
switch (run) {
    case 搜尋框:
        if (搜尋框) {
            搜尋框.clickCenter();
            sleep(oWaitSecs);
            input('test');
            sleep(oWaitSecs);

            // 模擬 enter
            shell("input keyevent 66", true);
        }
        break;
    case 我的:
        click_我的();
    case 3:
        click_我的();
        click_by_text('購買清單');
        click_by_text('訂單已完成');
        let order_price = textContains('訂單金額').findOnce(0);
        let buy_items = order_price.parent().children();
        log(buy_items);
}

function init() {
    while (find_返回() || find_返回2()) {
        if (find_返回()) {
            find_返回().clickCenter();
        }
        if (find_返回2()) {
            find_返回2().clickCenter();
        }
        sleep(oWaitSecs);
    }
}

function find_我的() {
    return id('title').text('我的').findOne(oWaitSecs);
}

function click_我的() {
    let o = find_我的();
    if (o) {
        o.clickCenter();
        sleep(oWaitSecs);
    }
}

function find_by_text(txt) {
    log(txt);
    return text(txt).findOne(oWaitSecs);
}
function click_by_text(txt) {
    log(txt);
    let o = find_by_text(txt);
    if (o) {
        o.clickCenter();
        sleep(oWaitSecs);
    }
}

function find_搜尋框() {
    return id('text_search').findOne(oWaitSecs);
}

function find_返回() {
    // 訂單詳情、購買清單
    return className('android.widget.ImageView').bounds(36, 120, 108, 192).findOne(oWaitSecs);
}
function find_返回2() {
    return className('android.widget.ImageButton').bounds(6, 72, 138, 240).findOne(oWaitSecs);
}

