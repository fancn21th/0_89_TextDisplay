const showTa = function() {
  const targetId = this.getAttribute("target");
  const target = document.getElementById(targetId);
  target.innerHTML = this.value;
};

const ready = function() {
  const ta1 = document.getElementById("ta1");
  ta1.addEventListener("change", showTa);
};

document.addEventListener("DOMContentLoaded", ready);
