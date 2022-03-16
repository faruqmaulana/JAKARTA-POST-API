# JAKARTA POST API

Project in saya buat untuk teman-teman developer khususnya bagi yang lagi mendalami bidang front-end. Saya berharap dari respon data yang tersedia bisa diubah kedalam bentuk tampilan produk aplikasi yang menarik sesuai kreativitas teman-teman.

## Deployment

> [JSON API](https://apicovid19indonesia-v2.vercel.app/)<br> >[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FReynadi531%2Fapi-covid19-indonesia-v2) >[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/Reynadi531/api-covid19-indonesia-v2)

## Endpoints

- [/api/category](https://jakpost.vercel.app/api/category)
  > Menampilkan data kategori dan sub kategori

### Example response

    {
      "status": 200,
      "category": [
        {
          "link": "https://jakpost.vercel.app/api/category/most-viewed",
          "name": "MOST VIEWED",
          "categories": null
        },
        {
          "link": "https://jakpost.vercel.app/api/category/indonesia",
          "name": "Indonesia",
          "categories": [
            {
              "sub_link": "https://jakpost.vercel.app/api/category/indonesia",
              "sub_category": "Index"
            },
            {
            ...more
            },
          ]
        },
        {
        ...more
        }
      ]
    }

- [/api/category/[slug]](https://jakpost.vercel.app/api/category/indonesia) => index
- [/api/category/[slug]/page/[page]](https://jakpost.vercel.app/api/category/indonesia/politics/page/2) => sub kategori

  ```
  > Menampilkan data berita dari kategori dan sub kategori yang dipilih.
  > Semua sub kategori memiliki paginasi kecuali index.

  === Detail ===
  > https://jakpost.vercel.app/api/category/indonesia                 => paginasi  ❌
  > https://jakpost.vercel.app/api/category/indonesia/politics/page/2 => paginasi  ✅
  ```

### example response

    {
      "status": 200,
      "featured_post": {
        "link": "https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/16/prabowo-talks-defense-cooperation-with-macron-mbs",
        "title": "Prabowo talks defense cooperation with Macron",
        "image": "https://img.jakpost.net/c/2022/03/16/2022_03_16_123602_1647411409._large.jpg",
        "headline": "Defense Minister Prabowo Subianto held a meeting with French President Emmanuel Macron at the Élysée Palace on Wednesday, more than a month after Indonesia sealed a deal to order 42 Rafale fighter jets and signed an exploratory agreement for the possible purchase of two submarines.",
        "category": "Politics",
        "image_desc": "French President Emmanuel Macron greets Defense Minister Prabowo Subianto before their meeting in Paris on Wednesday.`",
        "pusblised_at": "4 hours ago"
      },
      "posts": [
        {
          "link": "https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/13/jokowis-dream-of-a-new-capital-city-takes-a-step-closer-to-reality",
          "title": "Jokowi’s dream of a new capital city takes a step closer to reality",
          "image": "https://img.jakpost.net/c/2021/08/26/2021_08_26_116915_1629996880._thumbnail.jpg",
          "headline": "Three days after he swore in the head of the new capital city authority, Jokowi flew to East Kalimantan where he is expected to visit the construction site for the country's new administrative center.",
          "category": "Politics",
          "pusblised_at": "2 days ago",
          "premium_badge": "premium"
        },
        {
        ...more
        }
      ]
    }

- [/api/indonesia/harian](http://apicovid19indonesia-v2.vercel.app/api/indonesia/harian)
  > Menampilkan data harian sejak pasien awal
- [/api/indonesia/provinsi](http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi)
  > Menampilkan data setiap provinsi <br>
  > Dapat menambahkan query `name` untuk menentukan provinsi, contohnya `/api/indonesia/provinsi?name=dki_jakarta`
- [/api/indonesia/provinsi/alt](http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/alt)
  > Menampilkan data alternative setiap provinsi
- [/api/indonesia/provinsi/more](http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more)
  > Menampilkan data setiap provinsi lebih detail <br>
  > Dapat menambahkan query `name` untuk menentukan provinsi, contohnya `/api/indonesia/provinsi/more?name=dki_jakarta`
- [/api/indonesia/provinsi/harian](http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/harian)
  > Menampilkan data harian untuk setiap provinsi <br>
  > Dapat menambahkan query `date`, `month`, dan `year` untuk mencari informasi berdasarkan tanggal tertentu. Contohnya `/api/indonesia/provinsi/harian?date=01&month=June&year=2021` untuk data provinsi pada tanggah 1 Juni 2021, atau `/api/indonesia/provinsi/harian?date=15` untuk menampilkan data setiap provinsi setiap tanggal 15.
- [/api/indonesia/csv](http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv)
  > Menampilkan data sama dengan /api/indonesia dalam bentuk csv
- [/api/indonesia/csv/harian](http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv/harian)
  > Menampilkan data sama dengan /api/indonesia/harian dalam bentuk csv
- [/api/indonesia/csv/provinsi](http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv/provinsi)
  > Menampilkan data sama dengan /api/indonesia/provinsi dalam bentuk csv
- [/api/indonesia/csv/provinsi/alt](http://apicovid19indonesia-v2.vercel.app/api/indonesia/csv/provinsi/alt)
  > Menampilkan data sama dengan /api/indonesia/provinsi/alt dalam bentuk csv

## Showcase

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
