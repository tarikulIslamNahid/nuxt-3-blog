import "sweetalert2/src/sweetalert2";
import Swal from "sweetalert2";

window.Swal = require("sweetalert2");
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
window.Toast = Toast;
window.Vue = require('vue')
