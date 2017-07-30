<?php
    header("Access-Control-Allow-Origin:*");
    sleep(1);

    $team=new stdClass();
    $team->leader="shenyi";

    $teammate1=new stdClass();
    $teammate1->name="lisi";
    $teammate1->age=19;

    $teammate2=new stdClass();
    $teammate2->name="zhangsan";
    $teammate2->age=20;

    $team->teammates=[$teammate1,$teammate2];

    header("Content-type:application/json");
    exit(json_encode($team));
