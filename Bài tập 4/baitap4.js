var tinhTienCap = document
  .getElementById("btnTinhTienCap")
  .addEventListener("click", function () {
    var khachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var nhaDan = document.getElementById("nhaDan").value;
    var doanhNghiep = document.getElementById("doanhNghiep").value;
    var xuLyHoaDon = 0;
    var dichVuCoBan = 0;
    var thueKenhCaoCap = 0;
    var tinhTien = 0;
    if (khachHang == nhaDan) {
      xuLyHoaDon = 4.5;
      dichVuCoBan = 20.5;
      thueKenhCaoCap = 7.5 * kenhCaoCap;
      tinhTien = xuLyHoaDon + dichVuCoBan + thueKenhCaoCap;
    } else {
      xuLyHoaDon = 15;
      kenhCaoCap = 50;
      if (soKetNoi > 10) {
        dichVuCoBan = 75 + (soKetNoi - 10) * 5;
      } else {
        dichVuCoBan = 75;
      }
      tinhTien = xuLyHoaDon + kenhCaoCap + dichVuCoBan;
    }
    console.log(tinhTien);
    document.querySelector(
      ".bg-secondary"
    ).innerHTML = `Mã khách hàng : ${maKhachHang} , Tiền cáp : ${tinhTien.toLocaleString(
      "it-IT",
      {
        style: "currency",
        currency: "VND",
      }
    )}`;
  });
