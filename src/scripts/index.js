const showTa = function() {
  const targetId = this.getAttribute("target");
  const target = document.getElementById(targetId);
  target.innerHTML = this.value;
};

$(document).ready(function() {
  const ta1 = document.getElementById("ta1");
  ta1.addEventListener("change", showTa);
  $("#rte1").on("summernote.change", function(we, contents, $editable) {
    const pattern = "&nbsp;";
    if (contents.includes(pattern)) {
      we.preventDefault();
      setTimeout(function() {
        const reg = new RegExp("&nbsp;", "g");
        const newText = contents.replace(reg, " ");
        $("#rte1").summernote("reset");
        $("#rte1").summernote("pasteHTML", newText);
      }, 100);
    }
    const targetId = this.getAttribute("target");
    const target = document.getElementById(targetId);
    target.innerHTML = contents;
  });

  $("#rte1").summernote({
    // https://summernote.org/deep-dive/#callbacks
    callbacks: {
      onInit: function() {
        console.log("Summernote is launched");
      }
    }
  });
});
