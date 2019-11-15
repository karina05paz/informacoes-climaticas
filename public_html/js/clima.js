function getClima() {
//via ajax sem recarregar o site 

    $.ajax({
        method: 'get',
        crossDomain: true, //cross puxa os dados da pi
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=f3cdb6fab12191d0effe827c82cb1c67',
        dataType: 'json',
        success: function (data) {

            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(2).split('.');
            $('#temperatura').html(tempFormatada + "°");


            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);



            $('#pressaoAr').html(data.main.pressure);


            $('#umidade').html(data.main.humidity + "%");

            $('#velocidadeDoVento').html(data.wind.speed);

            $('#temperaturaMax').html(data.main.temp_max + "°");

            var dataAmanhecer = new Date(data.sys.sunrise * 1000);
            var descDataAmanhecer = dataAmanhecer.getHours() + ':' + dataAmanhecer.getMinutes();
            $('#NascerDoSol').html(descDataAmanhecer);


        var  dataPorDoSol = new Date(data.sys.sunrise * 1000);
        var descDataPorDoSol = dataPorDoSol.getHours()+':' + dataPorDoSol.getMinutes();
        $('#PorDoSol').html(descDataPorDoSol);
        
        var icone = data.weather[0].icon;
        var caminhoIcone = 'img/icones/'+icone+'.png';
        $('#icone').attr('src', caminhoIcone);


            por = data.sys.sunset;
            $("#por").html(por + "Horas");
            


        },
        error: function (argument) {

        }
    });
}

function traduzirDescricao(descricao) {


    descricaoTraduzida = "";

    if (descricao == "clear sky") {
        descricaoTraduzida = ("Céu limpo");
    } else if (descricao == "few clouds") {
        descricaoTraduzida = "Poucas nuves";

    } else if (descricao == "scattered clouds") {
        descricaoTraduzida = "nuvens dispersas";

    } else if (descricao == "broken clouds") {
        descricaoTraduzida = "nuvens quebradas";

    } else if (descricao == "shower rain") {
        descricaoTraduzida = "chuva de banho";

    } else if (descricao == "rain") {
        descricaoTraduzida = "chuva";

    } else if (descricao == "thunderstorm") {
        descricaoTraduzida = "trovoada";

    } else if (descricao == "snow") {
        descricaoTraduzida = "neve";

    } else if (descricao == "mist") {
        descricaoTraduzida = "névoa";
    }
    return descricaoTraduzida;


}
window.onload = function () {
    getClima();
};
