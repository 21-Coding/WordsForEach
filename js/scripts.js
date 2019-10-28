$(document).ready(function(){
  $(".sentence").submit(function(event){
    var input = $("input#input1").val();
    console.log(input)
    event.preventDefault();
    var words = input.split(" ");
    var morethanthree = [];
    words.map(function(word) {
      if (word.length >= 3 ) {
        $("#output").append(word + " ");

        console.log(morethanthree);
      } else {

      };

    });
  });
});
