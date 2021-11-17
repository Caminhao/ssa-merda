var marcas = ['ALFA ROMEO', 'ASIA MOTORS', 'ASTON MARTIN', 'AUDI', 'BENTLEY', 'BMW', 'CHANA MOTORS', 'CHERY', 'CHEVROLET', 'CHRYSLER', 'CITROEN', 'CITROËN', 'CROSSLANDER', 'DACIA', 'DAEWOO', 'DAIHATSU', 'DODGE', 'EFFA MOTORS', 'FERRARI', 'FIAT', 'FORA SERIE', 'FORD', 'GM/ CHEVROLET', 'GURGEL', 'HAFEI', 'HONDA', 'HUMMER', 'HYUNDAI', 'HYUNDAY', 'ISUZU', 'JAC', 'JAGUAR', 'JEEP', 'JINBEI', 'JPX DO BRASIL', 'KIA MOTORS', 'LADA', 'LAMBORGHINI', 'LANBORGUINI', 'LANCIA', 'LAND ROVER', 'LEXUS', 'LIFAN', 'MAHINDRA', 'MAZDA', 'MERCEDES', 'MERCEDES-BENZ', 'MINI', 'MITSUBISHI', 'NISSAN', 'OPEL', 'PEUGEOT', 'PORSCHE', 'RAM', 'RENAULT', 'RENAUT', 'ROLLS ROYCE', 'SAAB', 'SEAT', 'SUBARU', 'SUZUKI', 'TAC MOTORS', 'TOYOTA', 'TROLLER', 'VOLKSWAGEN', 'VOLVO', 'YUGO'];

$(function(){
    $.getJSON("js/automoveis.json", function(data) {
        for(var i = 0; i < data['automoveis'].length; i++){
            $("#TableData").append("<tr>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
            $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
            $("#TableData").append("</tr>");
        } 


    });
});

function marca(){
    console.log("1");
    $("#TableData").children().remove()  
    $.getJSON("js/automoveis.json", function(data) {
        pesquisa = document.getElementById("search").value;
        pesquisa = pesquisa.toUpperCase();
        console.log(pesquisa);
        if( (new RegExp( '\\b' + marca.join('\\b|\\b') + '\\b') ).test(string) ){
            alert('match');
        }
        else{
            alert('no match');
        }
        for(var i = 0; i < data['automoveis'].length; i++){
            if (pesquisa ==data['automoveis'][i]['MARCA']) {
                console.log("3");
                $("#TableData").append("<tr>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append("</tr>");
            }else{}
            
        } 

    });
};