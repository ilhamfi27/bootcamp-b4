class Soal3 {
  hasilUpper;
  hasilLower;
  hasilDeret;
  constructor() {
    this.hasilUpper = '';
    this.hasilLower = '';
    this.hasilDeret = 0;
  }

  deret(bilanganAwal, beda, suku) {
    let hasil = 0;
    bilanganAwal = bilanganAwal === 0 ? 1 : bilanganAwal
    if (bilanganAwal === 0) bilanganAwal = 1;
    hasil += bilanganAwal;
    for (let bilangan = 0; bilangan < suku; bilangan++) {
      hasil += beda;
    }
    this.hasilDeret = hasil;
  }

  capitalCase(str) {
    this.hasilUpper = str.toUpperCase();
  }

  lowerCase(str) {
    this.hasilLower = str.toLowerCase();
  }

  getDeret() {
    return this.hasilDeret;
  }

  getUpper() {
    return this.hasilUpper;
  }

  getLower() {
    return this.hasilLower;
  }
}

const s3 = new Soal3();
s3.deret(1, 10, 10);
s3.capitalCase('Ilham Fadhilah');
s3.lowerCase('ILHAM FADHILAH');

console.log(s3.getDeret());
console.log(s3.getUpper());
console.log(s3.getLower());
