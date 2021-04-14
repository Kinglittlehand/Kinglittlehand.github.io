
 function inputBox()
 {
  var str=prompt("请输入您最喜欢的奥特曼的名字，例如：赛文奥特曼","");
  if(str!=null&&str!="")
  {
   var ul = document.getElementById("ul");
      var num = ul.childNodes.length;
   add(1,str);
   alert( str +":  很感谢您能够喜欢我!")
  }
 }
 function add(n,str){
  var ul = document.getElementById('ul');
  var li = document.createElement("li");
  var num = ul.childNodes.length;
  li.innerHTML=str + "： 感谢您的喜欢";
  for(var i=0;i<num;i++){
   if(n==-1){
    ul.appendChild(li);
   }else if(i==n-1){
    ul.insertBefore(li,ul.childNodes[i]);
   }
  }
 }

function sayhello(){
  var response=prompt("what's your name");
  alert("hello"+response+"，have a good day!");
}

function showTopic(){
  var x=document.getElementById('demo');
  x.style.fontSizen="25px";
  x.style.color="red";
}


var movieDetails = [
{title: "Avengers",
 time:"12pm",
 status: "available"},
{title: "Captain Marvel",
 time:"2pm",
 status: "unavailable"},
{title: "Black Panther",
 time:"4pm",
 status: "available"},
{title: "Spiderman",
 time:"6pm",
 status: "available"}
];
