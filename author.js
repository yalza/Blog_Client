const authorData = JSON.parse(localStorage.getItem("authorData"));
const blogId = JSON.parse(localStorage.getItem("blogId"));
const username = JSON.parse(localStorage.getItem("username"));

document.getElementById("author-name").innerText = authorData.username;

document.getElementById("author-fullname").innerText = authorData.fullname;

document.getElementById("dob").innerText = authorData.dateofbirth;

document.getElementById("author-hometown").innerText = authorData.hometown;

document.getElementById("username").innerText = username;
