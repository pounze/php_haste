//code for human resource iwork locations



var fetchLocationsData = {
          iwork_locations_id:[],
          // fetch all the iwork location created by the hr
          get: function()
          {
            if(typeof($_GET('popup')) != 'undefined')
            {
              iWorkLocations();
            }

            http({
              url:'/iwork/',
              data:'&cortex=LocationsList',
              progressType:'Loadingbar',
              Loadingbar:'requestBar',
              requestMethod:'POST',
              success:function(callback)
              {
                var obj = JSON.parse(callback);
                if(obj['status'])
                {
                  fetchLocationsData.set(obj);
                }
                else
                {
                  if(obj['logout'])
                  {
                    window.location.reload(true);
                  }
                }
              }
            });
          },
          // set data that are fetched
          set:function(obj)
          {
            var objLen = obj['locationData'].length;
            for(var j=0;j<objLen;j++)
            {
              this.iwork_locations_id[j] = obj['locationData'][j]['iwork_locations_id'];
              IGN('#location_data').append("<tr id=location"+j+"><td>"+obj['locationData'][j]['iwork_locations_id']+"</td><td>"+obj['locationData'][j]['office_name']+"</td><td>"+obj['locationData'][j]['office_address']+"</td><td>"+obj['locationData'][j]['latitude']+"</td><td>"+obj['locationData'][j]['longitude']+"</td><td>"+obj['locationData'][j]['work_slots']+"</td><td>"+obj['locationData'][j]['last_edited_date']+"</td><td><button class='btn btn-info' onclick='fetchLocationsData.editLocation("+j+")'><i class='fa fa-pencil'></i> Edit</button> <button class='btn btn-danger' onclick='fetchLocationsData.deleteLocation("+j+")'><i class='fa fa-trash'></i> Delete</button></td></tr>");
            }
          },
          // delete the locations popup for confirmations
          deleteLocation:function(count)
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Are you sure you want to delete ?</div><button id='pop_btn' onclick='removeShade();'>Cancel</button> <button id='popup_success' class='btn btn-danger' onclick='fetchLocationsData.deleteLocations("+count+");'>Ok</button></div></div>");
          },
          // after confirming deletes the iwork location
          deleteLocations:function(count)
          {
            var iwork_locationsId = this.iwork_locations_id[count];
            http({
              url:'/iwork/',
              data:'&cortex=DeleteLocationData&iwork_locationsId='+iwork_locationsId,
              progressType:'Loadingbar',
              Loadingbar:'requestBar',
              requestMethod:'POST',
              success:function(callback)
              {
                var obj = JSON.parse(callback);
                if(obj['status'])
                {
                  IGN('#location'+count).remove();
                  IGN('#pop_shade').remove();
                }
                else
                {
                  if(obj['logout'])
                  {
                    window.location.reload(true);
                  }
                  else
                  {
                    IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
                  }
                }
              }
            });
          },
          // edit iwork location created by the hr
          editLocation:function(count)
          {
            var iwork_locationsId = this.iwork_locations_id[count];
            http({
              url:'/iwork/',
              data:'&cortex=LocationsData&iwork_locationsId='+iwork_locationsId,
              progressType:'Loadingbar',
              Loadingbar:'requestBar',
              requestMethod:'POST',
              success:function(callback)
              {
                var obj = JSON.parse(callback);
                if(obj['status'])
                {
                  IGN('body').append("<div id='location_container_shade'><div id='location_container'><img src='UserView/img/close.png' onclick=IGN('#location_container_shade').remove(); style='width: 18px;float: right;right: -41px;top: -44px;overflow: hidden;position: relative;'><div id='location_con_body'><p style='text-align:center;'>Edit Location - Location ID:"+iwork_locationsId+" </p> <form id='iworkLocationForm'><div class='location_form_fields'><span class='location_form_label'>Office Name <b class='compulsory_star'>*</b></span><input type='text' value='"+obj['office_name']+"' class='location_form_input_elem' name='office_name' id='office_name'></div> <div class='location_form_fields'><span class='location_form_label'>Office Address <b class='compulsory_star'>*</b></span><input type='text'  value='"+obj['office_address']+"' class='location_form_input_elem' id='office_address' name='office_address'></div>  <div class='location_form_fields'><span class='location_form_label'>Address 1 <b class='compulsory_star'>*</b></span><textarea name='address1' id='address1' class='location_form_input_elem'>"+obj['address1']+"</textarea></div> <div class='location_form_fields'><span class='location_form_label'>Address 2 </span><textarea class='location_form_input_elem' id='address2' name='address2'>"+obj['address2']+"</textarea></div>  <div class='location_form_fields'><span class='location_form_label'>City <b class='compulsory_star'>*</b></span><input type='text' value='"+obj['city']+"' class='location_form_input_elem' name='city' id='city'></div>  <div class='location_form_fields'><span class='location_form_label'>State <b class='compulsory_star'>*</b></span><input type='text' value='"+obj['state']+"' class='location_form_input_elem_small' id='state' name='state'> <span class='location_form_label_small'>Zip <b class='compulsory_star'>*</b></span><input type='number' value="+obj['zip']+" class='location_form_input_elem_small' id='zip' name='zip' ></div> <div class='location_form_fields'><span class='location_form_label'>Latitude <b class='compulsory_star'>*</b></span><input type='number' class='location_form_input_elem_small' id='latitude' name='latitude' value='"+obj['latitude']+"'> <span class='location_form_label_small'>Longitude <b class='compulsory_star'>*</b></span><input type='number' class='location_form_input_elem_small' value='"+obj['longitude']+"' id='longitude' name='longitude'></div>  <div class='location_form_fields'><span class='location_form_label'>i-Work Slots <b class='compulsory_star'>*</b></span><input type='number' class='location_form_input_elem' value="+obj['work_slots']+" id='work_slots' name='work_slots'></div> <div class='clearfix'></div><br><div class='location_form_fields'><button type='button' class='btn btn-danger form_location_btns' onclick=IGN('#location_container_shade').remove();>Cancel</button> <button type='button' class='btn btn-info form_location_btns' onclick='fetchLocationsData.updateiWorkLocations("+count+");'>Update Location</button> </div> </form> </div></div></div>");
                }
                else
                {
                  if(obj['logout'])
                  {
                    window.location.reload(true);
                  }
                  else
                  {
                    IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
                  }
                }
              }
            });
          },
          // update the iwork location created by the user
          updateiWorkLocations:function(count)
          {
            var iwork_locationsId = this.iwork_locations_id[count];
            var office_name = _('office_name').value;
            var office_address = _('office_address').value;
            var address1 = _('address1').value;
            var address2 = _('address2').value;
            var city = _('city').value;
            var state = _('state').value;
            var zip = _('zip').value;
            var latitude = _('latitude').value;
            var longitude = _('longitude').value;
            var work_slots = _('work_slots').value;


            if(office_name == '')
            {
              _('office_name').className += ' error_validation';
               IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The office name</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('office_name').className = _('office_name').className.replace(/( error_validation)/,'');
            }

            if(office_address == '')
            {
              _('office_address').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The office address</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('office_address').className = _('office_address').className.replace(/( error_validation)/,'');
            }

            if(address1 == '')
            {
              _('address1').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The address1</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('address1').className = _('address1').className.replace(/( error_validation)/,'');
            }

            //if(address2 == '')
            //{
             // _('address2').className += ' error_validation';
             // return false;
           // }
           // else
           // {
           //   _('address2').className = _('address2').className.replace(/( error_validation)/,'');
           // }

            if(city == '')
            {
              _('city').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The city</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('city').className = _('city').className.replace(/( error_validation)/,'');
            }

            if(state == '')
            {
              _('state').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The state</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('state').className = _('state').className.replace(/( error_validation)/,'');
            }

            if(zip == '')
            {
              _('zip').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The zip</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('zip').className = _('zip').className.replace(/( error_validation)/,'');
            }

            if(latitude == '')
            {
              _('latitude').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The latitude</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('latitude').className = _('latitude').className.replace(/( error_validation)/,'');
            }

            if(longitude == '')
            {
              _('longitude').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The longitude</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('longitude').className = _('longitude').className.replace(/( error_validation)/,'');
            }

            if(work_slots == '')
            {
              _('work_slots').className += ' error_validation';
			  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The work slots</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              return false;
            }
            else
            {
              _('work_slots').className = _('work_slots').className.replace(/( error_validation)/,'');
            }

            http({
              url:'/iwork/',
              data:'&cortex=UpdateiWorkLocations&iwork_locationsId='+iwork_locationsId+'&office_name='+office_name+'&office_address='+office_address+'&address1='+address1+'&address2='+address2+'&city='+city+'&state='+state+'&zip='+zip+'&latitude='+latitude+'&longitude='+longitude+'&work_slots='+work_slots,
              progressType:'Loadingbar',
              Loadingbar:'requestBar',
              requestMethod:'POST',
              success:function(callback)
              {
                var obj = JSON.parse(callback);
                // if status is true page is reloaded and home page is displayed
                if(obj['status'])
                {
                  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='reloadShade();'>Ok</button</div></div>");
                }
                else
                {
                  if(obj['logout'])
                  {
                    window.location.reload(true);
                  }
                  else
                  {
                    IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
                  }
                }
              }
            });

          }
        }; 

      fetchLocationsData.get(); 

      function iWorkLocations()
      {
        IGN('body').append("<div id='location_container_shade'><div id='location_container'><img src='UserView/img/close.png' onclick=IGN('#location_container_shade').remove(); style='width: 18px;float: right;right: -41px;top: -44px;overflow: hidden;position: relative;'><div id='location_con_body'><p style='text-align:center'>Add New i-Work Location </p><form id='iworkLocationForm'><div class='location_form_fields'><span class='location_form_label'>Office Name <b class='compulsory_star'>*</b></span><input type='text' class='location_form_input_elem' name='office_name' id='office_name'></div> <div class='location_form_fields'><span class='location_form_label'>Office Address <b class='compulsory_star'>*</b></span><input type='text' class='location_form_input_elem' id='office_address' name='office_address'></div>  <div class='location_form_fields'><span class='location_form_label'>Address 1 <b class='compulsory_star'>*</b></span><textarea name='address1' id='address1' class='location_form_input_elem'></textarea></div> <div class='location_form_fields'><span class='location_form_label'>Address 2</span><textarea class='location_form_input_elem' id='address2' name='address2'></textarea></div>  <div class='location_form_fields'><span class='location_form_label'>City <b class='compulsory_star'>*</b></span><input type='text' class='location_form_input_elem' name='city' id='city'></div>  <div class='location_form_fields'><span class='location_form_label'>State <b class='compulsory_star'>*</b></span><input type='text' class='location_form_input_elem_small' id='state' name='state'> <span class='location_form_label_small'>Zip <b class='compulsory_star'>*</b></span><input type='number' class='location_form_input_elem_small' id='zip' name='zip'></div> <div class='location_form_fields'><span class='location_form_label'>Latitude <b class='compulsory_star'>*</b></span><input type='number' class='location_form_input_elem_small' id='latitude' name='latitude'> <span class='location_form_label_small'>Longitude <b class='compulsory_star'>*</b></span><input type='text' class='location_form_input_elem_small' id='longitude' name='longitude'></div>  <div class='location_form_fields'><span class='location_form_label'>i-Work Slots <b class='compulsory_star'>*</b></span><input type='number' class='location_form_input_elem' id='work_slots' name='work_slots'></div><div class='clearfix'></div><br> <div class='location_form_fields'><button type='button' class='btn btn-danger form_location_btns' onclick=IGN('#location_container_shade').remove();>Cancel</button> <button type='button' class='btn btn-info form_location_btns' onclick='addiWorkLocations();'>Add i-Work Location</button> </div> </form> </div></div></div>");
      }

      // add new iwork locations
      function addiWorkLocations()
      {

        var office_name = _('office_name').value;
        var office_address = _('office_address').value;
        var address1 = _('address1').value;
        var address2 = _('address2').value;
        var city = _('city').value;
        var state = _('state').value;
        var zip = _('zip').value;
        var latitude = _('latitude').value;
        var longitude = _('longitude').value;
        var work_slots = _('work_slots').value;


        if(office_name == '')
        {
          _('office_name').className += ' error_validation';
		  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The office name</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          return false;
		  
        }
        else
        {
          _('office_name').className = _('office_name').className.replace(/( error_validation)/,'');
        }

        if(office_address == '')
        {
          _('office_address').className += ' error_validation';
		  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The office address</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          return false;
        }
        else
        {
          _('office_address').className = _('office_address').className.replace(/( error_validation)/,'');
        }

        if(address1 == '')
        {
          _('address1').className += ' error_validation';
		  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The address1</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          return false;
        }
        else
        {
          _('address1').className = _('address1').className.replace(/( error_validation)/,'');
        }

      //  if(address2 == '')
       // {
       //   _('address2').className += ' error_validation';
       //   return false;
       // }
       // else
       // {
        //  _('address2').className = _('address2').className.replace(/( error_validation)/,'');
       // }

        if(city == '')
        {
          _('city').className += ' error_validation';
		  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The city</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          return false;
        }
        else
       {
         _('city').className = _('city').className.replace(/( error_validation)/,'');
       }

       if(state == '')
        {
         _('state').className += ' error_validation';
		 IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The state</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
         return false;
		}
       else
       {
          _('state').className = _('state').className.replace(/( error_validation)/,'');
	   }

       if(zip == '')
        {
         _('zip').className += ' error_validation';
		 IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The zip</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          return false;
        }
        else
        {
          _('zip').className = _('zip').className.replace(/( error_validation)/,'');
        }

        if(latitude == '')
        {
          _('latitude').className += ' error_validation';
		  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The latitude</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          return false;
        }
        else
       {
          _('latitude').className = _('latitude').className.replace(/( error_validation)/,'');
	   }

      if(longitude == '')
        {
         _('longitude').className += ' error_validation';
		 IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The longitude</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
         return false;
 }
        else
        {
          _('longitude').className = _('longitude').className.replace(/( error_validation)/,'');
 }

        if(work_slots == '')
        {
          _('work_slots').className += ' error_validation';
		  IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Please Enter The Work Slots</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
         return false;
 }
       else
        {
        _('work_slots').className = _('work_slots').className.replace(/( error_validation)/,'');
 }

        http({
          url:'/iwork/',
          data:'&cortex=AddiWorkLocations&office_name='+office_name+'&office_address='+office_address+'&address1='+address1+'&address2='+address2+'&city='+city+'&state='+state+'&zip='+zip+'&latitude='+latitude+'&longitude='+longitude+'&work_slots='+work_slots,
          progressType:'Loadingbar',
          Loadingbar:'requestBar',
          requestMethod:'POST',
          success:function(callback)
          {
            // callback from the server is parsed from json to js object
            var obj = JSON.parse(callback);

            // if status is true page is reloaded and home page is displayed
            if(obj['status'])
            {
              IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='reloadShade();'>Ok</button</div></div>");
            }
            else
            {
              if(obj['logout'])
              {
                window.location.reload(true);
              }
              else
              {
                IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              }
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