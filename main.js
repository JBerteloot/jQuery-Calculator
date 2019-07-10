$(document).ready(function() {

  $("#add").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num_one").val())

    var val2 = Number($("#num_two").val())

    $("#answer").html(val1 + val2)
  })

  $("#sub").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num_one").val())

    var val2 = Number($("#num_two").val())

    $("#answer").html(val1 - val2)
  })

  $("#multp").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num_one").val())

    var val2 = Number($("#num_two").val())

    $("#answer").html(val1 * val2)
  })

  $("#divd").on("click", function(e) {
    e.preventDefault()
    var val1 = Number($("#num_one").val())

    var val2 = Number($("#num_two").val())

    $("#answer").html(val1 / val2)
  })
})





















