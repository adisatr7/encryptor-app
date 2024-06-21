import { xor } from "./types"
import type { Block, CipherMode } from "./types"


/**
 * Kelas untuk mode enkripsi CTR (Counter Mode).
 * Mode ini mengenkripsi blok data dengan menggunakan counter yang meningkat untuk setiap blok.
 */
export class CTRMode implements CipherMode {
  /**
   * Counter yang digunakan untuk proses enkripsi dan dekripsi. Nilai awal counter adalah 0.
   */
  private counter: number = 0

  /**
   * Fungsi untuk mendapatkan blok data counter.
   */
  private getCounterBlock(): Block {
    // Membuat blok data baru dengan panjang 16 byte.
    const counterBlock = new Uint8Array(16)
    // Mengisi 12 byte pertama dengan nilai counter.
    new DataView(counterBlock.buffer).setUint32(12, this.counter++, false)

    return counterBlock
  }

  /**
   * Fungsi untuk mengenkripsi blok data.
   * @param {Block} block Blok data yang akan dienkripsi.
   * @returns {Block} Blok data yang sudah dienkripsi.
   */
  encrypt(block: Block): Block {
    const counterBlock = this.getCounterBlock()
    return xor(block, counterBlock)
  }

  /**
   * Fungsi untuk mendekripsi blok data.
   * @param {Block} block Blok data yang akan didekripsi.
   * @returns {Block} Blok data asli sebelum dienkripsi.
   */
  decrypt(block: Block): Block {
    const counterBlock = this.getCounterBlock()
    return xor(block, counterBlock)
  }
}