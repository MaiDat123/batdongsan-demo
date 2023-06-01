function rxb(){
  var ten=document.getElementById("search");
  var filter = /^([a-zA-Z]+) ([a-zA-Z\s]+)$/;

  if(!filter.test(ten.value)){
      document.getElementById("XuatTB").innerHTML="Không tìm thấy kết quả";
  }
  setTimeout(function () {
    document.getElementById("XuatTB").innerHTML = "";
  }, 2000);
}