+function ($) { 
			"use strict";
		function HDSlider(){
			if (!this.precheck()){
				return;
			}
			
		
		}
			
		HDSlider.prototype.init=function(node){
			
			this.t = node;
			this.imageIndex = 0;
			
			this._box = $('#slider_box');
			this._box.hide();
			this.listen();
		
		}
		HDSlider.prototype.precheck=function(){
				if ($('#slider_box').length<1){
					return false;
					
				}
			return true;
			
		}
		HDSlider.prototype.listen=function(){
			var self = this;
			if (!this.precheck()){
				alert("listener failed, no slider_box element")
				
			}
				this.t.bind('click',function(){
					console.log("clicked");
					self.showSlide();
					
				})
				$('#slide_closetage').on('click',function(e){
					
					self.hideSlide();
					
				})
				$('#slide_right_arrow').on('click',function(){
					self.nextImage();
					
				})
				$('#slide_left_arrow').on('click',function(){
					self.backImage();
					
				})
				
				
				
			
		}
					  
		HDSlider.prototype.showSlide=function(){
			
			if (!this.precheck()){
				alert("no slider_box element");
				
			}
			if (this.imageIndex==0)
			$('#slider_box img:eq(0)').addClass("slide_active");
		
			$('#slider_box').show();
			
		}
		HDSlider.prototype.hideSlide=function(){
			if (!this.precheck()){
				alert("no slider_box element");
				
			}
			
			
			$('#slider_box').hide();
				
			
		}	
		HDSlider.prototype.nextImage=function(){
			var l = $('#slider_box img').length;
			console.log("nextImage trriger");
			console.log($("#slider_box img").length);
			$('#slider_box img:eq('+this.imageIndex+')').removeClass('slide_active');
			this.imageIndex = (this.imageIndex+1)%l;
			$('#slider_box img:eq('+this.imageIndex+')').addClass("slide_active");
			
			console.log(this.imageIndex);
		}
		HDSlider.prototype.backImage=function(){
			var l = $('#slider_box img').length; // for angular case;
			$('#slider_box img:eq('+this.imageIndex+')').removeClass('slide_active');
			this.imageIndex = (this.imageIndex-1)%l;
			$('#slider_box img:eq('+this.imageIndex+')').addClass("slide_active");
		
		}
			
		$.HDSlider = new HDSlider();
			
		$(function () {
    		
  		})
		}(jQuery)	
