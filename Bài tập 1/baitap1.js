var ketQua = document
  .getElementById("btnKetQua")
  .addEventListener("click", function () {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khu_vuc").value;
    var doiTuong = document.getElementById("doi_tuong").value;
    var diemMonThuNhat = document.getElementById("diem_1").value * 1;
    var diemMonThuHai = document.getElementById("diem_2").value * 1;
    var diemMonThuBa = document.getElementById("diem_3").value * 1;
    var diemUuTien = 0;
    var tong = diemMonThuNhat + diemMonThuHai + diemMonThuBa;

    if (khuVuc == "A" && doiTuong == 1) {
      diemUuTien = 4.5;
    } else if (khuVuc == "A" && doiTuong == 2) {
      diemUuTien = 3.5;
    } else if (khuVuc == "A" && doiTuong == 3) {
      diemUuTien = 3;
    } else if (khuVuc == "B" && doiTuong == 1) {
      diemUuTien = 3.5;
    } else if (khuVuc == "B" && doiTuong == 2) {
      diemUuTien = 2.5;
    } else if (khuVuc == "B" && doiTuong == 3) {
      diemUuTien = 2;
    } else if (khuVuc == "C" && doiTuong == 1) {
      diemUuTien = 3;
    } else if (khuVuc == "C" && doiTuong == 2) {
      diemUuTien = 2;
    } else {
      diemUuTien = 1.5;
    }
    tong += diemUuTien;
    // console.log(tong);

    if (diemMonThuNhat == 0 || diemMonThuHai == 0 || diemMonThuBa == 0) {
      mess = "Bạn đã rớt. Do một trong những điểm môn học bằng 0";
    } else if (tong >= diemChuan) {
      mess = "Bạn đã đậu" + "Tổng điểm : " + tong;
    } else {
      mess =
        "Bạn đã rớt" + " Tổng điểm của bạn  nhỏ hơn điểm chung: " + diemChuan;
    }
    document.querySelector(".bg-success").innerHTML = mess;
  });

