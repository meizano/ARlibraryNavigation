function gedungPerpustakaan() {
    let gedung = create3DLayout(40,40,3);

    
    // # Lantai 1
    gedung['PMP'] = gedung[12][23][0]; // : Pintu Masuk Perpustakaan | MARKER 1
    gedung['RBC1'] = gedung[17][21][0]; // : Ruang Baca Satu (Ruang Layanan Sirkulasi) | MARKER 2
    gedung['RK1A'] = gedung[23][24][0]; // : Rak Koleksi A Ruang Baca 1 | MARKER 3
    gedung['RK1B'] = gedung[23][22][0]; // : Rak Koleksi B Ruang Baca 1 | MARKER 4
    gedung['RK1C'] = gedung[25][22][0]; // : Rak Koleksi C Ruang Baca 1 | MARKER 5
    gedung['RKKI'] = gedung[10][20][0]; // : Ruang Layanan Koleksi Karya Ilmiah | MARKER 6
    gedung['RPK'] = gedung[18][13][0]; // : Ruang Pengelolaan
    gedung['RPA'] = gedung[20][14][0]; // : Ruang Pengadaan
    gedung['RPO'] = gedung[22][13][0]; // : Ruang Pengolahan
    gedung['RPR'] = gedung[17][10][0]; // : Ruang Perawatan
    gedung['TG1BL'] = gedung[12][20][0]; // : Tangga 1 Barat Laut (Sebelah Depan Kiri) | MARKER 7
    gedung['TG1TL'] = gedung[16][13][0]; // : Tangga 1 Timur Laut (Sebelah Belakang Kiri) | MARKER 8
    gedung['TG1TG'] = gedung[21][16][0]; // : Tangga 1 Tenggara (Sebelah Belakang Kanan (menuju Mushola)) | MARKER 9
    gedung['TG1BD'] = gedung[15][22][0]; // : Tangga 1 Barat Daya (Sebelah Depan Kanan) | MARKER 10
    gedung['TD1BD'] = gedung[19][25][0]; // : Tangga Dalam 1 Barat Daya (Bagian Dalam Ruang Baca 1) | MARKER 11
    // # Lantai 2
    gedung['RLR'] = gedung[10][12][1]; // : Ruang Layanan Referensi
    gedung['RMJ'] = gedung[10][18][1]; // : Majalah dan Jurnal 
    gedung['RKC2'] = gedung[20][13][1]; // : Ruang Layanan Koleksi Cadangan lantai 2 | MARKER 12
    gedung['RC2A'] = gedung[19][10][1]; // : Rak Koleksi A Ruang Koleksi Cadangan 2 | MARKER 13
    gedung['RC2B'] = gedung[22][10][1]; // : Rak Koleksi B Ruang Koleksi Cadangan 2 | MARKER 14
    gedung['RC2C'] = gedung[23][13][1]; // : Rak Koleksi C Ruang Koleksi Cadangan 2 | MARKER 15
    gedung['RKP'] = gedung[16][24][1]; // : Ruang Kepala Perpustakaan
    gedung['RBC2'] = gedung[20][24][1]; // : Ruang Baca Dua | MARKER 16
    gedung['RK2A'] = gedung[23][24][1]; // : Rak Koleksi A Ruang Baca 2 | MARKER 17
    gedung['RK2B'] = gedung[23][22][1]; // : Rak Koleksi B Ruang Baca 2 | MARKER 18
    gedung['RK2C'] = gedung[25][22][1]; // : Rak Koleksi C Ruang Baca 2 | MARKER 19
    gedung['TG2BL'] = gedung[12][20][1]; // : Tangga 2 Barat Laut (Sebelah Depan Kiri) | MARKER 20
    gedung['TG2TL'] = gedung[16][13][1]; // : Tangga 2 Timur Laut (Sebelah Belakang Kiri) | MARKER 21
    gedung['TG2TG'] = gedung[21][16][1]; // : Tangga 2 Tenggara (Sebelah Belakang Kanan (menuju Mushola)) | MARKER 22
    gedung['TG2BD'] = gedung[15][22][1]; // : Tangga 2 Barat Daya (Sebelah Depan Kanan) | MARKER 23
    gedung['TD2BD'] = gedung[19][25][1]; // : Tangga Dalam 2 Barat Daya (Bagian Dalam Ruang Baca 1) | MARKER 24
    // #Lantai 3
    gedung['RTI'] = gedung[24][18][2]; // : Ruang Pengelola Teknologi Informasi Perpustakaan
    gedung['RTE'] = gedung[16][24][2]; // : Ruang Teater
    gedung['RSM'] = gedung[11][14][2]; // : Ruang Seminar
    gedung['RRP'] = gedung[14][20][2]; // : Ruang Rapat
    gedung['RMS'] = gedung[26][16][2]; // : Ruang Musola
    gedung['RBC3'] = gedung[22][24][2]; // : Ruang Baca Tiga | MARKER 25
    gedung['RK3A'] = gedung[23][24][2]; // : Rak Koleksi A Ruang Baca 3 | MARKER 26
    gedung['RK3B'] = gedung[23][22][2]; // : Rak Koleksi B Ruang Baca 3 | MARKER 27
    gedung['RK3C'] = gedung[25][22][2]; // : Rak Koleksi C Ruang Baca 3 | MARKER 28
    gedung['TG3BL'] = gedung[12][20][2]; // : Tangga 3 Barat Laut (Sebelah Depan Kiri) | MARKER 29
    gedung['TG3TL'] = gedung[16][13][2]; // : Tangga 3 Timur Laut (Sebelah Belakang Kiri) | MARKER 30
    gedung['TG3TG'] = gedung[21][16][2]; // : Tangga 3 Tenggara (Sebelah Belakang Kanan (menuju Mushola)) | MARKER 31
    gedung['TG3BD'] = gedung[15][22][2]; // : Tangga 3 Barat Daya (Sebelah Depan Kanan) | MARKER 32
    gedung['TD3BD'] = gedung[19][25][2]; // : Tangga Dalam 3 Barat Daya (Bagian Dalam Ruang Baca 1) | MARKER 33

    // Lantai 1
    createWalkablePath(gedung, gedung['PMP'], gedung['RKKI']);
    createWalkablePath(gedung, gedung['PMP'], gedung['TG1BL']);
    createWalkablePath(gedung, gedung['PMP'], gedung['TG1BD']);
    createWalkablePath(gedung, gedung['PMP'], gedung['RBC1']);

    createWalkablePath(gedung, gedung['RKKI'], gedung['TG1BL']);

    createWalkablePath(gedung, gedung['RBC1'], gedung['RK1A']);
    createWalkablePath(gedung, gedung['RBC1'], gedung['RK1B']);
    createWalkablePath(gedung, gedung['RBC1'], gedung['RK1C']);
    createWalkablePath(gedung, gedung['RBC1'], gedung['TG1BD']);
    createWalkablePath(gedung, gedung['RBC1'], gedung['TG1TG']);
    createWalkablePath(gedung, gedung['RBC1'], gedung['TD1BD']);

    createWalkablePath(gedung, gedung['TG1BL'], gedung['TG1TL']);
    createWalkablePath(gedung, gedung['TG1BL'], gedung['TG1TG']);
    createWalkablePath(gedung, gedung['TG1BL'], gedung['TG1BD']);
    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG1TL']);
    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG1TG']);
    createWalkablePath(gedung, gedung['TG1TL'], gedung['TG1TG']);

    // Tangga lt1 ke lt2
    createWalkablePath(gedung, gedung['TG1BL'], gedung['TG2BL']);
    createWalkablePath(gedung, gedung['TG1TL'], gedung['TG2TL']);
    createWalkablePath(gedung, gedung['TG1TG'], gedung['TG2TG']);
    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG2BD']);
    createWalkablePath(gedung, gedung['TD1BD'], gedung['TD2BD']);

    //Lantai 2
    createWalkablePath(gedung, gedung['TG2BL'], gedung['RMJ']);
    createWalkablePath(gedung, gedung['TG2BL'], gedung['TG2BD']);
    createWalkablePath(gedung, gedung['TG2BL'], gedung['TG2TL']);
    createWalkablePath(gedung, gedung['TG2BD'], gedung['RKP']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['TG2BD']);

    createWalkablePath(gedung, gedung['TG2TL'], gedung['RKC2']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['RKC2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC2A']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC2B']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC2C']);

    createWalkablePath(gedung, gedung['TD2BD'], gedung['RBC2']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['RK2A']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['RK2B']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['RK2C']);

    // Tangga lt2 ke lt3
    createWalkablePath(gedung, gedung['TG2BL'], gedung['TG3BL']);
    createWalkablePath(gedung, gedung['TG2TL'], gedung['TG3TL']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['TG3TG']);
    createWalkablePath(gedung, gedung['TG2BD'], gedung['TG3BD']);
    createWalkablePath(gedung, gedung['TD2BD'], gedung['TD3BD']);

    //Lantai 3
    createWalkablePath(gedung, gedung['TG3BL'], gedung['RSM']);
    createWalkablePath(gedung, gedung['TG3BL'], gedung['RRP']);
    createWalkablePath(gedung, gedung['TG3BD'], gedung['RRP']);
    createWalkablePath(gedung, gedung['TG3BD'], gedung['RTE']);
    createWalkablePath(gedung, gedung['TG3BD'], gedung['TG3TG']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['RTI']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['RMS']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['TG3TL']);
    createWalkablePath(gedung, gedung['TG3TL'], gedung['RSM']);

    createWalkablePath(gedung, gedung['TD3BD'], gedung['RBC3']);
    createWalkablePath(gedung, gedung['RBC3'], gedung['RK3A']);
    createWalkablePath(gedung, gedung['RBC3'], gedung['RK3B']);
    createWalkablePath(gedung, gedung['RBC3'], gedung['RK3C']);



    return gedung;

}