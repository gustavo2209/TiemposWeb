
// ACCIONES CON AUTORES

function autoresIns() {
    $("#tbl_autores_accion").val("INS");
    $("#tbl_autores_autor").val("");

    $("#dlg_autores_title").text("Nuevo Autor");
    $("#dlg_autores_errores").html("");

    $("#dlg_autores").modal("show");
}

function autoresUpd(idautor, autor) {
    $("#tbl_autores_accion").val("UPD");
    $("#tbl_autores_idautor").val(idautor);
    $("#tbl_autores_autor").val(autor);

    $("#dlg_autores_title").text("Actualizar datos de Autor");
    $("#dlg_autores_errores").html("");

    $("#dlg_autores").modal("show");
}

function autoresInsUpd() {
    var accion = $("#tbl_autores_accion").val();
    var idautor = $("#tbl_autores_idautor").val();
    var autor = $("#tbl_autores_autor").val();

    if (accion === "INS") {
        $.ajax({
            url: "Autores/AutoresIns",
            dataType: "json",
            type: "POST",
            data: {
                autor: autor
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_autores_errores").html(result.msg);
                }
            }
        });
    } else if (accion === "UPD") {
        $.ajax({
            url: "Autores/AutoresUpd",
            dataType: "json",
            type: "POST",
            data: {
                idautor: idautor,
                autor: autor
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_autores_errores").html(result.msg);
                }
            }
        });
    }
}

function autoresDel(idautor, autor) {
    $("#dlg_confirm_dato1").val("DEL_AUTOR");
    $("#dlg_confirm_dato2").val(idautor);

    $("#dlg_confirm_title").text("Retirar Autor");
    $("#dlg_confirm_msg").html("¿Desea retirar a " + autor + "?");
    
    $("#dlg_confirm_error").hide();
    $("#dlg_confirm").modal("show");
}

// ACCIONES CON FRASES

function frasesIns(idautor, autor) {
    $("#tbl_frases_accion").val("INS");
    $("#tbl_frases_idautor").val(idautor);
    $("#tbl_frases_autor").val(autor);
    $("#tbl_frases_frase").val("");

    $("#dlg_frases_title").text("Nueva Frase");
    $("#dlg_frases_errores").html("");

    $("#dlg_frases").modal("show");
}

function frasesUpd(idfrase, idautor, autor) {
    $("#tbl_frases_accion").val("UPD");
    $("#tbl_frases_idfrase").val(idfrase);
    $("#tbl_frases_idautor").val(idautor);
    $("#tbl_frases_autor").val(autor);
    $("#tbl_frases_frase").val($("#idfrase_" + idfrase).text());

    $("#dlg_frases_title").text("Actualizar Frase");
    $("#dlg_frases_errores").html("");

    $("#dlg_frases").modal("show");
}

function frasesInsUpd() {
    var accion = $("#tbl_frases_accion").val();
    var idfrase = $("#tbl_frases_idfrase").val();
    var idautor = $("#tbl_frases_idautor").val();
    var frase = $("#tbl_frases_frase").val();

    if (accion === "INS") {
        $.ajax({
            url: "Frases/FrasesIns",
            dataType: "json",
            type: "POST",
            data: {
                idautor: idautor,
                frase: frase
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_frases_errores").html(result.msg);
                }
            }
        });
    } else if (accion === "UPD") {
        $.ajax({
            url: "Frases/FrasesUpd",
            dataType: "json",
            type: "POST",
            data: {
                idfrase: idfrase,
                idautor: idautor,
                frase: frase
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_frases_errores").html(result.msg);
                }
            }
        });
    }
}

function frasesDel(idfrase) {
    $("#dlg_confirm_dato1").val("DEL_FRASE");
    $("#dlg_confirm_dato2").val(idfrase);

    $("#dlg_confirm_title").text("Retirar Frase");
    $("#dlg_confirm_msg").html("¿Desea retirar frase?");

    $("#dlg_confirm_error").hide();
    $("#dlg_confirm").modal("show");
}

// ACCIONES GENERALES

function dlg_confirm_confirm() {
    var accion = $("#dlg_confirm_dato1").val();

    if (accion === "DEL_AUTOR") {
        var idautor = $("#dlg_confirm_dato2").val();

        $.ajax({
            url: "Autores/AutoresDel",
            dataType: "json",
            type: "POST",
            data: {
                idautor: idautor
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_confirm_error").html(result.msg);
                }
            }
        });
    } else if (accion === "DEL_FRASE") {
        var idfrase = $("#dlg_confirm_dato2").val();

        $.ajax({
            url: "Frases/FrasesDel",
            dataType: "json",
            type: "POST",
            data: {
                idfrase: idfrase
            },
            success: function (result) {
                //alert(JSON.stringify(result));

                if (result.msg === "") {
                    window.location = "../";
                } else {
                    $("#dlg_confirm_error").html(result.msg);
                }
            }
        });
    }
}