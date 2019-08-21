$(document).ready(function(e){
  
  var displayValue = '0';   
  $('#screen').text(displayValue);

  $('button').each(function(index, button){       
    $(this).click(function(e){
        if(displayValue == '0') displayValue = '';
        if($(this).text() == 'C')
        {
            displayValue = '0';
            $('#screen').text(displayValue);
        } else if($(this).text() == '=')
        {
          displayValue = eval(displayValue);
          $('#screen').text(displayValue);
          displayValue = '0';
        } else {
        displayValue += $(this).text();
        $('#screen').text(displayValue);
        }
        e.preventDefault()
    })
})
})