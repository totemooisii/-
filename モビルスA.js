//時刻の取得
let now = new Date();
nowTime = now.getHours() * 100 + now.getMinutes();

let count = 0;
//セッションの開始時刻
st1 = 1800
st2 = 1811
st3 = 1820

//表示させるセッションの判定
function changeInfo() {
    // if (st1 <= nowTime && nowTime < st2) {
    //     div1 = document.getElementById("div1")
    //     div1.style.display = "block";
    // } else if (st2 <= nowTime && nowTime < st3) {
    //     div1.style.display = "none";
    //     div2 = document.getElementById("div2")
    //     div2.style.display = "block";
    // }
    // console.log(nowTime);
    count = count + 1;
    if (count % 2 == 0) {
        div2.style.display = "none";
        div1 = document.getElementById("div1")
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
        div2 = document.getElementById("div2")
        div2.style.display = "block";
    }
    console.log(count);
}

//１秒ごとに関数実行
setInterval(changeInfo, 5000);