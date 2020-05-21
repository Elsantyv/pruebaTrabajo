$(document).ready(function() {

    let van = 0;
    let vanT = 0;
    let vanS = 0;
    let sw = 0;

    if ($(window).width() <= 767) {

        $(".menuMobilOff").hide();

    }



    $("#menuMobil").click(function(evento) {

        if (sw === 1) {

            $(".menuMobilOff").show(1000);

            sw = 0;

        } else {

            sw = 1;
            $(".menuMobilOff").hide(1000);

        }

    });

    $(".arrowMensaje").click(function(evento) {

        switch (van) {

            case 0:
                $(".mensajeJs").text("Traten a los demás como ustedes quisieran ser tratados. Esta es la esencia de todo lo enseñado por la ley y los profetas.");
                $(".mensajeJs").append;
                van = 1;
                break;

            case 1:
                $(".mensajeJs").text("Es allí, en esa fuerza divina, en esa unión esencial con el Sacramento del Altar en donde encontrarán la fuerza, el coraje y la valentía para sobrellevar estos tiempos y no en otro lugar.");
                $(".mensajeJs").append;
                van = 0;
                break;

        }

    });

    $(".arrowTI").click(function(evento) {
        if (vanT === 0) vanT = 3;
        vanT--;
        switch (vanT) {

            case 0:
                $(".nombreT").text("Juan David Henao");
                $(".nombreT").append;
                $(".textoT").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoT").append;
                $(".line1").css({ 'border-bottom': '1px solid red' });
                $(".line2").css({ 'border-bottom': 'none' });
                $(".line3").css({ 'border-bottom': 'none' });
                break;
            case 1:
                $(".nombreT").text("Camilo Caro Zapata");
                $(".nombreT").append;
                $(".textoT").text("Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoT").append;
                $(".line1").css({ 'border-bottom': 'none' });
                $(".line2").css({ 'border-bottom': '1px solid red' });
                $(".line3").css({ 'border-bottom': 'none' });
                break;
            case 2:
                $(".nombreT").text("Pedro Velez Usuga");
                $(".nombreT").append;
                $(".textoT").text("Facilis explicabo eos, reprehenderit Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoT").append;
                $(".line1").css({ 'border-bottom': 'none' });
                $(".line2").css({ 'border-bottom': 'none' });
                $(".line3").css({ 'border-bottom': '1px solid red' });
                break;

        }
    });

    $(".arrowTD").click(function(evento) {
        vanT++;
        if (vanT === 3) vanT = 0;

        switch (vanT) {

            case 0:
                $(".nombreT").text("Juan David Henao");
                $(".nombreT").append;
                $(".textoT").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoT").append;
                $(".line1").css({ 'border-bottom': '1px solid red' });
                $(".line2").css({ 'border-bottom': 'none' });
                $(".line3").css({ 'border-bottom': 'none' });
                break;
            case 1:
                $(".nombreT").text("Camilo Caro Zapata");
                $(".nombreT").append;
                $(".textoT").text("Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoT").append;
                $(".line1").css({ 'border-bottom': 'none' });
                $(".line2").css({ 'border-bottom': '1px solid red' });
                $(".line3").css({ 'border-bottom': 'none' });
                break;
            case 2:
                $(".nombreT").text("Pedro Velez Usuga");
                $(".nombreT").append;
                $(".textoT").text("Facilis explicabo eos, reprehenderit Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoT").append;
                $(".line1").css({ 'border-bottom': 'none' });
                $(".line2").css({ 'border-bottom': 'none' });
                $(".line3").css({ 'border-bottom': '1px solid red' });
                break;

        }

    });

    $(".arrowIS").click(function(evento) {
        if (vanS === 0) vanS = 3;
        vanS--;
        switch (vanS) {

            case 0:
                $(".textoS").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoS").append;
                $(".navS1").css({ 'border-bottom': '1px solid red' });
                $(".navS2").css({ 'border-bottom': 'none' });
                $(".navS3").css({ 'border-bottom': 'none' });
                break;
            case 1:
                $(".textoS").text("Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoS").append;
                $(".navS1").css({ 'border-bottom': 'none' });
                $(".navS2").css({ 'border-bottom': '1px solid red' });
                $(".navS3").css({ 'border-bottom': 'none' });
                break;
            case 2:
                $(".textoS").text("Facilis explicabo eos, reprehenderit Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoS").append;
                $(".navS1").css({ 'border-bottom': 'none' });
                $(".navS2").css({ 'border-bottom': 'none' });
                $(".navS3").css({ 'border-bottom': '1px solid red' });
                break;

        }
    });

    $(".arrowDS").click(function(evento) {
        vanS++;
        if (vanS === 3) vanS = 0;

        switch (vanS) {

            case 0:
                $(".textoS").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoS").append;
                $(".navS1").css({ 'border-bottom': '1px solid red' });
                $(".navS2").css({ 'border-bottom': 'none' });
                $(".navS3").css({ 'border-bottom': 'none' });
                break;
            case 1:
                $(".textoS").text("Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoS").append;
                $(".navS1").css({ 'border-bottom': 'none' });
                $(".navS2").css({ 'border-bottom': '1px solid red' });
                $(".navS3").css({ 'border-bottom': 'none' });
                break;
            case 2:
                $(".textoS").text("Facilis explicabo eos, reprehenderit Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum? Facilis explicabo eos, reprehenderit repudiandae sunt modi. Omnis placeat assumenda distinctio voluptas est explicabo fugiat ipsum dolore in. Earum, corporis?");
                $(".textoS").append;
                $(".navS1").css({ 'border-bottom': 'none' });
                $(".navS2").css({ 'border-bottom': 'none' });
                $(".navS3").css({ 'border-bottom': '1px solid red' });
                break;

        }

    });

    $("#volver").click(function(evento) {

        $('body, html').animate({
            scrollTop: '0px'
        }, 2000);

    });

    /*    ($("#mensajeI") || $("#mensajeD")).click(function(evento) {


            console("Entro");

        });*/



});