<?php
    session_start();

    if($_POST['username'] && $_POST['password']) {
        if ($_POST['username'] == 'hieubuict96@gmail.com' && $_POST['password'] == 123456) {
            $_SESSION['user']['username'] = $_POST['username'];
            $_SESSION['user']['password'] = $_POST['password'];
            return header('location: TrangChu.php');
        }else{
            $_SESSION['ReLogin'] = 'Tên đăng nhập hoặc mật khẩu không đúng';
            return header('location: TrangLogin.php');
        }
    }else{
        $_SESSION['danger'] = 'Vui lòng điền tên đăng nhập hoặc mật khẩu';
        return header('location: TrangLogin.php');
    }
    
    