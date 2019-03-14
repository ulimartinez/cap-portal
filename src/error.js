import 'jquery';
import 'bootstrap';
import './custom.css';
import './main.scss';
import 'popper.js';

const $ = require('jquery');

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});