<?php 
	error_reporting(E_ALL);
	require('common.inc');
?>
<div class="swiper-container">
	<div class="swiper-wrapper">
<?php
	//Calling WS
	$ws_uri = 'http://www.conabip.gob.ar/ws/radiobp';
	$ws_response = get_ws_data($ws_uri);
	//Procesing WS
	if(count($ws_response)>0){
		foreach($ws_response->nodes as $item){
			print '<div class="swiper-slide">
						<a href="#" onClick="playAudio(\''.$item->node->audio.'\', \''.$item->node->title.'\')">
							<img src="'.$item->node->Imagen->src.'"/>
							<h4>'.$item->node->title.'</h4>
						</a>
					</div>';
		}
	}
?>				
	</div>
	<div class="swiper-pagination"></div>
</div>