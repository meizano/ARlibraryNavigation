let asal = "";
let tujuan = "";

// GET parameter
url = new URL(window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location
    .search);
let searchParams = new URLSearchParams(url.search);
asal = url.searchParams.get('asal');
tujuan = url.searchParams.get('tujuan');
// console.log(tujuan);

// mengakses DOM scene
scene = document.querySelector("a-plane");
navigasiVRObject(asal, tujuan, gedungPerpustakaan());