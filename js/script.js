document.body.onload = function(){
   setTimeout(function () {
let preloader = document.getElementById ('preloud');
if (!preloader.classList.contains('done'))
{preloader.classList.add('done')}
   }, 1000);
}

let btnmenu = document.querySelector('.header_burger')
let menudisplay = document.querySelector('.header_menu')
let menudisplay1 = document.querySelector('.header_menucont')
let btnclose = document.querySelector('.header_close')
let btncloses= document.querySelectorAll('.nav-link')

btnmenu.onclick = function(e) {
      e.preventDefault()
       btnmenu.style.display = 'none';
       menudisplay1.classList.add("active");
       menudisplay.classList.add("active");
       menudisplay1.style.display = 'block';
       menudisplay.style.display = 'block';
             
}
btnclose.onclick = function(es) {
   es.preventDefault()
   btnmenu.style.display = 'block';
   menudisplay1.classList.remove("active");
   menudisplay.classList.remove("active");
   menudisplay1.style.display = 'none';
   menudisplay.style.display = 'none'; 
}  
 for (const btn of btncloses) {
   btn.addEventListener('click', function () {
      btnmenu.style.display = 'block';
      menudisplay1.classList.remove("active");
      menudisplay.classList.remove("active");
      menudisplay1.style.display = 'none';
      menudisplay.style.display = 'none'; 
   });
 }

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
   if ( $( this ).width() > 991.78){
      $(window).scroll(function() {
       if ($(this).scrollTop() > 200 && $(this).scrollTop() < 1200) {
           $('.header_body ').css('display', 'flex');
       }  
    
       else {
           
           $('.header_body ').css('display', 'none');
       }
   })
  }  else if ( $( this ).width() > 641){
      $(window).scroll(function() {
       if ($(this).scrollTop() > 200 && $(this).scrollTop() < 1100) {
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
       if ($(this).scrollTop() > 0 && $(this).scrollTop() < 996) {
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
//Автослайдинг    
//function auto_play() {  $(".btnright").click();};
//var timemode = 10000;
//var autoPlay = setInterval( auto_play, timemode );
$( document ).ready(function() {
$('#portfolio div[data-elem-type="button"]').addClass("sldcontbtn");
 
$('.butsld , .sldelem').click(function(e){e.preventDefault();});
var sumpic = $('.sldtitle').length-1;
 
 var numsld = 0;
 $(".btntab:not(:first)").addClass('tabmode');
 $(".sldtitle:not(:first)").addClass('hide');
 $(".sldtext1:not(:first)").addClass('hide');
 $(".sldtext:not(:first)").addClass('hide');
 $(".sldpic:not(:first)").addClass('hide');
 $(".sldcontbtn:not(:first)").hide();
 
 function sldelemhide(){
   $(".sldtitle, .sldtext , .sldpic , .sldcontbtn, .sldtext1").addClass('hide');
   $(".btntab").addClass('tabmode');
};
function sldelemshow(){
   $(".sldtext1:eq("+numsld+"), .sldtitle:eq("+numsld+") , .sldtext:eq("+numsld+") , .sldpic:eq("+numsld+") , .sldcontbtn:eq("+numsld+")").removeClass('hide');
   $(".sldnumber").html('0'+(numsld+1));
   $(".btntab:eq("+numsld+")").removeClass('tabmode');
};
$(".btnright").click(function() {
    sldelemhide();
    if (numsld==sumpic){ numsld=0;sldelemshow();
    }else{ numsld++;sldelemshow();
    }; 
});
$(".btnleft").click(function() {
    sldelemhide();
    if (numsld==0){ numsld=sumpic;sldelemshow();
    }else{ numsld--;sldelemshow(); 
    }; 
});
//При клике на таб
 $('.btntab').click(function(e) {e.preventDefault();
    $('.btntab').addClass('tabmode');$(this).removeClass('tabmode'); 
    numsld = $(".btntab").index(this); sldelemhide();sldelemshow();
 });    
 
//$(".butsld , .sldelem , .sldcontbtn ,.btntab").hover(
//function(){  clearInterval(autoPlay);
//},function(){  autoPlay = setInterval( auto_play, timemode );});   
//});
//document.addEventListener('DOMContentLoaded', function() {
//    document.addEventListener('visibilitychange', function() {
//        if (document.hidden) { clearInterval(autoPlay);
//            } else { autoPlay = setInterval( auto_play, timemode );
//            }
//    });
});

const smoothLinks = document.querySelectorAll('.nav-link');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

 let tagBody = document.getElementsByTagName('body');
 document.addEventListener('DOMContentLoaded', () => {  
 
   // Кнопка по которой происходит клик
   let callBackButton = document.getElementById('callback-button');
  
   // Модальное окно, которое необходимо открыть
   let modal1 = document.getElementById('modal-1');
  
   // Кнопка "закрыть" внутри модального окна
   let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
  
   // Тег body для запрета прокрутки
   let tagBody = document.getElementById('body')
  
   callBackButton.onclick = function (e) {
     e.preventDefault();
     modal1.classList.add('modal_active');
     tagBody.classList.add('hiden');
   }
  
   closeButton.onclick = function (e) {
     e.preventDefault();
     modal1.classList.remove('modal_active');
     tagBody.classList.remove('hiden');
   }
  
   modal1.onmousedown = function (e) {
     let target = e.target;
     let modalContent = document.getElementsByClassName('modal_content')[0];
     if (e.target.closest('.' + modalContent.className ) === null) {
       this.classList.remove('modal_active')
       tagBody.classList.remove('hiden');
     }
   };
   let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');
 // Вызов модального окна несколькими кнопками на странице
   for (let button of buttonOpenModal1) {
     button.onclick = function (e) {
       e.preventDefault();
         modal1.classList.add('modal_active');
         tagBody.classList.add('hiden');
    
      
     }
   }
 });

