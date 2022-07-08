/**
 * 
 */
 $(document).ready(function(){
	$('#btn').on('click', process);
	
})

function process(){
	
	$.ajax({
		type:'POST',
		dataType:'text',
		data:'name='+$('#name').val(),
		url:'name.do',
		success:viewMessage
	})
}

function viewMessage(res){
	$('div').html(res);
}