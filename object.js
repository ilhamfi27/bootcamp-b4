let mobil = {
    merk: 'BMW',
    mesin: 5000,
    tipe: 'Sport',
    setData: function (merk, mesin, tipe) {
        console.log(this);
        this.merk = merk
        this.mesin = mesin
        this.tipe = tipe
    },
    setMerk: (merk) => {
        console.log(this);
        this.merk = merk
    }
}
mobil.setData('Lambo', 8000, 'Coupe')
mobil.setMerk('Honda')
