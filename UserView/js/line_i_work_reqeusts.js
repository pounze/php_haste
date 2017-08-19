
_('line_work_request_li').className = 'active';

(function()
{
	//code for fetching all the reuqest created by user

	this.user_requests_Id = [];
	this.getAllRequests = function()
	{
		http({
	      url:'/iwork/',
	      data:'&cortex=GetAlliWorkRequest',
	      progressType:'Loadingbar',
	      Loadingbar:'requestBar',
	      requestMethod:'POST',
	      success:function(callback)
	      {
	      	var obj = JSON.parse(callback);
	      	if(obj['status'])
	      	{
	      		var objLen = obj['requestData'].length;
	      		for(var i=0;i<objLen;i++)
	      		{
	      			user_requests_Id[i] = obj['requestData'][i]['user_requests_id']
	      			IGN('#location_data').append("<tr id=rquest"+i+"><td>"+obj['requestData'][i]['users_id']+"</td><td>"+obj['requestData'][i]['name']+"</td><td>"+obj['requestData'][i]['user_requests_id']+"</td><td>"+obj['requestData'][i]['request_date_time']+"</td><td>"+obj['requestData'][i]['date_time']+"</td><td>"+obj['requestData'][i]['office_address']+"</td><td><button class='btn btn-success' onclick='changeRequestStatus(1,"+i+")'>Approve</button> <button class='btn btn-danger' onclick='changeRequestStatus(2,"+i+")'>Reject</button></td></tr>");
	      		}
	      	}
	      }
	    });
	}

	new getAllRequests();
})();

function changeRequestStatus(type,count)
{
	// code for chaning the status of requests means approve or reject
	var user_requestsId = user_requests_Id[count];

	http({
	    url:'/iwork/',
	    data:'&cortex=ChangeRequestStatus&user_requestsId='+user_requestsId+'&type='+type,
	    progressType:'Loadingbar',
	    Loadingbar:'requestBar',
	    requestMethod:'POST',
	    success:function(callback)
	    {
	    	var obj = JSON.parse(callback);
	    	if(obj['status'])
	    	{
	    		IGN('#rquest'+count).remove();
	    	}
	    	else
	    	{
	    		IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
	    	}
	    }
	});
}

function reloadShade()
{
  window.location.reload(true);
}

function removeShade()
{
  IGN('#pop_shade').remove();
}