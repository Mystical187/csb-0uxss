var ms1 = document.getElementById("main_side_1");
var mp = document.getElementById("main_page");
var pttl = document.getElementById("page_ttl");
var pbtn = document.getElementById("page_btn");
var hbtn = document.getElementById("page_ham");
var pbh = document.getElementById("page_btn_h");
var pt1 = document.getElementById("page_txt_1");
var pt2 = document.getElementById("page_txt_2");

var side1 = document.getElementById("main_side_1");
var tl1 = document.getElementById("tl_1");
var tl2 = document.getElementById("tl_2");
var tl3 = document.getElementById("tl_3");
var tl1img = document.getElementById("tl_img_1");
var tl2img = document.getElementById("tl_img_2");
var tl3img = document.getElementById("tl_img_3");
var shopObtn = document.getElementById("page_btn");
var shop1btn = document.getElementById("page_ham");
var puttl = document.getElementById("pullup_ttl");
var s1ba = document.getElementById("back_arrow");

tl1.addEventListener("click", clickTl1);

tl1.addEventListener("mouseover", hoverTl1);
tl1.addEventListener("mouseout", outTl1);

tl2.addEventListener("click", clickTl2);

tl2.addEventListener("mouseover", hoverTl2);
tl2.addEventListener("mouseout", outTl2);

tl3.addEventListener("click", clickTl3);

tl3.addEventListener("mouseover", hoverTl3);
tl3.addEventListener("mouseout", outTl3);

function hoverTl1() {
  tl1img.style.width = "400px";
  tl1img.style.height = "400px";
  tl1img.style.filter = "brightness(100%)";
  puttl.style.opacity = "100";
  puttl.style.right = "39.8%";
  puttl.style.visibility = "visible";
}
function outTl1() {
  tl1img.style.width = "300px";
  tl1img.style.height = "300px";
  tl1img.style.filter = "brightness(0%)";
  puttl.style.opacity = "0";
  puttl.style.right = "-20%";
  puttl.style.visibility = "hidden";
}

function hoverTl2() {
  tl2img.style.width = "400px";
  tl2img.style.height = "400px";
  tl2img.style.filter = "brightness(100%)";
  puttl.style.opacity = "100";
  puttl.style.right = "39.8%";
  puttl.style.visibility = "visible";
}
function outTl2() {
  tl2img.style.width = "300px";
  tl2img.style.height = "300px";
  tl2img.style.filter = "brightness(0%)";
  puttl.style.opacity = "0";
  puttl.style.right = "-20%";
  puttl.style.visibility = "hidden";
}
function hoverTl3() {
  tl3img.style.width = "400px";
  tl3img.style.height = "400px";
  tl3img.style.filter = "brightness(100%)";
  puttl.style.opacity = "100";
  puttl.style.right = "39.8%";
  puttl.style.visibility = "visible";
}
function outTl3() {
  tl3img.style.width = "300px";
  tl3img.style.height = "300px";
  tl3img.style.filter = "brightness(0%)";
  puttl.style.opacity = "0";
  puttl.style.right = "-20%";
  puttl.style.visibility = "hidden";
}

function clickTl1() {
  location.href = "helmets.html";
}

function clickTl2() {
  location.href = "vests.html";
}
function clickTl3() {
  location.href = "weapons.html";
}

function closeSide() {
  side1.style.right = "-50%";
}

shopObtn.addEventListener("click", shopbtnclick);
shop1btn.addEventListener("click", shopbtnclick);

function shopbtnclick() {
  pttl.style.visibility = "hidden";
  pttl.style.opacity = "0";
  pbtn.style.opacity = "0";
  pbtn.style.visibility = "hidden";
  hbtn.style.opacity = "0";
  hbtn.style.visibility = "hidden";
  ms1.style.right = "0";
  pbh.style.opacity = "0";
  pbh.style.visibility = "hidden";
  pt1.style.opacity = "0";
  pt1.style.visibility = "hidden";
  pt2.style.opacity = "0";
  pt2.style.visibility = "hidden";
}
s1ba.addEventListener("click", backbtn1);

function backbtn1() {
  ms1.style.right = "-50%";
  pttl.style.visibility = "visible";
  pttl.style.opacity = "100";
  pbtn.style.opacity = "100";
  pbtn.style.visibility = "visible";
  hbtn.style.opacity = "100";
  hbtn.style.visibility = "visible";
  pbh.style.opacity = "100";
  pbh.style.visibility = "visible";
  pt1.style.opacity = "100";
  pt1.style.visibility = "visible";
  pt2.style.opacity = "100";
  pt2.style.visibility = "visible";
}

hbtn.addEventListener("mouseover", hbtnOver);
hbtn.addEventListener("mouseout", hbtnOut);

function hbtnOver() {
  var ham1 = document.getElementById("ham1");
  var ham2 = document.getElementById("ham2");
  var ham3 = document.getElementById("ham3");

  ham3.style.transform = "rotate(45deg) translate(-8px, -8px)";
  ham2.style.opacity = "0";
  ham1.style.transform = "rotate(-45deg) translate(-9px, 6px)";
}
function hbtnOut() {
  var ham1 = document.getElementById("ham1");
  var ham2 = document.getElementById("ham2");
  var ham3 = document.getElementById("ham3");

  ham3.style.transform = "rotate(0deg) translate(0px, 0px)";
  ham2.style.opacity = "100";
  ham1.style.transform = "rotate(0deg) translate(0px, 0px)";
}

// on hover socials
var socm = document.getElementById("socials");
var soc1 = document.getElementById("soc_1");
var soc1I = document.getElementById("soc_1_img");
var soc2 = document.getElementById("soc_2");
var soc2I = document.getElementById("soc_2_img");
var soc3 = document.getElementById("soc_3");
var soc3I = document.getElementById("soc_3_img");

soc1.addEventListener("mouseover", soc1M);
soc1.addEventListener("mouseout", soc1MO);
soc1.addEventListener("click", s1click);

function soc1M() {
  soc1I.style.width = "150px";
  soc1I.style.height = "150px";
}
function soc1MO() {
  soc1I.style.width = "100px";
  soc1I.style.height = "100px";
}
function s1click() {
  window.open("https://www.instagram.com/tacticalgearwarehouse/");
}
soc2.addEventListener("mouseover", soc2M);
soc2.addEventListener("mouseout", soc2MO);
function soc2M() {
  soc2I.style.width = "150px";
  soc2I.style.height = "150px";
}
function soc2MO() {
  soc2I.style.width = "100px";
  soc2I.style.height = "100px";
}
soc3.addEventListener("mouseover", soc3M);
soc3.addEventListener("mouseout", soc3MO);
function soc3M() {
  soc3I.style.width = "200px";
  soc3I.style.height = "200px";
}
function soc3MO() {
  soc3I.style.width = "100px";
  soc3I.style.height = "100px";
}
// on hover socials end

// compatablity
const isMobile = window.matchMedia("only screen and (max-width: 1080px)")
  .matches;

if (isMobile) {
  if (window.innerHeight < window.innerWidth) {
    tl1.style.top = "15%";
    tl2.style.top = "120%";
    tl3.style.top = "240%";

    soc1.addEventListener("mouseover", soc1M);
    soc1.addEventListener("mouseout", soc1MO);
    function soc1M() {
      soc1I.style.width = "80px";
      soc1I.style.height = "80px";
    }
    function soc1MO() {
      soc1I.style.width = "60px";
      soc1I.style.height = "60px";
    }
    soc2.addEventListener("mouseover", soc2M);
    soc2.addEventListener("mouseout", soc2MO);
    function soc2M() {
      soc2I.style.width = "80px";
      soc2I.style.height = "80px";
    }
    function soc2MO() {
      soc2I.style.width = "60px";
      soc2I.style.height = "60px";
    }
    soc3.addEventListener("mouseover", soc3M);
    soc3.addEventListener("mouseout", soc3MO);
    function soc3M() {
      soc3I.style.width = "120px";
      soc3I.style.height = "120px";
    }
    function soc3MO() {
      soc3I.style.width = "80px";
      soc3I.style.height = "80px";
    }

    soc1.style.width = "5%";
    soc1.style.width = "30%";
    soc2.style.width = "5%";
    soc2.style.width = "30%";
    soc3.style.width = "5%";
    soc3.style.width = "30%";

    soc1I.style.width = "60px";
    soc1I.style.height = "60px";
    soc2I.style.width = "60px";
    soc2I.style.height = "60px";
    soc3I.style.width = "80px";
    soc3I.style.height = "80px";

    pttl.style.fontSize = "200%";
    pttl.style.width = "80%";
    pbtn.style.fontSize = "100%";
    hbtn.style.fontSize = "100%";
    pt1.style.fontSize = "150%";
    pt2.style.fontSize = "100%";
    ms1.style.width = "100%";
    ms1.style.right = "-100%";
    s1ba.style.top = "2%";

    shopObtn.removeEventListener("click", shopbtnclick);
    shopObtn.removeEventListener("click", shopbtnclick2);
    shopObtn.addEventListener("click", shopbtnclick3);
    shop1btn.removeEventListener("click", shopbtnclick);
    shop1btn.removeEventListener("click", shopbtnclick2);
    shop1btn.addEventListener("click", shopbtnclick3);

    function shopbtnclick3() {
      pttl.style.visibility = "hidden";
      pttl.style.opacity = "0";
      pbtn.style.opacity = "0";
      pbtn.style.visibility = "hidden";
      hbtn.style.opacity = "0";
      hbtn.style.visibility = "hidden";
      ms1.style.right = "0%";
      pbh.style.opacity = "0";
      pbh.style.visibility = "hidden";
      pt1.style.opacity = "0";
      pt1.style.visibility = "hidden";
      pt2.style.opacity = "0";
      pt2.style.visibility = "hidden";
    }

    s1ba.removeEventListener("click", backbtn1);
    s1ba.removeEventListener("click", backbtn2);
    s1ba.addEventListener("click", backbtn3);

    function backbtn3() {
      ms1.style.right = "-100%";
      pttl.style.visibility = "visible";
      pttl.style.opacity = "100";
      pbtn.style.opacity = "100";
      pbtn.style.visibility = "visible";
      hbtn.style.opacity = "100";
      hbtn.style.visibility = "visible";
      pbh.style.opacity = "100";
      pbh.style.visibility = "visible";
      pt1.style.opacity = "100";
      pt1.style.visibility = "visible";
      pt2.style.opacity = "100";
      pt2.style.visibility = "visible";
    }
  }
  if (window.innerHeight > window.innerWidth) {
    socm.style.bottom = "-60%";

    soc1.style.left = "10%";
    soc1.style.width = "60px";
    soc1.style.height = "60px";
    soc1I.style.width = "60px";
    soc1I.style.height = "60px";
    soc2.style.left = "50%";
    soc2.style.width = "60px";
    soc2.style.height = "60px";
    soc2I.style.width = "60px";
    soc2I.style.height = "60px";
    soc3.style.right = "10%";
    soc3.style.width = "60px";
    soc3.style.height = "60px";
    soc3I.style.width = "80px";
    soc3I.style.height = "80px";

    soc1.addEventListener("mouseover", soc1M);
    soc1.addEventListener("mouseout", soc1MO);
    function soc1M() {
      soc1I.style.width = "80px";
      soc1I.style.height = "80px";
    }
    function soc1MO() {
      soc1I.style.width = "60px";
      soc1I.style.height = "60px";
    }
    soc2.addEventListener("mouseover", soc2M);
    soc2.addEventListener("mouseout", soc2MO);
    function soc2M() {
      soc2I.style.width = "80px";
      soc2I.style.height = "80px";
    }
    function soc2MO() {
      soc2I.style.width = "60px";
      soc2I.style.height = "60px";
    }
    soc3.addEventListener("mouseover", soc3M);
    soc3.addEventListener("mouseout", soc3MO);
    function soc3M() {
      soc3I.style.width = "120px";
      soc3I.style.height = "120px";
    }
    function soc3MO() {
      soc3I.style.width = "80px";
      soc3I.style.height = "80px";
    }

    pttl.style.width = "80%";
    pttl.style.fontSize = "200%";
    pbtn.style.top = "-100%";
    hbtn.style.top = "-100%";
    pt1.style.top = "80%";
    pt1.style.fontSize = "150%";
    pt2.style.top = "90%";
    pt2.style.fontSize = "100%";

    ms1.style.width = "100%";
    ms1.style.right = "-100%";

    shopObtn.removeEventListener("click", shopbtnclick);
    shopObtn.addEventListener("click", shopbtnclick2);
    shop1btn.removeEventListener("click", shopbtnclick);
    shop1btn.addEventListener("click", shopbtnclick2);

    function shopbtnclick2() {
      pttl.style.visibility = "hidden";
      pttl.style.opacity = "0";
      pbtn.style.opacity = "0";
      pbtn.style.visibility = "hidden";
      hbtn.style.opacity = "0";
      hbtn.style.visibility = "hidden";
      ms1.style.right = "0%";
      pbh.style.opacity = "0";
      pbh.style.visibility = "hidden";
      pt1.style.opacity = "0";
      pt1.style.visibility = "hidden";
      pt2.style.opacity = "0";
      pt2.style.visibility = "hidden";
    }

    s1ba.removeEventListener("click", backbtn1);
    s1ba.addEventListener("click", backbtn2);

    function backbtn2() {
      ms1.style.right = "-100%";
      pttl.style.visibility = "visible";
      pttl.style.opacity = "100";
      pbtn.style.opacity = "100";
      pbtn.style.visibility = "visible";
      hbtn.style.opacity = "100";
      hbtn.style.visibility = "visible";
      pbh.style.opacity = "100";
      pbh.style.visibility = "visible";
      pt1.style.opacity = "100";
      pt1.style.visibility = "visible";
      pt2.style.opacity = "100";
      pt2.style.visibility = "visible";
    }
  }
}
