// main variables
var ba = document.getElementById("back_arrow");

var c1nh = document.getElementById("cont_1_name_h");
var c2nh = document.getElementById("cont_2_name_h");

var ht1 = document.getElementById("h_ttl_1");
var ht1t = "OPS-CORE FAST SF SUPER HIGH CUT HELMET";
var ht2 = document.getElementById("h_ttl_2");
var ht2t = "OPS-CORE FAST XP HIGH CUT HELMET";
var ht3 = document.getElementById("h_ttl_3");
var ht3t = "OPS-CORE SENTRY XP MID CUT HELMET";
var ht4 = document.getElementById("h_ttl_4");
var ht4t = "OPS-CORE FAST MT SUPER HIGH CUT HELMET";

var p1isd = "300px";
var p1isdoh = "400px";

var p2ish = document.getElementById("two_img");
var p2isw = document.getElementById("two_img");
var p2isdh = "300px";
var p2isdw = "300px";
var p2isdohh = "400px";
var p2isdohw = "400px";

var p3isd = "300px";
var p3isdoh = "400px";

var p4isd = "300px";
var p4isdoh = "400px";
var p4isds = "350px";
var p4isdst = "450px";
// main variables end

// products
// variables
var pc1 = document.getElementById("prod_cont_1");
var pc2 = document.getElementById("prod_cont_2");

var p1 = document.getElementById("prod_one");
var p1i = document.getElementById("one_img");

var p2 = document.getElementById("prod_two");
var p2i = document.getElementById("two_img");

var p3 = document.getElementById("prod_three");
var p3i = document.getElementById("three_img");

var p4 = document.getElementById("prod_four");
var p4i = document.getElementById("four_img");
// variables end

// event listeners
p1.addEventListener("mouseover", p1mov);
p1.addEventListener("mouseout", p1mot);

p2.addEventListener("mouseover", p2mov);
p2.addEventListener("mouseout", p2mot);

p3.addEventListener("mouseover", p3mov);
p3.addEventListener("mouseout", p3mot);

p4.addEventListener("mouseover", p4mov);
p4.addEventListener("mouseout", p4mot);

p1.addEventListener("click", p1click);
p2.addEventListener("click", p2click);
p3.addEventListener("click", p3click);
p4.addEventListener("click", p4click);

ba.addEventListener("click", backa);
// event listeners end

// functions
function p1mov() {
  p1i.style.height = p1isdoh;
  p1i.style.width = p1isdoh;
}
function p1mot() {
  p1i.style.height = p1isd;
  p1i.style.width = p1isd;
}

function p2mov() {
  p2i.style.height = p2isdohh;
  p2i.style.width = p2isdohw;
}
function p2mot() {
  p2i.style.height = p2isdh;
  p2i.style.width = p2isdw;
}

function p3mov() {
  p3i.style.height = p3isdoh;
  p3i.style.width = p3isdoh;
}
function p3mot() {
  p3i.style.height = p3isd;
  p3i.style.width = p3isd;
}

function p4mov() {
  p4i.style.height = p4isdoh;
  p4i.style.width = p4isdst;
}
function p4mot() {
  p4i.style.height = p4isd;
  p4i.style.width = p4isds;
}

function p1click() {
  location.href = "ocfsshch.html";
}
function p2click() {
  location.href = "ocfxhch.html";
}
function p3click() {
  location.href = "ocsxmch.html";
}
function p4click() {
  location.href = "ocfmshch.html";
}
function backa() {
  location.href = "helmets.html";
}
// functions end

// optimization
if (window.matchMedia("(min-width: 1367px)").matches) {
  p1i.style.height = "400px";
  p1i.style.width = "400px";
  p2i.style.height = "400px";
  p2i.style.width = "400px";
  p3i.style.height = "400px";
  p3i.style.width = "400px";
  p4i.style.height = "400px";
  p4i.style.width = "350px";

  p1isd = "400px";
  p1isdoh = "500px";
  p2isdh = "400px";
  p2isdw = "400px";
  p2isdohh = "500px";
  p2isdohw = "500px";
  p3isd = "400px";
  p3isdoh = "500px";
  p4isd = "400px";
  p4isdoh = "500px";
  console.log("not school chromebook");
} else {
  p4i.style.height = "300px";
  p4i.style.width = "250px";
  p1isd = "300px";
  p1isdoh = "400px";
  p2isdh = "300px";
  p2isdw = "300px";
  p2isdohh = "400px";
  p2isdohw = "400px";
  p3isd = "300px";
  p3isdoh = "400px";
  p4isd = "300px";
  p4isdoh = "400px";
  p4isds = "250px";
  p4isdst = "350px";
  console.log("school chromebook");
}

// mobile optimization
const isMobile = window.matchMedia("only screen and (max-width: 1080px)")
  .matches;

if (isMobile) {
  if (window.innerHeight < window.innerWidth) {
    p1.removeEventListener("mouseover", p1mov);
    p1.removeEventListener("mouseout", p1mot);
    p1.addEventListener("mouseover", p1mov2);
    p1.addEventListener("mouseout", p1mot2);

    p2.removeEventListener("mouseover", p2mov);
    p2.removeEventListener("mouseout", p2mot);
    p2.addEventListener("mouseover", p2mov2);
    p2.addEventListener("mouseout", p2mot2);

    p3.removeEventListener("mouseover", p3mov);
    p3.removeEventListener("mouseout", p3mot);
    p3.addEventListener("mouseover", p3mov2);
    p3.addEventListener("mouseout", p3mot2);

    p4.removeEventListener("mouseover", p4mov);
    p4.removeEventListener("mouseout", p4mot);
    p4.addEventListener("mouseover", p4mov2);
    p4.addEventListener("mouseout", p4mot2);

    function p1mov2() {
      p1i.style.height = "180px";
      p1i.style.width = "180px";
    }
    function p1mot2() {
      p1i.style.height = "150px";
      p1i.style.width = "150px";
    }

    function p2mov2() {
      p2i.style.height = "180px";
      p2i.style.width = "180px";
    }
    function p2mot2() {
      p2i.style.height = "150px";
      p2i.style.width = "150px";
    }

    function p3mov2() {
      p3i.style.height = "160px";
      p3i.style.width = "160px";
    }
    function p3mot2() {
      p3i.style.height = "130px";
      p3i.style.width = "130px";
    }

    function p4mov2() {
      p4i.style.height = "170px";
      p4i.style.width = "160px";
    }
    function p4mot2() {
      p4i.style.height = "140px";
      p4i.style.width = "130px";
    }

    p1.style.left = "0%";
    p1.style.height = "50%";
    p1.style.width = "50%";
    p1i.style.width = "150px";
    p1i.style.height = "150px";

    p2.style.right = "0%";
    p2.style.height = "50%";
    p2.style.width = "50%";
    p2i.style.width = "150px";
    p2i.style.height = "150px";

    p3.style.left = "0%";
    p3.style.height = "50%";
    p3.style.width = "50%";
    p3i.style.width = "130px";
    p3i.style.height = "130px";

    p4.style.right = "0%";
    p4.style.height = "50%";
    p4.style.width = "50%";
    p4i.style.width = "130px";
    p4i.style.height = "140px";

    pc1.style.top = "15%";
    pc2.style.top = "85%";

    c1nh.style.top = "60%";
    c2nh.style.top = "135%";

    ht1.style.fontSize = "80%";
    ht1.style.width = "30%";
    ht1.style.top = "25%";
    ht1.style.left = "10%";
    ht2.style.fontSize = "80%";
    ht2.style.width = "30%";
    ht2.style.right = "10%";
    ht2.style.top = "25%";
    ht3.style.fontSize = "80%";
    ht3.style.width = "30%";
    ht3.style.top = "25%";
    ht3.style.left = "10%";
    ht4.style.fontSize = "80%";
    ht4.style.width = "30%";
    ht4.style.top = "25%";
    ht4.style.right = "10%";
  }
  if (window.innerHeight > window.innerWidth) {
    p1.removeEventListener("mouseover", p1mov);
    p1.removeEventListener("mouseout", p1mot);
    p1.addEventListener("mouseover", p1mov2);
    p1.addEventListener("mouseout", p1mot2);

    p2.removeEventListener("mouseover", p2mov);
    p2.removeEventListener("mouseout", p2mot);
    p2.addEventListener("mouseover", p2mov2);
    p2.addEventListener("mouseout", p2mot2);

    p3.removeEventListener("mouseover", p3mov);
    p3.removeEventListener("mouseout", p3mot);
    p3.addEventListener("mouseover", p3mov2);
    p3.addEventListener("mouseout", p3mot2);

    p4.removeEventListener("mouseover", p4mov);
    p4.removeEventListener("mouseout", p4mot);
    p4.addEventListener("mouseover", p4mov2);
    p4.addEventListener("mouseout", p4mot2);

    function p1mov2() {
      p1i.style.height = "180px";
      p1i.style.width = "180px";
    }
    function p1mot2() {
      p1i.style.height = "150px";
      p1i.style.width = "150px";
    }

    function p2mov2() {
      p2i.style.height = "180px";
      p2i.style.width = "180px";
    }
    function p2mot2() {
      p2i.style.height = "150px";
      p2i.style.width = "150px";
    }

    function p3mov2() {
      p3i.style.height = "160px";
      p3i.style.width = "160px";
    }
    function p3mot2() {
      p3i.style.height = "130px";
      p3i.style.width = "130px";
    }

    function p4mov2() {
      p4i.style.height = "170px";
      p4i.style.width = "160px";
    }
    function p4mot2() {
      p4i.style.height = "140px";
      p4i.style.width = "130px";
    }

    p1.style.left = "0%";
    p1.style.height = "50%";
    p1.style.width = "50%";
    p1i.style.width = "150px";
    p1i.style.height = "150px";

    p2.style.right = "0%";
    p2.style.height = "50%";
    p2.style.width = "50%";
    p2i.style.width = "150px";
    p2i.style.height = "150px";

    p3.style.left = "0%";
    p3.style.height = "50%";
    p3.style.width = "50%";
    p3i.style.width = "130px";
    p3i.style.height = "130px";

    p4.style.right = "0%";
    p4.style.height = "50%";
    p4.style.width = "50%";
    p4i.style.width = "130px";
    p4i.style.height = "140px";

    pc2.style.top = "40%";

    c1nh.style.top = "30%";
    c2nh.style.top = "70%";

    ht1.style.fontSize = "80%";
    ht1.style.width = "30%";
    ht2.style.fontSize = "80%";
    ht2.style.width = "30%";
    ht3.style.fontSize = "80%";
    ht3.style.width = "30%";
    ht4.style.fontSize = "80%";
    ht4.style.width = "30%";
  }
}
// mobile optimization end
// optimization end
// products end

// body onload
// onload functions
function onload() {
  ht1.innerHTML = ht1t;
  ht2.innerHTML = ht2t;
  ht3.innerHTML = ht3t;
  ht4.innerHTML = ht4t;
}
// onload functions end
// body onload end
