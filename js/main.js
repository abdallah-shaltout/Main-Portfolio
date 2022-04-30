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
