$(document).ready(function (){

			window.onload=cargar;

			$('.arriba').click(function(){
				$('body,html').animate({
					scrollTop:'0px'
				},500);
			});

			$(window).scroll(function(){
				if($(this).scrollTop()>0){
					$('.arriba').slideDown(400);
				} else{
					$('.arriba').slideUp(400);
				}
			});

			//funciones de efecto
			//$(.mislugares).on('click',function(e){
			//	e.preventDefault();
			//	$("html,body").animate({scrollTop:$("#mislugares").offset().top},1000);
			//});
			///
			
			$("#lugares").click(function(){
				
				$("html,body").animate({scrollTop:$("#mislugares").offset().top},1000);

			});

			$("#miregistro").click(function(){
				$("html,body").animate({scrollTop:$("#minegocio").offset().top},1000);

			});


			$("body").on("click",".eliminar",function(){
				var id=$(this).data("id");
				var tr=this.parentNode.parentNode;
				var datos="action=1&id_negocio="+id;
				$.ajax({
					type:"POST",
					url:"controlador.php",
					data:datos,
					success:function(data){
						if(data=1){
							$(tr).remove();
						}
					}
				});
			});

			$("body").on("click",".actualizar",function(){
				$("html,body").animate({scrollTop:$("#minegocio").offset().top},1000);
				var id=$(this).data("id");
				var datos="action=2&id_negocio="+id;
				$.ajax({
					dataType:'json',
					url:'controlador.php',
					data:datos,
					type:'POST',
					success: function(data){
						var html='';
						for(var i=0 in data){
							var item=data[i];
							
							$("#id").val(item.id_negocio);
							$("#negocio").val(item.nombre_lugar);
							$("#direccion").val(item.direccion);
							$("#apertura").val(item.horario_apertura);
							$("#cierre").val(item.horario_cierre);
							$("#giro").val(item.giro);

						}
						console.log($("#id").val(item.id_negocio));

					},
					error:	function(xhr,err){ 
						if(xhr.readyState==4 && xhr.status==200){
						
						}
						alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status+"\n \n responseText: "+xhr.responseText);
					}

				});
			});

			$("#update").click(function(){
				var datos="action=3&id_negocio="+$("#id").val()+"&negocio="+$("#negocio").val()+"&direccion="+$("#direccion").val()+"&apertura="+$("#apertura").val()+"&cierre="+$("#cierre").val()+"$giro="+$("#giro").val(); 
				
				$.ajax({
					dataType:'json',
					url:'controlador.php',
					data:datos,
					type:'POST',
					success:function(data){
						if(data){
							$("#id").val("");
							$("#negocio").val("");
							$("#direccion").val("");
							$("#apertura").val("");
							$("#cierre").val("");
							$("#giro").val("");
						}
					}
				});

			});
			$("#registrar").click(function (){
				var datos="action=4&negocio="+$("#negocio").val()+"&direccion="+$("#direccion").val()+"&apertura="+$("#apertura").val()+"&cierre="+$("#cierre").val()+"$giro="+$("#giro").val();
				$.ajax({
					dataType:'json',
					url:"controlador.php",
					data:datos,
					type:'POST',
					success:function(data){
						if(data){
							$("#negocio").val("");
							$("#direccion").val("");
							$("#apertura").val("");
							$("#cierre").val("");
							$("#giro").val("");
						}
					}
				}); 
			});

			function cargar(){
			var url='controlador.php';
				$.ajax({
					dataType:'json',
					url:url+'?action=1',
					type:'get',
					success: function(data){
						var html='';
						for(var i=0 in data){
							var item=data[i];
							html+='<tr>';
							html+='<td>'+item.nombre_lugar+'</td>';
							html+='<td>'+item.direccion+'</td>';
							html+='<td>'+item.horario_apertura+'</td>';
							html+='<td>'+item.horario_cierre+'</td>';
							html+='<td><button type="button" class="eliminar" data-id="'+item.id_negocio+'">eliminar</button></td>';
							html+='<td><button type="button" class="actualizar" data-id="'+item.id_negocio+'">actualizar</button></td>';
							html+='</tr>';
						}
						$("#conte_tabla").append(html);

					},
					error:	function(xhr,err){ 
						if(xhr.readyState==4 && xhr.status==200){
						
						}
						alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status+"\n \n responseText: "+xhr.responseText);
					}

				});
			}

		});