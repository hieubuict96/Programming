<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p {
            margin: 0;
            height: 9px;
        }
        br {
            display: block;
            height: 0;
        }
    </style>
</head>
<body>
    <?php
        for ( $i = 1; $i <= 10; $i++) {
            echo '<p>';
            for ($j = 1; $j <= $i; $j ++) {
                echo "*";
            }
            echo '</p>';
           
        }
    ?>
</body>
</html>
