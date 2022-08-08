{
window.addEventListener("load", function(){
let unm = document.querySelector('#userName2').textContent
let umail = document.querySelector('#email').textContent
let ustid = document.querySelector('#mystid').textContent
let ufid = document.querySelector('#profile-uid').textContent
if(unm !== 'Loading..') {

mixpanel.init('bb6d2603674e27d7b31d045acf3ae77f', {debug: true}); 
distinct_id = mixpanel.get_distinct_id();
document.querySelector('#mydistinct').textContent = distinct_id 
mixpanel.identify(ufid);
mixpanel.people.set_once({ "$name": unm, "$email": umail,"stid": ustid});
}
  $(document).ready(function() {
    $(document).on('click', '[data-tracker]', function(e) {

      var trackData = $(this).data('tracker');
      if (!trackData) { return; }

      var tagData = ParseTagData.tagData(trackData);
      if (!tagData.action || !tagData.label ) { return; }

      Track.trackEvent('click', { action: tagData.action , label:  tagData.label });
      });

    var ParseTagData = { tagData : function ( data ) {
      var tmpData = data.split("|");
      if (tmpData.length !=2 ) { return ""; }
      return { "action": tmpData[0] ,"label": tmpData[1] };
      }
    };

    var Track= { trackEvent: function (eventType, data) {
      mixpanel.track( data.action );
      }
    };
  })
})
}
