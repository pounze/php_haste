(function()
	{
		this.getUserProfile = function()
		{
			http({
		      url:'/iwork/',
		      data:'&cortex=UserProfileData',
		      progressType:'Loadingbar',
		      Loadingbar:'requestBar',
		      requestMethod:'POST',
		      success:function(callback)
		      {
		
		      	var obj = JSON.parse(callback);
		      	if(obj['status'])
		      	{
		      		IGN('#container').append("<div class='col-md-1 profile'> <div class='icon'><i class='fa fa-user' style='font-size: 49px;padding: 17px;height: 88px;padding-left: 23px;width: 88px;border-radius: 51px;border: 1px solid #000;'></i></div></div><div class='col-md-10'><h4 style='margin-top: 32px;margin-left: 17px;font-size: 26px;color:#a11d35'>My Profile</h4><div class='clearfix'></div><br><div class='location_form_fields' style='font-size: 15px;margin-left: 17px;'><span class='location_form_label'>Name :</span>"+obj['name']+"</div><div class='location_form_fields' style='font-size: 15px;margin-left: 17px;'><span class='location_form_label'>Email ID :</span>"+obj['email_id']+"</div><div class='location_form_fields' style='font-size: 15px;margin-left: 17px;'><span class='location_form_label'>Department :</span>"+obj['department']+"</div><div class='location_form_fields' style='font-size: 15px;margin-left: 17px;'><span class='location_form_label'>Reporting Manager :</span>"+obj['reporting_manager']+"</div><div class='location_form_fields' style='font-size: 15px;margin-left: 17px;'><span class='location_form_label'>i-Work Limit :</span>"+obj['iwork_limit']+"</div><div class='location_form_fields' style='font-size: 15px;margin-left: 17px;'><span class='location_form_label'>Consumed :</span>"+obj['comsumed']+"</div></div>");
		      	}
		      }
		    });
		};

		new getUserProfile();
	})();