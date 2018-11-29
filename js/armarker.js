// Fungsi membuat marker 
function createMarker(markerl, scenel) {
    for (let i = 0; i < ruang.length; i++) {
        let marker = document.createElement("a-marker");
        marker.setAttribute("type", "barcode");
        marker.setAttribute("value", markerl[i].marker);
        marker.setAttribute("data-marker", markerl[i].kode);
        
        let bidang = document.createElement('a-plane');
        bidang.setAttribute('rotation', '-90 0 0');
        bidang.setAttribute('color', 'orange');
        
        let tulisan = document.createElement('a-text');
        let informasi = "";
        informasi += markerl[i].kode;
        tulisan.setAttribute('value', informasi);
        tulisan.setAttribute('align', 'center');
        tulisan.setAttribute('color', 'black');
        
        bidang.appendChild(tulisan);
        marker.appendChild(bidang);
        marker.addEventListener("markerFound", function(e) {
            asal = dataMarker(e);
            navigasiMarker(asal, tujuan);
        });
        scenel.appendChild(marker);
    }
}

// Fungsi mengambil nilai data-marker
function dataMarker(mark) {
    console.log("Marker attributes: preset = " + mark.getAttribute("preset") + ", type = " + mark.getAttribute("type") + ", value = " + mark.getAttribute("value") + ", url = " + mark.getAttribute("url"));
    console.log(mark.getAttribute("data-marker"));
    return mark.getAttribute("data-marker");
}

// Fungsi mengambil nilai data-marker
function navigasiMarker(asl, tujn, nd) {
    let markerPath = findLocation(asl,tujn,nd);
    for (let i = 0; i < markerPath.length; i++) {
        markerYes = getKode(nodes, path[i]);
        if(markerYes !== undefined) {
            console.log(markerYes);

        }
    }
}