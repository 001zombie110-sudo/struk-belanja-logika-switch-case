//judul = program kasir

const namaToko = "Toko KOPERASI DESA KDMP MERAH PUTIH Farhan";
const alamatToko = "Jl. Raya Desa Merah Putih";
const tarifPajak = 0.11;

function formatRupiah(angka){
    return new Intl.NumberFormat('id-ID',{
        style :'currency',
        currency :'IDR',
        minimumFractionDigits : 0
    }).format(angka);
}

//deklarasi yang dinamis(let)
let hargaMinyak = 14000,QtyMinyak = 2;
let hargaBeras = 13000,QtyBeras = 5;
let hargaGula = 15000,QtyGula = 3;
let hargaTelur = 28000,QtyTelur = 1; 

let uangBayar = 250000;
let totalMinyak = hargaMinyak * QtyMinyak;
let totalBeras = hargaBeras * QtyBeras;
let totalGula = hargaGula * QtyGula;
let totalTelur = hargaTelur * QtyTelur;
let subTotal = totalMinyak + totalBeras + totalGula + totalTelur;

// perhitungan pajak PPN
let nominalPajak = subTotal * tarifPajak;

// perhiutngan total belanjas
let totalBelanja = subTotal + nominalPajak;

//cetak struk
console.log("==========================================================");
console.log("nama toko     : " + namaToko);
console.log("alamat toko   : " + alamatToko);
console.log("total belanja : " + formatRupiah(subTotal));
console.log("PPN 11%       : " + formatRupiah(nominalPajak));
console.log("total Belanja : " + formatRupiah(totalBelanja));
console.log("uang bayar    : " + formatRupiah(uangBayar));
console.log("===========================================================");

//varible untuk metode pembayaran(1 = tunai, 2 = QRIS, 3 = kartu debit)
let opsiPembayaran = 1;
switch(opsiPembayaran){
    case 1:
       //jika opsiPembayaran bernilai 1(tunai)
         console.log("Metode Bayar  : Tunai");
         console.log("Uang Diterima : " + formatRupiah(uangBayar));

         //kita bisa memasukkan IF-ELSE kedalam SWITCH CASE(Nested / bersarang)
         if(uangBayar < totalBelanja){
            console.log("STATUS        : GAGAL! Uang kurang :" + formatRupiah(totalBelanja - uangBayar));
            break;//hentikan eksekusi
         }else{
            console.log("KEMBALIAN     : " + formatRupiah(uangBayar - totalBelanja));
            console.log("STATUS        : LUNAS");
             break;//hentikan eksekusi
         }

    case 2:
        //jika opsiPembayaran bernilai 2(qris)
        console.log("Metode Bayar  : QRIS/e-wallet");
        console.log("STATUS        : LUNAS(menunggu veirifikasi sistem QR)");
        console.log("Catatan       : Tidak ada kembalian untuk QRIS");
        break;//hentikan eksekusi

    case 3:
        //jika opsiPembayaran bernilai 3(kartu debit)
        console.log("Metode Bayar  : Kartu Debit");
        console.log("STATUS        : LUNAS(disetujui via EDC)");
        break;//hentikan eksekusi

        default:
            //sama seperti "else". jika kasir memasukkan angka selain 1,2 atau 3(misal : 4)
            console.log("ERROR: Metode Pembayaran Tidak Dikenali!");
            console.log("Silakan pilih 1(Tunai), 2(QRIS) atau 3(Kartu Debit)");
}
console.log("============================================================");