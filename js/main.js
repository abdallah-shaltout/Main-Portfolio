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
function check_contact_section() {
    if (document.title == "Dynamic portfolio") {
        // contact section start
        let sendMsg = document.getElementById("send_msg");
        sendMsg.addEventListener("click", () => {
            window.open("https://www.facebook.com/abdullahshaltout/", "_blank");
            // window.open("fb://facewebmodal/f?href=https://www.facebook.com/abdullahshaltout");
        });
        // contact section end
        // Discover box start
        let discover_link = document.querySelector(".discover");
        discover_link.addEventListener("click", () => {
            window.open("/works.html", "_self");
        });
        // Discover box end
    }
}
check_contact_section();

let Comment_ele = document.createComment(
    "This Website Made With Love By Abdallah M.Shaltout"
);
document.querySelector("footer div").before(Comment_ele);

// function works_content() {
//     if (document.title == "Works") {
//         let demo_link = document.querySelector(".demo");
//         demo_link.addEventListener("click", () => {
//             window.open("/projects/project-1/index.html");
//         });
//     }
// }
// works_content();
