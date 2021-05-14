<?php
$arr = array(array('id' => 0, 'title' => 'Video 1', 'src' => 'http://devdatic.com/video/preview1.mp4'),
               array('id' => 1, 'title' => 'Vídeo 2', 'src' => 'http://devdatic.com/video/preview2.mp4'),
               array('id' => 2, 'title' => 'Vídeo 3', 'src' => 'http://devdatic.com/video/preview3.mp4'));
echo json_encode($arr, JSON_UNESCAPED_UNICODE, JSON_UNESCAPED_SLASHES);
?>