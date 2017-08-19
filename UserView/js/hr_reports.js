var hrReports = (function()
{
	http({
        url:'/iwork/',
        data:'&cortex=HrReports',
        progressType:'Loadingbar',
        Loadingbar:'requestBar',
        requestMethod:'POST',
        success:function(callback)
        {
        	var obj = JSON.parse(callback);
        	if(obj['status'])
        	{
        		var objLen = obj['reportData'].length;

        		var checkin,checkout,action_date,Requeststatus;

        		for(var i=0;i<objLen;i++)
        		{
        			checkin = ((obj['reportData'][i]['checkin_status'] == 0 && obj['reportData'][i]['checkin_date'] == null) ? '-' : obj['reportData'][i]['checkin_date']);
        			checkout = ((obj['reportData'][i]['checkout_status'] == 0 && obj['reportData'][i]['checkout_date'] == null) ? '-' : obj['reportData'][i]['checkout_date']);
        			action_date = (obj['reportData'][i]['action_date'] == null ? '-' : obj['reportData'][i]['action_date']);
        			Requeststatus = (obj['reportData'][i]['status'] == 0 ? 'Pending' : obj['reportData'][i]['status'] == 1 ? 'Accepted' : 'Rejected');
        			hours_completed = ((obj['reportData'][i]['checkin_status'] == 1) && (obj['reportData'][i]['checkout_status'] == 1) ? 8 : '-');
                    IGN('#report_data').append("<tr><td>"+obj['reportData'][i]['users_id']+"</td><td>"+obj['reportData'][i]['name']+"</td><td>"+obj['reportData'][i]['user_requests_id']+"</td><td>"+obj['reportData'][i]['date_time']+"</td><td>"+obj['reportData'][i]['reporting_managerID']+"</td><td>"+obj['reportData'][i]['line_manager_name']+"</td><td>"+Requeststatus+"</td><td>"+action_date+"</td><td>"+obj['reportData'][i]['request_date_time']+"</td><td>"+obj['reportData'][i]['office_address']+"</td><td>"+checkin+"</td><td>"+checkout+"</td><td>"+hours_completed+"</td><td>"+obj['reportData'][i]['attendance']+"</td></tr>");
        		}
        	}
        }
    });
})();