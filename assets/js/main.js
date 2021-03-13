---
---
$( document ).ready(function() {

    // initialize
    var sum;
    var average;
    var temp;
    var stance;

    // create variables from measures.yml
    {% for item in site.data.measures %}
    var {{ item.name | remove: " " }};
    //console.log("{{ item.name | remove: " " }}");
    {% endfor %}

    $('#summary').hide();
    
    getItems();
    
    // functions
    // get all the measures values from localStorage
    function getItems() {
      {% for item in site.data.measures %}
      {{ item.name | remove: " " }} = window.localStorage.getItem('{{ item.name | remove: " " }}');
      $('#{{ item.name | remove: " " }}').val({{ item.name | remove: " " }});
      {% endfor %}
    }
    
    // calculate average from values in localStorage
    function calculateAverage() {
      sum = 0;
      for (var i = 0; i < window.localStorage.length; i++){
        sum = sum + parseInt((window.localStorage.getItem(localStorage.key(i))));
      } 
      console.log("sum: " + sum);
      average = (sum / window.localStorage.length).toPrecision(2);
      console.log("average: " + average);
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