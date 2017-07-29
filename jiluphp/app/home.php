<?php
namespace app;
use \core\db;
use core\core;

class home extends core{
    function index(){

        $this->display("index");  //首页
    }
    function cal(){
        $this->display("cal");
    }
    function input(){
        $this->display("input");
    }
    function ref(){
        $this->display("ref");
    }
    function swiper(){
        $this->display("swiper");
    }
    function x(){
        $this->json(M('ktvtj_main')->selectAll());
    }
    function y(){
        $this->json(M('ktvshop')->selectAll());
    }
    function z(){
        $this->json(M('ktvsingsong')->selectAll());
    }
    function aa(){
        $this->json(M('ktvsingsong')->selectAll());
    }
    function toutiao(){
        $this->json(M('categories')->selectAll());
    }
    function toutiaoadmin(){
        $data=M()->query("select * from categories ORDER by id DESC ");
        echo json_encode($data);
    }
    function toutiaoaa(){
        $a=$_REQUEST['type'];
        if($a==1){
            $a=0;
        }else{
            $a=1;
        }
        M()->query("update categories set type='{$a}' where id='$_REQUEST[id]'");
        $this->json(M('toutiaocate')->selectAll());
    }
    function toutiaoadd(){
        $body=file_get_contents('php://input');
        $data=json_decode($body);
        $stmt=M()->pdo->prepare('insert into categories (name,type) VALUES (?,?)');
        $stmt->bindValue(1,$data->name);
        $stmt->bindValue(2,$data->type);
        $stmt->execute();
        echo 'ok';
    }
    function toutiaodel(){
        $id=$_GET['id'];
        M()->pdo->query('delete from categories WHERE id = '.$id);
        echo 'ok';
    }
    function toutiaotype(){
        $type=$_REQUEST['type'];
        M()->pdo->query("update categories set type='{$type}' WHERE  id='$_REQUEST[id]'");
    }
    function news(){
        $this->json(M('news')->order('id','desc')->selectAll());
    }
    function getNewsById(){
        $id=$_GET['id'];
        $this->json(
            M('news')->where(array('cate'=>$id))
                ->order('id','desc')
                ->selectAll());
    }
    function upload(){
        dump($_FILES);
        $src = $_FILES['file']['tmp_name'];
        $extname=explode('.',$_FILES['file']['name'])[1];
        $filename=md5(time());
        $dist='./public/upload/'.$filename.'.'.$extname;
        move_uploaded_file($src,$dist);
        echo 'http://localhost:80/public/upload/'.$filename.'.'.$extname;
    }
    function process(){
        $src = $_FILES['file']['tmp_name'];
        $extname=explode('.',$_FILES['file']['name'])[1];
        $filename=md5(time());
        $dist='./public/upload/'.$filename.'.'.$extname;
        $name="/react/public/upload/".$filename.'.'.$extname;
        move_uploaded_file($src,$dist);
        echo json_encode(Array('url'=>"http://localhost:80".$name));
    }
    function addNews(){
        $input= file_get_contents('php://input');
        $data = json_decode($input);
        dump($data);
//        $stmt = M()->pdo->prepare('insert into news_cate(name,type)VALUES (?,?)');
//        $stmt->bindValue(1,$data->name);
//        $stmt->bindValue(2,$data->type);
//        $stmt->execute();
//        echo 'ok';
    }
    function getNewsByPage(){
        if(isset($_GET['page'])){
            $offset=($_GET['page']-1)*10;
        }else{
            $offset=0;
        }
        $id=$_GET['id'];
        $this->json(
            M('news')
            ->where(array('cate'=>$id))
            ->order('id','desc')
            ->limit(10,$offset)
            ->selectAll()
        );
    }
}
