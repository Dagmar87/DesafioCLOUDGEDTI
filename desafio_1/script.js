function conv_decimal(){
    var dec = parseInt(document.getElementById('ipt_dec').value, 10)
    document.getElementById('ipt_bin').value = dec.toString(2);
    document.getElementById('ipt_oct').value = dec.toString(8);
    document.getElementById('ipt_hexa').value = dec.toString(16);
}


function conv_binario(){
    var bin = parseInt(document.getElementById('ipt_bin').value, 10)
    document.getElementById('ipt_dec').value = parseInt(bin, 2)
    document.getElementById('ipt_oct').value = parseInt(bin, 2).toString(8);
    document.getElementById('ipt_hexa').value = parseInt(bin, 2).toString(16);
}

function conv_octal(){
    var oct = parseInt(document.getElementById('ipt_oct').value, 10)
    document.getElementById("ipt_dec").value = parseInt(oct, 8);
    document.getElementById('ipt_bin').value = parseInt(oct, 8).toString(2);
    document.getElementById('ipt_hexa').value = parseInt(oct, 8).toString(16);
}

function conv_hexadecimal(){
    var hexa = document.getElementById('ipt_hexa').value
    document.getElementById('ipt_dec"').value = parseInt(hexa, 16);
    document.getElementById('ipt_bin').value = parseInt(hexa, 16).toString(2);
    document.getElementById('ipt_oct').value = parseInt(hexa, 16).toString(8);
}

function habi_desabi(value){

    if(value == 10){
        ipt_dec.disabled = false;
    } else if(value != 10){
        ipt_dec.disabled = true;
    }

    if(value == 2){
        ipt_bin.disabled = false;
    } else if(value != 2){
        ipt_bin.disabled = true;
    }

    if(value == 8){
        ipt_oct.disabled = false;
    } else if(value != 8){
        ipt_oct.disabled = true;
    }

    if(value == 16){
        ipt_hexa.disabled = false;
    } else if(value != 16){
        ipt_hexa.disabled = true;
    }

};

function chamar_calculo(){

    if(tipos_bases.value == 10){
        conv_decimal();
    }

    if(tipos_bases.value == 2){
        conv_binario();
    }

    if(tipos_bases.value == 8){
        conv_octal();
    }

    if(tipos_bases.value == 16){
        conv_hexadecimal();
    }

};

function type_bin(e){
    var tecla = (window.event)?event.keyCode:e.which;
    if((tecla == 48 || tecla == 49)) return true;
    else {
        return false;
    }
}

function type_dec(e){
    var tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 57)) return true;
    else {
        return false;
    }
}

function type_oct(e){
    var tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 55)) return true;
    else {
        return false;
    }
}

function type_hexa(e){
    var tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 57 || tecla >= 65 && tecla <= 70 || tecla >= 97 && tecla <= 102)) return true;
    else {
        return false;
    }
}