//Convert radians to degrees
Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

// Fungsi menyematkan  marker
function navigasiVRObject(asl, tujn, nd) {
    //Menunjukkan jalur yang ditempuh
    // console.log(asl);
    // console.log(tujn);
    // console.log(nd);

    // Menghitung waktu
    // let start = new Date().getTime();

    // if (asl == tujn) {
    //     finalMarker(scene, tujn);
    // } else {
        let markerPath = findLocation(nd[asl], nd[tujn], nd);

        // Menghitung waktu
        // console.log("waktu A*");
        // console.log(new Date().getTime() - start);

        for (let i = 0; i < markerPath.length - 1; i++) {
            markerPadaJalur = getKode(nd, markerPath[i]);
            panahMarker(scene, markerPadaJalur, markerPath[i], markerPath[i+1]);
        }
        finalMarker(scene, getKode(nd, markerPath[markerPath.length-1]));
    // }

    //Menghitung waktu
    // console.log("waktu generate marker");
    // console.log(new Date().getTime() - start);
}

// fungsi membuat finalMarker
function finalMarker(scn, dtmarker) {
    let penandaTujuan = `
            <a-plane rotation="0 0 0" color="red" position="${jalurmarker[0]} ${jalurmarker[1]} ${jalurmarker[2]}">
                <a-text 
                    value="${dtmarker}" 
                    color="white" 
                    align="center"
                    position="0 0.6 0">
                </a-text>
                <a-sphere position="0 0.5 0" radius="0.5" rotation="0 0 0" color="yellow"></a-sphere>
            </a-plane>`;
    scn.insertAdjacentHTML("beforeend", penandaTujuan);
};

// fungsi membuat panahMarker
function panahMarker(scn, dtmarker, jalurmarker,jalurmarkerberikutnya) {
    //position a: kiri-kanan b: atas-bawah c: maju-mundur
    let a = jalurmarkerberikutnya[0] - jalurmarker[0];
    let c = jalurmarkerberikutnya[1] - jalurmarker[1]; 
    let b = jalurmarkerberikutnya[2] - jalurmarker[2];
    //rotation x: b dan c y: a dan c z: a dan b
    let rotasix = Math.degrees(Math.atan(c / b));
    let rotasiy = Math.degrees(Math.atan(a / b));
    let rotasiz = Math.degrees(Math.atan(c / a));
    rotasix = isNaN(rotasix) ? 0 : rotasix;
    rotasiy = isNaN(rotasiy) ? 0 : rotasiy;
    rotasiz = isNaN(rotasiz) ? 0 : rotasiz;
    rotasix += -90;
    rotasiy += -90;
    rotasiz += -90;

    
    let panah = `
            <a-plane rotation="0 0 0" color="darkorange" position="${jalurmarker[0]} ${jalurmarker[1]} ${jalurmarker[2]}">
                <a-text 
                    value="${dtmarker}" 
                    color="black" 
                    align="center"
                    position="0 -0.35 0.1">
                </a-text>
                <a-sphere position="0 0 0.2" radius="0.2" rotation="0 ${rotasiy} ${rotasiz}" color="green">
                    <a-cylinder position="0 0.1 0" height="0.2" radius="0.2" color="green"></a-cylinder>
                    <a-cone position="0 0.4 0" radius-bottom="0.3" radius-top="0" height="0.6" color="darkblue"></a-cone>
                </a-sphere>
            </a-plane>`;

    scn.insertAdjacentHTML("beforeend", panah);
}

// Support for remove() element in older browser https://stackoverflow.com/questions/8830839/javascript-dom-remove-element
(function () {
    var typesToPatch = ['DocumentType', 'Element', 'CharacterData'],
        remove = function () {
            // The check here seems pointless, since we're not adding this
            // method to the prototypes of any any elements that CAN be the
            // root of the DOM. However, it's required by spec (see point 1 of
            // https://dom.spec.whatwg.org/#dom-childnode-remove) and would
            // theoretically make a difference if somebody .apply()ed this
            // method to the DOM's root node, so let's roll with it.
            if (this.parentNode != null) {
                this.parentNode.removeChild(this);
            }
        };

    for (var i=0; i<typesToPatch.length; i++) {
        var type = typesToPatch[i];
        if (window[type] && !window[type].prototype.remove) {
            window[type].prototype.remove = remove;
        }
    }
})();