$(document).ready(function() {
  $('#magic-words-form').submit(function(event) {
    var words = {
      'phrase': $('#textinput').val(),
    };

    function response(data){
      $('#total-magic-words').html("Cantidad de palabras mágicas detectadas:" + data);
      $('#magic-words-form').each(function(){
        this.reset();
      })};

      $.ajax({
        url: $(this).attr('action'),
        type: 'post',
        asyn: true,
        data: words,
        success: response,
      });

    event.preventDefault();

  });
});
