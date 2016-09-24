// $(function(){
//	  	 $(".search").keyup(function(){
//	  	 	$.ajax({
//	  	 		type:"get",
//	  	 		url:"search.txt",
//	  	 		async:true,
//	  	 		dataType:"json",
//	  	 		success:function(msg){
//	  	 			$("li").remove();
//	  	 			for (var i in msg) {
//	  	 				$("#dropList").append("<li>"+msg[i].pname+"</li>")
//	  	 			}
//	  	 			$("li").click(function(){
//	  	 				$(".search").val( $(this).html() );
//	  	 				$("#dropList").hide();
//	  	 			})
//	  	 		}
//	  	 		
//	  	 	});
//	  	 })
//	  })
$(function(){
	 	//搜索框
	  	 $(".search").keyup(function(){
	  	 	
	  	 	$.ajax({
	  	 		type:"get",
	  	 		url:"search.txt",
	  	 		async:true,
	  	 		dataType:"json",
	  	 		success:function(msg){
	  	 			$("#dropList li").remove();
	  	 			for (var i in msg) {
	  	 				$("#dropList").append("<li>"+msg[i].pname+"</li>")
	  	 			}
	  	 			$("#dropList li").click(function(){
	  	 				$(".search").val( $(this).html() );
	  	 				$("#dropList").hide();
	  	 			})
	  	 		}
	  	 		
	  	 	});
	  	 })
		//banner 轮播
//	  	 var time = setInterval(Carculer,2000);
//			var index = 0;
//			function Carculer(){
//				$("ol li").eq(index).addClass("active").siblings().removeClass("active");
//				
//				$(".wrap ul li").eq( index ).animate({"left":0},2000,function(){
//					
//					$(this).css("z-index",0).siblings().css({"left":1213,"z-index":1});
//					
//				})
//				index++;
//				if (index==5) {
//					index=0;
//				}
//			}
//			$("ol li").mouseenter(function(){
//				clearInterval(time);
//				index = $(this).index();
//				Carculer();
//			})
//			$("ol li").mouseleave(function(){
//				time = setInterval(Carculer,2000);
//			})
			//banner 淡入淡出
			var time = setInterval(Carculer,2000);
			var index = 0;
			function Carculer(){
				$("ol li").eq(index).addClass("active").siblings().removeClass("active");
				
				$(".wrap ul li").eq( index ).fadeIn(2000,function(){
					$(this).css("left","1213")
						   .css("z-index","0")
					$(this).siblings().fadeOut(2000,function(){
						$(this).siblings()
							   .css("left","0")
							   .css("z-index","1")
					});
				
				})
				$(".wrap").mouseenter(function(){
					$("#left").show()
					$("#right").show()		  
					
							  
							  
				}).mouseleave(function(){
					$("#left").hide()
					$("#right").hide()		  
				})
				index++;
				if (index==5) {
					index=0;
				}
			}
			$("ol li").mouseenter(function(){
				clearInterval(time);
				index = $(this).index();
				Carculer();
			})
			$("ol li").mouseleave(function(){
				time = setInterval(Carculer,2000);
			})
			
			$("#left").click(function(){	
						
			$(".wrap ul li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
			index--;
			$("ol li").eq(index-1).css("backgroundColor","grey").siblings().css("backgroundColor","")
			if (index<0) {
				index=5;
			}			
	})	
			$("#right").click(function(){	
					Carculer();	
			})
	

			//下拉list
			
			
			$("#li1").mouseenter(function(){
				 	$(this).next()
				 		   .slideDown()
				 		   .css("z-index","999")
				 		   .children().find($("li ul"))
				 		   .hide()
				 	
				 	
				 })
			$(".fenlei").children().find($("li")).mouseenter(function(){
				$(this).find($("ul")).show()
				$(this).find($("ul #third")).hide()
			})
			
			$(".fenlei").children().find($("li")).find($("ul")).mouseenter(function(){
				$(".fenlei").children()
							.find($("li"))
							.find($("ul #third"))
							.show()
						    .css("width","600")
							.css("float","left")
							.children("li")
							.css("width","100")
							.css("flost","left")
							.css("margin-top","0")
														
			})
			$(".ul1").mouseleave(function(){
					$(this).find(".fenlei")
						   .slideUp()
				})
			$(".fenlei").children().find($("li")).mouseleave(function(){
				$(this).find($("ul")).hide()
			})
			$(".fenlei").children().find($("li")).find($("a")).mouseleave(function(){
				$(".fenlei").children()
							.find($("li"))
							.find($("ul #third"))
							.hide()
			})
			
			
			
	  })
