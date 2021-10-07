function validate(){
    alert("Form Submitted Successfully!");
    return true;
  }


//   let btn = document.querySelector('.btn');
//   let inputs = document.querySelectorAll('input');

//   btn.addEventListener('click',()=>{
//       inputs.forEach(input => input.value = '' );
//   })

document.querySelector('form').onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
 };


let navbar =document.querySelectorAll('.nav-link');
let collase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collase.classList.remove("show");
    })
})

