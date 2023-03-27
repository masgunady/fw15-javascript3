const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'Sepetember', 'Oktober', 'November', 'Desember'
        ];

        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}


// kode jika function declaration

// function showMonth(error, month) {
//     if (error) {
//         console.log(error.message);
//     } else {
//         const months = month.map((x) => x);
//         console.log(months);
//     }
// }

// getMonth(showMonth);



// kode menggunakan function expression

// getMonth(showMonth = (error, month) => {
//     if (error) {
//         console.log(error.message);
//     } else {
//         const months = month.map((x) => x);
//         console.log(months);
//     }
// })

//code menggunakan anonymous arrow function
getMonth((error, month) => {
    if (error) {
        console.log(error.message);
    } else {
        const months = month.map((x) => x);
        console.log(months);
    }
})