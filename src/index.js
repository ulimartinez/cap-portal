import './error';

$(document).ready(function(){
    let secrets = [
        {"code":"udqgrpsdvv", "n":3}, //randompass
        {"code":"zhsafqvou", "n":7}, //saltyjohn
        {"code":"qipiiqipii", "n":4}, //meleemelee
        {"code":"qtttslrfs", "n":5}, //looongman
        {"code":"ogsgtuuh", "n":6}, //iamanoob
        {"code":"vqamqopb", "n":8}, //niseight
        {"code":"ngoqpuswggba", "n":2}, //lemonsqueezy
        {"code":"kvegmewexm", "n":4}, //graciasati
        {"code":"olnhdervv", "n":3} //likeaboss
        ];

    let rand = Math.random();
    let value = secrets[Math.floor(rand * secrets.length)].code;
    let en = secrets[Math.floor(rand * secrets.length)].n;

    $('#secret').text(value);
    $('#encoded').val(value);
    $('#n').text("n=" + en);
});