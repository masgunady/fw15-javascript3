function cekGenap(number) {
    return new Promise((resolve, reject) => {
        const sanitizeNumber = parseInt(number);
        if (sanitizeNumber % 2 == 0) {
            resolve(sanitizeNumber)
        } else {
            reject(new Error('Angka Tidak Genap'))
        }
    })
}

cekGenap(5)
    .then((result) => {
        console.log(`${result} adalah angka genap`);
    })
    .catch((e) => {
        console.log(e.message)
    })