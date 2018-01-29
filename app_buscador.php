<div class="app_container">
	<form class="form-horizontal col col-md-4" >
<fieldset>

<!-- Form Name -->


<!-- Text input-->
<div class="form-group">
<label>Nombre</label>
  <input id="nombre" name="nombre" type="text" class="form-control input-md">

</div>

<!-- Text input-->
<div class="form-group">
	<label>Email</label>	
  <input id="email" name="email" type="mail" class="form-control input-md">
</div>

<!-- Select Basic -->
<div class="form-group">
	<label>Provincia</label>
    
    <select class="form-control form-select" id="provincia" name="provincia"><option value="All" selected="selected">- Todas -</option><option value="Ciudad Autónoma de Buenos Aires">Ciudad Autónoma de Buenos Aires</option><option value="Buenos Aires">Buenos Aires</option><option value="Catamarca">Catamarca</option><option value="Chaco">Chaco</option><option value="Chubut">Chubut</option><option value="Córdoba">Córdoba</option><option value="Corrientes">Corrientes</option><option value="Entre Ríos">Entre Ríos</option><option value="Formosa">Formosa</option><option value="Jujuy">Jujuy</option><option value="La Pampa">La Pampa</option><option value="La Rioja">La Rioja</option><option value="Mendoza">Mendoza</option><option value="Misiones">Misiones</option><option value="Neuquén">Neuquén</option><option value="Río Negro">Río Negro</option><option value="Salta">Salta</option><option value="San Juan">San Juan</option><option value="San Luis">San Luis</option><option value="Santa Cruz">Santa Cruz</option><option value="Santa Fe">Santa Fe</option><option value="Santiago del Estero">Santiago del Estero</option><option value="Tierra del Fuego">Tierra del Fuego</option><option value="Tucumán">Tucumán</option></select>
</div>

<!-- Text input-->
<div class="form-group">
 <label>Ciudad</label>
  <input id="ciudad" name="ciudad" type="text" class="form-control input-md">
</div>

<!-- Button -->
<div class="form-group">
    <button id="btnBuscar" name="singlebutton" class="btn btn-primary">Buscar</button>
</div>

</fieldset>
</form>
<div class="col col-md-1"></div>
<div class="col col-md-7" id="searchResult">
</div>

</div>
<script type="text/javascript">
  jQuery("#btnBuscar").click(function(e){
    jQuery("input").removeClass("error");
    var error = false;
    var errorMsg ="";
    if(jQuery('#nombre').val()==""){
      console.log("Debe completar el campo nombre");
      jQuery("#nombre").addClass("error");
      error = true;
      errorMsg+='<p><b>* Ingrese su nombre completo</b></p>';
    }
    if(validEmail(jQuery('#email').val())==false){
      
      jQuery("#email").addClass("error");
      error = true;
      errorMsg+='<p><b>* El email ingresado es inválido</b></p>';
    }

    if(error==true){
      jQuery("#searchResult").html("Verificar los datos ingresados:<br><br>"+errorMsg);
    }
    if(error==false){

      jQuery("#searchResult").html("Iniciando busqueda en directorio...");


      jQuery.get('app_buscador_search.php?name='+jQuery('#nombre').val()+'&email='+jQuery('#email').val()+'&province='+jQuery('#provincia').val()+'&city='+jQuery('#ciudad').val(),function(data){
        if(data){
          jQuery("#searchResult").html(data);
          var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
        }
        else {
          jQuery("#searchResult").html("Error al recuperar los datos. Posiblemente no hay internet. Intentelo más tarde.");
        }

      });




    }
   
   return false;
  });

function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}

</script>