var tinhTienThue = document
  .getElementById("btnTinhTienThue")
  .addEventListener("click", function () {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = document.getElementById("thuNhap").value * 1;
    var phuThuoc = document.getElementById("phuThuoc").value * 1;
    var thuNhapChiuThue = 0;
    var thueSuat = 0;
    if (thuNhap <= 60) {
      thueSuat = 0.05;
    } else if (thuNhap > 60e6 && thuNhap <= 120e6) {
      thueSuat = 0.1;
    } else if (thuNhap > 120e6 && thuNhap <= 210e6) {
      thueSuat = 0.15;
    } else if (thuNhap > 210e6 && thuNhap <= 384e6) {
      thueSuat = 0.2;
    } else if (thuNhap > 384e6 && thuNhap <= 624e6) {
      thueSuat = 0.25;
    } else if (thuNhap > 624e6 && thuNhap <= 960e6) {
      thueSuat = 0.3;
    } else {
      thueSuat = 0.35;
    }
    thuNhapChiuThue = (thuNhap - 4e6 - phuThuoc * 1.6e6) * thueSuat;
    console.log(thuNhapChiuThue);
    document.querySelector(
      ".bg-success"
    ).innerHTML = `Họ tên : ${hoTen} , Tiền thuế thu nhập cá nhân ${thuNhapChiuThue.toLocaleString(
      "it-IT",
      {
        style: "currency",
        currency: "VND",
      }
    )}`;
  });
