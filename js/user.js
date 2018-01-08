var box2= document.getElementsByClassName('box2')[0];
		var main = document.querySelector('.main');
		box2.onclick=function(){
			location.href='add.html';
		}
		var ss = sessionStorage;
		var txt = ss.getItem("user");
		var txt2 = ss.getItem("pass");
		var txt3 = ss.getItem("sel");
		var txt4 = ss.getItem("zhengchang");
		var txt5 = ss.getItem("shanchu");
		//动态增加一行
		function add(){
			var oDiv = document.createElement('div');
			main.appendChild(oDiv);
			
			var oUl = document.createElement('ul');
			var oLi1 = document.createElement('li');
			var oLi2 = document.createElement('li');
			var oLi3 = document.createElement('li');
			var oLi4 = document.createElement('li');
						
			oDiv.appendChild(oUl);
			oUl.appendChild(oLi1);
			oUl.appendChild(oLi2);
			oUl.appendChild(oLi3);
			oUl.appendChild(oLi4);
			oLi1.className='oli';
			oLi2.className='oli';
			oLi3.className='oli'; 
			oLi4.className='oli';						
			oLi1.innerHTML=txt;
			oLi2.innerHTML=txt3;
			oLi3.innerHTML=txt4;
			oLi4.innerHTML=txt5;	
			
			if(oLi1.innerHTML!=""){
				oDiv.className='main_add';
			}
		}	
		add();