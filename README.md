<div align="center">
<h1>JAKARTA POST API</h1>
<p><a href="https://jakpost.vercel.app/api">JAKARTA POST API</a> merupakan API hasil scraping website media berita <a href="https://www.thejakartapost.com/">Jakarta Post.</a> Jika anda menemukan error pada API ini, maka ada kemungkinan terjadi perubahan <i><b>DOM structure</b></i> pada web tersebut. Jika hal tersebut terjadi, anda bisa melaporkannya di <i><b>Issues</b></i>. Apabila anda ingin lebih jauh lagi seperti ikut kontribusi terhadap perubahan code, anda bisa memulainya dengan melakukan <i><b>pull request</b></i></p>
<b>Mulai project anda dan jadilah produktif 🔥</b>
</div>

## Routes

- [/api/category](https://jakpost.vercel.app/api/category)
- [/api/category/[slug]](https://jakpost.vercel.app/api/category/indonesia) => index
- [/api/category/[slug]/page/[page]](https://jakpost.vercel.app/api/category/indonesia/politics/page/2) => sub kategori
- [/api/detailpost/[slug]](https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/16/police-looking-into-human-trafficking-violations-in-langkat-caging)
- [/api/podcast](https://jakpost.vercel.app/api/category/podcast)
- [/api/detailpodcast/[slug]](https://jakpost.vercel.app/api/detailpodcast/multimedia/2022/03/04/beyond-squid-game-translating-asian-film-and-tv-for-a-hungry-global-market)

## Details

```
● /api/category
  > Menampilkan data kategori dan sub kategori

● /api/category/[slug]
● /api/category/[slug]/page/[page]
  > Menampilkan data berita dari kategori dan sub kategori yang dipilih.
  > Semua sub kategori memiliki paginasi kecuali index.

  === Detail ===
  > https://jakpost.vercel.app/api/category/indonesia                 => paginasi  ❌
  > https://jakpost.vercel.app/api/category/indonesia/politics/page/2 => paginasi  ✅

● /api/detailpost/[slug]
  > Menampilkan data detailpost

● /api/podcast
  > Menampilkan semua data podcast

● /api/detailpodcast/[slug]
  > Menampilkan data detail podcast
```

# Teknologi yang di gunakan

- [Axios](https://axios-http.com/)
- [NextJs](https://nextjs.org/)
- [Cheerio](https://cheerio.js.org/)
- [Puppeteer](https://pptr.dev/)
- [TurndownJs](https://github.com/mixmark-io/turndown)
- dll

# Instalasi

Jika Anda ingin menambahkan projek ini di komputer Anda sendiri, Anda bisa melakukan instalasi dengan mengikuti cara dibawah ini

1. klon repositori ini

```
git clone https://github.com/faruqmaulana/JAKARTA-POST-API.git
```

2. Unduh `dependencies`

```
npm install
```

3. Run project

```
npm run dev
or
yarn dev
```

# Kontribusi

Project ini bersifat open suource. Apabila anda menemukan bug atau anda memiliki saran terkait format API yang baik, anda bisa melakukan pull request diproject ini. Saya akan terbuka dengan segala bentuk kontribusi yang anda berikan dengan tujuan membuat project ini jadi lebih baik.

# Showcase

Jika Anda menggunakan API ini di aplikasi yang anda buat, Anda bisa mendaftarkan projek Anda di bawah ini :

- jadilah yang pertama 🔥

# Referensi

### Artikel

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=en)
- [NextJs API Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://fm-space.vercel.app">
    <img src="https://avatars.githubusercontent.com/u/88839109?v=4?s=100" width="100px;" alt=""/>
    <br />
    <sub><b>Faruq Maulana</b></sub>
    </a>
    <br />
    <a href="https://github.com/faruqmaulana/JAKARTA-POST-API/commits?author=faruqmaulana" title="Code">💻</a> 
    <a href="#refactoringCode-faruqmaulana" title="Refactoring Code">🎨</a>
    <a href="#maintenance-faruqmaulana" title="Maintenance">🚧</a> 
    <a href="#ideas-faruqmaulana" title="Ideas, Planning, & Feedback">🤔</a>
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
