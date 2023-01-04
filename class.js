class Kendaraan {
  maju(param) {
    return 10 + param;
  }
  berhenti() {
    console.log('ckitt');
  }
}

class Mobil extends Kendaraan {
  merk = 'BMW';
  mesin = 5000;
  tipe = 'Sport';

  constructor(merk) {
    super();
  }
  // override method dari class kendaraan
  maju() {
    return super.maju(10) + 10;
  }
  parkir() {
    console.log('ngennggggg');
  }
}

const mobil = new Mobil();
console.log(mobil.maju());
