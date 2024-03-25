<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'vevo/getvevo.php';
        break;
    case 'POST':
        require_once 'vevo/postvevo.php';
        break;
    case 'DELETE':
        require_once 'vevo/deletevevo.php';
        break;
    case 'PUT':
        require_once 'vevo/putvevo.php';
        break;
    default:
        break;
}