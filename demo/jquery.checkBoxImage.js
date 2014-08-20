(function($) {
	  $.fn.extend({ 
	         
	         //This is where you write your plugin's name
	         checkBoxImage: function(options) {
	             var defaults = {
	                     width: 32,
	                     height: 16,
	                     imageOn: 'check-on.png',
	                     imageOff: 'check-off.png'
	                 };
	             var options =  $.extend(defaults, options);
	            //Iterate over the current set of matched elements
	            return this.each(function() {
	            	var obj = $(this);
	            	var style ='style="width:'+options.width+'px; height:'+options.height+'px;"'; 
	            	var label= $('<label/>',{
	            		style:style
	            	});
	            	obj.after(label);
	            	label.click(function() {
						//var cb=$(this).prev(); 
						obj.attr("checked", !obj.attr("checked"));
						if (obj.attr('checked')) {
							$(this).css('background-image', 'url("' + options.imageOn + '")');	
						} else {
							$(this).css('background-image', 'url("' + options.imageOff + '")');	
						}
						if (options.onChange) {
							obj.onChange=options.onChange
							obj.onChange();
						}
					} );
	            	obj.hide();
					if (obj.attr('checked')) {
						label.css({
							'width':options.width+'px',
							'height':options.height+'px',
							'display':'inline-block',
						    'padding': '0 0 0 0px',
							'background-image':'url("' + options.imageOn + '")'
						});	
					} else {
						label.css({
							'width':options.width+'px',
							'height':options.height+'px',
							'display':'inline-block',
						    'padding': '0 0 0 0px',
							'background-image':'url("' + options.imageOff + '")'
						});	
					};	            
	            });
	        }
	    });
	    
})(jQuery);