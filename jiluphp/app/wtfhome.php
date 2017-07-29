<?php
/**
 * Created by PhpStorm.
 * User: WTF
 * Date: 2017/7/25
 * Time: 22:34
 */
namespace app;
use \core\db;
use core\core;
class wtfhome extends core{
    function wtfnav(){
        $cid=$_GET['cid'];
        $this->json(
            M('wtfnav')
                ->where(array('cid'=>$cid))
                ->selectAll()
        );
    }
    function allbook(){
        $cid=$_GET['cid'];
        $this->json(
            M('allbook')
                ->where(array('cid'=>$cid))
                ->selectAll()
        );
    }
}