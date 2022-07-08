/**
 * 
 */
 let httpRequest;
 
 let btn = document.getElementById("btn");
	btn.onclick=process;


function process(){
	
	/*1. ajax를 처리하기 위한 브라우저별 객체 생성을 한다*/
	if(window.XMLHttpRequest){
		httpRequest = new XMLHttpRequest();
	}else{
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	/*2. 서버가 응답한 데이터를 처리하기 위한 함수를 정의한 후
	onreadystatechange에 등록한다
	*/
	httpRequest.onreadystatechange = viewMessage;
	
	/*3. 서버에 요청준비를 한다
	open(method, url, 비동기화)
	*/
	httpRequest.open('POST', 'name.do', true);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	/*4. 서버에 요청을 한다*/
	httpRequest.send('name='+ document.getElementById('name'));
}


/*서버의 응답을 받아 처리해줄 함수 정의*/
function viewMessage(){
	if(httpRequest.readyState == 4 && httpRequest.status ==200){
		document.getElementById("dv").innerHTML = httpRequest.responseText;
	}
}