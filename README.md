# Matematik Hesaplama ve Faktoriyel API

Bu proje, matematiksel hesaplamalar yapmak için bir API sunar. Kullanıcılar, toplama, çıkarma, çarpma, bölme gibi işlemleri yapabilir ve ayrıca faktöriyel hesaplamalarını gerçekleştirebilirler.

## Kurulum

1. Bu repo'yu bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/kullanici-adiniz/proje-adi.git
   ```

2. Proje klasörüne gidin:
   ```bash
   cd proje-adi
   ```

3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Sunucuyu başlatın:
   ```bash
   npm start
   ```

   Sunucu, http://localhost:3000 adresinde çalışacaktır.

## Kullanım

### 1. `/matematik/hesapla`
   - **GET**: Merhaba mesajı döner.
   - **POST**: Matematiksel işlem yapar.
     - **Parametreler**:
       - `sayi1`: İlk sayı (Number)
       - `sayi2`: İkinci sayı (Number)
       - `islem`: Yapılacak işlem (string, "toplama", "çıkartma", "çarpma", "bölme")

     - **Örnek POST isteği**:
       ```json
       {
         "sayi1": 10,
         "sayi2": 5,
         "islem": "toplama"
       }
       ```
     - **Yanıt Örneği**:
       ```json
       {
         "sonuc": 15
       }
       ```

### 2. `/matematik/faktoriyel`
   - **GET**: Faktoriyel tanımını döner.
   - **POST**: Bir sayının faktöriyelini hesaplar.
     - **Parametreler**:
       - `sayi`: Hesaplanacak sayı (Number)
     
     - **Örnek POST isteği**:
       ```json
       {
         "sayi": 5
       }
       ```
     - **Yanıt Örneği**:
       ```json
       {
         "sayi": 5,
         "faktoriyel": 120
       }
       ```

## Hata Kodları

- **400 Bad Request**: Hatalı veya eksik parametreler.
- **404 Not Found**: Endpoint bulunamadı.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

## Katkı Sağlama

1. Bu repo'yu fork'layın.
2. Yeni bir branch oluşturun (`git checkout -b feature-isim`).
3. Değişikliklerinizi yapın ve commit edin (`git commit -am 'Yeni özellik ekle'`).
4. Branch'inizi GitHub'a push'layın (`git push origin feature-isim`).
5. Bir pull request açın.
