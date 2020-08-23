$(document).ready(function () {
  $(".js-scroll").click(function (event) {
    event.preventDefault();
    var navbarHeight = $(".navbar").height();
    var targetHref = $.attr(this, "href");
    var targetPosition;

    if (targetHref == "#") {
      targetPosition = navbarHeight;
    } else {
      targetPosition = $(targetHref).offset().top;
    }

    $("html, body").animate({
      scrollTop: targetPosition - navbarHeight,
    });
  });

  $("#researchModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data("whatever"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text(recipient);

    var content;

    switch (recipient) {
      case "database":
        content = "";
        break;
      case "deep-learning":
        break;
      case "blackchain":
        break;
    }
  });
});
