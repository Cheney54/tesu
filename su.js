let num1 = document.querySelectorAll(".gabf .qwe")
console.log(num1)
let num2 = document.querySelectorAll(".banner-box li")
console.log(num2)
let banners = document.querySelector(".gabf")
console.log(banners)


num2.forEach(function (n, m) {
    n.onclick = function () {
        for (let i = 0; i < num2.length; i++) {
            num2[i].classList.remove("one");
            num1[i].classList.remove("one")
        }
        this.classList.add("one");
        num1[m].classList.add("one");
        en = m;
    }
});

let en = 0;

function banne(dir = "right") {
    if (dir == "right") {
        en++;
    }
    if (en === num2.length) {
        en = 0;
    }
    if (dir == "left") {
        en--

    }
    if (en == -1) {
        en = num1.length - 1
    }


    for (let i = 0; i < num2.length; i++) {
        num2[i].classList.remove("one");
        num1[i].classList.remove("one")
    }
    num2[en].classList.add("one");
    num1[en].classList.add("one");

}

let st = setInterval(banne, 5000)
banners.onmouseover = function () {
    clearInterval(st)
}
banners.onmouseout = function () {
    st = setInterval(banne, 5000)
}

//测导航
let qi = document.querySelector(".ceda")
let fod=document.querySelector(".sty")
console.log(fod)
window.onscroll = function () {
    let st = document.documentElement.scrollTop
    if (st > 2000) {
        qi.style.display = "block"
    } else {
        qi.style.display = "none"
    }
    if(st>1234){
      fod.style.display="block"
    }else {
        fod.style.display="none"
    }

    floors  .forEach(function (ele,index) {
        if(st>=ele.offsetTop){
            for(let i=0;i<btns.length;i++){
                btns [i].classList.remove("active")
            }
            btns [index].classList.add("active")
        }
    })
}
let hui = document.querySelector(".nishuo")
console.log(hui)
hui.onclick = (function () {
    let st = document.documentElement.scrollTop
    let yu = st * 30 / 300
    let po = setInterval(function () {
        st -= yu
        if (st <= 0) {
            st = 0
            clearInterval(po)
        }
        document.documentElement.scrollTop = st
    }, 30)
})

let btns = document.querySelectorAll(".ceda ul li")
console.log(btns)
let floors = document.querySelectorAll(".telpc")
console.log(floors)

btns.forEach(function (ele, index) {
    ele.onclick = function () {
        let ot = floors[index].offsetTop;
        console.log(ot)
        let now = document.documentElement.scrollTop
        let spood = (ot - now) * 30 / 300
        let time = 0
        let s = setInterval(function () {
            now += spood
            document.documentElement.scrollTop = now
            time += 30
            if (time === 300) {

                clearInterval(s)
                now = ot
            }

        }, 30)
    }
})

