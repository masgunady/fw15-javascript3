function searchName(querySearch, limitSearch) {
    return new Promise((resolve, reject) => {
        const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
        const queryRegExp = new RegExp(querySearch, 'ig');
        const searchName = name.filter(x => x.match(queryRegExp));
        const displayLimit = searchName.filter((x, y) => y < limitSearch);

        if (displayLimit.length >= 1) {
            resolve(displayLimit);
        } else {
            reject(new Error('Data Tidak ditemukan'));
        }
    })
}



async function getSearchData(query, limit) {
    try {
        const result = await searchName(query, limit);
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }
}

getSearchData('a', 3)