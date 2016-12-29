$(function(){
	$('#btnSignUp').click(function(){
		
		$.ajax({
			url: '/signUp',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
				$('form')[0].reset();
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
