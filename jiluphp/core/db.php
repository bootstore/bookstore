<?php

namespace core;

class db
{
    public $pdo;
    public $table;
    public $condition;

    public function __construct($table)
    {
        $this->table = $table;
        $this->pdo = new \PDO('mysql:host=localhost;dbname=jilu;port=3306;charset=utf8', 'root', '', array(\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC));
    }

    public function query($sql)
    {
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }

    public function querys($sql)
    {
        $stmt = $this->pdo->query($sql);
        return $stmt->fetch();
    }
    public function limit($num,$offset=0){
        $this->condition = $this->condition . "limit {$num} offset {$offset}";
        return $this;
    }


    public function selectAll()
    {
        $this->condition = " select * from {$this->table} " . $this->condition;
        $stmt = $this->pdo->query($this->condition);
        return $stmt->fetchAll();
    }

    public function select()
    {
        $this->condition = " select * from {$this->table} " . $this->condition;
        $stmt = $this->pdo->query($this->condition);
        return $stmt->fetch();
    }

    public function order($k, $o)
    {
        $this->condition = $this->condition . " order by {$k} {$o} ";
        return $this;
    }

    public function where($arr)
    {
        foreach ($arr as $k => $v) {
            $this->condition = " where {$k} = {$v} " . $this->condition;
        }
        return $this;
    }
}