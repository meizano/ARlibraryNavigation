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
        tulisan.setAttribute('position', "0 0.6 0");
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
    // console.log("Marker attributes: preset = " + mark.target.getAttribute("preset") + ", type = " + mark.target.getAttribute("type") + ", value = " + mark.target.getAttribute("value") + ", url = " + mark.target.getAttribute("url"));
    // console.log(mark.target.getAttribute("data-marker"));
    return mark.target.getAttribute("data-marker");
}

//Convert radians to degrees
Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

// Fungsi menyematkan  marker
function navigasiMarker(asl, tujn, nd) {
    //Menunjukkan jalur yang ditempuh
    // console.log(asl);
    // console.log(tujn);
    // console.log(nd);

    // Menghitung waktu
    // let start = new Date().getTime();

    let markerPath = findLocation(nd[asl], nd[tujn], nd);

    // Menghitung waktu
    // console.log("waktu A*");
    // console.log(new Date().getTime() - start);

    for (let i = 0; i < markerPath.length - 1; i++) {
        markerYes = getKode(nd, markerPath[i]);
        if (markerYes !== undefined) {
            let x = markerPath[i + 1][0] - markerPath[i][0];
            let y = markerPath[i + 1][1] - markerPath[i][1];
            let z = markerPath[i + 1][2] - markerPath[i][2];
            let rotasix = Math.degrees(Math.atan(z / y));
            let rotasiy = Math.degrees(Math.atan(x / z));
            let rotasiz = Math.degrees(Math.atan(y / x));
            rotasix = isNaN(rotasix) ? 0 : rotasix;
            rotasiy = isNaN(rotasiy) ? 0 : rotasiy;
            rotasiz = isNaN(rotasiz) ? 0 : rotasiz;
            rotasix += 180;
            rotasiy += 180;
            rotasiz += 180;

            let markerAdd = scene.querySelector('a-marker[data-marker="' + markerYes + '"]');
            let bola = document.createElement('a-sphere');
            bola.setAttribute('position', '0 0.3 0');
            bola.setAttribute('radius', '0.2');
            bola.setAttribute('rotation', rotasix + ' ' + rotasiy + ' ' + rotasiz);
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
    let markerFinal = scene.querySelector('a-marker[data-marker="' + getKode(nd, markerPath[markerPath.length - 1]) + '"]');
    let bola = document.createElement('a-sphere');
    bola.setAttribute('position', '0 0.5 0');
    bola.setAttribute('radius', '0.5');
    bola.setAttribute('rotation', '0 0 0');
    bola.setAttribute('color', 'red');
    markerFinal.appendChild(bola);

    //Menghitung waktu
    // console.log("waktu generate marker");
    // console.log(new Date().getTime() - start);
}