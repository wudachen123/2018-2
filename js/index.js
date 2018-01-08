window.onload = function() {
				var odiv = document.getElementById('rzguide'); 
				var btn = odiv.getElementsByTagName('input'); 
				var div2 = odiv.getElementsByTagName('div'); 
	    		
	    		//选项卡
				for(i = 0; i < btn.length; i++) 
				{
					btn[i].index = i
					btn[i].onclick = function() 
					{
						for(i = 0; i < btn.length; i++) 
						{
							btn[i].className = '' 
							div2[i].style.display = 'none'
						}
						this.className = 'active'
						div2[this.index].style.display = 'block' 
					}
				}
			}
				//让textarea变为只读
				var txt = document.getElementsByClassName('textarea');
				for(var i = 0;i<txt.length;i++){
					txt[i].readOnly=true;
				}