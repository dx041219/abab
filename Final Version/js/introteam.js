// function showSection(sectionId) 
        // {
        //     var sections = document.getElementsByClassName('content-section');
        //     for (var i = 0; i < sections.length; i++) 
        //     {
        //         sections[i].classList.add('hidden');
        //     }

        //     var selectedSection = document.getElementById(sectionId);
        //     selectedSection.classList.remove('hidden');
        // }

let oMain = document.querySelector('#main');
let oMask = document.querySelector('.mask');
let aImg = document.querySelectorAll('#main div');
let aButton = document.querySelectorAll('.mask_btn');
let speed = -5;


oMain.innerHTML += oMain.innerHTML
let move = () => 
{
if (oMain.offsetLeft < - oMain.offsetWidth / 2)
{
    oMain.style.left = '0';
}
if (oMain.offsetLeft > 0)
{
    oMain.style.left = - oMain.offsetWidth / 2 + 'px';
}
oMain.style.left = oMain.offsetLeft + speed + 'px';
};
let timer = setInterval(move, 30);
oMask.addEventListener('mouseover', () => 
{
    clearInterval(timer);
});
oMask.addEventListener('mouseout', () => 
{
    timer = setInterval(move, 30);
});
aButton[0].onclick = () => 
{
    speed = -5;
};
aButton[1].onclick = () => 
{
    speed = 5;
};
function toggleVisibility1() 
{ 
    var x = document.getElementById("pdiv1"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};
function toggleVisibility2() 
{ 
    var x = document.getElementById("pdiv2"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};
function toggleVisibility3() 
{ 
    var x = document.getElementById("pdiv3"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};
function toggleVisibility4() 
{ 
    var x = document.getElementById("pdiv4"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};
function toggleVisibility5() 
{ 
    var x = document.getElementById("pdiv5"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};
function toggleVisibility6() 
{ 
    var x = document.getElementById("pdiv6"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};
function toggleVisibility7() 
{ 
    var x = document.getElementById("pdiv7"); 
    if (x.style.display === "none") 
    { 
        x.style.display = "block"; 
    } 
    else 
    { 
        x.style.display = "none"; 
    } 
};