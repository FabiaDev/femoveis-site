document.addEventListener("DOMContentLoaded", function(){


document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target){
            window.scrollTo({
                top:target.offsetTop -60, behavior: 'smooth'
            });
        }
    });
});

const btnTopo = document.getElementById("btnTopo");
  window.addEventListener("scroll",function() {
    if (window.scrollY > 300){
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  ScrollReveal().reveal('.hero-content, .sobre, .galeria, .contato, footer',{
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
  });
});