document.getElementById("red-light").addEventListener("click", function() {
    swal("Traffic Light", "Must Stop!", "error");
});

document.getElementById("yellow-light").addEventListener("click", function() {
    swal("Traffic Light", "Ready To Move..", "warning");
});

document.getElementById("green-light").addEventListener("click", function() {
    swal("Traffic Light", "Move Now!", "success");
});

