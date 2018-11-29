// Fungsi membuat marker 
function createMarker(markerl, scenel) {
    for (let i = 0; i < markerl.length; i++) {
        let marker = document.createElement("a-marker");
        marker.setAttribute("type", "barcode");
        marker.setAttribute("value", markerl[i].marker);
        marker.setAttribute("data-marker", markerl[i].kode);

        let bidang = document.createElement('a-plane');
        bidang.setAttribute('rotation', '-90 0 0');
        bidang.setAttribute('color', 'red');

        let tulisan = document.createElement('a-text');
        let informasi = "";
        informasi += markerl[i].kode;
        tulisan.setAttribute('value', informasi);
        tulisan.setAttribute('align', 'center');
        tulisan.setAttribute('color', 'white');

        bidang.appendChild(tulisan);
        marker.appendChild(bidang);
        marker.addEventListener("markerFound", function (e) {
            asal = dataMarker(e);
            navigasiMarker(asal, tujuan, gedungPerpustakaan());
        });
        scenel.appendChild(marker);
    }
}

// Fungsi mengambil nilai data-marker
function dataMarker(mark) {
    console.log("Marker attributes: preset = " + mark.srcElement.getAttribute("preset") + ", type = " + mark.srcElement.getAttribute("type") + ", value = " + mark.srcElement.getAttribute("value") + ", url = " + mark.srcElement.getAttribute("url"));
    console.log(mark.srcElement.getAttribute("data-marker"));
    return mark.srcElement.getAttribute("data-marker");
}

// Fungsi menyematkan  marker
function navigasiMarker(asl, tujn, nd) {
    console.log(asl);
    console.log(tujn);
    console.log(nd);
    let markerPath = findLocation(nd[asl], nd[tujn], nd);
    for (let i = 0; i < markerPath.length-1; i++) {
        markerYes = getKode(nd, markerPath[i]);
        if (markerYes !== undefined) {
            let rx = (markerPath[i+1][0] - markerPath[i][0] > 0 ) ? 90 : (markerPath[i+1][0] - markerPath[i][0] < 0 ) ? -90 : 0; 
            let ry = (markerPath[i+1][1] - markerPath[i][1] > 0 ) ? 90 : (markerPath[i+1][1] - markerPath[i][1] < 0 ) ? -90 : 0;
            let rz = (markerPath[i+1][2] - markerPath[i][2] > 0 ) ? 90 : (markerPath[i+1][2] - markerPath[i][2] < 0 ) ? -90 : 0;

            let markerAdd = scene.querySelector('a-marker[data-marker="' + markerYes + '"]');
            let bola = document.createElement('a-sphere');
            bola.setAttribute('position', '0 0.3 0');
            bola.setAttribute('radius', '0.2');
            bola.setAttribute('rotation', '90 0 90');
            bola.setAttribute('color', 'green');
            markerAdd.appendChild(bola);

            let silinder = document.createElement('a-cylinder');
            silinder.setAttribute('position', '0 0.4 0');
            silinder.setAttribute('height', '0.8');
            silinder.setAttribute('radius', '0.2');
            silinder.setAttribute('color', 'green');
            bola.appendChild(silinder);

            let cone = document.createElement('a-cone');
            cone.setAttribute('position', '0 1 0');
            cone.setAttribute('radius-bottom', '0.3');
            cone.setAttribute('radius-top', '0');
            cone.setAttribute('height', '0.6');
            cone.setAttribute('color', 'green');
            bola.appendChild(cone);
        }
    }
}