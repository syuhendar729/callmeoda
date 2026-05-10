---
title: Cara Buat CCTV di Linux
date: 8, Mei 2026
slug: cara-buat-cctv-di-linux
excerpt: Dokumentasi bagaimana cara membuat CCTV dari laptop bekas dengan sistem operasi Linux.
---


### 1. Pastikan kamera ada

Cek:
```
ls /dev/video*
```

Harsunya ada:
```
/dev/video0
```


### 2. Install Motion dan Jalankan Servis

```
sudo apt install motion
```

Jalankan servisnya:

```
sudo systemctl enable motion
sudo systemctl start motion
```


### 3. Konfigurasi 

```
sudo nvim /etc/motion/motion.conf
```
Ubah bagian penting:

```
daemon on
stream_localhost off
stream_port 8081
width 640
height 480
framerate 10
```

### 4. Testing


Cek IP dulu:

```
ip a
```

Akses di browser:

```
http://IP-LAPTOP:8081
```

Biar bisa diakses dari luar:
```
sudo ufw allow 8081
```

### 5. My Problem

Sempet ada masalah, gamau diakses lewat browser.
Solusinya:

```
daemon off
```


---

### Tambahan: Jika ingin menggunakan user local jalaninnya


🔧 Setup yang direkomendasikan

1. Buat folder config user

```
mkdir -p ~/.config/motion
```

2. Copy config bawaan

```
cp /etc/motion/motion.conf ~/.config/motion/motion.conf
```

3. Edit config user


```
nano ~/.config/motion/motion.conf
```

Contoh config clean:

```

daemon off

target_dir /home/oda/cctv
video_device /dev/video0

width 640
height 480
framerate 10

stream_localhost off
stream_port 8081

movie_output on
movie_codec mp4
movie_max_time 60

picture_output off
```

4. Jalankan sebagai user biasa

```
motion -c ~/.config/motion/motion.conf
```

👉 Sekarang:

Motion jalan sebagai user oda
File otomatis tersimpan ke home user
Tidak perlu permission aneh-aneh
🔥 5. Auto start saat login (user service)

Buat:

```
mkdir -p ~/.config/systemd/user
nano ~/.config/systemd/user/motion.service
```

Isi:

```

[Unit]
Description=Motion CCTV

[Service]
ExecStart=/usr/bin/motion -c /home/oda/.config/motion/motion.conf
Restart=always

[Install]
WantedBy=default.target
```

6. Aktifkan user service

```
systemctl --user daemon-reload
systemctl --user enable motion
systemctl --user start motion
```

🔥 7. Biar tetap jalan walau logout

Ini penting kalau server headless:

```
loginctl enable-linger oda
```

👉 Jadi:

walau logout SSH
service tetap jalan
📂 Struktur hasil akhirnya

```
/home/oda/
 ├── .config/motion/
 │    └── motion.conf
 │
 ├── cctv/
 │    ├── 2026-03-31-01-00-00.mp4
 │    └── ...

```

🚀 Cara cek status

```
systemctl --user status motion
```

Restart (sehabis ubah config):

```
systemctl --user restart motion

```


Referensi:
<a href="https://chatgpt.com/share/69fd4fbf-2050-8324-9d36-4720b0cf4397" target="_blank">My chat from ChatGPT</a>


