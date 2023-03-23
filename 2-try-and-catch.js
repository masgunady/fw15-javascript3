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
                reject(new Error(`hari ${day} bukan hari kerja`))
            }
        }, 1000)
    })
}


async function getData() {
    try {
        const result = await cekHariKerja('minggu');
        console.log(`${result} adalah hari kerja`)
    } catch (err) {
        console.log(err);
    }
}

getData();