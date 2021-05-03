import { penjumlahan, perkalian } from "./angka";
import { sapaan, potonganGaji } from "./text";

describe("basic testing", () => {
  it("testing basic", () => {
    expect(true).toBe(true);
  });

  it("menjumlahkan nilai", () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });
});

describe("group testing angka", () => {
  test("Fungsi penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
    expect(penjumlahan(4, 8)).toBe(12);
  });

  test("fungsi perkalian", () => {
    expect(perkalian(3, 2)).toBe(6);
    expect(perkalian(5, 3)).toBe(15);
  });
});

describe("group testing string", () => {
  test("mengetahui gaji bersih dikurangi pajak", () => {
    expect(potonganGaji(10000000)).toBe(`Gaji bersih anda Rp. ${9000000}`);
    expect(potonganGaji(9000000)).toBe(`Gaji bersih anda Rp. ${8100000}`);
  });

  test("sapaan", () => {
    expect(sapaan("Rendy")).toBe(`Hallo Rendy`);
    expect(sapaan("Setiadi")).toBe(`Hallo Setiadi`);
  });
});
