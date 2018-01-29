<?php 
/**
* Getting the data from a url
*/

function get_ws_data($ws_uri)
{
    // create curl object to get the webservice data
    $curl = curl_init($ws_uri);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($curl, CURLOPT_POST, FALSE);
    $ws_response = curl_exec($curl);
    curl_close($curl);
    // return object as JSon
    return json_decode($ws_response);
}





/**
* Sending Success EMail and Save Email
*/
function email_and_save($name,$email, $province, $city){
	
	/*
	$url='http://www.conabip.gob.ar/buscador_bp?province='.str_replace(' ','%20',$province).'&city='.str_replace(' ','%20',$city);

	$subjet = 'Tu busqueda de Bibliotecas Populares en la feria del libro';

	$txt = 'Estimado '.$name.', muchas gracias por usar el servicio de buúsqueda de blibliotecas populares. '."\r\n";
	$txt.= 'Puedes acceder la búsqueda efectuada haciendo <a href="'.$url.'">click aquí</a> o copiando y pegando la siguiente url en tu navegador:'."\r\n"."\r\n";
	$txt.=  $url;

	$header = 'From: info@conabip.gob.ar' . "\r\n" .
    'Reply-To: info@conabip.gob.ar' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	//mail($email, $subjet, $txt, $header);
    $file = __DIR__.'/emails.txt';
	$myfile = fopen($file, "w");
	$previous= fread($myfile,42);
	$txt = $previous.$name.",".$email."\n";
	fwrite($myfile, $txt);
	fclose($myfile);
*/
}