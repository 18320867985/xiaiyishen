   /* 页面选择样式*/

   +(function($) {

   	var _page = common.url.getPageName();

   	if(_page.toString() != "") {

   		$(".navbar-nav>li").removeClass("active");
   		
   		$(".navbar-nav>li").each(function() {

   			$(this).removeClass("active")

   			var _page2 = $(this).find(">a").attr("href");
   			var reg = new RegExp(_page, "ig");

   			if(reg.test(_page2)) {

   				$(this).addClass("active");

   				return false;

   			}

   		});

   		$(".navbar-nav>li.dropdown").each(function() {
	
   			var $dropdowns_a = $(this).find(".dropdown-menu li a");

   			var reg2 = new RegExp(_page, "ig");

   			$dropdowns_a.each(function() {

   				var $a_3 = $(this).attr("href");

   				if(reg2.test($a_3)) {

   					$(".navbar-nav .dropdowdn").removeClass("active");
   					$(this).parents(".dropdown").addClass("active");

   					return false;

   				}
   			})

   		});

   	} else {

   		//  如果为空第一项选中
   		$(".navbar-nav>li").removeClass("active");
   		$(".navbar-nav>li").eq(0).addClass("active");

   	}

   })(window.jQuery);