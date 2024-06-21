<template>
  <main class="bg-cover bg-center flex flex-1 min-h-screen w-full items-center justify-center" style="background-image: url('/images/background.jpg'); background-attachment: fixed;">
    <Card>
      <!-- Header -->
      <h1 class="text-white text-heading">Encryptor App™</h1>
      <div class="bg-white/50 rounded-full w-full h-[1px] mt-[6px] mb-[12px]"/>

      <!-- Identitas -->
      <p class="text-white text-body">Dirancang oleh:</p>
      <p class="text-white text-caption">1. Nama: ____</p>
      <p class="text-white text-caption ml-[14px]">NIM: ____</p>
      <p class="text-white text-caption">2. Nama: ____</p>
      <p class="text-white text-caption ml-[16px]">NIM: ____</p>

      <div class="bg-white/50 rounded-full w-full h-[1px] my-[21px]"/>

      <!-- Kolom inputan -->
      <form class="w-full md:w-[400px] mt-[14px]">
        <textarea
          type="text"
          v-model="userInput"
          placeholder="Masukkan pesan atau kode."
          class="border border-gray-300 rounded-md h-[120px] px-4 py-2 w-full focus:outline-purple-500 focus:outline-1"/>

        <!-- Pilihan jenis enkripsi -->
        <select v-model="selectedEncryptionType" class="border border-gray-300 rounded-md mt-[8px] mb-[14px] px-4 py-2 w-full focus:outline-purple-500 focus:outline-1 border-r-[14px] border-r-transparent">
          <option v-for="encryptionType in encryptionTypes" :key="encryptionType" :value="encryptionType">
        {{ encryptionType }}
          </option>
        </select>

        <!-- Tombol submit -->
        <section class="flex flex-row gap-[12px]">
          <!-- Tombol untuk enkripsi -->
          <button
            type="submit"
            @click.prevent="handleEncrypt"
            :disabled="selectedEncryptionType === encryptionTypes[0]"
            :class="['text-white disabled:text-white/50 font-bold py-2 px-4 w-full rounded-md duration-150',
              selectedEncryptionType === encryptionTypes[0]
                ? 'bg-white/10'                                                       // Style jika tombol tidak dapat diklik (disabled)
                : 'bg-white/10 hover:bg-purple-600 backdrop-filter backdrop-blur'   // Style jika tombol dapat diklik
            ]">
            Enkripsi
          </button>

          <!-- Tombol untuk dekripsi -->
          <button
            type="submit"
            @click.prevent="handleDecrypt"
            :disabled="selectedEncryptionType === encryptionTypes[0]"
            :class="['text-white disabled:text-white/50 font-bold py-2 px-4 w-full rounded-md duration-150',
              selectedEncryptionType === encryptionTypes[0]
                ? 'bg-white/10'                                                       // Style jika tombol tidak dapat diklik (disabled)
                : 'bg-white/10 hover:bg-purple-600 backdrop-filter backdrop-blur'   // Style jika tombol dapat diklik
            ]">
            Dekripsi
          </button>
        </section>
      </form>

      <div v-if="result" class="bg-white/50 rounded-full w-full h-[1px] my-[21px]"/>

      <!-- Hasil enkripsi -->
      <section v-if="result" class="mt-[14px]">
        <textarea
          disabled
          v-model="result"
          class="border border-gray-300 bg-white/5 backdrop-blur-sm text-white/80 rounded-md h-[120px] px-4 py-2 w-full focus:outline-purple-500 focus:outline-1"/>
      </section>

    </Card>
  </main>
</template>

<script setup lang="ts">
import { MyBlockCipher } from "./models/MyBlockCipher"

  /**
   * Daftar jenis enkripsi yang tersedia.
   */
  const encryptionTypes: string[] = [
    "Pilih jenis enkripsi",
    "CBC",
    "CTR",
    "ECB"
  ]

  /**
   * Untuk menyimpan inputan pengguna.
   */
  const userInput = ref<string>("")

  /**
   * Untuk menyimpan jenis enkripsi yang dipilih oleh pengguna.
   */
  const selectedEncryptionType = ref<"CBC" | "CTR" | "ECB" | string>(encryptionTypes[0])

  /**
   * Untuk menyimpan hasil enkripsi.
   */
  const result = ref<string>("")

  /**
   * Fungsi yang akan dijalankan ketika pengguna menekan tombol enkripsi.
   */
  function handleEncrypt() {
    const cipher = new MyBlockCipher("secretkeygoeshere", selectedEncryptionType.value)
    const encoder = new TextEncoder()
    const encodedInput = encoder.encode(userInput.value)

    result.value = cipher.encrypt(encodedInput).toString()
  }

  /**
   * Fungsi yang akan dijalankan ketika pengguna menekan tombol dekripsi.
   */
  function handleDecrypt() {
    const cipher = new MyBlockCipher("secretkeygoeshere", selectedEncryptionType.value)
    const decoder = new TextDecoder()
    const decodedInput = Uint8Array.from(result.value.split(",").map(Number))

    result.value = decoder.decode(cipher.decrypt(decodedInput))
  }
</script>
