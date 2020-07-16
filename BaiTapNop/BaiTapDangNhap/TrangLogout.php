<?php
    session_start();
    if ( isset($_POST['LogOut']) ) {
        unset( $_SESSION['user'] );
        return header('location: TrangLogin.php');
    }else{
        return header('location: TrangChu.php');
    }