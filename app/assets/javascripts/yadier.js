/*functions js echas x mi */

var myjquery=jQuery;
var revapi70;

myjquery(window).ready(function() {
    $('#mytabla').DataTable();
} );

myjquery(window).load(function() {

    $("#btn-menu-side").click(function () {
        var htmldiv = $('#lista-menu-nav').html();
        $('#menu-option-sm').html(htmldiv);
        $('.menu-side-nav').slideDown();
    });

    $("#to-top").click(function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
// enviar correo de boletin suscriptor
    $('.form-submit').click(function() {
        var vcorreo = $('#vcorreo').val();
        var params = {correo:vcorreo}
        $("#mensaje-mail").html("Enviando Mensaje de contacto...");
        $("#mensaje-mail").removeClass('hidden');
        $("#mensaje-mail").addClass('warning-box');
        $('#messagecontent').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: "/enviar_contacto",
            data: params,
            success: function(msg){
                $("#mensaje-mail").removeClass('success-box');
                $(".esconde-form").css('visibility','hidden');
                $("#mensaje-mail").html("Mensaje enviado con Exito!");
                $("#mensaje-mail").addClass('alert-success');
            }
        });
    });

//fin del envio de correo

    /* datatables anuales y trimestrales */
    if (locale == "es") {
        $('#mytabla').dataTable({
            destroy: true,
            "aaSorting": [[0, "desc"]],
            "oLanguage": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar en bloques de _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sInfo": "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando desde 0 hasta 0 de 0 registros",
                "sInfoFiltered": "(filtrado de _MAX_ registros en total)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sPrevious": "Anterior",
                    "sNext": "Siguiente",
                    "sLast": "Último",
                }
            },
            "bProcessing": true,
            "sDom": "<'row'<'col-sm-4'l><'col-sm-8'f>r>t<'row'<'col-sm-4 ie-col-8'i><'col-sm-8 ie-col-8'p>>",
            "sPaginationType": "full",
        });
    }
    else {
        $('#mytabla').dataTable({
            destroy: true,
            "aaSorting": [[0, "desc"]],
            "sDom": "<'row'<'col-sm-4'l><'col-sm-8'f>r>t<'row'<'col-sm-4'i><'col-sm-8'p>>",
            "sPaginationType": "full",
        });
    }
    /* datatables anuales y trimestrales */




    $("#btn-menu-close").click(function () {
        $('.menu-side-nav').slideUp();
    });

    /*slider revolution script */
    if(myjquery("#slider").revolution == undefined){
        revslider_showDoubleJqueryError("#slider");
    }else{
        revapi70 = myjquery("#slider").show().revolution({
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
    /* end slider script */

});



