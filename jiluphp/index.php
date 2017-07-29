<?php
define('CSS_PATH', '/react/public/css/');
define('JS_PATH', '/react/public/js/');
define('IMG_PATH', '/react/public/img/');
define('VIEW_PATH', 'app/views/');
define('PHP_PATH', '/react/index.php/');
define('DEBUG', true);
if (DEBUG) {
    include 'core/debug.php';
}
include 'core/function.php';
include 'core/core.php';

spl_autoload_register('\core\core::autoload');
\core\core::run();


//前后端分离
// 1  不能只写html  css  js    2 不能独立处理url

