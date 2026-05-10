---
title: Mendeploy Laravel di Home Server
date: 5, Mei 2026
slug: deploy-laravel-in-home-server
excerpt: Pada halaman ini gw mau mendokumentasikan bagaimana cara mendeploy API Backend yang gw buat dengan Laravel 13 di home server dengan Apache2 sebagai web servernya.  
---

### 1. Install depencencies

Install:

```
php8 
apache2
mysql
```

---

### 2. Push Laravel ke Github

Push kayak biasa aja, buat direktori di github, terus push kode yang di local ke sana.

---


### 3. Akses Home Server

Masuk ke home server melalui ssh

```
ssh oda@192.168.18.186
```

---

### 4. Clone project

Clone project dari github ke home server.

```
git clone https://github.com/syuhendar729/HadirinAja-BE
```
---

### 5. Pindahkan ke /var/www

Pindahkan project ke `/var/www` di mana direktori tempat apache2 

```
sudo mv HadirinAja-BE /var/www
```

---

### 6. Konfigurasi apache2

Di `/etc/apache2/site-available2/hadirinaja.conf`

```bash
<VirtualHost *:81>
    ServerAdmin webmaster@localhost
    ServerName 192.168.18.186

    DocumentRoot /var/www/HadirinAja-BE/public

    <Directory /var/www/HadirinAja-BE/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/hadirinaja_error.log
    CustomLog ${APACHE_LOG_DIR}/hadirinaja_access.log combined
</VirtualHost>

```

Di `/etc/apache2/ports.conf` tambahkan:

```bash
Listen 81
```

Jalankan:

```
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

### 7. Config .env

Copy .env.example

Kemudian ubah yang perlu diubah, kebetulan kalau aplikasi saya hanya:

```
APP_NAME=HadirinAja
APP_ENV=production
APP_KEY=base64:RLbjw/Xy5kCwShWut1jLmzrChPiFjWfW3WzI0T6wRYo=
APP_DEBUG=true
APP_URL=http://192.168.18.186



DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_hadirinaja
DB_USERNAME=hadirinaja
DB_PASSWORD=hadirinaja123

```

---

### 8 Menjalankan Database

Setelah `mysql` dipastikan sudah terinstall coba sekarang masuk ke dalam console mysql nya

```
mysql -u root -p
```

Terus buat database namanya `db_hadirinaja`

```
CREATE DATABASE db_hadirinaja
```

### 9. Composere install

```
composer install
```

---

### 9. Migrasi Database dan Optimize

Jalankan migrasi database

```
php artisan migrate
php artisan migrate:fresh --seed

```

Jalankan untuk optimize production

```
php artisan optimize
```

---

### Akses di browser

Buka browser dan akses: `http://192.168.18.186`  
Sesuaikan saja dengan IP home server tersebut.

---


### Error Log

Kalau misalnya ada masalah, dan ada error bisa coba lihat error nya di:

```
tail -f /var/log/apache2/error.log
# atau
tail -f /var/log/apache2/hadirinaja_error.log

# atau cek di error di log Laravel
tail -f storage/logs/laravel.log
```

Contoh saya mengalami error 500 gabisa dibuka web nya, lalu pas saya `tail -f` muncul muncul:

```
[Tue May 05 16:13:39.949366 2026] [php:error] [pid 4217:tid 4217] [client 192.168.18.224:49153] PHP Fatal error: Uncaught Error: Call to undefined function Illuminate\\Support\\mb_split() in /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Support/Str.php:1726\nStack trace:\n#0 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Support/Manager.php(99): Illuminate\\Support\\Str::studly()\n#1 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Support/Manager.php(79): Illuminate\\Support\\Manager->createDriver()\n#2 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Session/SessionServiceProvider.php(52): Illuminate\\Support\\Manager->driver()\n#3 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(1118): Illuminate\\Session\\SessionServiceProvider->{closure:Illuminate\\Session\\SessionServiceProvider::registerSessionDriver():48}()\n#4 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(936): Illuminate\\Container\\Container->build()\n#5 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1078): Illuminate\\Container\\Container->resolve()\n#6 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(864): Illuminate\\Foundation\\Application->resolve()\n#7 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1058): Illuminate\\Container\\Container->make()\n#8 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(1810): Illuminate\\Foundation\\Application->make()\n#9 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Routing/RoutingServiceProvider.php(121): Illuminate\\Container\\Container->offsetGet()\n#10 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(1118): Illuminate\\Routing\\RoutingServiceProvider->{closure:Illuminate\\Routing\\RoutingServiceProvider::registerRedirector():114}()\n#11 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(936): Illuminate\\Container\\Container->build()\n#12 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1078): Illuminate\\Container\\Container->resolve()\n#13 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(864): Illuminate\\Foundation\\Application->resolve()\n#14 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1058): Illuminate\\Container\\Container->make()\n#15 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(1810): Illuminate\\Foundation\\Application->make()\n#16 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Routing/RoutingServiceProvider.php(181): Illuminate\\Container\\Container->offsetGet()\n#17 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(1118): Illuminate\\Routing\\RoutingServiceProvider->{closure:Illuminate\\Routing\\RoutingServiceProvider::registerResponseFactory():180}()\n#18 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(936): Illuminate\\Container\\Container->build()\n#19 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1078): Illuminate\\Container\\Container->resolve()\n#20 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Container/Container.php(864): Illuminate\\Foundation\\Application->resolve()\n#21 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1058): Illuminate\\Container\\Container->make()\n#22 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/helpers.php(138): Illuminate\\Foundation\\Application->make()\n#23 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/helpers.php(850): app()\n#24 /var/www/HadirinAja-BE/bootstrap/app.php(41): response()\n#25 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Exceptions/Handler.php(720): {closure:{closure:/var/www/HadirinAja-BE/bootstrap/app.php:21}:22}()\n#26 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Exceptions/Handler.php(620): Illuminate\\Foundation\\Exceptions\\Handler->renderViaCallbacks()\n#27 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Bootstrap/HandleExceptions.php(221): Illuminate\\Foundation\\Exceptions\\Handler->render()\n#28 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Bootstrap/HandleExceptions.php(198): Illuminate\\Foundation\\Bootstrap\\HandleExceptions->renderHttpResponse()\n#29 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Bootstrap/HandleExceptions.php(234): Illuminate\\Foundation\\Bootstrap\\HandleExceptions->handleException()\n#30 /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Foundation/Bootstrap/HandleExceptions.php(258): Illuminate\\Foundation\\Bootstrap\\HandleExceptions->handleShutdown()\n#31 [internal function]: Illuminate\\Foundation\\Bootstrap\\HandleExceptions->{closure:Illuminate\\Foundation\\Bootstrap\\HandleExceptions::forwardsTo():257}()\n#32 {main}\n thrown in /var/www/HadirinAja-BE/vendor/laravel/framework/src/Illuminate/Support/Str.php on line 1726

```


---

Gw coba tanya ke ChatGPT dan katanya:


>   🧠 Penyebab Utama
>
>   Function mb_split() itu berasal dari PHP extension mbstring
>
>   👉 Artinya:
>
>   extension mbstring belum terinstall / belum aktif di server kamu
>
>   Padahal di requirement Laravel (yang kamu kirim juga) ada:
>
>   ✅ Mbstring PHP Extension (WAJIB)


Jadi gw kudu install `php-mbstring`

```

```
1. Install mbstring


```
sudo apt update
sudo apt install php-mbstring
```

Kalau pakai PHP 8.4 spesifik (kalau gw cukup di atas aja, nanti yang php8.x nya otomatis keintall sebagai dependency):

```
sudo apt install php8.4-mbstring
```

2. Aktifkan extension (kalau belum auto)

```
sudo phpenmod mbstring
```

3. Restart Apache

```
sudo systemctl restart apache2
```

4. Cek apakah sudah aktif

```
php -m | grep mbstring

```

Kalau muncul:

```
mbstring
```
✅ berarti sudah aktif


---

Thats it, thats all  
Thanks.
