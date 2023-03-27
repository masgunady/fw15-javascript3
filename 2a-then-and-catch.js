const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('senin')
    // memanggil/menjalankan fungsei cekHariKerja dengan memberikan parameter 'senin'
    .then((result) => {
        // then digunakan untuk menangani jika hasil promisenya resolve. contoh dalam kasus ini
        // senin merupakan sejumlah data atau match dengan dataDay maka ada sebuah kembalian dari resolve
        // dan ditangani oleh then contohnya menampilkan colsole.log
        console.log(`${result} adalah hari kerja`)
    })
    .catch((error) => {
        // catch digunakan untuk menangani promise saat terjadi reject
        // contoh jika parameter dirubah menjadi apapun yang tidak match dengan dataDay maka akan menghasilkan reject
        // dan catch menangani reject tersebut bisa dengan console.log  error message
        console.log(error)
    })