function changeNavBg(){
    var navbar = document.getElementById('top-nav');
    var scrollval = window.scrollY;
    if(scrollval < 100){
        navbar.classList.remove('bgColor');
    }
    else{
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll', changeNavBg)