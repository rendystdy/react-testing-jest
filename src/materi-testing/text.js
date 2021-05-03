export function potonganGaji(gaji) {
  const PAJAK = 10 / 100;
  const gajiBersih = gaji - (gaji * PAJAK);
  return `Gaji bersih anda Rp. ${gajiBersih}`;
}

export function sapaan(nama) {
  return `Hallo ${nama}`;
}
