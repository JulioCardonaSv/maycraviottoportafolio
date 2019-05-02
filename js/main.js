(function($){"use strict";var Geass={initialised:false,mobile:false,container:$('#portfolio-item-container'),blogContainer:$('#blog-container'),portfolioItemsAnimated:false,init:function(){if(!this.initialised){this.initialised=true;}else{return;}this.queryLoad();this.checkMobile();this.videoBg();this.checkPlaceholder();this.fitTexts();this.scrollAnimations();this.homeSectionHeight();this.menuScrollToAnimation();this.stickyMenu();this.collapseIcons();this.countdowns();this.owlCarousels();this.singlePortfolioOwl();this.scrollToTopAnimation();this.scrollToClass();this.selectBox();this.bootstrapSwitch();this.tooltip();this.popover();this.countTo();this.progressBars();this.registerKnob();this.prettyPhoto();this.flickerFeed();this.contactForm();this.parallax();this.twitterFeed();this.contactFormFixes();var self=this;if(typeof imagesLoaded==='function'){imagesLoaded(self.container,function(){self.calculateWidth();self.isotopeActivate();self.scrollTriggerforPortfolioAnim();self.prettyPhoto();self.hoverAnimation();self.isotopeFilter();self.openProject();});imagesLoaded(self.blogContainer,function(){self.masonryBlog();});}},queryLoad:function(){var self=this;if($.fn.queryLoader2){$("body").queryLoader2({barColor:"#09d33d",backgroundColor:"#fff",percentage:true,barHeight:5,minimumTime:700,fadeOutTime:200,onComplete:function(){$(".geass-loader-overlay").animate({'height':'hide','opacity':0.25},460,function(){$(this).remove();});}});}},checkMobile:function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){this.mobile=true;}else{this.mobile=false;}},videoBg:function(){if(this.mobile){if($('#home').hasClass('videobg')){$('#home').addClass('homebg');}$('#videobg-container').addClass('videobg');}else{if($.fn.mb_YTPlayer){$(".player").mb_YTPlayer();}else{return;}}},checkPlaceholder:function(){$.support.placeholder=(function(){var i=document.createElement('input');return'placeholder'in i;})();if(!$.support.placeholder&&$.fn.placeholder){$('input, textarea').placeholder();}},fitTexts:function(){if($.fn.fitText){$('.section-title').fitText(1.3,{minFontSize:'40px',maxFontSize:'75px'});$('.parallax-title').fitText(1.4,{minFontSize:'22px',maxFontSize:'36px'});$('.page-title').fitText(1.2,{minFontSize:'50px',maxFontSize:'120px'});}},homeSectionHeight:function(){if($('#wrapper').hasClass('boxed')||$('#wrapper').hasClass('boxed-long')){var winHeight=$(window).height();$('#home').height(winHeight)}else{return;}},stickyMenu:function(){if($.fn.waypoint&&$(window).outerWidth()>767){var calcOffset,fixedClass='navbar-fixed-top';if($('#header').find('.navbar').hasClass('navbar-transparent')){calcOffset=-300;}else{calcOffset=0;}if($('#header').hasClass('fixed-bottom')){fixedClass='navbar-fixed-bottom'}$('#header').find('.navbar').waypoint('sticky',{stuckClass:fixedClass+' fixed-animated',offset:calcOffset});}},destroyStickyMenu:function(){if($.fn.waypoint&&$(window).width()<767){$('#header').find('.navbar').waypoint('unsticky');}},twitterFeed:function(){if($.fn.tweet&&$('.twitter_feed').length){$('.twitter_feed').tweet({modpath:'./js/twitter/',avatar_size:48,count:4,query:"wrapbootstrap",loading_text:"searching twitter...",join_text:"",template:"{join}{text}{time}"});$('.tweet_list').owlCarousel({singleItem:true,slideSpeed:600,autoPlay:8200,stopOnHover:true,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],pagination:false,responsive:true,autoHeight:false,transitionStyle:"backSlide"});}},collapseIcons:function(){$('.panel').each(function(){var $this=$(this),accordionBtn=$this.find('.accordion-btn'),accordionBody=$this.find('.accordion-body');if(accordionBtn.length){accordionBody.on('shown.bs.collapse',function(){if(!accordionBtn.hasClass('open')){accordionBtn.addClass('open');}}).on('hidden.bs.collapse',function(){if(accordionBtn.hasClass('open')){accordionBtn.removeClass('open');}});}});},countdowns:function(){if($.fn.countdown){var eventCoundown=new Date();eventCoundown=new Date(eventCoundown.getFullYear()+1,3-1,1);$('#event-countdown').countdown({until:eventCoundown});}},checkSupport:function(elemname,pluginname){return(elemname.length&&pluginname)?true:false;},owlCarousels:function(){var self=this;var testimonialsCarousel=$('.owl-carousel.testimonials-carousel');if(self.checkSupport(testimonialsCarousel,$.fn.owlCarousel)){testimonialsCarousel.owlCarousel({singleItem:true,slideSpeed:600,autoPlay:9000,stopOnHover:true,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],pagination:false,responsive:true,autoHeight:false,transitionStyle:"backSlide"});}},singlePortfolioOwl:function(){var self=this;var singlePortfolioSlider=$('.single-portfolio-slider.owl-carousel');if(self.checkSupport(singlePortfolioSlider,$.fn.owlCarousel)){singlePortfolioSlider.owlCarousel({singleItem:true,slideSpeed:400,autoPlay:8800,stopOnHover:true,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],pagination:true,responsive:true,mouseDrag:true,autoHeight:false,transitionStyle:"goDown",afterAction:syncPosition,responsiveRefreshRate:100});}var sliderSyncCarousel=$('.slider-thumb-nav.owl-carousel');if(self.checkSupport(sliderSyncCarousel,$.fn.owlCarousel)){sliderSyncCarousel.owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,4],itemsTablet:[768,3],itemsMobile:[479,2],slideSpeed:400,autoPlay:8800,stopOnHover:true,navigation:false,pagination:false,responsive:true,mouseDrag:true,autoHeight:false,responsiveRefreshRate:100,afterInit:function(el){el.find(".owl-item").eq(0).addClass("active");}});}if(!singlePortfolioSlider.length&&!sliderSyncCarousel.length){return;}function syncPosition(el){var current=this.currentItem;$('.slider-thumb-nav.owl-carousel').find(".owl-item").removeClass("active").eq(current).addClass("active");if($('.slider-thumb-nav.owl-carousel').data("owlCarousel")!==undefined){center(current);}}$('.slider-thumb-nav.owl-carousel').on("click",".owl-item",function(e){e.preventDefault();var number=$(this).data("owlItem");singlePortfolioSlider.trigger("owl.goTo",number);});function center(number){var sync2visible=sliderSyncCarousel.data("owlCarousel").owl.visibleItems,num=number,found=false,i;for(i in sync2visible){if(num===sync2visible[i]){found=true;}}if(found===false){if(num>sync2visible[sync2visible.length-1]){sliderSyncCarousel.trigger("owl.goTo",num-sync2visible.length+2)}else{if(num-1===-1){num=0;}sliderSyncCarousel.trigger("owl.goTo",num);}}else if(num===sync2visible[sync2visible.length-1]){sliderSyncCarousel.trigger("owl.goTo",sync2visible[1])}else if(num===sync2visible[0]){sliderSyncCarousel.trigger("owl.goTo",num-1)}}},scrollTopBtnAppear:function(){var windowTop=$(window).scrollTop(),scrollTop=$('#scroll-top');if(windowTop>=200){scrollTop.addClass('fixed');}else{scrollTop.removeClass('fixed');}},scrollToAnimation:function(speed,offset,e){var targetEl=$(this).attr('href'),toTop=false;if(!$(targetEl).length){if(targetEl==='#home'||targetEl==='#top'){targetPos=0;toTop=true;}else{return;}}else{var elem=$(targetEl),targetPos=offset?(elem.offset().top+offset):elem.offset().top;}if(targetEl||toTop){$('html, body').animate({'scrollTop':targetPos},speed||1200);e.preventDefault();}},menuScrollToAnimation:function(){var self=this;$('#main-menu').find('a').on('click',function(e){self.scrollToAnimation.call(this,1000,0,e);$(this).closest('li').addClass('active').siblings().removeClass('active');});},scrollToTopAnimation:function(){var self=this;$('#scroll-top').on('click',function(e){self.scrollToAnimation.call(this,1200,0,e);});},scrollToClass:function(){var self=this;$('.scrollto').on('click',function(e){self.scrollToAnimation.call(this,1200,0,e);});},selectBox:function(){if($.fn.selectbox){$('.selectbox').selectbox({effect:"fade"});}},bootstrapSwitch:function(){if($.fn.bootstrapSwitch){$('.switch').bootstrapSwitch();}},tooltip:function(){if($.fn.tooltip){$('.add-tooltip').tooltip();}},popover:function(){if($.fn.popover){$('.add-popover').popover({trigger:'focus'});}},countTo:function(){if($.fn.countTo){if($.fn.waypoint){$('.count').waypoint(function(){$(this).countTo();},{offset:function(){return($(window).height()-100);},triggerOnce:true});}else{$('.count').countTo();}}else{$('.count').each(function(){var $this=$(this),countValue=$this.data('to');$this.text(countValue);});}},progressBars:function(){var self=this;if($.fn.waypoint){$('.progress-animate').waypoint(function(){if(!$(this).hasClass('circle-progress')){var $this=$(this),progressVal=$(this).data('width'),progressText=$this.find('.progress-text');$this.css({'width':progressVal+'%'},400);progressText.fadeIn(500,function(){$(this).removeClass('progress-animate');});}else{self.animateKnob();}},{offset:function(){return($(window).height()-10);}});}else{$('.progress-animate').each(function(){var $this=$(this),progressVal=$(this).data('width'),progressText=$this.find('.progress-text');$this.css({'width':progressVal+'%'},400);progressText.fadeIn(500);});}},registerKnob:function(){if($.fn.knob){$('.knob').knob({bgColor:'#fff'});}},animateKnob:function(){if($.fn.knob){$('.knob').each(function(){var $this=$(this),container=$this.closest('.progress-animate'),animateTo=$this.data('animateto'),animateSpeed=$this.data('animatespeed')
$this.animate({value:animateTo},{duration:animateSpeed,easing:'swing',progress:function(){$this.val(Math.round(this.value)).trigger('change');},complete:function(){container.removeClass('progress-animate');}});});}},scrollAnimations:function(){if(typeof WOW==='function'){new WOW({boxClass:'wow',animateClass:'animated',offset:0}).init();}},prettyPhoto:function(){if($.fn.prettyPhoto){$("a[data-rel^='prettyPhoto']").prettyPhoto({hook:'data-rel',animation_speed:'fast',slideshow:6000,autoplay_slideshow:true,show_title:false,deeplinking:false,social_tools:'',overlay_gallery:true});}},flickerFeed:function(){if($.fn.jflickrfeed){$('ul.sidebar-flickr-widget').jflickrfeed({limit:8,qstrings:{id:'52617155@N08'},itemTemplate:'<li>'+'<a href="{{image}}" title="{{title}}">'+'<img src="{{image_s}}" alt="{{title}}" />'+'</a>'+'</li>'});}},contactForm:function(){if($.fn.validate){$('#contact-form').validate({rules:{contactname:'required',contactemail:{required:true,email:true},contactmessage:{required:true,minlength:50}},messages:{contactname:"This field is required. Please enter your name.",contactemail:{required:"This field is required. Please enter your email address.",email:"Please enter a valid email address."},contactmessage:{required:"This field is required. Please enter your message.",minlength:"Your message must be at least 50 characters long."}},submitHandler:function(form){$.ajax({type:'post',url:'php/mail.php',data:$(form).serialize(),}).done(function(data){if(data=='success'){alert('Email has been sent successfully!')}else if(data=='already'){alert('You already sent a message. Please try again later');}else{alert('There is an error please try again later!');}}).error(function(){alert('There is an error please try again later!');});return false;}});}},contactFormFixes:function(){var contactFrom=$('#contact-form');contactFrom.find('input, textarea').on('blur',function(){var $this=$(this),inputVal=$this.val(),animatedLabel=$this.siblings('.animated-label');if(inputVal!==''){animatedLabel.addClass('not-empty');}else{animatedLabel.removeClass('not-empty');}});contactFrom.find('input[type="reset"]').on('click',function(){contactFrom.find('.animated-label').removeClass('not-empty');});},scrollSpyRefresh:function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this).scrollspy('refresh')});},parallax:function(){if(!Geass.mobile&&$.fn.stellar){$(window).stellar({verticalOffset:0,horizontalOffset:0,horizontalScrolling:false});}},masonryBlog:function(){if($.fn.isotope){this.blogContainer.isotope({itemSelector:'.article',layoutMode:'masonry'});}},calculateWidth:function(){var widthPort=$(window).width(),contWidth=this.container.width(),maxColumn=this.container.data('maxcolumn'),itemW;if(widthPort>1170){itemW=(maxColumn)?maxColumn:5;}else if(widthPort>960){itemW=(maxColumn)?((maxColumn>4)?4:3):4;}else if(widthPort>767){itemW=3;}else if(widthPort>540){itemW=2;}else{itemW=1;}var targetItems=this.container.find('.portfolio-item');if(itemW>=4&&targetItems.hasClass('wide')){this.container.find('.wide').css('width',(Math.floor(contWidth/itemW)*2));targetItems.not('.wide').css('width',Math.floor(contWidth/itemW));}else{targetItems.css('width',Math.floor(contWidth/itemW));}},isotopeActivate:function(){if($.fn.isotope){var container=this.container,layoutMode=container.data('layoutmode');var iso=container.isotope({itemSelector:'.portfolio-item',layoutMode:(layoutMode)?layoutMode:'masonry',transitionDuration:0}).data('isotope');}},isotopeReinit:function(){if($.fn.isotope){this.container.isotope('destroy');this.isotopeActivate();}},isotopeFilter:function(){var self=this,filterContainer=$('#portfolio-filter');filterContainer.find('a').on('click',function(e){var $this=$(this),selector=$this.attr('data-filter'),animationclass=self.container.data('animationclass'),customAnimation=(animationclass)?animationclass:'fadeInUp';filterContainer.find('.active').removeClass('active');self.container.find('.portfolio-item').removeClass('animate-item '+customAnimation);self.container.isotope({filter:selector,transitionDuration:'0.8s'});$this.addClass('active');e.preventDefault();});},elementsAnimate:function(){var animationclass=this.container.data('animationclass'),customAnimation=(animationclass)?animationclass:'fadeInUp',elemLen=this.container.find('.animate-item').length,count=0;this.container.find('.animate-item').each(function(){var $this=$(this),time=$this.data('animate-time');++count;setTimeout(function(){$this.addClass('animated '+customAnimation);},time);if(count===elemLen){this.portfolioItemsAnimated=true;}});if($.fn.isotope&&this.portfolioItemsAnimated){this.container.isotope('layout');}},scrollTriggerforPortfolioAnim:function(){if($.fn.waypoint){this.container.waypoint(Geass.elementsAnimate.bind(this),{offset:'90%',triggerOnce:true});}else{Geass.elementsAnimate();}},hoverAnimation:function(){var rotate3d=this.container.data('rotateanimation'),rotate3dActive=(rotate3d)?rotate3d:false;if($.fn.hoverdir){this.container.find('li').each(function(){$(this).hoverdir({speed:400,hoverDelay:0,hoverElem:'.portfolio-overlay',rotate3d:rotate3dActive});});}},openProject:function(){var self=this,targetEl=$('#portfolio-single-content'),targetElIn=targetEl.find('.single-portfolio');$('.open-btn').on('click',function(e){e.preventDefault();var $this=$(this),parentEl=$this.closest('.portfolio-item');if(!targetEl.is(':hidden')){self.container.find('.portfolio-item.active').removeClass('active');self.loadProject.call($this,targetEl,parentEl);}else{self.loadProject.call(this,targetEl,parentEl);}});},loadProject:function(targetEl,parentEl){var $this=$(this),targetPro=$this.attr('href');if(targetPro===''){alert('Path is empyt! Please use right path for the project!');return;}if(targetPro.indexOf('.html')==-1){alert('Not a valid path! Please use right path for the project!');return;}var ajaxCall=new $.Deferred();$.when(ajaxCall).done(function(data){targetEl.animate({'height':'show'},600,function(){var targetPosition=((targetEl.offset().top)-110);$('html, body').animate({'scrollTop':targetPosition},700);$('[data-spy="scroll"]').each(function(){var $spy=$(this).scrollspy('refresh')});parentEl.addClass('active');});Geass.closeProject();Geass.singlePortfolioOwl();});targetEl.load(targetPro+' #project-content',function(response,status,xhr){ajaxCall.resolve();});},closeProject:function(){var self=this,targetEl=$('#portfolio-single-content'),targetElIn=targetEl.find('.single-portfolio');$('.portfolio-close').on('click',function(e){$(targetEl).animate({'height':'hide'},400,function(){self.container.find('.portfolio-item.active').removeClass('active');$(this).html('')});e.preventDefault();});}};Geass.init();$(window).on('load',function(){});$(window).on('scroll',function(){Geass.scrollTopBtnAppear();});var resizeFixWinWidth=$(window).width();if($.event.special.debouncedresize){$(window).on('debouncedresize',function(){var resizeCheckWinWidth=$(window).width();if($(window).width()!==resizeFixWinWidth){Geass.homeSectionHeight();Geass.calculateWidth();Geass.isotopeReinit();Geass.scrollSpyRefresh();resizeFixWinWidth=resizeCheckWinWidth;}});}else{$(window).on('resize',function(){var resizeCheckWinWidth=$(window).width();if($(window).width()!==resizeFixWinWidth){Geass.homeSectionHeight();Geass.calculateWidth();Geass.isotopeReinit();Geass.scrollSpyRefresh();resizeFixWinWidth=resizeCheckWinWidth;}});}})(jQuery)(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102201980-1', 'auto');
  ga('send', 'pageview');
