$( document ).ready(function() {

    // initialize
    var average;
    var activity;
    var growth;
    var outlook;

    var interest_rates;
    var lending;
    var terms;

    var capital;
    var trade_volume;
    var spreads;

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

      interest_rates = window.localStorage.getItem('InterestRates');
      $('#InterestRates').val(interest_rates);
    
      lending = window.localStorage.getItem('Lending');
      $('#Lending').val(lending);
    
      terms = window.localStorage.getItem('Terms');
      $('#Terms').val(terms);

      capital = window.localStorage.getItem('Capital');
      $('#Capital').val(capital);

      trade_volume = window.localStorage.getItem('TradeVolume');
      $('#TradeVolume').val(trade_volume);

      spreads = window.localStorage.getItem('Spreads');
      $('#Spreads').val(spreads);
    }
    
    function calculateAverage() {
      average = ((parseInt(activity) + parseInt(growth) + parseInt(outlook) + parseInt(interest_rates) + parseInt(lending) + parseInt(terms) + parseInt(capital) + parseInt(trade_volume) + parseInt(spreads)) / 9).toPrecision(2);
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
      console.log("show summary clicked");
      $('#average').text(calculateAverage());
      $('#temp').text(calculateTemp());
      $('#stance').text(calculateStance());
      $('#summary').show();
    });
    
    $('#hide-summary').on('click', function() {
      $('#summary').fadeOut();
    });
    
  });  