// v2
function gedungPerpustakaan() {
    let gedung = create3DLayout(100, 100, 3);

    // # Lantai 1
    gedung['PMP'] = gedung[40][63][0]; // : Pintu Masuk Perpustakaan | MARKER 1
    gedung['RBC1'] = gedung[17][21][0]; // : Ruang Baca Satu (Ruang Layanan Sirkulasi) | MARKER 2
    gedung['RK16_17L1'] = gedung[65][62][0]; // : Rak Koleksi 16 dan 17 Ruang Baca 1 | MARKER 3
    gedung['RK12_13L1'] = gedung[64][60][0]; // : Rak Koleksi 12 dan 13 Ruang Baca 1 | MARKER 4
    gedung['RK9_10L1'] = gedung[64][58][0]; // : Rak Koleksi 9 dan 10 Ruang Baca 1 | MARKER 5
    gedung['RK6_7L1'] = gedung[64][57][0]; // : Rak Koleksi 6 dan 7 Ruang Baca 1 | MARKER 6
    gedung['RK2_3L1'] = gedung[63][55][0]; // : Rak Koleksi 2 dan 3 Ruang Baca 1 | MARKER 7
    gedung['RK20_21L1'] = gedung[65][63][0]; // : Rak Koleksi 20 dan 21 Ruang Baca 1 | MARKER 8
    gedung['RK24_25L1'] = gedung[65][65][0]; // : Rak Koleksi 24 dan 25 Ruang Baca 1 | MARKER 9
    gedung['RK28_29L1'] = gedung[66][67][0]; // : Rak Koleksi 28 dan 29 Ruang Baca 1 | MARKER 10
    gedung['RK32_33L1'] = gedung[66][68][0]; // : Rak Koleksi 32 dan 33 Ruang Baca 1 | MARKER 11
    gedung['RK15_18L1'] = gedung[64][61][0]; // : Rak Koleksi 15 dan 18 Ruang Baca 1 | MARKER 12
    gedung['RK11_14L1'] = gedung[68][59][0]; // : Rak Koleksi 11 dan 14 Ruang Baca 1 | MARKER 13
    gedung['RK8L1'] = gedung[67][58][0]; // : Rak Koleksi 8 Ruang Baca 1 | MARKER 14
    gedung['RK5_8AL1'] = gedung[68][56][0]; // : Rak Koleksi 5 dan 8A Ruang Baca 1 | MARKER 15
    gedung['RK1_4L1'] = gedung[68][55][0]; // : Rak Koleksi 1 dan 4 Ruang Baca 1 | MARKER 16
    gedung['RK19_22L1'] = gedung[69][63][0]; // : Rak Koleksi 19 dan 22 Ruang Baca 1 | MARKER 17
    gedung['RK23_26L1'] = gedung[69][64][0]; // : Rak Koleksi 23 dan 26 Ruang Baca 1 | MARKER 18
    gedung['RK27_30L1'] = gedung[69][66][0]; // : Rak Koleksi 27 dan 30 Ruang Baca 1 | MARKER 19
    gedung['RK31_34L1'] = gedung[70][68][0]; // : Rak Koleksi 31 dan 34 Ruang Baca 1 | MARKER 20
    gedung['RBI'] = gedung[32][55][0]; // : Ruang Layanan Koleksi Karya Ilmiah | MARKER 21
    gedung['TG1BD'] = gedung[39][56][0]; // : Tangga 1 Barat Daya (Sebelah Depan Kiri Dekat Ruang RBI) | MARKER 22
    gedung['TG1BL'] = gedung[47][34][0]; // : Tangga 1 Barat Laut (Sebelah Belakang Kiri (Menuju Ruang Sholat)) | MARKER 23
    gedung['TG1TL'] = gedung[67][49][0]; // : Tangga 1 Timur Laut (Sebelah Belakang Kanan (Menuju Toilet)) | MARKER 24
    gedung['TG1TG'] = gedung[49][63][0]; // : Tangga 1 Tenggara (Sebelah Depan Kanan Dekat Ruang RBC1) | MARKER 25
    gedung['TD1TG'] = gedung[58][71][0]; // : Tangga Dalam 1 Tengggara (Bagian Dalam Ruang Baca 1) | MARKER 26
    gedung['RPK'] = gedung[60][40][0]; // : Ruang Pengelolaan
    gedung['RPA'] = gedung[53][39][0]; // : Ruang Pengadaan
    gedung['RPR'] = gedung[63][37][0]; // : Ruang Perawatan
    gedung['L1T1'] = gedung[41][59][0]; // : Titik Patokan Pertama Lantai 1
    gedung['L1T2'] = gedung[44][57][0]; // : Titik Patokan Kedua Lantai 1
    gedung['L1T3'] = gedung[40][43][0]; // : Titik Patokan Ketiga Lantai 1
    gedung['L1T4'] = gedung[49][38][0]; // : Titik Patokan Keempat Lantai 1
    gedung['L1T5'] = gedung[43][57][0]; // : Titik Patokan Kelima Lantai 1
    gedung['L1T6'] = gedung[46][58][0]; // : Titik Patokan Keenam Lantai 1
    gedung['L1T7'] = gedung[59][59][0]; // : Titik Patokan Ketujuh Lantai 1
    gedung['L1T8'] = gedung[59][48][0]; // : Titik Patokan Kedelapan Lantai 1
    gedung['L1T9'] = gedung[59][38][0]; // : Titik Patokan Kesembilan Lantai 1
    gedung['L1T10'] = gedung[54][64][0]; // : Titik Patokan Kesepuluh Lantai 1
    gedung['L1T11'] = gedung[58][64][0]; // : Titik Patokan Kesebelas Lantai 1

    // # Lantai 2
    gedung['RBC2'] = gedung[20][24][1]; // : Ruang Baca Dua (Ruang Layanan Sirkulasi) | MARKER 27
    gedung['RK38_39L2'] = gedung[64][72][1]; // : Rak Koleksi 38 dan 39 Ruang Baca 2 | MARKER 28
    gedung['RK36_37L2'] = gedung[63][70][1]; // : Rak Koleksi 36 dan 37 Ruang Baca 2 | MARKER 29
    gedung['RK35L2'] = gedung[63][68][1]; // : Rak Koleksi 35 Ruang Baca 2 | MARKER 30
    gedung['RK73_68L2'] = gedung[66][65][1]; // : Rak Koleksi 73 dan 68 Ruang Baca 2 | MARKER 31
    gedung['RK28L2'] = gedung[67][66][1]; // : Rak Koleksi 28 Ruang Baca 2 | MARKER 32
    gedung['RK79_74L2'] = gedung[66][63][1]; // : Rak Koleksi 79 dan 74 Ruang Baca 2 | MARKER 33
    gedung['RK61_55L2'] = gedung[65][68][1]; // : Rak Koleksi 61 dan 55 Ruang Baca 2 | MARKER 34
    gedung['RK55_47L2'] = gedung[66][70][1]; // : Rak Koleksi 55 dan 47 Ruang Baca 2 | MARKER 35
    gedung['RK46_39L2'] = gedung[66][71][1]; // : Rak Koleksi 46 dan 39 Ruang Baca 2 | MARKER 36
    gedung['RK83_80L2'] = gedung[67][61][1]; // : Rak Koleksi 83 dan 80 Ruang Baca 2 | MARKER 37
    gedung['RK87_84L2'] = gedung[67][59][1]; // : Rak Koleksi 87 dan 84 Ruang Baca 2 | MARKER 38
    gedung['RK57_54L2'] = gedung[67][58][1]; // : Rak Koleksi 57 dan 54 Ruang Baca 2 | MARKER 39
    gedung['RK95_92L2'] = gedung[66][56][1]; // : Rak Koleksi 95 dan 92 Ruang Baca 2 | MARKER 40
    gedung['RK98_96L2'] = gedung[66][55][1]; // : Rak Koleksi 98 dan 96 Ruang Baca 2 | MARKER 41
    gedung['RK115_116L2'] = gedung[70][64][1]; // : Rak Koleksi 115 dan 116 Ruang Baca 2 | MARKER 42
    gedung['RK117_118L2'] = gedung[70][65][1]; // : Rak Koleksi 117 dan 118 Ruang Baca 2 | MARKER 43
    gedung['RK119_120L2'] = gedung[71][67][1]; // : Rak Koleksi 119 dan 120 Ruang Baca 2 | MARKER 44
    gedung['RK121_122L2'] = gedung[71][69][1]; // : Rak Koleksi 121 dan 122 Ruang Baca 2 | MARKER 45
    gedung['RK123_124L2'] = gedung[71][70][1]; // : Rak Koleksi 123 dan 124 Ruang Baca 2 | MARKER 46
    gedung['RK113_114L2'] = gedung[70][62][1]; // : Rak Koleksi 113 dan 114 Ruang Baca 2 | MARKER 47
    gedung['RK111_112L2'] = gedung[70][60][1]; // : Rak Koleksi 111 dan 112 Ruang Baca 2 | MARKER 48
    gedung['RK109_110L2'] = gedung[69][59][1]; // : Rak Koleksi 109 dan 110 Ruang Baca 2 | MARKER 49
    gedung['RK107_108L2'] = gedung[69][57][1]; // : Rak Koleksi 107 dan 108 Ruang Baca 2 | MARKER 50
    gedung['RK105_106L2'] = gedung[69][56][1]; // : Rak Koleksi 105 dan 106 Ruang Baca 2 | MARKER 51
    gedung['RK99_103L2'] = gedung[68][54][1]; // : Rak Koleksi 99 dan 103 Ruang Baca 2 | MARKER 52
    gedung['RK101_104L2'] = gedung[70][54][1]; // : Rak Koleksi 101 dan 104 Ruang Baca 2 | MARKER 53
    gedung['RKC2'] = gedung[59][40][1]; // : Ruang Layanan Koleksi Cadangan lantai 2 | MARKER 54
    gedung['RC40_41L2'] = gedung[67][44][1]; // : Rak Koleksi 40 dan 41 Ruang Koleksi Cadangan 2 | MARKER 55
    gedung['RC38_39L2'] = gedung[66][42][1]; // : Rak Koleksi 38 dan 39 Ruang Koleksi Cadangan 2 | MARKER 56
    gedung['RC36_37L2'] = gedung[66][41][1]; // : Rak Koleksi 36 dan 37 Ruang Koleksi Cadangan 2 | MARKER 57
    gedung['RC34_35L2'] = gedung[66][39][1]; // : Rak Koleksi 34 dan 35 Ruang Koleksi Cadangan 2 | MARKER 58
    gedung['RC32_33L2'] = gedung[65][38][1]; // : Rak Koleksi 32 dan 33 Ruang Koleksi Cadangan 2 | MARKER 59
    gedung['RC30_31L2'] = gedung[65][36][1]; // : Rak Koleksi 30 dan 31 Ruang Koleksi Cadangan 2 | MARKER 60
    gedung['RC28_29L2'] = gedung[65][34][1]; // : Rak Koleksi 28 dan 29 Ruang Koleksi Cadangan 2 | MARKER 61
    gedung['RC26_27L2'] = gedung[64][33][1]; // : Rak Koleksi 26 dan 27 Ruang Koleksi Cadangan 2 | MARKER 62
    gedung['RC11_12L2'] = gedung[58][36][1]; // : Rak Koleksi 11 dan 12 Ruang Koleksi Cadangan 2 | MARKER 63
    gedung['RC8_9L2'] = gedung[56][37][1]; // : Rak Koleksi 8 dan 9 Ruang Koleksi Cadangan 2 | MARKER 64
    gedung['RC5_6L2'] = gedung[54][37][1]; // : Rak Koleksi 5 dan 6 Ruang Koleksi Cadangan 2 | MARKER 65
    gedung['RC2A_3L2'] = gedung[53][37][1]; // : Rak Koleksi 2A dan 3 Ruang Koleksi Cadangan 2 | MARKER 66
    gedung['RC1L2'] = gedung[51][38][1]; // : Rak Koleksi 1 Ruang Koleksi Cadangan 2 | MARKER 67
    gedung['RC10_13L2'] = gedung[57][32][1]; // : Rak Koleksi 10 dan 13 Ruang Koleksi Cadangan 2 | MARKER 68
    gedung['RC7_9BL2'] = gedung[55][32][1]; // : Rak Koleksi 7 dan 9B Ruang Koleksi Cadangan 2 | MARKER 69
    gedung['RC4_6BL2'] = gedung[56][32][1]; // : Rak Koleksi 4 dan 6B Ruang Koleksi Cadangan 2 | MARKER 70
    gedung['RC2BL2'] = gedung[51][33][1]; // : Rak Koleksi 2B Ruang Koleksi Cadangan 2 | MARKER 71
    gedung['RC14_15L2'] = gedung[58][31][1]; // : Rak Koleksi 14 dan 15 Ruang Koleksi Cadangan 2 | MARKER 72
    gedung['RC16_17L2'] = gedung[60][30][1]; // : Rak Koleksi 16 dan 17 Ruang Koleksi Cadangan 2 | MARKER 73
    gedung['RC18_19L2'] = gedung[61][30][1]; // : Rak Koleksi 18 dan 19 Ruang Koleksi Cadangan 2 | MARKER 74
    gedung['RC20_21L2'] = gedung[63][30][1]; // : Rak Koleksi 20 dan 21 Ruang Koleksi Cadangan 2 | MARKER 75
    gedung['RC22_23L2'] = gedung[64][29][1]; // : Rak Koleksi 22 dan 23 Ruang Koleksi Cadangan 2 | MARKER 76
    gedung['RC24_25L2'] = gedung[66][29][1]; // : Rak Koleksi 24 dan 25 Ruang Koleksi Cadangan 2 | MARKER 77
    gedung['TG2BD'] = gedung[39][56][1]; // : Tangga 2 Barat Daya | MARKER 78
    gedung['TG2BL'] = gedung[47][34][1]; // : Tangga 2 Barat Laut (Sebelah Belakang Kiri (Menuju Ruang Sholat)) | MARKER 79
    gedung['TG2TL'] = gedung[67][49][1]; // : Tangga 2 Timur Laut (Sebelah Belakang Kanan (Menuju Toilet)) | MARKER 80
    gedung['TG2TG'] = gedung[49][63][1]; // : Tangga 2 Tenggara | MARKER 81
    gedung['TD2TG'] = gedung[59][70][1]; // : Tangga Dalam 2 Tengggara (Bagian Dalam Ruang Baca 2) | MARKER 82
    gedung['RLR'] = gedung[34][55][1]; // : Ruang Layanan Referensi
    gedung['RKP'] = gedung[51][69][1]; // : Ruang Kepala Perpustakaan
    gedung['L2T1'] = gedung[52][63][1]; // : Titik Patokan Pertama Lantai 2
    gedung['L2T2'] = gedung[54][61][1]; // : Titik Patokan Kedua Lantai 2
    gedung['L2T3'] = gedung[62][60][1]; // : Titik Patokan Ketiga Lantai 2
    gedung['L2T4'] = gedung[61][48][1]; // : Titik Patokan Keempat Lantai 2
    gedung['L2T5'] = gedung[57][41][1]; // : Titik Patokan Kelima Lantai 2
    gedung['L2T6'] = gedung[38][53][1]; // : Titik Patokan Keenam Lantai 2
    gedung['L2T7'] = gedung[39][51][1]; // : Titik Patokan Ketujuh Lantai 2
    gedung['L2T8'] = gedung[39][42][1]; // : Titik Patokan Kedelapan Lantai 2
    gedung['L2T9'] = gedung[59][64][1]; // : Titik Patokan Kesembilan Ruang Sirkulasi Lantai 2 
    gedung['L2T10'] = gedung[55][64][1]; // : Titik Patokan Kesepuluh Ruang Sirkulasi Lantai 2
    gedung['L2T11'] = gedung[55][61][1]; // : Titik Patokan Kesebelas Ruang Sirkulasi Lantai 2
    gedung['L2T12'] = gedung[59][39][1]; // : Titik Patokan Keduabelas Ruang Cadangan Lantai 2
    gedung['L2T13'] = gedung[59][36][1]; // : Titik Patokan Ketigabelas Ruang Cadangan Lantai 2

    // #Lantai 3
    gedung['RBC3'] = gedung[59][70][2]; // : Ruang Baca Tiga (Ruang Layanan Sirkulasi) | MARKER 83
    gedung['RK140A_141AL3'] = gedung[66][70][2]; // : Rak Koleksi 140A dan 141A Ruang Baca 3 | MARKER 84
    gedung['RK138_139L3'] = gedung[68][69][2]; // : Rak Koleksi 138 dan 139 Ruang Baca 3 | MARKER 85
    gedung['RK134_135L3'] = gedung[65][67][2]; // : Rak Koleksi 134 dan 135 Ruang Baca 3 | MARKER 86
    gedung['RK130_131L3'] = gedung[65][66][2]; // : Rak Koleksi 130 dan 131 Ruang Baca 3 | MARKER 87
    gedung['RK126_127L3'] = gedung[65][64][2]; // : Rak Koleksi 126 dan 127 Ruang Baca 3 | MARKER 88
    gedung['RK140B_141BL3'] = gedung[69][69][2]; // : Rak Koleksi 140B dan 141B Ruang Baca 3 | MARKER 89
    gedung['RK137_139BL3'] = gedung[69][68][2]; // : Rak Koleksi 137 dan 139B Ruang Baca 3 | MARKER 90
    gedung['RK133_136L3'] = gedung[69][66][2]; // : Rak Koleksi 133 dan 136 Ruang Baca 3 | MARKER 91
    gedung['RK125_128L3'] = gedung[68][63][2]; // : Rak Koleksi 125 dan 128 Ruang Baca 3 | MARKER 92
    gedung['RK129_132L3'] = gedung[68][62][2]; // : Rak Koleksi 129 dan 132 Ruang Baca 3 | MARKER 93
    gedung['TG3BD'] = gedung[39][56][2]; // : Tangga 3 Barat Daya | MARKER 94
    gedung['TG3BL'] = gedung[47][34][2]; // : Tangga 3 Barat Laut (Sebelah Belakang Kiri (Menuju Ruang Sholat)) | MARKER 95
    gedung['TG3TL'] = gedung[67][49][2]; // : Tangga 3 Timur Laut (Sebelah Belakang Kanan (Menuju Toilet)) | MARKER 96
    gedung['TG3TG'] = gedung[49][63][2]; // : Tangga 3 Tenggara | MARKER 97
    gedung['TD3TG'] = gedung[59][70][2]; // : Tangga Dalam 3 Tengggara (Bagian Dalam Ruang Baca 3) | MARKER 98
    gedung['RTI'] = gedung[69][53][2]; // : Ruang Pengelola Teknologi Informasi Perpustakaan
    gedung['RTE'] = gedung[51][65][2]; // : Ruang Teater
    gedung['RSM'] = gedung[37][43][2]; // : Ruang Seminar
    gedung['RRP'] = gedung[43][62][2]; // : Ruang Rapat
    gedung['RMS'] = gedung[72][47][2]; // : Ruang Musola
    gedung['L3T1'] = gedung[65][70][2]; // : Titik Patokan Pertama Lantai 3
    gedung['L3T2'] = gedung[64][62][2]; // : Titik Patokan Kedua Lantai 3

    // Lantai 1
    // Dari PMP
    createWalkablePath(gedung, gedung['PMP'], gedung['RBI']);
    createWalkablePath(gedung, gedung['PMP'], gedung['TG1BD']);
    createWalkablePath(gedung, gedung['PMP'], gedung['L1T1']);
    createWalkablePath(gedung, gedung['L1T1'], gedung['L1T2']);
    createWalkablePath(gedung, gedung['L1T2'], gedung['L1T3']);
    createWalkablePath(gedung, gedung['L1T3'], gedung['L1T4']);
    createWalkablePath(gedung, gedung['L1T4'], gedung['TG1BL']);
    createWalkablePath(gedung, gedung['L1T1'], gedung['L1T5']);
    createWalkablePath(gedung, gedung['L1T5'], gedung['L1T6']);
    createWalkablePath(gedung, gedung['L1T6'], gedung['L1T7']);
    createWalkablePath(gedung, gedung['L1T7'], gedung['L1T8']);
    createWalkablePath(gedung, gedung['L1T8'], gedung['TG1TL']);
    createWalkablePath(gedung, gedung['L1T5'], gedung['TG1TG']);
    createWalkablePath(gedung, gedung['L1T6'], gedung['RBC1']);

    // Dari RBC1 ke Rak
    createWalkablePath(gedung, gedung['RBC1'], gedung['L1T10']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK16_17L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK12_13L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK9_10L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK6_7L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK2_3L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK20_21L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK24_25L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK28_29L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK32_33L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK15_18L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK11_14L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK8L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK5_8AL1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK1_4L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK19_22L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK23_26L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK27_30L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['RK31_34L1']);
    createWalkablePath(gedung, gedung['L1T10'], gedung['L1T11']);
    createWalkablePath(gedung, gedung['L1T11'], gedung['TD1TG']);

    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG1BL']);
    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG1TL']);
    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG1TG']);
    createWalkablePath(gedung, gedung['TG1TG'], gedung['TG1BL']);
    createWalkablePath(gedung, gedung['TG1TG'], gedung['TG1TL']);
    createWalkablePath(gedung, gedung['TG1TL'], gedung['TG1BL']);

    // Tangga lt1 ke lt2
    createWalkablePath(gedung, gedung['TG1BD'], gedung['TG2BD']);
    createWalkablePath(gedung, gedung['TG1BL'], gedung['TG2BL']);
    createWalkablePath(gedung, gedung['TG1TL'], gedung['TG2TL']);
    createWalkablePath(gedung, gedung['TG1TG'], gedung['TG2TG']);
    createWalkablePath(gedung, gedung['TD1TG'], gedung['TD2TG']);

    //Lantai 2
    createWalkablePath(gedung, gedung['TG2BD'], gedung['RLR']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['TG2TL']);
    createWalkablePath(gedung, gedung['TG2BD'], gedung['TG2BL']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['RKP']);

    // Dari tangga ke RKC
    createWalkablePath(gedung, gedung['TG2BD'], gedung['RKC2']);
    createWalkablePath(gedung, gedung['TG2TL'], gedung['RKC2']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['RKC2']);

    // Dari RKC ke Rak
    createWalkablePath(gedung, gedung['RKC2'], gedung['L2T11']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC32_33L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC34_35L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC36_37L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC38_39L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC40_41L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC30_31L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC28_29L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RC26_27L2']);
    createWalkablePath(gedung, gedung['L2T12'], gedung['RC11_12L2']);
    createWalkablePath(gedung, gedung['L2T12'], gedung['RC8_9L2']);
    createWalkablePath(gedung, gedung['L2T12'], gedung['RC5_6L2']);
    createWalkablePath(gedung, gedung['L2T12'], gedung['RC2A_3L2']);
    createWalkablePath(gedung, gedung['L2T12'], gedung['RC1L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC10_13L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC7_9BL2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC4_6BL2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC2BL2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC14_15L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC16_17L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC18_19L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC20_21L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC22_23L2']);
    createWalkablePath(gedung, gedung['RKC2'], gedung['RC24_25L2']);


    // Dari RBC2 ke Rak
    createWalkablePath(gedung, gedung['TD2TG'], gedung['RBC2']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['RK38_39L2']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['RK36_37L2']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['RK35L2']);
    createWalkablePath(gedung, gedung['RBC2'], gedung['L2T9']);
    createWalkablePath(gedung, gedung['L2T9'], gedung['RK73_68L2']);
    createWalkablePath(gedung, gedung['L2T9'], gedung['RK28L2']);
    createWalkablePath(gedung, gedung['L2T9'], gedung['RK79_74L2']);
    createWalkablePath(gedung, gedung['L2T9'], gedung['L2T10']);
    createWalkablePath(gedung, gedung['L2T10'], gedung['RK61_55L2']);
    createWalkablePath(gedung, gedung['L2T10'], gedung['RK55_47L2']);
    createWalkablePath(gedung, gedung['L2T10'], gedung['RK46_39L2']);
    createWalkablePath(gedung, gedung['L2T10'], gedung['L2T11']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RK83_80L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RK87_84L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RK57_54L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RK95_92L2']);
    createWalkablePath(gedung, gedung['L2T11'], gedung['RK98_96L2']);
    createWalkablePath(gedung, gedung['L2T9'], gedung['RK115_116L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK117_118L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK119_120L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK121_122L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK123_124L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK113_114L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK111_112L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK109_110L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK107_108L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK105_106L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK99_103L2']);
    createWalkablePath(gedung, gedung['RK115_116L2'], gedung['RK99_103L2']);
    createWalkablePath(gedung, gedung['RK99_103L2'], gedung['RK101_104L2']);

    // Tangga lt2 ke lt3
    createWalkablePath(gedung, gedung['TG2BD'], gedung['TG3BD']);
    createWalkablePath(gedung, gedung['TG2BL'], gedung['TG3BL']);
    createWalkablePath(gedung, gedung['TG2TL'], gedung['TG3TL']);
    createWalkablePath(gedung, gedung['TG2TG'], gedung['TG3TG']);
    createWalkablePath(gedung, gedung['TD2TG'], gedung['TD3TG']);

    //Lantai 3
    createWalkablePath(gedung, gedung['TG3BD'], gedung['RSM']);
    createWalkablePath(gedung, gedung['TG3BD'], gedung['RRP']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['RRP']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['RTE']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['TG3TL']);
    createWalkablePath(gedung, gedung['TG3TL'], gedung['RTI']);
    createWalkablePath(gedung, gedung['TG3TL'], gedung['RMS']);
    createWalkablePath(gedung, gedung['TG3TG'], gedung['TG3BL']);
    createWalkablePath(gedung, gedung['TG3BL'], gedung['RSM']);

    // Dari RBC3 ke Rak
    createWalkablePath(gedung, gedung['TD3TG'], gedung['RBC3']);
    createWalkablePath(gedung, gedung['RBC3'], gedung['L3T1']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK140A_141AL3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK138_139L3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK134_135L3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK130_131L3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK126_127L3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK140B_141BL3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK137_139BL3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['RK133_136L3']);
    createWalkablePath(gedung, gedung['L3T1'], gedung['L3T2']);
    createWalkablePath(gedung, gedung['L3T2'], gedung['RK125_128L3']);
    createWalkablePath(gedung, gedung['L3T2'], gedung['RK129_132L3']);

    return gedung;
}