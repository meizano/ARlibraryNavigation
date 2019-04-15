let asal = "";
let tujuan = "";

// GET parameter
url = new URL(window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location
    .search);
let searchParams = new URLSearchParams(url.search);
tujuan = url.searchParams.get('tujuan');
// console.log(tujuan);

// mengakses DOM scene
scene = document.querySelector("a-scene");

// Mengambil data JSON dari server
var url = './dispatcher/armarker.json'; // URL dari data JSON
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        createMarker(data, scene); // membuat obyek
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });