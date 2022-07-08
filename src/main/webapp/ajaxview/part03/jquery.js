 $(document).ready(function(){
	
	$('#btn').click(function(){
		$.ajax({
			type:'POST',
			dataType:'json',
			url:'empsearch.do',
			data:'data='+$('#data').val(),
			success:viewMessage
		});
	});
	
});

function viewMessage(res){
	
	$('#wrap').children().remove();
	$('#wrap').append('<table><tr><th>employee_id</th><th>first_name</th><th>salary</th></tr></table>');
	$.each(res, function(index, value){
	$('#wrap table').append(`<tr><td>${value.employee_id}</td><td>${value.first_name}</td><td>${value.salary}</td></tr>`)	
	})
	$('#data').val('');
	$('#data').focus();
	
}	
	