$( document ).ready(function() {

    // initialize
    var average;
    var activity;
    var growth;
    var outlook;
    var temp;
    var stance;
    
    $('#summary').hide();
    
    getItems();
    
    // functions
    function getItems() {
      activity = window.localStorage.getItem('Activity');
      $('#Activity').val(activity);
    
      growth = window.localStorage.getItem('Growth');
      $('#Growth').val(growth);
    
      outlook = window.localStorage.getItem('Outlook');
      $('#Outlook').val(outlook);
    }
    
    function calculateAverage() {
      average = ((parseInt(activity) + parseInt(growth) + parseInt(outlook)) / 3).toPrecision(2);
      console.log(activity);
      console.log(growth);
      console.log(outlook);
      console.log(average);
      return average;
    };
    
    function calculateTemp() {
      if (average >= 3) {
        return "High";
      } else {
        return "Low";
      }
    };
    
    function calculateStance() {
      if (average >= 3) {
        return "Defense";
      } else {
        return "Offense";
      }
    };
    
    // listeners
    $('input').on('change', function() {
      console.log($(this).val());
      window.localStorage.setItem($(this).attr('id'), $(this).val());
      getItems();
    });
    
    $('textarea').on('change', function() {
      console.log($(this).val());
      window.localStorage.setItem($(this).attr('id'), $(this).val());
    });
    
    $('#show-summary').on('click', function() {
      $('#average').text(calculateAverage());
      $('#temp').text(calculateTemp());
      $('#stance').text(calculateStance());
      $('#summary').show();
    });
    
    $('#hide-summary').on('click', function() {
      $('#summary').fadeOut();
    });
    
  });  