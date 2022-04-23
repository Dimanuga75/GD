let btnmenu = document.querySelector('.header_burger')
let menudisplay = document.querySelector('.header_menu')
let btnclose = document.querySelector('._close')

btnmenu.onclick = function(e) {
      e.preventDefault()
       btnmenu.style.display = 'none';
       menudisplay.style.display='block';
}
btnclose.onclick = function(es) {
   es.preventDefault()
   menudisplay.style.display='none';
   btnmenu.style.display = 'block';
}   
// $(document).ready(function() {
//    $('.logo').on('click', function() {
//       console.log('zdggd');
//    })
// })

$(window).scroll(function() {
   if ($(this).scrollTop() > 100 && $(this).scrollTop() < 1700) {
       $('.one').addClass("activeH_right");
   }  else {
       
      $('.one').removeClass("activeH_right");
   }
})

$(window).scroll(function() {
   if ($(this).scrollTop() > 350 && $(this).scrollTop() < 420) {
       $('.web').addClass("web_active1");
   }  else if ($(this).scrollTop() > 420 && $(this).scrollTop() < 1200) {
      $('.web').addClass("web_active2");
   } else {
       $('.web').removeClass("web_active2");
      $('.web').removeClass("web_active1");
   }
})
$(window).scroll(function() {
   if ($(this).scrollTop() > 420 && $(this).scrollTop() < 490) {
       $('.web1').addClass("web1_active1");
   }  else if ($(this).scrollTop() > 490 && $(this).scrollTop() < 1200) {
      $('.web1').addClass("web1_active2");
   } else {
      $('.web1').removeClass("web1_active2");
      $('.web1').removeClass("web1_active1");
   }
})
$(window).scroll(function() {
   if ($(this).scrollTop() > 490 && $(this).scrollTop() < 560) {
       $('.web2').addClass("web1_active1");
   }  else if ($(this).scrollTop() > 560 && $(this).scrollTop() < 1200) {
      $('.web2').addClass("web1_active2");
   } else {
      $('.web2').removeClass("web1_active2");
      $('.web2').removeClass("web1_active1");
   }
})
$(window).scroll(function() {
   if ($(this).scrollTop() > 560 && $(this).scrollTop() < 630) {
       $('.web3').addClass("web1_active1");
   }  else if ($(this).scrollTop() > 630 && $(this).scrollTop() < 1200) {
      $('.web3').addClass("web1_active2");
   } else {
      $('.web3').removeClass("web1_active2");
      $('.web3').removeClass("web1_active1");
   }
})
$(window).scroll(function() {
   if ($(this).scrollTop() > 630 && $(this).scrollTop() < 700) {
       $('.web4').addClass("web1_active1");
   }  else if ($(this).scrollTop() > 700 && $(this).scrollTop() < 1200) {
      $('.web4').addClass("web1_active2");
   } else {
      $('.web4').removeClass("web1_active2");
      $('.web4').removeClass("web1_active1");
   }
})
$(window).scroll(function() {
   if ($(this).scrollTop() > 770 && $(this).scrollTop() < 840) {
       $('.web5').addClass("web1_active1");
   }  else if ($(this).scrollTop() > 840 && $(this).scrollTop() < 2000) {
      $('.web5').addClass("web1_active2");
   } else {
      $('.web5').removeClass("web1_active2");
      $('.web5').removeClass("web1_active1");
   }
})
  
// $(window).load(function() {
//    $('.header').css('display', 'none');
   
  $( window ).width(function() { 
  if ( $( this ).width() > 641){
      $(window).scroll(function() {
       if ($(this).scrollTop() > 200 && $(this).scrollTop() < 1700) {
           $('.header_body ').css('display', 'flex');
       }  
    
       else {
           
           $('.header_body ').css('display', 'none');
       }
   })
  } else if ( $( this ).width() > 480  && $( this ).width() <=640){
               $(window).scroll(function() {
                  if ($(this).scrollTop() > 200 && $(this).scrollTop() < 900) {
                     $('.header_body ').css('display', 'flex');
                }  
          else {
                $('.header_body ').css('display', 'none');
               }  
               }) 
   } else {            
      $(window).scroll(function() {
       if ($(this).scrollTop() > 200 && $(this).scrollTop() < 996) {
           $('.header_body ').css('display', 'flex');
       }  
    
       else {
           
           $('.header_body ').css('display', 'none');
                  }
           })
         }
   })
// })
SmoothScroll({
   // Время скролла 400 = 0.4 секунды
   animationTime    : 800,
   // Размер шага в пикселях 
   stepSize         : 70,

   // Дополнительные настройки:
   
   // Ускорение 
   accelerationDelta : 30,  
   // Максимальное ускорение
   accelerationMax   : 2,   

   // Поддержка клавиатуры
   keyboardSupport   : true,  
   // Шаг скролла стрелками на клавиатуре в пикселях
   arrowScroll       : 50,

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm   : true,
   pulseScale       : 4,
   pulseNormalize   : 1,

   // Поддержка тачпада
   touchpadSupport   : true,
})









   