import 'jquery';
import 'bootstrap';
import './custom.css';
import './main.scss';

const $ = require('jquery');

$(document).ready(function(){
    let secrets = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let value = secrets[Math.floor(Math.random() * secrets.length)];
    $('#secret').text(value);
    $('#encoded').val(value);

    $('form').on('submit', function(e){
        e.preventDefault();
        console.log(e);
        console.log($('#decoded').val());
        console.log($('#encoded').val());
    })
});