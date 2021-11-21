// variables
var ba = document.getElementById("back_arrow");
var bal1 = document.getElementById("arrow_l_1");
var bal2 = document.getElementById("arrow_l_2");

var mt1 = document.getElementById("ttl_1");

var p1b = document.getElementById("prod_1");
var p1i = document.getElementById("prod_1_img");
var p1t = document.getElementById("prod_1_txt");
// variables end

// event listeners
p1b.addEventListener("mouseover", p1bhover);
p1b.addEventListener("mouseout", p1bout);
p1b.addEventListener("click", mp1bclick2);

ba.addEventListener("click", goBack);
// event listeners end

// functions
function mp1bclick2() {
  location.href = "opscoref.html";
}
function p1bhover() {
  p1i.style.width = "400px";
  p1i.style.height = "400px";
  p1t.style.left = "50%";
  p1t.style.color = "white";
}
function p1bout() {
  p1i.style.width = "300px";
  p1i.style.height = "300px";
  p1t.style.left = "50%";
  p1t.style.color = "black";
}

function goBack() {
  location.href = "index.html";
}
// functions end

// mobile phone
const isMobile = window.matchMedia("only screen and (max-width: 1080px)")
  .matches;
if (isMobile) {
  if (window.innerHeight > window.innerWidth) {
    p1b.style.left = "50%";

    p1b.removeEventListener("click", mpbclick2);
    p1b.addEventListener("click", mp1bclick);

    function mp1bclick() {
      setTimeout(mp1bclick2, 1000);
    }
    function mp1bclick2() {
      location.href = "opscoref.html";
    }
  } else if (window.innerHeight < window.innerWidth) {
    p1b.style.left = "50%";

    p1t.style.top = "95%";

    mt1.style.top = "-10%";
  }
}
// mobile phone end
