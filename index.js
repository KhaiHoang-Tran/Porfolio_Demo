// // khai báo biến title và gán vô biến title
// const title = document.getElementById("title");
// const description = document.getElementById("description");
// // in ra biến title
// console.log(title); 
// // sửa lại biến title
// // title.innerHTML="Javascrip tới chơi";
// // add 1 cái sự kiện gì đó
// title.addEventListener("click", () => {
//    description.innerHTML = "hehe";
// });
document.addEventListener("DOMContentLoaded",function (){
   const menuTooggle = document.getElementById("menu-tooggle");
   const mobieNav = document.getElementById("mobie-nav");
   const barIcon = document.getElementById("bar-icon");
   const closeIcon = document.getElementById("close-icon");
   menuTooggle.addEventListener("click", function() {
      // bật tắt menu
      mobieNav.classList.toggle("active");

      if(mobieNav.classList.contains("active")){
         // đã bấm vào bar icon => ẩn bar icon và hiện close icon
         barIcon.style.display = "none";
         closeIcon.style.display = "block";
      }else{
         barIcon.style.display = "block";
         closeIcon.style.display = "none";
      }
   });
});