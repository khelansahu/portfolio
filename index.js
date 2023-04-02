const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e)=>{
    btn_clicked = e.target;
    console.log(btn_clicked);
     // e.target will show which button we clicked it will show the button with it's every classes.

    p_btn.forEach((curElem) =>
        curElem.classList.remove("p-btn-active"));
        // p-btn-acitve is responsible for taking them up for -1rem

    
        btn_clicked.classList.add("p-btn-active");
        // addd p-btn-active so they will go -1rem up 

        // to find the number in data attr
        const btn_num = btn_clicked.dataset.btnNum;
        // dataset.btnNum = data-btn-num = 1 (1)
        console.log(btn_num); //1 button number

        const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
        // it will select all img who have class p-btn--1 or 2 or three
        //p_img_elem;
        //p-btn--1

        p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
        // p_img_elem will target images who have img-overlay class and every img has that class so every img will hide

        img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));

        // img_active who have matching dataset number will be shown in the dom because "p-image-not-active" class will be removed which is responsible for adding hidden class in the img.

        



});