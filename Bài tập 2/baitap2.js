function tinhTienDien() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("so_kw").value * 1;
  var tienKw = 0;
  var tong = 0;
  var _50KwDau = 50 * 500;
  var _50KwKe = 50 * 650;
  var _100KwKe = 100 * 850;
  var _150KwKe = 150 * 1100;

  if (soKw <= 50) {
    tienKw = 500;
    tong = soKw * tienKw;
  } else if (soKw > 50 && soKw <= 100) {
    tienKw = 650;
    tong = _50KwDau + (soKw - 50) * tienKw;
  } else if (soKw > 100 && soKw <= 200) {
    tienKw = 850;
    tong = _50KwDau + _50KwKe + (soKw - 100) * tienKw;
  } else if (soKw > 200 && soKw <= 350) {
    tienKw = 1100;
    tong = _50KwDau + _50KwKe + _100KwKe + (soKw - 200) * tienKw;
  } else {
    tienKw = 1300;
    tong = _50KwDau + _50KwKe + _100KwKe + _150KwKe + (soKw - 350) * tienKw;
  }
  console.log(tong);
  document.querySelector(
    ".ket_qua"
  ).innerHTML = `Họ tên : ${hoTen} , Tiền điện của bạn là : ${tong.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}
