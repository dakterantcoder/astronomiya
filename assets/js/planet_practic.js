var planet = ".planet";
var holder = ".planet_holder";
var planets = 8;
var correct = 0;

$(planet).draggable({
  revert: true
});
let mainMenu = document.querySelector('.main-menu>.menu')
mainMenu.innerHTML += '<a href="https://veymay.uz" class="lab-btn">Muxriddin Rustamov</a>'
$(holder).droppable({
  hoverClass: "ui-state-hover",
  drop: function (event, ui) {
    var dropped = $(this).data("planet");
    if ($(ui.draggable).data("planet") == dropped) {
      setTimeout(function () {
        $(ui.draggable).append(
          '<div class="tick"><i class="icon ion-checkmark-round"></i></div>'
        );
      }, 500);
      $(ui.draggable).find("img").css("opacity", ".12");
      $(this).find(".planet_answer img").addClass("scale");
      $(this).find(".planet_answer").parent().css("border", "none");
      $(ui.draggable).next().addClass("answered");
      correct++;
    }
  }
});

