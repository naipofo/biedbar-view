let data = new URLSearchParams(window.location.search).get("ean");
new EAN13(document.getElementById("ean"), data, {padding:10});