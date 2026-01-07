1. Definisi Mobile App Development, Fokus Utama, dan Output Teknis

Mobile App Development adalah proses perancangan, pengembangan, pengujian, hingga distribusi aplikasi perangkat lunak yang dirancang khusus untuk berjalan pada perangkat mobile seperti smartphone dan tablet (Android dan iOS).

Fokus utama:

Pengalaman pengguna (UX) berbasis sentuhan (touch-based interaction)

Performa aplikasi pada perangkat dengan resource terbatas

Integrasi dengan hardware device (kamera, GPS, sensor, notifikasi)

Konsistensi UI dan stabilitas aplikasi

Output teknis:

File aplikasi siap distribusi

Android: APK / AAB

iOS: IPA

Source code mobile (Native, Hybrid, atau Cross-platform)

Konfigurasi build, signing, dan deployment ke app store

2. Perbedaan Web Development vs Mobile App Development
| Aspek           | Web Development            | Mobile App Development      |
| --------------- | -------------------------- | --------------------------- |
| Target Eksekusi | Browser (Chrome, Firefox)  | OS Mobile (Android/iOS)     |
| Distribusi      | URL / Hosting              | Play Store / App Store      |
| Akses Hardware  | Terbatas (via API browser) | Penuh (kamera, GPS, sensor) |
Implikasi praktis:

Web app tidak memerlukan instalasi, mobile app harus melalui proses store

Mobile app membutuhkan izin (permission) untuk hardware

Testing mobile lebih kompleks karena variasi device & OS

Contoh:
Aplikasi navigasi (Google Maps) tidak optimal jika hanya berbasis web karena membutuhkan GPS real-time dan background service.

3. Tahapan Discovery & Requirement

Tahap ini bertujuan untuk memahami masalah dan kebutuhan pengguna sebelum menulis kode.

Aktivitas utama:

Identifikasi tujuan aplikasi

Analisis user persona & use case

Menentukan fitur utama dan MVP

Menentukan kebutuhan online/offline

Pengaruh terhadap:

Target platform

Android → pasar luas, banyak variasi device

iOS → performa tinggi, user premium

Kebutuhan offline/online

Aplikasi kasir → offline-first

Aplikasi media sosial → online-first

Keputusan yang salah di tahap ini dapat menyebabkan redesign besar di tahap akhir.

4. Perancangan Arsitektur & Teknologi (React Native)

Tahap ini menentukan fondasi teknis aplikasi.

Komponen utama dalam React Native:

Struktur folder (components, screens, services)

State Management (Context, Redux, Zustand)

Navigasi (React Navigation)

API & data layer

Mengapa state management krusial:

Data harus konsisten antar screen

Menghindari prop drilling

Mengelola data global (auth, cart, theme)

Navigasi krusial karena:

Mobile berbasis screen & stack

Harus mendukung back behavior native

Mengelola lifecycle screen

Kesalahan arsitektur → aplikasi sulit di-maintain dan tidak scalable.

5. Native Development vs Hybrid Development
Native Development

Menggunakan bahasa dan SDK resmi platform.

Android: Kotlin / Java

iOS: Swift / Objective-C

Keuntungan:

Performa maksimal

Akses hardware penuh

UI sangat native

Kekurangan:

Dua codebase

Biaya dan waktu lebih besar

Hybrid Development

Menggunakan teknologi web (HTML, CSS, JS).

Keuntungan:

Satu codebase

Cepat dikembangkan

Kekurangan:

Performa lebih rendah

UI tidak sepenuhnya native

Framework lain:

Ionic

Cordova

Capacitor


6. Cross-Platform Native Development

Pendekatan yang menggunakan satu codebase, tetapi menghasilkan komponen native.

Contoh:

React Native

Flutter

.NET MAUI

Keuntungan:

Efisiensi waktu & biaya

Performa mendekati native

UI konsisten

Kekurangan:

Ketergantungan framework

Akses fitur baru OS terkadang terlambat

Butuh native bridging untuk fitur kompleks

Dibanding native murni, cross-platform lebih efisien untuk skala kecil-menengah.

7. Posisi React Native vs ReactJS
| Aspek   | ReactJS     | React Native           |
| ------- | ----------- | ---------------------- |
| Target  | Web Browser | Mobile (Android/iOS)   |
| Elemen  | div, span   | View, Text             |
| Styling | CSS         | StyleSheet (JS Object) |
| Output  | HTML DOM    | Native Components      |

8. Tantangan Mobile Development vs Web

Tantangan utama:

Fragmentasi device & OS

Resource terbatas (RAM, battery)

Permission & lifecycle

Proses release ke store

Peran React Native:

Satu codebase → Android & iOS

Hot reload → produktivitas tinggi

Reusable logic & component

Akses native via Native Modules

9. Tahapan Testing, Build, Signing, dan Release (React Native)

Testing:

Unit test (Jest)

Component test

Manual testing di emulator & device fisik

Build:

Android: Gradle → APK/AAB

iOS: Xcode → IPA

Signing:

Android: Keystore

iOS: Certificate & Provisioning Profile

Release:

Upload ke Google Play Console / App Store Connect

Review oleh platform

Publish ke user

10. Alasan React Native Menjadi Pilihan Populer

React Native dipilih karena:

Efisiensi pengembangan (1 codebase)

Performa mendekati native

Ekosistem besar & komunitas kuat

Cocok untuk startup hingga enterprise

Berbasis JavaScript & React yang sudah populer

Kesimpulan:
React Native merupakan solusi strategis untuk pengembangan aplikasi mobile modern yang membutuhkan keseimbangan antara performa, efisiensi, dan skalabilitas.