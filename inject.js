function getSome() {
  var x = document.getElementsByClassName("bc-itemId breadcrumbs")[0].textContent.replace("HSCC_Geom_", "").split('.');
  var url = "https://static.bigideasmath.com/protected/content/dc_cc_hs/apt/images/geo" + "/" + x[0] + "/" + x[1] + "/" + "s_geo_ex_" + x[0] + "_" + x[1] + "_0" + x[2] + ".png";
  document.getElementById("assign").src = url;
  $("#steps").modal("toggle");
}
