const objArr = [];
let counter = -1;

document.getElementById("modaltoggler").addEventListener("click", () => {
  document.getElementById("formmodal").classList.toggle("hide");
});

let newpostarea = document.getElementById("newpostarea");
let sendButton = document.getElementById("sender");

sendButton.addEventListener("click", () => {
  event.preventDefault();
  counter++;
  let postTitle = document.getElementById("postTitle").value;
  let author = document.getElementById("nickname").value;
  let content = document.getElementById("postContent").value;
  let image = document.getElementById("photoUrl").value;
  objArr.push(factory(postTitle, postTitle, author, content, image));

  render(objArr);
});

function factory(objname, title, author, content, photoUrl) {
  objname = {};
  objname.title = title;
  objname.creator = author;
  objname.text = content;
  objname.imageUrl = photoUrl;
  return objname;
}

function render(objArr) {
  document.getElementById("formmodal").classList.toggle("hide");
  newpostarea.innerHTML += `<div class="postWrapper">
    <h3>${objArr[counter].creator}</h3>
    <img src="${objArr[counter].imageUrl}">
    <h3 class="title">${objArr[counter].title}</h3>
    <p class="postsay">${objArr[counter].text}</p>
    </div>`;
}

postTitle = "";
author = "";
content = "";
image = "";
console.log(objArr);
