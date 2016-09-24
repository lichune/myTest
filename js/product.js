
			var leftBox = $("#leftBox");
			var drag = $("#drag");
			var rightBox = $("#rightBox");
			var bigImg = $(".bigImg")[0];
			var leftBoxWid = leftBox.offsetWidth;
			var leftBoxHei = leftBox.offsetHeight;
			var leftBoxLeft = leftBox.offsetLeft;
			var leftBoxTop = leftBox.offsetTop;
			var dragWid = parseInt(oGet.getStyle(drag,"width"));
			var dragHei = parseInt(oGet.getStyle(drag,"height"));
			var maxWid = leftBoxWid - dragWid;
			var maxHei = leftBoxHei - dragHei;
			leftBox.onmouseover = function(){
				drag.style.display = "block";
				rightBox.style.display = "block";
			}
			leftBox.onmouseout = function(){
				drag.style.display = "";
				rightBox.style.display = "";
			}
			document.onmousemove = function(e){
				var e = e||window.event;
				var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
				var disX = e.clientX - leftBoxLeft - dragWid/2;
				var disY = e.clientY - leftBoxTop - dragHei/2 + scrollT;
				if(disX<=0){
					disX = 0;
				}else if(disX>=maxWid){
					disX = maxWid;
				}
				if(disY<=0){
					disY = 0;
				}else if(disY>=maxHei){
					disY = maxHei;
				}
				drag.style.left = disX + "px";
				drag.style.top = disY + "px";
				bigImg.style.left = -2*disX + "px";
				bigImg.style.top = -2*disY + "px";
			}
	//tab切换
//		$(function(){
//			$("#spanz").children().mouseenter(function(){
//				var i = $(this).index();
//				console.log(i);
//				console.log($(this).eq(i+1))
//			.click(function(){
//					$("#leftBox").children($("img"))
//								 .eq(i+1)
//							 .show()							 .siblings()
//							 .hide()
//				})
//			})
//		})
	
//左边tab切换
$(function(){
	$(".centerl2 ul").children("li").mouseenter(
		function(){
			var i = $(this).index();
			$("ol li:eq("+i+")").show().siblings().hide();
		})
		
})
