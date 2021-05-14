<?php
 date_default_timezone_set('America/Fortaleza');
 header("Access-Control-Allow-Origin: *");
   header("Access-Control-Allow-Credentials: true");
   header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
   header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
 ob_clean();
  include("connection.php");
  include("funcoes.php");
  

  $acao = $_POST['acao'];
  
  switch($acao){
    //SELECIONAR SESSÕES
      case 1:
        $query = $mysqli->query("SELECT * FROM session");
        while($res = $query->fetch_array()){
          $query2 = $mysqli->query("SELECT COUNT(*) as count, (SELECT COUNT(*) FROM session_exercice WHERE status = 'CONCLUIDO' AND fk_session = ".$res['idsession'].") as count_ok FROM `session_exercice` WHERE fk_session = ".$res['idsession']."");
          $res2 = $query2->fetch_array();
            $percent = ($res2['count_ok']*100)/$res2['count'];
            $arr[] = array('cod' => $res['idsession'],'name' => $res['name'], 'symptom' => $res['symptom'], 'dt_schedule' => $res['dt_schedule'], 'status' => $res['status'], 'count' => $res2['count'], 'count_ok' => $res2['count_ok'], 'percent' => $percent);
        }
        if($query->num_rows > 0){
          $result = array('result' => 'sucess', 'datas' => $arr);
        }else{
          $result = array('result' => 'error', 'error' => $mysqli->error);
        }
        
        echo json_encode($result);

        
      break;
      
      //SELECIONAR EXERCÍCIS DA SESSÃO
      case 2:
        $cod = $_POST['cod'];
        if(!$cod){
          $erro = 'CODIGO INVÁLIDO';
          $result = array('result' => 'error', 'error' => $erro);
        }else{
          $query = $mysqli->query("SELECT * FROM session_exercice WHERE fk_session = ".$cod."");
            while($res = $query->fetch_array()){
            $arr[] = array('name' => $res['name'], 'status' => $res['status'], 'dt_completed' => $res['dt_completed'], 'description' => utf8_encode($res['description']));
          }
          if($query->num_rows > 0){
            $result = array('result' => 'sucess', 'datas' => $arr);
          }else{
            $result = array('result' => 'error', 'error' => $mysqli->error);
          }
              
         echo json_encode($result);
           
        }
        
        
      break;
      
      //CONTAR EXERCÍCIOS DE CADA SESSÃO
      case 3:
        $cod = $_POST['cod'];
        if(!$cod){
          $erro = 'CODIGO INVÁLIDO';
          $result = array('result' => 'error', 'error' => $erro);
        }else{
          $query = $mysqli->query("SELECT COUNT(*) as count, (SELECT COUNT(*) FROM session_exercice WHERE status = 'CONCLUIDO' AND fk_session = ".$cod.") as count_ok FROM `session_exercice` WHERE fk_session = ".$cod."");
          while($res = $query->fetch_array()){
              $arr[] = array('count' => $res['count'], 'count_ok' => $res['count_ok'],);
          }
          if($query->num_rows > 0){
            $result = array('result' => 'sucess', 'datas' => $arr);
          }else{
            $result = array('result' => 'error', 'error' => $mysqli->error);
          }
        }
          
          echo json_encode($result);
      break;
      default:
        echo "ACAO_INESISTENTE";
        break;
  }
  

?>