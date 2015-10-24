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
			this.imglength=$('#slider_box img').length;
			this._box = $('#slider_box');
			this._box.hide();
			this.listen();
			//console.log("registe");
			//console.log(this.t);
			//console.log(this.imageIndex);
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
			$('#slider_box').show();
			
		}
		HDSlider.prototype.hideSlide=function(){
			if (!this.precheck()){
				alert("no slider_box element");
				
			}
			$('#slider_box').hide();
				
			
		}	
		HDSlider.prototype.nextImage=function(){
			console.log("nextImage trriger");
			$('#slider_box img:eq('+this.imageIndex+')').removeClass('slide_active');
			this.imageIndex = (this.imageIndex+1)%this.imglength;
			$('#slider_box img:eq('+this.imageIndex+')').addClass("slide_active");
			
			console.log(this.imageIndex);
		}
		HDSlider.prototype.backImage=function(){
			
			$('#slider_box img:eq('+this.imageIndex+')').removeClass('slide_active');
			this.imageIndex = (this.imageIndex-1)%this.imglength;
			$('#slider_box img:eq('+this.imageIndex+')').addClass("slide_active");
		
		}
			
		$.HDSlider = new HDSlider();
			
		$(function () {
    		
  		})
		}(jQuery)	
