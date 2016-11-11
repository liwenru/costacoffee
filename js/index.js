
// 大图滚动
var header_wrap=document.getElementsByClassName('header_wrap')[0];
var banner=document.getElementsByClassName("banner")[0];
var imgs=document.getElementsByClassName("img");
var icon=document.getElementsByClassName("icon")[0];
// console.log(icon);

var index=1;
var l=0;
var tweenBol = false;
// 定时器
setInterval (function(){
	// tweenFn();
	changeFn();
	index++;
	l-=100;
},2500);

// 轮播
function changeFn(){
	if(index>4){
		index=0;
	}
	if(l<=-300){
		l=0;
	}
	banner.style.marginLeft=l+"%";
}

icon.onclick=function(){
	index++;
	if(index>4){
		index=0;
	}
	changeFn();
}


// 大图滚动tween.js 动画
// function tweenFn(){
// 		tweenBol = true;
		
// 		var start = parseInt(banner.style.marginLeft) || 0;
// 		var end = l;
// 		var change = end - start;
// 		var t = 0;
// 		var endT = 40;

// 		var tweenTimer = setInterval(function(){
// 			if(t > endT){
// 				clearInterval(tweenTimer);

// 				// ------------无缝切换2-------------------
// 				if(index >4){
// 					banner.style.marginLeft = 0;
// 					index = 0;
// 				}
// 				if(l<=-300){
// 					l=0;
// 				}
									
// 			// ------------无缝切换2-------------------

// 				tweenBol = false;
// 			}else{
// 				banner.style.marginLeft = Tween.Bounce.easeOut(t, start, change, endT) + "%";
// 			}

// 			t++;
// 		}, 50);
// 	}



// 打印机 打印location部分

	// var printWord=document.getElementsByClassName("printWord")[0];
	// var lctContent=document.getElementsByClassName("lctContent")[0];
	// var arrWord=["Address: Beijing Daxing Yizhuang Str.,","Phone:+00008812","Working Days:Mon-Sun","Working Hours:10:00-24:00"];
	// lctContent.onmouseover=function(){
	// 	printWord.style.display="none";
	// 	var i=0;
	// 	var str="";
	// 		var timer=setInterval(function(){
	// 			str+=arrWord[i]+"\n";
	// 			printWord.innerText=str;
	// 		i++;
	// 		if(i==arrWord.length-1){
	// 			clearInterval(timer);
	// 			}	
	// 		}, 300);

	// }
	// lctContent.onmouseout=function(){
	// 	printWord.style.display="block";
	// }




	// 搜索框
	var input=document.getElementsByTagName('input')[0];
	var ul=document.getElementsByTagName('ul')[0];
	var btn=document.getElementsByClassName("btn")[0];
	input.oninput = function(){
		var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&cb=fn";
		var script = document.createElement("script");
		script.src = url;
		document.body.appendChild(script);
		document.body.removeChild(script);
	}


	// 自定义的函数
	function fn(data){
		console.log(data);

		// 清空
		ul.innerHTML = "";

		var arr = data.s;
		// 遍历
		for(var i = 0; i < arr.length; i++){
			var li = document.createElement("li");
			li.innerHTML = arr[i];
			ul.appendChild(li);
		}
	}








// 地图
var locationMap=document.getElementsByClassName("location_map")[0];
var allmap=document.getElementById("allmap");
var printWord=document.getElementsByClassName("printWord")[0];
var goBack=document.getElementsByClassName("goBack")[0];
locationMap.onclick=function(){
	allmap.style.display="block";
	printWord.style.display="none";
	console.log(locationMap);
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(113.2759952545166, 23.117055306224895), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	console.log(map);
}

goBack.onclick=function(){
	console.log(goBack);
	allmap.style.display="none";
	printWord.style.display="block";
}











//
var icon=document.getElementsByClassName("icon")[0];
console.log(icon);
icon.onclick=function(){

}


