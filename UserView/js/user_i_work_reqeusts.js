function showDatePicker(elem)
{
	$(elem).datepicker({ dateFormat: 'yy-mm-dd',minDate: 0 });
}

(function()
{
	this.user_requests_Id = [];
	this.getRquests = function()
	{
		http({
           url:'/iwork/',
           data:'&cortex=UserRequestList',
           progressType:'Loadingbar',
           Loadingbar:'requestBar',
           requestMethod:'POST',
           success:function(callback)
           {
           		var obj = JSON.parse(callback);
           		var status,action_date,checkIn,checkOut,hoursCompleted;
           		if(obj['status'])
           		{
           			var objLen = obj['userRequestData'].length;
           			for(var i=0;i<objLen;i++)
           			{
           				user_requests_Id[i] = obj['userRequestData'][i]['user_requests_id'];
           				status = (obj['userRequestData'][i]['status'] == 0 ? 'Pending' : obj['userRequestData'][i]['status'] == 1 ? 'Approved' : 'Rejected');
           				action_date = (obj['userRequestData'][i]['action_date'] != null ? obj['userRequestData'][i]['action_date'] : '-');
           				checkIn = ((obj['userRequestData'][i]['checkin_status'] == 1) ? obj['userRequestData'][i]['checkin_date'] : obj['userRequestData'][i]['checkn_btn'] == false ? '-' : "<button class='btn btn-success form-control' type='button' onclick='requestProposal.checkIn();'>Check-In</button>");
           				checkOut = ((obj['userRequestData'][i]['checkin_status'] == 1 && obj['userRequestData'][i]['checkout_status'] == 1) ? obj['userRequestData'][i]['checkout_date'] : (obj['userRequestData'][i]['checkin_status'] == 1 && obj['userRequestData'][i]['checkout_status'] == 0) ? "<button class='btn btn-danger form-control' type='button' onclick='requestProposal.checkOut("+i+");'>Check-Out</button>" : '-');
           				hoursCompleted = (obj['userRequestData'][i]['checkin_status'] == 1 && obj['userRequestData'][i]['checkout_status'] == 1 ? 8 : '-');
           				IGN('#location_data').append("<tr><td>"+obj['userRequestData'][i]['user_requests_id']+"</td><td>"+obj['userRequestData'][i]['date_time']+"</td><td>"+status+"</td><td>"+action_date+"</td><td>"+obj['userRequestData'][i]['request_date_time']+"</td><td>"+obj['userRequestData'][i]['office_address']+"</td><td>"+checkIn+"</td><td id=checkOutC"+i+">"+checkOut+"</td><td id=hoursC"+i+">"+hoursCompleted+"</td><td id=attendanceC"+i+">"+obj['userRequestData'][i]['attendance']+"</td></tr>");
           			}
           		}
           }
        });
	};

	new getRquests();
})();


var requestProposal = {
	locationID:[],
	locationName:[],
  checkOut:function(count)
  {
  	var user_requestsId = user_requests_Id[count];
  	http({
      url:'/iwork/',
      data:'&cortex=UserCheckout&user_requestsId='+user_requestsId,
      progressType:'Loadingbar',
      Loadingbar:'requestBar',
      requestMethod:'POST',
      success:function(callback)
      {
        var obj = JSON.parse(callback);
        if(obj['status'])
        {
        	_('checkOutC'+count).innerText = obj['checkout_time'];
        	_('hoursC'+count).innerText = 8;
        	_('attendanceC'+count).innerText = obj['attendance'];
        }
        else
        {
        	IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        }
      }
    });
  },
  checkIn:function()
  {
    http({
      url:'/iwork/',
      data:'&cortex=UserCheckin',
      progressType:'Loadingbar',
      Loadingbar:'requestBar',
      requestMethod:'POST',
      success:function(callback)
      {
        var obj = JSON.parse(callback);
        if(obj['status'])
        {
        	window.location.reload(true);
        }
        else
        {
          IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        }
      }
    });
  },
	searchLocation:function(elem)
  {
    var searchData = elem.value.toLowerCase();
    var keyLen = searchData.length;
    if(searchData != '')
    {
      $('#location_msg').remove();
      $('#locations_container li').hide();
      var locations = [];
      $('#locations_container li').each(function()
      {
        locations.push(this.id);
      });

      var locationLen = locations.length;
      var count = 0;

      for(var i=0;i<locationLen;i++)
      {
        var locationVar = requestProposal.locationName[i].toLowerCase();
        for(var j=0;j<keyLen;j++)
        {
          if(searchData[j] == locationVar[j])
          {
            $('#'+ locations[i]).show();
          }
          else
          {
            count += 1;
            $('#'+ locations[i]).hide();
            break;
          }
        }
      }

      if(count == locationLen)
      {
        $('#locations_container').append("<li id='location_msg' style='color:red;'>No location found</li>")
      }
    }
    else
    {
      $('#locations_container li').show();
    }
    
  },	
	getQuotaData:function()
	{
		http({
           url:'/iwork/',
           data:'&cortex=QuotaLimitData',
           progressType:'Loadingbar',
           Loadingbar:'requestBar',
           requestMethod:'POST',
           success:function(callback)
           {	
           		var obj = JSON.parse(callback);
           		if(obj['status'])
           		{
           			IGN('body').append("<div id='request_proposal_shade'><div id='request_proposal_container'><i class='fa fa-times' aria-hidden='true' onclick=IGN('#request_proposal_shade').remove();></i><span id='request_popup_header'>New i-Work Request</span><ul id='request_limit_container'><li>i-Work Limit - "+obj['total_quota']+"</li><li style='color:red'>Consumed - "+obj['consumed']+"</li><li style='color:green'>Available - "+obj['available']+"</li></ul><ul class='request_elem_container'><li>Select Date </li><li><input type='text' id='request_date' onmouseenter=showDatePicker(this); placeholder='yyyy-mm-dd'></li></ul><ul class='request_elem_container'><li>Select Location </li><li> <div id='location_container'><input type='text' onkeyup='requestProposal.searchLocation(this);' placeholder='Search Location' id='search_location'><ul id='locations_container'></ul></div> </li></ul> <ul class='request_elem_container'><li><button class='btn btn-danger' onclick=IGN('#request_proposal_shade').remove();>Cancel</button></li><li><button class='btn btn-success' onclick='requestProposal.createRequest();'>Create Request</button></li></ul></div></div>");
           			
           			if(obj['locations'] != false)
           			{
           				var objLen = obj['locations'].length;
           				for(var i=0;i<objLen;i++)
           				{
           					requestProposal.locationID[i] = obj['locations'][i]['iwork_locations_id'];
           					requestProposal.locationName[i] = obj['locations'][i]['office_address'];
           					IGN('#locations_container').append("<li id=location"+i+"><label name='locationsText[]'><input type='radio' name='location[]'> "+obj['locations'][i]['office_address']+"</label></li>");
           				}
           			}
           		}
           }
        });
	},
	createRequest:function()
	{
		var request_date = _('request_date').value;
		var location = document.getElementsByName('location[]');
	    var locationLen = location.length;
	    var locationID = [];

	    for(var i=0;i<locationLen;i++)
	    {
	      if(location[i].checked == true)
	      {
	        locationID.push(requestProposal.locationID[i]);
	      }
	    }
		if(request_date != '' && typeof(locationID[0]) != 'undefined')
		{
			http({
	           url:'/iwork/',
	           data:'&cortex=AddUserRequest&request_date='+request_date+'&location='+locationID,
	           progressType:'Loadingbar',
	           Loadingbar:'requestBar',
	           requestMethod:'POST',
	           success:function(callback)
	           {
	           		var obj = JSON.parse(callback);
                if(obj['status'])
                {
                  document.body.style.overflow = 'auto';
                  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='reloadShade();'>Close</button</div></div>");
                }
                else
                {
                  IGN('#request_proposal_shade').remove();
                  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='requestProposal.getQuotaData();removeShade();'>Change Date</button</div></div>");
                }
	           }
	        });
		}
    else
    {
      IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please select date and location</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
    }
	}
};

function reloadShade()
{
  window.location.reload(true);
}

function removeShade()
{
  document.body.style.overflow = 'auto';
  IGN('#pop_shade').remove();
}

function requestProposalConHide()
{
  IGN('#request_proposal_shade').remove();
  document.body.style.overflow = 'auto';
}