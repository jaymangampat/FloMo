<?php

$dbSevername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "readings";

$conn = mysqli_connect($dbSevername, $dbUsername, $dbPassword, $dbName );

$sql = 'SELECT Value FROM data';
$result = mysqli_query($conn, $sql);
$emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = implode(',',$row);
    }



mysqli_free_result($result);

echo json_encode($emparray);

mysqli_close($conn);