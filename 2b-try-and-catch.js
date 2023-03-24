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
    try {
        const result = await cekHariKerja('senin');
        console.log(`${result} adalah hari kerja`)
    } catch (err) {
        console.log(err.message);
    }
}

getData();