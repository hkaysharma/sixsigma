function animator(){var delay,speed;$('.animated').each(function(){var el=$(this);if(el.visible(true)){if(el.data('animtype')=='animate-progress'){el.css('opacity',1);el.addClass('animatedVisi');el.css('opacity',1);el.css('width',el.attr('aria-valuenow'));return;}delay=el.data('animdelay');if(!delay){delay=0;}el.css('-webkit-animation-delay',delay);el.css('-moz-animation-delay',delay);el.css('-o-animation-delay',delay);el.css('animation-delay',delay);speed=el.data('animspeed');if(!speed){speed=0.5;}el.css('-webkit-animation-duration',speed);el.css('-moz-animation-duration',speed);el.css('-o-animation-duration',speed);el.css('animation-duration',speed);if(el.data('animtype')){el.addClass(el.data('animtype'));}el.addClass('animatedVisi');}else if(el.data('animrepeat')=='1'){el.removeClass(el.data('animtype'));el.removeClass('animatedVisi');}});}$(window).ready(animator);$(window).load(animator);$(window).scroll(function(event){animator();});(function($){$.fn.visible=function(partial){var $t=$(this),$w=$(window),viewTop=$w.scrollTop(),viewBottom=viewTop+$w.height(),_top=$t.offset().top,_bottom=_top+$t.height(),compareTop=partial===true?_bottom:_top,compareBottom=partial===true?_top:_bottom;return((compareBottom<=viewBottom)&&(compareTop>=viewTop));};})(jQuery);