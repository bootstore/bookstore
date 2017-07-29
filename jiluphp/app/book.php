<?php
namespace app;
use \core\db;
use core\core;

class book extends core{
    function select(){
        $id=$_REQUEST['id'];
        $this->json(M("goodsdetails")->where(array('id'=>$id))->select());
    }
    function con(){
        $cid=$_REQUEST['cid'];
        $this->json(M("goodscon")->where(array('cid'=>$cid))->select());
    }
}