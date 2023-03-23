const cekHariKerja = (day)=>{
    return new Promise((resove, reject) => {
        setTimeout(()=>{
            const dataDay = ['semin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Errror('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}