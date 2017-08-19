//code for quota update
 var Quota = {
        get:function()
        {
          http({
            url:'/iwork/',
            data:'&cortex=QuotaData',
            progressType:'Loadingbar',
            Loadingbar:'requestBar',
            requestMethod:'POST',
            success:function(callback)
            {
              var obj = JSON.parse(callback);
              Quota.set(obj);
            }
          });
        },
        //code for quota set
        set:function(obj)
        {
          if(obj['status'])
          {
            IGN('#body_container').html("<div> <div class='page-title'> <div class='title_left'> <h3><i class='fa fa-clock-o'></i> i-Work Quota & Cut-Off Time</h3> </div></div><div class='clearfix'></div><div class='row'> <div class='col-md-12 col-sm-12 col-xs-12'> <div class='x_panel'> <div class='x_content'> <br/> <form data-parsley-validate class='form-horizontal form-label-left'> <div class='col-md-12'><div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>i-Work Quota</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input class='form-control col-md-7 col-xs-12' type='text' disabled=true id='work_quota' name='work_quota' class='form-control col-md-7 col-xs-12'><div id='quotaContainer'><span class='config_edit' onclick='config.changeQuotaText();'>Edit</span> </span></div></div></div><div class='clearfix'></div><br><div class='col-md-12'><div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Cut-Off Day</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input disabled=true class='form-control col-md-7 col-xs-12' type='text' id='cut_off_date' name='cut_off_date' class='form-control col-md-7 col-xs-12'><div id='cutoff_date_container'><span class='config_edit' onclick='config.cutoffdateChangeText();'>Edit</span></div>  </div></div></div><div class='clearfix'></div><br><div class='col-md-12'><div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Cut-Off Time</label>  <div style='margin-left:-10px;' class='col-md-7 col-sm-6 col-xs-12'><div class='col-md-2 col-sm-6 col-xs-12'><select id='cut_off_time_hours' disabled=true class='form-control' name='cut_off_time_hours'></select></div><div class='col-md-2 col-sm-6 col-xs-12'><select disabled=true id='cut_off_time_mins' class='form-control col-md-7 col-xs-12 name='cut_off_time_mins'></select></div><div class='col-md-2 col-sm-6 col-xs-12'><select disabled=true id='clock_type' class='form-control'><option>AM</option><option>PM</option></select></div><div class='col-md-2 col-sm-6 col-xs-12'><div id='cutoff_time_container'><span onclick='config.changeCutoffTimeText();' class='config_edit'>Edit</span></div> </div></div></div></div><div class='clearfix'></div><div class='col-md-12'><div class='ln_solid'></div></form> </div> </div></div></div></div>");

            var hour = min = 0;
            _('work_quota').value = (obj['quota'] != null ? obj['quota'] : '');
            _('cut_off_date').value = (obj['cutoff_date'] != null ? obj['cutoff_date'] : '');

            for(var i=1;i<=12;i++)
            {
              if(i < 10)
              {
                hour = '0'+i;
              }
              else
              {
                hour = i;
              }
              if(obj['cutoff_time'][0] == i)
              {
                IGN('#cut_off_time_hours').append("<option selected>"+hour+"</option>");
              }
              else
              {
                IGN('#cut_off_time_hours').append("<option>"+hour+"</option>");
              }
            }

            for(var i=0;i<=59;i++)
            {
              if(i < 10)
              {
                mins = '0'+i;
              }
              else
              {
                mins = i;
              }
              if(obj['cutoff_time'][1] == i)
              {
                IGN('#cut_off_time_mins').append("<option selected>"+mins+"</option>");
              }
              else
              {
                IGN('#cut_off_time_mins').append("<option>"+mins+"</option>");
              }
            }

            var clock_typeLen = _('clock_type').length;
            for(var i=0;i<clock_typeLen;i++)
            {
              if(_('clock_type')[i].value == obj['cutoff_time_type'])
              {
                _('clock_type')[i].setAttribute('selected',true);
              }
            }
          }
        }
        // update:function()
        // {
        //   var work_quota = _('work_quota').value;
        //   var cut_off_date = _('cut_off_date').value;
        //   var cut_off_time_hours = _('cut_off_time_hours').value;
        //   var cut_off_time_mins = _('cut_off_time_mins').value;
        //   var clock_type = _('clock_type').value;

        //   http({
        //     url:'/iwork/',
        //     data:'&cortex=QuotaUpdate&work_quota='+work_quota+'&cut_off_date='+cut_off_date+'&cut_off_time_hours='+cut_off_time_hours+'&cut_off_time_mins='+cut_off_time_mins+'&clock_type='+clock_type,
        //     progressType:'Loadingbar',
        //     Loadingbar:'requestBar',
        //     requestMethod:'POST',
        //     success:function(callback)
        //     {
        //       var obj = JSON.parse(callback);
        //       if(obj['status'])
        //         {
        //           IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        //         }
        //         else
        //         {
        //           if(obj['logout'])
        //           {
        //             window.location.reload(true);
        //           }
        //           else
        //           {
        //             IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
        //           }
        //         }
        //     }
        //   });
        // }
      };

      new Quota.get();


      function reloadShade()
      {
        window.location.reload(true);
      }

      function removeShade()
      {
        IGN('#pop_shade').remove();
      }

var config = {
  changeCutoffTimeText:function()
  {
    _('cutoff_time_container').innerHTML = "<span onclick='config.cancelCutoffTime();' class='config_edit'>cancel</span> <span onclick='config.changeCutOffTime();' class='config_edit'>save</span>";
    _('cut_off_time_hours').removeAttribute('disabled');
    _('cut_off_time_mins').removeAttribute('disabled');
    _('clock_type').removeAttribute('disabled');
  },
  cancelCutoffTime:function()
  {
    _('cutoff_time_container').innerHTML = "<span onclick='config.changeCutoffTimeText();' class='config_edit'>Edit</span>";
    _('cut_off_time_hours').disabled = true;
    _('cut_off_time_mins').disabled = true;
    _('clock_type').disabled = true;
  },
  changeCutOffTime:function()
  {
    var cut_off_time_hours = _('cut_off_time_hours').value;
    var cut_off_time_mins = _('cut_off_time_mins').value;
    var clock_type = _('clock_type').value;
    if(cut_off_time_hours.match(/^[0-9]+/) && cut_off_time_mins.match(/^[0-9]+/) && clock_type.match(/(AM|PM)/))
    {
       http({
        url:'/iwork/',
        data:'&cortex=ChangeCutOffTime&cut_off_time_hours='+cut_off_time_hours+'&cut_off_time_mins='+cut_off_time_mins+'&clock_type='+clock_type,
        progressType:'Loadingbar',
        Loadingbar:'requestBar',
        requestMethod:'POST',
        success:function(callback)
        {
          var obj = JSON.parse(callback);
          if(obj['status'])
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
              _('cutoff_time_container').innerHTML = "<span onclick='config.changeCutoffTimeText();' class='config_edit'>Edit</span>";
              _('cut_off_time_hours').disabled = true;
              _('cut_off_time_mins').disabled = true;
              _('clock_type').disabled = true;
          }
          else
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();' style='float:none;text-align:center'>Ok</button</div></div>");
          }
        }
      });
    }
    else
    {
      IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Invalid input for work quota</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
    }
  },
  cutoffdateChangeText:function()
  {
    _('cutoff_date_container').innerHTML = "<span onclick='config.cancelCutoffDate();' class='config_edit'>cancel</span> <span onclick='config.changeCutOffDate();' class='config_edit'>save</span>";
    _('cut_off_date').removeAttribute('disabled');
  },
  cancelCutoffDate:function()
  {
    _('cutoff_date_container').innerHTML = "<span class='config_edit' onclick='config.cutoffdateChangeText();'>Edit</span>";
    _('cut_off_date').disabled = true;
  },
  changeCutOffDate:function()
  {
    var cut_off_date = _('cut_off_date').value;
    if(cut_off_date.match(/^[0-9]+/))
    {
       http({
        url:'/iwork/',
        data:'&cortex=ChangeCutOffDate&cut_off_date='+cut_off_date,
        progressType:'Loadingbar',
        Loadingbar:'requestBar',
        requestMethod:'POST',
        success:function(callback)
        {
          var obj = JSON.parse(callback);
          if(obj['status'])
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
             _('cutoff_date_container').innerHTML = "<span class='config_edit' onclick='config.cutoffdateChangeText();'>Edit</span>";
             _('cut_off_date').disabled = true;
          }
          else
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          }
        }
      });
    }
    else
    {
      IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Invalid input for work quota</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
    }
  },
  changeQuotaText:function()
  {
    _('quotaContainer').innerHTML = "<span onclick='config.cancelQuota();' class='config_edit'>cancel</span> <span onclick='config.changeQuota();' class='config_edit'>save</span>";
    _('work_quota').removeAttribute('disabled');
  },
  cancelQuota:function()
  {
    _('quotaContainer').innerHTML = "<span class='config_edit' onclick='config.changeQuotaText();'>Edit</span>";
    _('work_quota').disabled = true;
  },
  changeQuota:function()
  {
    var work_quota = _('work_quota').value;
    if(work_quota.match(/^[0-9]+/))
    {
       http({
        url:'/iwork/',
        data:'&cortex=ChangeWorkQuota&work_quota='+work_quota,
        progressType:'Loadingbar',
        Loadingbar:'requestBar',
        requestMethod:'POST',
        success:function(callback)
        {
          var obj = JSON.parse(callback);
          if(obj['status'])
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
            _('quotaContainer').innerHTML = "<span class='config_edit' onclick='config.changeQuotaText();'>Edit</span>";
            _('work_quota').disabled = true;
          }
          else
          {
            IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>"+obj['msg']+"</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
          }
        }
      });
    }
    else
    {
      IGN('body').append("<div id='pop_shade'><div id='popup_container'><div id='pop_message'>Invalid input for work quota</div><button id='pop_btn' onclick='removeShade();'>Ok</button</div></div>");
    }
  }
};