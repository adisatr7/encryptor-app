import { xor } from "./types"
import type { Block, CipherMode } from "./types"


/**
 * Mengimplementasikan mode operasi Electronic Codebook (ECB) untuk cipher blok.
 * Kelas ini menyediakan metode untuk mengenkripsi dan mendekripsi blok data menggunakan mode ECB.
 */
export class ECBMode implements CipherMode {
  /**
   * Mengenkripsi blok data menggunakan mode ECB.
   * @param {Block} block - Blok data yang akan dienkripsi.
   * @returns {Block} Blok data yang telah dienkripsi.
   */
  encrypt(block: Block): Block {
    return xor(block, new Uint8Array(block.length).fill(0xAA))
  }

  /**
   * Mendekripsi blok data menggunakan mode ECB.
   * @param {Block} block - Blok data yang akan didekripsi.
   * @returns {Block} Blok data yang telah didekripsi.
   */
  decrypt(block: Block): Block {
    return xor(block, new Uint8Array(block.length).fill(0xAA))
  }
}