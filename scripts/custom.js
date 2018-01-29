jQuery('#mainNav .tile a').click(function(e){
	e.preventDefault();
	jQuery('#mainNav .tile').removeClass('active');

	console.log("Activando sección "+jQuery(this).attr('data-title'));
	jQuery("body").css('background-color',jQuery(this).attr('data-bg'));
	jQuery("#modalClose").css('color',jQuery(this).attr('data-bg'));
	jQuery("#sectionTitle").html(jQuery(this).attr('data-title'));
	jQuery("#sectionLead").html(jQuery(this).attr('data-lead'));
	jQuery(this).parent('.tile').addClass('active');
	//jQuery( "#mainContent" ).load( jQuery(this).attr('data-app'));
	jQuery(this).attr('data-app')
	console.log('Activando function '+jQuery(this).attr('data-app'));
	jQuery( "#mainContent" ).html('<br/><br/><br/><br/><br/>Cargando…');
	window[jQuery(this).attr('data-app')]();
 	//app_revista();

 });

jQuery("#modalClose").click(function(e){
	e.preventDefault();
	jQuery("#modalCnt").html("");
	jQuery("#modal").fadeOut();

});


jQuery(document).ready(function(){
	jQuery("#modal").fadeOut();
	jQuery("#lnkVideo").click();
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		slidesPerColumn: 1,
		paginationClickable: true,
		spaceBetween: 30,
		effect: 'coverflow',
		loop: true,
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true
		}
	});

});


function app_revista(){

	
	$.get('app_revista.php', function(data){
		if(data){
		jQuery( "#mainContent" ).html(data);
		var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		slidesPerView: 3,
		slidesPerColumn: 1,
		paginationClickable: true,
		spaceBetween: 100,
		effect: 'coverflow',
		autoplay: 5000,
		loop: false,
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true
		}
	});
	}
		else {console.log("Error levantando app"); }
	});
	
}

function app_radio(){

	
	$.get('app_radio.php', function(data){
		if(data){
		jQuery( "#mainContent" ).html(data);
		var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		slidesPerView: 3,
		slidesPerColumn: 2,
		paginationClickable: true,
		spaceBetween: 30,
		autoplay: 5000,
		effect: 'coverflow',
		loop: false,
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true
		}
	});
	}
		else {console.log("Error levantando app"); }
	});
	
}


function app_canal(){

	
	$.get('app_canal.php', function(data){
		if(data){
		jQuery( "#mainContent" ).html(data);
		var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		slidesPerView: 3,
		slidesPerColumn: 2,
		paginationClickable: true,
		spaceBetween: 30,
		effect: 'coverflow',
		autoplay: 5000,
		loop: false,
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true
		}
	});
	}
		else {console.log("Error levantando app"); }
	});
	
}



function app_buscador(){
	
	$.get('app_buscador.php', function(data){
		if(data){
		jQuery( "#mainContent" ).html(data);
		var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		slidesPerView: 3,
		slidesPerColumn: 2,
		paginationClickable: true,
		spaceBetween: 30,
		effect: 'coverflow',
		autoplay: 5000,
		loop: false,
		coverflow: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true
		}
	});
	}
		else {console.log("Error levantando app"); }
	});
}


function playVideo(video){
	jQuery("#modal").fadeIn();
	var audio;
	if(audio = document.getElementById("radioPlayer")){audio.pause();} 
	jQuery("#modalCnt").html('<iframe src="http://www.youtube.com/embed/'+video+'?autoplay=1" frameborder="0" width="560" height="315"></iframe>');
	
}

function playAudio(audio,title){
	jQuery("#radioCnt").html('<audio id="radioPlayer" controls autoplay><source src="'+audio+'" type="audio/mpeg"></audio><p><b>Desde Radio BePé:<br></b>'+title+'</p>');	
}

function showPdf(pdfUrl){
	jQuery("#modal").fadeIn();
	console.log("Cargando pdf: "+pdfUrl);
	var pdf = 'Cargando...<embed src="'+pdfUrl+'" width=”600″ height=”500″ alt=”pdf” pluginspage=”http://www.adobe.com/products/acrobat/readstep2.html”></embed>';
	jQuery("#modalCnt").html(pdf);
}



function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}

