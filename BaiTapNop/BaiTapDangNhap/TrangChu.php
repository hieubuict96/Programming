<?php

    session_start();
    if ( isset($_SESSION['user']) ) {
        echo 'Tài khoản (' . $_SESSION['user']['username'] . ')' . '<br>';
        echo "<form method='post' action='TrangLogout.php'>
            <input type='submit' name='LogOut' value='Đăng xuất'>
        </form>";

    }else{
        $_SESSION['danger'] = 'Vui lòng điền tên đăng nhập hoặc mật khẩu';
        return header('location: TrangLogin.php');
    }

    