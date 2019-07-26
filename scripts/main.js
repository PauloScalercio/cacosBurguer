$(document).ready(function() {
  $("#carousel").carousel();

  $("#quotecarousel").carousel({
    interval: 4000
  });
  
  fetch('https://api.weseekfood.com/public/restaurante/14663')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    $("#notacomida").text(data.response.nota_comida);
    $("#notaservico").text(data.response.nota_servico);
    $("#notaambiente").text(data.response.nota_ambiente);
  })
  .catch(function (err) {
    console.log(err);
  });


  $("#ordertabs a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });

  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 0) {
      $("#sticky").addClass("active");
    } else {
      $("#sticky").removeClass("active");
    }
  });
});
