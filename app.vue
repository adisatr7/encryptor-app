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

        <!-- Submit button -->
        <section class="flex flex-row gap-[12px]">
          <button type="submit" class="bg-white/10 hover:bg-purple-600 text-white font-bold py-2 px-4 w-full rounded-md backdrop-filter backdrop-blur duration-150">
            Enkripsi
          </button>

          <button type="submit" class="bg-white/10 hover:bg-purple-600 text-white font-bold py-2 px-4 w-full rounded-md backdrop-filter backdrop-blur duration-150">
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
  const result = ref<string>("Test123")

  /**
   * Fungsi yang akan dijalankan ketika pengguna menekan tombol enkripsi.
   */
  function handleEncrypt() {

  }

  /**
   * Fungsi yang akan dijalankan ketika pengguna menekan tombol dekripsi.
   */
  function handleDecrypt() {

  }
</script>
