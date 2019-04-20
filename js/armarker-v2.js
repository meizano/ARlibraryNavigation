// Fungsi membuat marker 
function createMarker(markerl, scenel) {
    for (let i = 0; i < markerl.length; i++) {
        let marker =
            `<a-marker type="barcode" value="${markerl[i].marker}" data-marker="${markerl[i].kode}">
                    <a-plane rotation="-90 0 0" color="red">
                        <a-text 
                            value="${markerl[i].kode}" 
                            color="white" 
                            align="center"
                            position="0 0.6 0">
                        </a-text>
                    </a-plane>
                </a-marker>
                `;
        scenel.insertAdjacentHTML("beforeend", marker);
        
        let domDataMarker = document.querySelector(`[data-marker="${markerl[i].kode}"]`);
        domDataMarker.addEventListener("markerFound", function (e) {
            // console.log("Marker found");
            // asal dan navigasiMarker() perlu arnav.js
            asal = dataMarker(e);
            navigasiMarker(asal, tujuan, gedungPerpustakaan());
        });
    }
}

// Fungsi mengambil nilai data-marker
function dataMarker(mark) {
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
        // getKode() perlu navigasi.js
        markerPadaJalur = getKode(nd, markerPath[i]);
        // console.log("jalur: " + markerPadaJalur);
        if (markerPadaJalur !== undefined) {
            
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

            let markerAdd = scene.querySelector('a-marker[data-marker="' + markerPadaJalur + '"]');
            let panah = `
            <a-sphere position="0 0.3 0" radius="0.2" rotation="${rotasix} ${rotasiy} ${rotasiz}" color="green">
                <a-cylinder position="0 0.4 0" height="0.8" radius="0.2" color="green"></a-cylinder>
                <a-cone position="0 1 0" radius-bottom="0.3" radius-top="0" height="0.6" color="green"></a-cone>
            </a-sphere>`;
            markerAdd.insertAdjacentHTML("beforeend", panah);
        }
    }
    let markerFinal = scene.querySelector('a-marker[data-marker="' + getKode(nd, markerPath[markerPath.length - 1]) + '"]');
    let penandaTujuan = `<a-sphere position="0 0.5 0" radius="0.5" rotation="0 0 0" color="yellow"></a-sphere>`;
    markerFinal.insertAdjacentHTML("beforeend", penandaTujuan);
    

    //Menghitung waktu
    // console.log("waktu generate marker");
    // console.log(new Date().getTime() - start);
}