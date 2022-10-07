const copyBtnLabel = "Copy Code";

// you can use a class selector instead if you, or the syntax highlighting library adds one to the 'pre'.
let preBlock = document.querySelectorAll("pre");

preBlock.forEach((prebloc) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let btn = document.createElement("button");
    btn.innerText = copyBtnLabel;
    btn.addEventListener("click", copyCode);
    prebloc.appendChild(btn);
  }
});

async function copyCode(event) {
  let btn = event.srcElement;
  let pre = btn.parentElement;
  let code = pre.querySelector(".codeParag");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);

  btn.innerText = "Code Copied";

  setTimeout(() => {
    btn.innerText = copyBtnLabel;
  }, 1000);
}


/* Functions for opening and closing Menu by clicking the button on a mobile phone display */
let menu = document.getElementById("nav-tag");
function menuClose() {
     menu.style.right = "-380px";
}

function menuOpen() {
    menu.style.right = "0";
}