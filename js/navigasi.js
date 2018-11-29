function create3DLayout(x, y, z) {
    let layout = new Array(x);
    for (let i = 0; i < x; i++) {
        layout[i] = new Array(y);
        for (let j = 0; j < y; j++) {
            layout[i][j] = new Array(z);
            for (let k = 0; k < z; k++) {
                layout[i][j][k] = new PF.Node(i, j, k);
            }
        }
    }
    return layout;
}

function createAllWalkable(layout) {
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            for (let k = 0; k < layout[i][j].length; k++) {

                let mInit = (i + -1 >= 0) ? -1 : 0;
                let mEnd = (i + 1 < layout.length) ? 1 : 0;

                for (let m = mInit; m <= mEnd; m++) {

                    let nInit = (j + -1 >= 0) ? -1 : 0;
                    let nEnd = (j + 1 < layout[i].length) ? 1 : 0;

                    for (let n = nInit; n <= nEnd; n++) {

                        let oInit = (k + -1 >= 0) ? -1 : 0;
                        let oEnd = (k + 1 < layout[i][j].length) ? 1 : 0;

                        for (let o = oInit; o <= oEnd; o++) {

                            let xt = m + i;
                            let yt = n + j;
                            let zt = o + k;

                            if (layout[xt][yt][zt] != layout[i][j][k]) {
                                layout[i][j][k].neighbors.push(layout[xt][yt][zt]);
                            }
                        }
                    }
                }
            }
        }
    }
}

function createWalkablePath(layout, nodeStart, nodeEnd) {
    // Create building
    let walkablelayout = create3DLayout(layout.length, layout[0].length, layout[0][0].length);
    
    // Create path to every corner of building
    createAllWalkable(walkablelayout);

    let startPath = walkablelayout[nodeStart.x][nodeStart.y][nodeStart.z];
    let endPath = walkablelayout[nodeEnd.x][nodeEnd.y][nodeEnd.z];

    let explorer = new PF.AStarFinder();
    let exploredPath = explorer.findPath(startPath, endPath, walkablelayout);

    for (let i = 0; i < exploredPath.length - 1; i++) {
        // console.log("node: " + exploredPath[i]);
        // console.log("neighbour: " + exploredPath[i + 1]);
        layout[exploredPath[i][0]][exploredPath[i][1]][exploredPath[i][2]].neighbors.push(layout[exploredPath[i + 1][0]][exploredPath[i + 1][1]][exploredPath[i + 1][2]]);
        layout[exploredPath[i + 1][0]][exploredPath[i + 1][1]][exploredPath[i + 1][2]].neighbors.push(layout[exploredPath[i][0]][exploredPath[i][1]][exploredPath[i][2]]);
    }

}

function findLocation(start,end,layout) {
    return new PF.AStarFinder().findPath(start, end, layout);
}

function getKode(object, value) {
    let kode = Object.keys(object).find(key => object[key].x === value[0] && object[key].y === value[1] && object[key].z === value[2] );
    // return (kode === undefined) ? value : kode;
    return kode;
  }