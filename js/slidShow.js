let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://nature-and-science.jp/wp-content/uploads/2019/09/050103_3204-e1568565448417.jpg",
"https://publicdomainq.net/images/201708/16s/publicdomainq-0012294wps.jpg",
"https://free-materials.com/adm/wp-content/uploads/2021/01/adpDSC_1712-.jpg",
"https://www.ajfarm.com/wp-content/uploads/2019/11/jujo-.jpg",
"https://www.nintendo.co.jp/hardware/detail/switch/img/01-hero/01pc.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src',url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src',url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
