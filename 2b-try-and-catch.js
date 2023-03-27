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


async function getData() {
    // jika menggunakan try catch maka kita membuat sebuah async function
    // dilanjut dengan penulisan try untuk enangani resolve dari promise
    // didalam try terdapat const await yang akan dijalankan ketika prosesnya selesai
    try {
        //try akan menangani resolve dr promise ketika kita menuliskan await cekHariKerja('senin)
        const result = await cekHariKerja('senin');
        console.log(`${result} adalah hari kerja`)
    } catch (err) {
        // catch akan menangani error atau reject dari sebuah promise
        console.log(err.message);
    }
}

getData();