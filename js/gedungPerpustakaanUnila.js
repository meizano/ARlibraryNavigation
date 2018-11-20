var gedungPerpustakaanUnila = create3DLayout(40, 40, 3);

// # Lantai 1
var PMP = gedungPerpustakaanUnila[12][23][0]; // : Pintu Masuk Perpustakaan | MARKER 1
var RBC1 = gedungPerpustakaanUnila[17][21][0]; // : Ruang Baca Satu (Ruang Layanan Sirkulasi) | MARKER 2
var RK1A = gedungPerpustakaanUnila[23][24][0]; // : Rak Koleksi A Ruang Baca 1 | MARKER 3
var RK1B = gedungPerpustakaanUnila[23][22][0]; // : Rak Koleksi B Ruang Baca 1 | MARKER 4
var RK1C = gedungPerpustakaanUnila[25][22][0]; // : Rak Koleksi C Ruang Baca 1 | MARKER 5
var RKKI = gedungPerpustakaanUnila[10][20][0]; // : Ruang Layanan Koleksi Karya Ilmiah | MARKER 6
var RPK = gedungPerpustakaanUnila[18][13][0]; // : Ruang Pengelolaan
var RPA = gedungPerpustakaanUnila[20][14][0]; // : Ruang Pengadaan
var RPO = gedungPerpustakaanUnila[22][13][0]; // : Ruang Pengolahan
var RPR = gedungPerpustakaanUnila[17][10][0]; // : Ruang Perawatan
var TG1BL = gedungPerpustakaanUnila[12][20][0]; // : Tangga 1 Barat Laut (Sebelah Depan Kiri) | MARKER 7
var TG1TL = gedungPerpustakaanUnila[16][13][0]; // : Tangga 1 Timur Laut (Sebelah Belakang Kiri) | MARKER 8
var TG1TG = gedungPerpustakaanUnila[21][16][0]; // : Tangga 1 Tenggara (Sebelah Belakang Kanan (menuju Mushola)) | MARKER 9
var TG1BD = gedungPerpustakaanUnila[15][22][0]; // : Tangga 1 Barat Daya (Sebelah Depan Kanan) | MARKER 10
var TD1BD = gedungPerpustakaanUnila[19][25][0]; // : Tangga Dalam 1 Barat Daya (Bagian Dalam Ruang Baca 1) | MARKER 11
// # Lantai 2
var RLR = gedungPerpustakaanUnila[10][12][1]; // : Ruang Layanan Referensi
var RMJ = gedungPerpustakaanUnila[10][18][1]; // : Majalah dan Jurnal 
var RKC2 = gedungPerpustakaanUnila[20][13][1]; // : Ruang Layanan Koleksi Cadangan lantai 2 | MARKER 12
var RC2A = gedungPerpustakaanUnila[19][10][1]; // : Rak Koleksi A Ruang Koleksi Cadangan 2 | MARKER 13
var RC2B = gedungPerpustakaanUnila[22][10][1]; // : Rak Koleksi B Ruang Koleksi Cadangan 2 | MARKER 14
var RC2C = gedungPerpustakaanUnila[23][13][1]; // : Rak Koleksi C Ruang Koleksi Cadangan 2 | MARKER 15
var RKP = gedungPerpustakaanUnila[16][24][1]; // : Ruang Kepala Perpustakaan
var RBC2 = gedungPerpustakaanUnila[20][24][1]; // : Ruang Baca Dua | MARKER 16
var RK2A = gedungPerpustakaanUnila[23][24][1]; // : Rak Koleksi A Ruang Baca 2 | MARKER 17
var RK2B = gedungPerpustakaanUnila[23][22][1]; // : Rak Koleksi B Ruang Baca 2 | MARKER 18
var RK2C = gedungPerpustakaanUnila[25][22][1]; // : Rak Koleksi C Ruang Baca 2 | MARKER 19
var TG2BL = gedungPerpustakaanUnila[12][20][1]; // : Tangga 2 Barat Laut (Sebelah Depan Kiri) | MARKER 20
var TG2TL = gedungPerpustakaanUnila[16][13][1]; // : Tangga 2 Timur Laut (Sebelah Belakang Kiri) | MARKER 21
var TG2TG = gedungPerpustakaanUnila[21][16][1]; // : Tangga 2 Tenggara (Sebelah Belakang Kanan (menuju Mushola)) | MARKER 22
var TG2BD = gedungPerpustakaanUnila[15][22][1]; // : Tangga 2 Barat Daya (Sebelah Depan Kanan) | MARKER 23
var TD2BD = gedungPerpustakaanUnila[19][25][1]; // : Tangga Dalam 2 Barat Daya (Bagian Dalam Ruang Baca 1) | MARKER 24
// #Lantai 3
var RTI = gedungPerpustakaanUnila[24][18][2]; // : Ruang Pengelola Teknologi Informasi Perpustakaan
var RTE = gedungPerpustakaanUnila[16][24][2]; // : Ruang Teater
var RSM = gedungPerpustakaanUnila[11][14][2]; // : Ruang Seminar
var RRP = gedungPerpustakaanUnila[14][20][2]; // : Ruang Rapat
var RMS = gedungPerpustakaanUnila[26][16][2]; // : Ruang Musola
var RBC3 = gedungPerpustakaanUnila[22][24][2]; // : Ruang Baca Tiga | MARKER 25
var RK3A = gedungPerpustakaanUnila[23][24][2]; // : Rak Koleksi A Ruang Baca 3 | MARKER 26
var RK3B = gedungPerpustakaanUnila[23][22][2]; // : Rak Koleksi B Ruang Baca 3 | MARKER 27
var RK3C = gedungPerpustakaanUnila[25][22][2]; // : Rak Koleksi C Ruang Baca 3 | MARKER 28
var TG3BL = gedungPerpustakaanUnila[12][20][2]; // : Tangga 3 Barat Laut (Sebelah Depan Kiri) | MARKER 29
var TG3TL = gedungPerpustakaanUnila[16][13][2]; // : Tangga 3 Timur Laut (Sebelah Belakang Kiri) | MARKER 30
var TG3TG = gedungPerpustakaanUnila[21][16][2]; // : Tangga 3 Tenggara (Sebelah Belakang Kanan (menuju Mushola)) | MARKER 31
var TG3BD = gedungPerpustakaanUnila[15][22][2]; // : Tangga 3 Barat Daya (Sebelah Depan Kanan) | MARKER 32
var TD3BD = gedungPerpustakaanUnila[19][25][2]; // : Tangga Dalam 3 Barat Daya (Bagian Dalam Ruang Baca 1) | MARKER 33

// Lantai 1
createWalkablePath(gedungPerpustakaanUnila, PMP, RKKI);
createWalkablePath(gedungPerpustakaanUnila, PMP, TG1BL);
createWalkablePath(gedungPerpustakaanUnila, PMP, TG1BD);
createWalkablePath(gedungPerpustakaanUnila, PMP, RBC1);

createWalkablePath(gedungPerpustakaanUnila, RKKI, TG1BL);

createWalkablePath(gedungPerpustakaanUnila, RBC1, RK1A);
createWalkablePath(gedungPerpustakaanUnila, RBC1, RK1B);
createWalkablePath(gedungPerpustakaanUnila, RBC1, RK1C);
createWalkablePath(gedungPerpustakaanUnila, RBC1, TG1BD);
createWalkablePath(gedungPerpustakaanUnila, RBC1, TG1TG);
createWalkablePath(gedungPerpustakaanUnila, RBC1, TD1BD);

createWalkablePath(gedungPerpustakaanUnila, TG1BL, TG1TL);
createWalkablePath(gedungPerpustakaanUnila, TG1BL, TG1TG);
createWalkablePath(gedungPerpustakaanUnila, TG1BL, TG1BD);
createWalkablePath(gedungPerpustakaanUnila, TG1BD, TG1TL);
createWalkablePath(gedungPerpustakaanUnila, TG1BD, TG1TG);
createWalkablePath(gedungPerpustakaanUnila, TG1TL, TG1TG);

// Tangga lt1 ke lt2
createWalkablePath(gedungPerpustakaanUnila, TG1BL, TG2BL);
createWalkablePath(gedungPerpustakaanUnila, TG1TL, TG2TL);
createWalkablePath(gedungPerpustakaanUnila, TG1TG, TG2TG);
createWalkablePath(gedungPerpustakaanUnila, TG1BD, TG2BD);
createWalkablePath(gedungPerpustakaanUnila, TD1BD, TD2BD);

//Lantai 2
createWalkablePath(gedungPerpustakaanUnila, TG2BL, RMJ);
createWalkablePath(gedungPerpustakaanUnila, TG2BL, TG2BD);
createWalkablePath(gedungPerpustakaanUnila, TG2BL, TG2TL);
createWalkablePath(gedungPerpustakaanUnila, TG2BD, RKP);
createWalkablePath(gedungPerpustakaanUnila, TG2TG, TG2BD);

createWalkablePath(gedungPerpustakaanUnila, TG2TL, RKC2);
createWalkablePath(gedungPerpustakaanUnila, TG2TG, RKC2);
createWalkablePath(gedungPerpustakaanUnila, RKC2, RC2A);
createWalkablePath(gedungPerpustakaanUnila, RKC2, RC2B);
createWalkablePath(gedungPerpustakaanUnila, RKC2, RC2C);

createWalkablePath(gedungPerpustakaanUnila, TD2BD, RBC2);
createWalkablePath(gedungPerpustakaanUnila, RBC2, RK2A);
createWalkablePath(gedungPerpustakaanUnila, RBC2, RK2B);
createWalkablePath(gedungPerpustakaanUnila, RBC2, RK2C);

// Tangga lt2 ke lt3
createWalkablePath(gedungPerpustakaanUnila, TG2BL, TG3BL);
createWalkablePath(gedungPerpustakaanUnila, TG2TL, TG3TL);
createWalkablePath(gedungPerpustakaanUnila, TG2TG, TG3TG);
createWalkablePath(gedungPerpustakaanUnila, TG2BD, TG3BD);
createWalkablePath(gedungPerpustakaanUnila, TD2BD, TD3BD);

//Lantai 3
createWalkablePath(gedungPerpustakaanUnila, TG3BL, RSM);
createWalkablePath(gedungPerpustakaanUnila, TG3BL, RRP);
createWalkablePath(gedungPerpustakaanUnila, TG3BD, RRP);
createWalkablePath(gedungPerpustakaanUnila, TG3BD, RTE);
createWalkablePath(gedungPerpustakaanUnila, TG3BD, TG3TG);
createWalkablePath(gedungPerpustakaanUnila, TG3TG, RTI);
createWalkablePath(gedungPerpustakaanUnila, TG3TG, RMS);
createWalkablePath(gedungPerpustakaanUnila, TG3TG, TG3TL);
createWalkablePath(gedungPerpustakaanUnila, TG3TL, RSM);

createWalkablePath(gedungPerpustakaanUnila, TD3BD, RBC3);
createWalkablePath(gedungPerpustakaanUnila, RBC3, RK3A);
createWalkablePath(gedungPerpustakaanUnila, RBC3, RK3B);
createWalkablePath(gedungPerpustakaanUnila, RBC3, RK3C);