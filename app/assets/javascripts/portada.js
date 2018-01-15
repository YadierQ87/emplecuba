var revapi70;
jQuery(window).load(function() {
    if(jQuery("#slider").revolution == undefined){
        revslider_showDoubleJqueryError("#slider");
    }else{
        revapi70 = jQuery("#slider").show().revolution({
            sliderType:"standard",
            jsFileLocation:"assets/revolution/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                onHoverStop:"off",
                touch:{
                    touchenabled:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"zeus",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
            },
            responsiveLevels:[1240,1024,778,480],
            gridwidth:[1400,1240,778,480],
            gridheight:[650,650,960,720],
            lazyType:"none",
            parallax: {
                type:"mouse+scroll",
                origo:"slidercenter",
                speed:2000,
                levels:[1,2,3,20,25,30,35,40,45,50],
                disable_onmobile:"on"
            },
            shadow:0,
            spinner:"spinner2",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                disableFocusListener:false,
            }
        });
    }
});	/*ready*/