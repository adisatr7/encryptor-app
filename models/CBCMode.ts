import { xor } from "./types"
import type { Block, CipherMode } from "./types"


/**
 * Kelas untuk mode enkripsi CBC (Cipher Block Chaining).
 * Mode ini mengenkripsi blok data dengan mencampurkannya dengan blok sebelumnya.
 */
export class CBCMode implements CipherMode {
  /**
   * Vektor inisialisasi untuk proses enkripsi dan dekripsi. Diisi dengan nilai
   * default 0x00 pada awalnya.
   */
  private iv: Block

  /**
   * Membuat instance dari CBCMode dengan vektor inisialisasi tertentu.
   *
   * @param {Block} iv Vektor inisialisasi yang digunakan untuk enkripsi dan dekripsi.
   *                   Jika vektor inisialisasi tidak diberikan, maka akan diisi dengan
   *                   nilai 0x00.
   */
  constructor(iv?: Block) {
    this.iv = iv || new Uint8Array(16).fill(0x00)
  }

  /**
   * Fungsi untuk mengenkripsi blok data.
   *
   * @param {Block} block Blok data yang akan dienkripsi.
   * @returns {Block} Blok data yang sudah dienkripsi.
   */
  encrypt(block: Block): Block {
    // Mencampur blok data dengan vektor inisialisasi menggunakan operasi XOR.
    const mixedBlock = xor(block, this.iv)
    // Mengenkripsi blok yang sudah dicampur dengan nilai tertentu (0xAA).
    const encrypted = xor(mixedBlock, new Uint8Array(block.length).fill(0xAA))
    // Memperbarui vektor inisialisasi dengan blok yang baru saja dienkripsi.
    this.iv = encrypted

    return encrypted
  }

  /**
   * Fungsi untuk mendekripsi blok data.
   *
   * @param {Block} block Blok data yang akan didekripsi.
   * @returns {Block} Blok data asli sebelum dienkripsi.
   */
  decrypt(block: Block): Block {
    // Mendekripsi blok data dengan nilai tertentu (0xAA).
    const decrypted = xor(block, new Uint8Array(block.length).fill(0xAA))
    // Mendapatkan blok data asli dengan mencampur blok yang didekripsi dengan vektor inisialisasi.
    const original = xor(decrypted, this.iv)
    // Memperbarui vektor inisialisasi dengan blok data yang diterima.
    this.iv = block

    return original
  }
}