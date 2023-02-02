<?php

if (! isset($_POST['submitted'])) return;

$username = empty($_POST['username']) ? "Anonymous" : $_POST['username'];
$comment = $_POST['comment'];

if(!empty($comment)){
    $message = array(
        "message" => $comment,
        "name" => $username
    );
    
    $json = file_get_contents('data.json');
    if(empty($json)){
        $submission = array();
    }else{
        $submission = json_decode($json);
    }
    $submission = json_decode($json);
    $submission[] = $message;
    
    file_put_contents('data.json', json_encode($submission));
}

header("refresh:0;url=index.html"); 

?>