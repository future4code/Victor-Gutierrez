document.getElementById("modaltoggler").addEventListener("click", () => {
  document.getElementById("formmodal").classList.toggle("hide");
});

const objArr =  [];

let newpostarea = document.getElementById("newpostarea");
let sendButton = document.getElementById("sender");

sendButton.addEventListener("click", () => {
    event.preventDefault();
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
        
  newpostarea.innerHTML += `<div class="postWrapper">
                          <h2>${objArr[0].creator}</h2>
                         <img src="${objArr[0].imageUrl}">
                         <h3 class="title">${objArr[0].title}</h3>
                         <p class="postsay">${objArr[0].text}</p>
                            </div>`;
}

console.log(objArr);
