<<<<<<< HEAD
const nav_btn = document.getElementById("toggler"),
    nav_bar = document.querySelector(".navbar");
nav_btn.addEventListener("click", () => {
    nav_btn.classList.toggle("active");
    nav_bar.classList.toggle("active");
});
const links = document.querySelectorAll(".navbar li");
links.forEach((li) => {
    li.addEventListener("click", () => {
        nav_bar.classList.remove("active");
        nav_btn.classList.remove("active");
    });
});

let Comment_ele = document.createComment(
    "This Website Made With Love By Abdallah M.Shaltout"
);
document.querySelector("footer div").before(Comment_ele);

function works_content(userName, reposName) {
    if (document.title == "Works") {
        //
        fetch(
            `https://api.github.com/repos/${userName}/${reposName}/contents/projects`
        )
            .then((response) => response.json())
            .then((projects) =>
                projects.forEach((project) => {
                    const container =
                        document.querySelector(".works .container");
                    container.innerHTML += `<div class="box"> <div class="image"> <img src="${project.path}/the-design.jpg" /> </div> <div class="content"> <div class="title">${project.name}</div> <div class="btns"> <a href="https://github.com/${userName}/${reposName}/tree/master/${project.path}">view Repos</a> <a href="${project.path}/index.html" target="_blank" >Demo</a > </div> </div> </div>`;
                })
            );

        //
    }
}
works_content("abdallah-shaltout", "Main-Portfolio");
=======
const _0x1e1f61=_0x49df;(function(_0x259206,_0x2294de){const _0x1747d6=_0x49df,_0xd62e92=_0x259206();while(!![]){try{const _0x486f8d=-parseInt(_0x1747d6(0x1b7))/0x1+-parseInt(_0x1747d6(0x1bd))/0x2+parseInt(_0x1747d6(0x1d8))/0x3*(-parseInt(_0x1747d6(0x1b9))/0x4)+-parseInt(_0x1747d6(0x1c6))/0x5*(parseInt(_0x1747d6(0x1d1))/0x6)+parseInt(_0x1747d6(0x1be))/0x7*(-parseInt(_0x1747d6(0x1d6))/0x8)+-parseInt(_0x1747d6(0x1d9))/0x9*(parseInt(_0x1747d6(0x1c5))/0xa)+-parseInt(_0x1747d6(0x1c0))/0xb*(-parseInt(_0x1747d6(0x1da))/0xc);if(_0x486f8d===_0x2294de)break;else _0xd62e92['push'](_0xd62e92['shift']());}catch(_0x121ee7){_0xd62e92['push'](_0xd62e92['shift']());}}}(_0x179f,0x8d24a));const nav_btn=document[_0x1e1f61(0x1c2)](_0x1e1f61(0x1bc)),nav_bar=document[_0x1e1f61(0x1b5)](_0x1e1f61(0x1bf));nav_btn[_0x1e1f61(0x1c4)]('click',()=>{const _0x8caf57=_0x1e1f61;nav_btn[_0x8caf57(0x1db)]['toggle'](_0x8caf57(0x1cb)),nav_bar[_0x8caf57(0x1db)]['toggle'](_0x8caf57(0x1cb));});const links=document[_0x1e1f61(0x1c8)](_0x1e1f61(0x1c7));links[_0x1e1f61(0x1bb)](_0x9d111a=>{const _0x3e30c6=_0x1e1f61;_0x9d111a[_0x3e30c6(0x1c4)](_0x3e30c6(0x1ce),()=>{const _0x250123=_0x3e30c6;nav_bar[_0x250123(0x1db)]['remove'](_0x250123(0x1cb)),nav_btn[_0x250123(0x1db)][_0x250123(0x1ba)](_0x250123(0x1cb));});});let Comment_ele=document[_0x1e1f61(0x1d5)]('This\x20Website\x20Made\x20With\x20Love\x20By\x20Abdallah\x20M.Shaltout');function _0x49df(_0x4cfab3,_0x5c65bc){const _0x179f6c=_0x179f();return _0x49df=function(_0x49df17,_0x4960ad){_0x49df17=_0x49df17-0x1b5;let _0x3e382b=_0x179f6c[_0x49df17];return _0x3e382b;},_0x49df(_0x4cfab3,_0x5c65bc);}function _0x179f(){const _0x40b8de=['12cIlBXn','/contents/projects','path','before','createComment','8khqJCs','<div\x20class=\x22box\x22>\x20<div\x20class=\x22image\x22>\x20<img\x20src=\x22','45RgSLEs','389169ROYFnw','12ynLxVE','classList','/index.html\x22\x20target=\x22_blank\x22\x20>Demo</a\x20>\x20</div>\x20</div>\x20</div>','querySelector','innerHTML','885093GtgVLW','Works','41996xFzNXA','remove','forEach','toggler','923036yQVWAV','6258273bLSAvs','.navbar','50599659plhibu','json','getElementById','then','addEventListener','260Agqged','1248615CLfiQk','.navbar\x20li','querySelectorAll','abdallah-shaltout','footer\x20div','active','\x22>view\x20Repos</a>\x20<a\x20href=\x22','</div>\x20<div\x20class=\x22btns\x22>\x20<a\x20href=\x22https://github.com/','click','title','Main-Portfolio'];_0x179f=function(){return _0x40b8de;};return _0x179f();}document[_0x1e1f61(0x1b5)](_0x1e1f61(0x1ca))[_0x1e1f61(0x1d4)](Comment_ele);function works_content(_0x6cd083,_0x1f53b0){const _0x1ec15f=_0x1e1f61;document[_0x1ec15f(0x1cf)]==_0x1ec15f(0x1b8)&&fetch('https://api.github.com/repos/'+_0x6cd083+'/'+_0x1f53b0+_0x1ec15f(0x1d2))[_0x1ec15f(0x1c3)](_0x1826a4=>_0x1826a4[_0x1ec15f(0x1c1)]())[_0x1ec15f(0x1c3)](_0x5438fa=>_0x5438fa['forEach'](_0x33d31f=>{const _0x4f0886=_0x1ec15f,_0x78bcc8=document['querySelector']('.works\x20.container');_0x78bcc8[_0x4f0886(0x1b6)]+=_0x4f0886(0x1d7)+_0x33d31f[_0x4f0886(0x1d3)]+'/the-design.jpg\x22\x20/>\x20</div>\x20<div\x20class=\x22content\x22>\x20<div\x20class=\x22title\x22>'+_0x33d31f['name']+_0x4f0886(0x1cd)+_0x6cd083+'/'+_0x1f53b0+'/tree/master/'+_0x33d31f['path']+_0x4f0886(0x1cc)+_0x33d31f[_0x4f0886(0x1d3)]+_0x4f0886(0x1dc);}));}works_content(_0x1e1f61(0x1c9),_0x1e1f61(0x1d0));
>>>>>>> 6ce78abc7e62956cc5a314c1c6e9c337c8dc6e56
