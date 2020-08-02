<?php
    session_start();
    if ( isset($_SESSION['user']) ) {
        return header('location: TrangChu.php');
    }else{
        if ( isset($_SESSION['danger']) ) {
            echo $_SESSION['danger'];
        }elseif ( isset($_SESSION['ReLogin']) ) {
            echo $_SESSION['ReLogin'];
        }

        echo "<form method='post' action='TrangCheck.php'>
            Tên Đăng Nhập: <input type='text' name='username' />
            Mật Khẩu: <input type='password' name='password' />
            <input type='submit' value='Submit' />
        </form>";
    }
    
?>

