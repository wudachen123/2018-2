		function showDiv() {
			document.getElementById("bg").style.display = "block";
			document.getElementById("show").style.display = "block";
		}

		function hideDiv() {
			document.getElementById("bg").style.display = "none";
			document.getElementById("show").style.display = "none";
		}
		
		var user = document.querySelector('.inp1>input');
		var pass = document.querySelector('.inp2>input');
		var sel = document.querySelector('.inp3>select');
		var clue = document.querySelector('.h13');
		var txtarea = document.querySelector('.in4>textarea');
		var btn = document.querySelector('.btn>button');
		var concel = document.querySelector('.concel');
		
		btn.onclick=function(){
			showDiv();	
			if(pass.value=="" || user.value=="" || sel.value==""){
				clue.innerHTML="带*的为必填项"
			}
			else
			{
				clue.value="";
				clue.innerHTML="提交成功";
				concel.style.display='none';
				var ss = sessionStorage;
				ss.setItem("user",user.value);
				ss.setItem("pass",pass.value);
				ss.setItem("sel",sel.value);
				ss.setItem("zhengchang","正常");
				ss.setItem("shanchu","删除");
				setTimeout(twoS,1000);
			}
		}
		
		function twoS(){
			location.href='user.html'
		}