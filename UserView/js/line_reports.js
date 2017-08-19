_('line_reports').className = 'active';

(function()
{
	//code for report history 
	this.reportHistory = function()
	{
		http({
	      url:'/iwork/',
	      data:'&cortex=LineRequestHistory',
	      progressType:'Loadingbar',
	      Loadingbar:'requestBar',
	      requestMethod:'POST',
	      success:function(callback)
	      {
	      	var obj = JSON.parse(callback);
	      	if(obj['status'])
	      	{
	      		var hours_completed,action_date,checkin_date,checkout_date;
	      		var objLen = obj['report'].length;
	      		for(var i=0;i<objLen;i++)
	      		{
	      			hours_completed = (obj['report'][i]['checkout_status'] == 1 ? 8 : '-');
	      			action_date = (obj['report'][i]['action_date'] != null ? obj['report'][i]['action_date'] : '-');
	      			checkin_date = (obj['report'][i]['checkin_date'] != null ? obj['report'][i]['checkin_date'] : '-');
	      			checkout_date = (obj['report'][i]['checkout_date'] != null ? obj['report'][i]['checkout_date'] : '-');
	      			IGN('#location_data').append("<tr><td>"+obj['report'][i]['users_id']+"</td><td>"+obj['report'][i]['name']+"</td><td>"+obj['report'][i]['user_requests_id']+"</td><td>"+obj['report'][i]['date_time']+"</td><td>"+obj['report'][i]['status']+"</td><td>"+action_date+"</td><td>"+obj['report'][i]['request_date_time']+"</td><td>"+obj['report'][i]['office_address']+"</td><td>"+checkin_date+"</td><td>"+checkout_date+"</td><td>"+hours_completed+"</td><td>"+obj['report'][i]['attendance']+"</td></tr>");
	      		}
	      	}
	      }
	    });
	};

	new reportHistory();
})();