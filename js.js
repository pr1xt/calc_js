const answer = document.getElementById("answer");
const exp = document.getElementById("expanded");
const main = document.getElementById("main");
const header = document.getElementById("header");
const a_box = document.getElementById("answer-box");

exp.style.display = 'none';

const pushed = butn => {
    if(answer.innerHTML == "0" && butn != "."){
        answer.innerHTML = "";
    }
    if(butn == "s1"){
        butn = "(";
    }
    if(butn == "s2"){
        butn = ")";
    }
    answer.innerHTML = answer.innerHTML + butn;
}

const clr = () =>{
    answer.innerHTML = "0";
}

const absed = () =>{
    answer.innerHTML = "Math.abs("+ answer.innerHTML +')';
}

const delt = () =>{
    answer.innerHTML = answer.innerHTML.slice(0, -1);
}

const cnt = () =>{
    answer.innerHTML = Math.round(eval(answer.innerHTML) * 1000) / 1000;
}

const sined = () =>{
    answer.innerHTML = "Math.sin("+ answer.innerHTML +')';
}

const cosed = () =>{
    answer.innerHTML = "Math.cos("+ answer.innerHTML +')';
}

const taned = () =>{
    answer.innerHTML = "Math.tan("+ answer.innerHTML +')';
}

const expnd = () =>{
    if (exp.style.display == 'none'){
    exp.style.display = 'flex';
    main.style.left = "49.5vw";
    exp.style.left = "30vw";
    main.style.paddingLeft = "29vw"
    exp.style.background = "none";
    a_box.style.left = "-29vw";
    a_box.style.width = "58vw";
    }
    else{
        exp.style.display = 'none';
        a_box.style.left = "0vw";
        a_box.style.width = "29vw";
        exp.style.left = "15vw";
        main.style.left = "50%";
        main.style.paddingLeft = "0px";
        exp.style.background = "rgba(37, 48, 88, 0.859)";
    }
}