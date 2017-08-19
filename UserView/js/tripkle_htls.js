function Logout()
{
	http({
		url:'/tripklehotels_beta/',
		data:'&cortex=Logout',
		requestMethod:'POST',
		success:function(callback)
		{
			console.log(callback);
			var obj = JSON.parse(callback);
			if(obj['status'])
			{
				window.location.reload(true);
			}
		}
	});
}