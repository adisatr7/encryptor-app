/**
 * Tipe data untuk blok data yang digunakan dalam enkripsi.
 */
export type Block = Uint8Array


/**
 * Interface untuk mode enkripsi. Setiap mode enkripsi harus memiliki
 * fungsi `encrypt` untuk mengenkripsi blok data dan `decrypt` untuk
 * mendekripsi blok data.
 */
export interface CipherMode {
  /**
   * Mengenkripsi blok data.
   *
   * @param block Blok data yang akan dienkripsi.
   * @returns Blok data yang telah dienkripsi.
   */
  encrypt: (block: Block) => Block

  /**
   * Mendekripsi blok data.
   *
   * @param block Blok data yang akan didekripsi.
   * @returns Blok data yang telah didekripsi.
   */
  decrypt: (block: Block) => Block
}


/**
 * Fungsi ini mengembalikan hasil XOR (exclusive OR) dari dua blok data.
 *
 * XOR adalah operasi logika yang menghasilkan nilai `true` jika nilai dari
 * kedua input berbeda (satu true dan satunya lagi false).
 *
 * @param a Blok data pertama.
 * @param b Blok data kedua.
 *
 * @returns Blok data hasil XOR dari `a` dan `b`.
 */
export function xor(a: Block, b: Block): Block {
  const length = Math.min(a.length, b.length)
  const output = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    output[i] = a[i] ^ b[i]
  }
  return output
}
