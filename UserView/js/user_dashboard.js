function showDatePicker(elem)
{
  $(elem).datepicker({ dateFormat: 'yy-mm-dd',minDate: 0});
}


(function()
{
  // fetch all the iwork request created by the user
  this.user_requests_Id;
  this.getRquests = function()
  {
    http({
      url:'/iwork/',
      data:'&cortex=UserRequestData',
      progressType:'Loadingbar',
      Loadingbar:'requestBar',
      requestMethod:'POST',
      success:function(callback)
      {
        var obj = JSON.parse(callback);
        _('work_limit').innerText = 'i-Work limit : '+obj['total_quota'];
        _('consumed_limit').innerText = 'Consumed : '+obj['consumed'];
        _('progress').style.width = parseInt(obj['consumed'])/parseInt(obj['total_quota']) * 100+'%';
        if(obj['status'])
        {
          var objLen = obj['user_request_data'].length;
          for(var i=0;i<objLen;i++)
          {
            IGN('#location_data').append("<tr><td>"+obj['user_request_data'][i]['user_requests_id']+"</td><td>"+obj['user_request_data'][i]['date_time']+"</td><td>"+obj['user_request_data'][i]['request_date_time']+"</td><td>"+obj['user_request_data'][i]['office_address']+"</td><td>"+(obj['linemanager'] == null ? '-' : obj['linemanager'])+"</td><td>"+(obj['user_request_data'][i]['status'] == 0 ? 'Pending' : obj['user_request_data'][i]['status'] == 1 ? 'Approved' : 'Rejected')+"</td></tr>");
          }

        }

        if(obj['checkinout_status'])
        {
          user_requests_Id = obj['user_requestsId'];
          _('requestId').innerText = user_requests_Id;
          _('requestLocation').innerText = obj['officeAddress'];
          if(obj['checkin_btn'])
          {
            _('checkinout_container').innerHTML = "<button class='btn btn-success form-control' type='button' onclick='requestProposal.checkIn();'>Check-In</button>";
          }
          if(obj['checkout_btn'])
          {
            _('checkinout_container').innerHTML = "<button class='btn btn-danger form-control' type='button' onclick='requestProposal.checkOut();'>Check-Out</button>";
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
  // checkout http reuqest
  checkOut:function()
  {
    http({
      url:'/iwork/',
      data:'&cortex=UserCheckout&user_requestsId='+user_requests_Id,
      progressType:'Loadingbar',
      Loadingbar:'requestBar',
      requestMethod:'POST',
      success:function(callback)
      {
        var obj = JSON.parse(callback);
        if(obj['status'])
        {
          _('checkinout_container').innerHTML = '';
          IGN('body').append("<div id='pop_shade'><div id='popup_container'><i id='closebtn' class='fa fa-times' aria-hidden='true' onclick='removeShade();'></i><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        }
        else
        {
          IGN('body').append("<div id='pop_shade'><i id='closebtn' class='fa fa-times' aria-hidden='true' onclick='removeShade();'></i><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        }
      }
    });
  },
  // checking http reuqest
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
          IGN('#checkinout_container').html("<button class='btn btn-danger form-control' type='button' onclick='requestProposal.checkOut();'>Check-Out</button>");
        }
        else
        {
          IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        }
      }
    });
  },

  // search location while created the iwork request
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
  // fetching the quota limit set by the hr and user limit
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
                document.body.style.overflow = 'hidden';
                IGN('body').append("<div id='request_proposal_shade'><div id='request_proposal_container'><i class='fa fa-times' aria-hidden='true' onclick=requestProposalConHide();></i><span id='request_popup_header'>New i-Work Request</span><ul id='request_limit_container'><li>i-Work Limit - "+obj['total_quota']+"</li><li style='color:red'>Consumed - "+obj['consumed']+"</li><li style='color:green'>Available - "+obj['available']+"</li></ul><ul class='request_elem_container'><li>Select Date </li><li><input type='text' id='request_date' onmouseenter=showDatePicker(this); placeholder='yyyy-mm-dd'></li></ul><ul class='request_elem_container'><li>Select Location </li><li> <div id='location_container'><input type='text' onkeyup='requestProposal.searchLocation(this);' placeholder='Search Location' id='search_location'><ul id='locations_container'></ul></div> </li></ul> <ul class='request_elem_container'><li><button class='btn btn-danger' onclick=requestProposalConHide();>Cancel</button></li><li><button class='btn btn-success' onclick='requestProposal.createRequest();'>Create Request</button></li></ul></div></div>");
                
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
  // created iwork request
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
      document.body.style.overflow = 'auto';
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