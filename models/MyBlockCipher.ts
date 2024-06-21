import { CBCMode } from "./CBCMode"
import { CTRMode } from "./CTRMode"
import { ECBMode } from "./ECBMode"
import type { Block, CipherMode } from "./types"


/**
 * Kelas MyBlockCipher menyediakan fungsionalitas untuk enkripsi dan dekripsi
 * menggunakan berbagai mode operasi cipher blok.
 */
export class MyBlockCipher {
  private key: Uint8Array
  private mode: CipherMode

  /**
   * Membuat instance dari MyBlockCipher dengan kunci dan mode operasi tertentu.
   *
   * @param key Kunci yang digunakan untuk enkripsi dan dekripsi.
   * @param mode Mode operasi yang digunakan (Hanya bisa diisi ECB, CBC, atau CTR).
   */
  constructor(key: string, mode: "CBC" | "CTR" | "ECB" | string) {
    this.key = new TextEncoder().encode(key)
    switch (mode) {
      case "ECB":
        this.mode = new ECBMode()
        break
      case "CBC":
        this.mode = new CBCMode()
        break
      case "CTR":
        this.mode = new CTRMode()
        break
      default:
        throw new Error("Unsupported mode")
    }
  }

  /**
   * Mengenkripsi blok data menggunakan mode operasi yang telah ditentukan.
   *
   * @param block Blok data yang akan dienkripsi.
   * @returns Blok data yang telah dienkripsi.
   */
  encrypt(block: Block): Block {
    return this.mode.encrypt(block)
  }

  /**
   * Mendekripsi blok data yang telah dienkripsi menggunakan mode operasi yang
   * telah ditentukan.
   *
   * @param block Blok data yang akan didekripsi.
   * @returns Blok data yang telah didekripsi.
   */
  decrypt(block: Block): Block {
    return this.mode.decrypt(block)
  }
}