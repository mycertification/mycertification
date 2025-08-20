function signIn() {
    let name = prompt("masukkan username anda")
    let password = prompt("password anda")
    let notif= alert(`Welcome ${name}`)
    document.getElementById("sign-in").innerHTML = ""
    document.getElementById("sign-up").innerHTML = ""
}


function biografi () {
    let nama = "My Chemical Romance"
    let judul = "Helena"
    console.log (`band ini adalah ${nama} dan judulnya adalah ${judul}`)

}
biografi()


let nama = 23;

if (nama < 2) {
    console.log(`anda adalah abdi negara`);
}

else {
    console.log(`anda karwayan swasta`)
}




// function add(a, b) {
//     return a + b;
// }

// let value = add(1, 2)
// console.log(value)

// // Cara 1
// function namaProduk() { 
//  document.getElementById("testbtn").innerHTML = "HELLO GUYS" 
// }


// // cara 2
// function productName(name) {
//     console.log( name)
// }

// productName("Sertifikasi BNSP")




// let nama = "Enter Digital"
// console.log(`hello inikk adalah ${nama}`)

// function myName(a, b) {
//     return a*b
// }

// let hasil = myName(4,7) 
// console.log("berikut ini jumlah dari perhitungan yang ada" + " " + hasil)

// //JS OBJECTS

// let rumah = {
//     jenis: "Minimalis",
//     ukuran: 40,
//     harga: "Premium",
// }

// let x = rumah;
// x.jenis = "Tradisional"
// console.log(`saya menjual rumah dengan jenis ${rumah.jenis} ukuran ${rumah.ukuran} serta kualitas ${rumah.harga}`)

