$(document).ready(function () {
  const url = "https://jsonplaceholder.typicode.com/users?id=5";
  $("#cuenta").click(function () {
    $.get(url, function (usuario, status) {
      if (status === "success") {
        let get = usuario;
        for (oneGet of get) {
          alert(oneGet.address.geo.lat + "  x  " + oneGet.address.geo.lng);
        }
      }
    });
  });
});
