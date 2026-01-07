1. Konsep Dasar React Native sebagai Framework Cross-Platform
a. Pengertian React Native

React Native adalah framework cross-platform berbasis JavaScript yang digunakan untuk membangun aplikasi mobile Android dan iOS menggunakan satu basis kode (single codebase). React Native menggunakan paradigma component-based seperti React, tetapi tidak merender ke DOM web, melainkan ke komponen native mobile.

Artinya:

<View> → UIView (iOS) / View (Android)

<Text> → TextView native

<Pressable> → komponen input native


b. Perbedaan Utama React Native vs React Web

| Aspek           | React Web          | React Native           |
| --------------- | ------------------ | ---------------------- |
| Target eksekusi | Browser            | Android & iOS          |
| Output render   | HTML + CSS (DOM)   | Native UI Components   |
| Styling         | CSS                | StyleSheet (JS Object) |
| Navigasi        | URL / Router       | Stack, Tab, Drawer     |
| Akses hardware  | Terbatas (Web API) | Kamera, GPS, Sensor    |
Implikasi praktis:
Developer React Web tidak otomatis bisa React Native tanpa belajar:

Layout Flexbox mobile

Lifecycle aplikasi mobile

Permission dan hardware access

c. Peran New Architecture (React Native v0.80)

React Native v0.80 menggunakan New Architecture yang terdiri dari:

Fabric Renderer

Rendering UI lebih cepat

Sinkronisasi layout lebih presisi

TurboModules

Native modules dimuat on-demand

Startup time lebih cepat

JSI (JavaScript Interface)

Komunikasi JS ↔ Native tanpa bridge JSON

Lebih cepat dan efisien memori

Dampak ke Performa

Animasi lebih smooth

Startup aplikasi lebih cepat

Scalable untuk aplikasi besar


2. Perbandingan React Native CLI vs Expo
a. Perbedaan Arsitektur
| Aspek          | React Native CLI       | Expo               |
| -------------- | ---------------------- | ------------------ |
| Kontrol native | Full access            | Terbatas (managed) |
| Konfigurasi    | Manual                 | Otomatis           |
| Build          | Android Studio / Xcode | Expo Cloud / Local |
| Learning curve | Lebih tinggi           | Lebih mudah        |

b. Kelebihan & Kekurangan
React Native CLI

Kelebihan

Kontrol penuh native code

Cocok untuk aplikasi kompleks

Kekurangan

Setup lebih rumit

Build time lebih lama

Skenario cocok

Aplikasi production skala besar dengan kebutuhan native khusus (Bluetooth, custom SDK).

Expo

Kelebihan

Setup sangat cepat

Tidak perlu Android Studio di awal

Kekurangan

Keterbatasan native module (managed mode)

Skenario cocok

Proyek belajar, prototyping, atau MVP cepat.

3. Peran SDK Android dalam Setup React Native
a. SDK Platforms (android-35)

Berisi:

Android API level

Library sistem Android

Tanpa ini

Aplikasi tidak bisa dikompilasi

Error: failed to find target with hash string

b. Build Tools (35.0.0)

Berisi:

aapt, dx, zipalign

Tool untuk compile APK

Tanpa ini

Build gagal

Error saat gradlew assembleDebug

c. Platform Tools

Berisi:

adb

Tool komunikasi device/emulator

Tanpa ini

Emulator tidak terdeteksi

npx react-native run-android gagal

4. Prasyarat Setup React Native CLI v0.80
a. Node.js

Digunakan untuk:

Menjalankan JavaScript

Menjalankan Metro Bundler

Tanpa Node:

Tidak bisa menjalankan React Native sama sekali

b. Watchman

Digunakan untuk:

File watching

Hot reload cepat

Tanpa Watchman:

Reload lambat

File change sering tidak terdeteksi (macOS)

c. Yarn / npm

Digunakan untuk:

Dependency management

Install library React Native

Yarn sering direkomendasikan karena:

Install lebih konsisten

Lockfile lebih stabil

5. Struktur Folder Utama React Native CLI
a. Folder android/

Berisi:

Native Android project (Gradle)

Konfigurasi build Android

Digunakan saat:

Build APK

Integrasi native module

b. Folder ios/

Berisi:

Project Xcode

Swift / Objective-C code

Digunakan untuk:

Build aplikasi iOS

Signing & provisioning

c. File App.js

Entry point UI aplikasi

Root component React Native

d. metro.config.js

Konfigurasi bundler Metro

Mengatur asset, resolver, cache

e. Dukungan Cross-Platform & VS Code

Struktur ini memungkinkan:

Satu codebase JS

Native folder terpisah

Navigasi file jelas di VS Code

Debugging per platform
