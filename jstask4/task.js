// JavaScript Document
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 window.onload=function(){
  var aqiData = {};
  var city=document.getElementById('aqi-city-input');
  var aqivalue=document.getElementById('aqi-value-input');
 

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
   var cityinput=city.value.trim();
   var valueinput=aqivalue.value.trim();
   if(!cityinput.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
	    alert("城市名必须为中英文字符");
		return;
	   }
	if(!valueinput.match(/^\d+$/)){
		 alert("空气质量指数必须为整数")
		 return;
		}
	 aqiData[cityinput]=valueinput;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
     var items="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"; 
	 var table=document.getElementById('aqi-table');
	 for( var cityinput in aqiData){
		  items+="<tr><td>"+cityinput+"</td><td>"+aqiData[cityinput]+"</td><td><button data-cityinput='"+cityinput+"'>删除</button></td></tr>"
		 }
	 table.innerHTML=cityinput ? items : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(cityinput) {
  // do sth.
  delete aqiData[cityinput];

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').addEventListener("click",addBtnHandle);

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById('aqi-table').addEventListener("click",function(event){
 if(event.target.nodeName.toLowerCase()==='button') 
   delBtnHandle.call(null,event.target.dataset.cityinput);	  });

}

init();
 }
