let toggle = document.querySelector(".submenuBtn")
let submenu = document.querySelector('.submenu')
let status = true
toggle.addEventListener('click',function(){
  if(status == true){
    submenu.classList.add('submenu-items')
    status = false
  }else{
    submenu.classList.remove('submenu-items')
    status = true
  }   
})