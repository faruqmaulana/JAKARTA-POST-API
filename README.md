<div align="center">
<h1>JAKARTA POST API</h1>
<p><a href="https://jakpost.vercel.app/api">JAKARTA POST API</a> merupakan API hasil <i><b>scraping</b></i> website media berita <a href="https://www.thejakartapost.com/">Jakarta Post.</a> Jika anda menemukan error pada API ini, maka ada kemungkinan terjadi perubahan <i><b>DOM structure</b></i> pada web tersebut. Jika hal tersebut terjadi, anda bisa melaporkannya di <i><b>Issues</b></i>. Apabila anda ingin lebih jauh lagi seperti ikut kontribusi terhadap perubahan code, anda bisa memulainya dengan melakukan <i><b>pull request.</b></i></p>
<strong>Mulai project anda dan jadilah produktif 🔥</strong>
</div>

## Routes

- [/api/category](https://jakpost.vercel.app/api/category)
- [/api/category/[category]](https://jakpost.vercel.app/api/category/indonesia) 🡆 index
- [/api/category/[category]/[sub_category]/page/[page]](https://jakpost.vercel.app/api/category/indonesia/politics/page/2) 🡆 sub kategori
- [/api/detailpost/[slug]](https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/16/police-looking-into-human-trafficking-violations-in-langkat-caging)
- [/api/podcast](https://jakpost.vercel.app/api/podcast)
- [/api/podcast/[slug]/page/[page]](https://jakpost.vercel.app/api/podcast/page/2)
- [/api/detailpodcast/[slug]](https://jakpost.vercel.app/api/detailpodcast/multimedia/2022/03/04/beyond-squid-game-translating-asian-film-and-tv-for-a-hungry-global-market)
- [/search/[search]/[sortby]/[page]](https://jakpost.vercel.app/api/search/ukraine/date/1)

## Details

```bash
● /api/category
  > Menampilkan data kategori dan sub kategori.

● /api/category/[category]
  > Menampilkan data berita dari kategori yang dipilih.

● /api/category/[category]/[sub_category]/page/[page]
  > Menampilkan data berita dari sub kategori yang dipilih.

● /api/detailpost/[slug]
  > Menampilkan data detailpost.

● /api/podcast/page/[page]
  > Menampilkan semua data podcast.

● /api/detailpodcast/[slug]
  > Menampilkan data detail podcast.

● /api/search/[search]/[sortby]/[page]
  > Menampilkan hasil pencarian.
  > Opsi pencarian yang bisa anda pilih :
    1. date       🡆 pencarian berdasarkan tanggal
    2. relevance  🡆 pencarian berdasarkan relevansi

```

## Paginasi

Beberapa route memiliki paginasi, untuk lebih detailnya bisa anda cek dibawah :

```bash

● CATEGORY
  > https://jakpost.vercel.app/api/category/indonesia/page/2           || paginasi ❌
  > https://jakpost.vercel.app/api/category/indonesia/politics/page/2  || paginasi ✅

● PODCAST
  > https://jakpost.vercel.app/api/podcast/page/2                      || paginasi ✅

● SEARCH ENGINE
  > https://jakpost.vercel.app/api/search/ukraine/relevance/1          || paginasi ✅

  note : jika anda tidak menambahkan parameter halaman, maka tidak akan terjadi error.
  karena halaman akan otomatis default ke halaman 1.

```

## Penting ❗

Dalam API ini ada beberapa data yang me-<i>return</i> `markdown`. Jika anda ingin menampilkan data tersebut didalam proyek anda, maka anda perlu mem-parsenya terlebih dahulu menggunakan `markdown parser`. Banyak sekali `markdown parser` yang mungkin bisa anda gunakan seperti, [react-markdown](https://github.com/remarkjs/react-markdown), [markdown-it](https://github.com/markdown-it/markdown-it), [markedjs](https://github.com/markedjs/marked) dan masih banyak lagi.

## ⚠️ Data yang me-return `markdown` ⚠️

1. headline berita `category`
   <br>
   route ➡️ [/api/category/[category]](https://jakpost.vercel.app/api/category/indonesia)
   <br>
   route ➡️ [/api/category/[category]/[sub_category]/page/[page]](https://jakpost.vercel.app/api/category/indonesia)

2. headline berita `search engine`
   <br>
   route ➡️ [/api/search/[search]/[sortby]/[page]](https://jakpost.vercel.app/api/search/ukraine/date/1)

3. post_content `detailpost`
   <br>
   route ➡️ [/api/detailpost/[slug]](https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/18/government-outlines-carbon-sink-strategy-in-new-regulation)

4. post_content `detailpodcast`
   <br>
   route ➡️ [/api/detailpodcast/[slug]](https://jakpost.vercel.app/api/detailpodcast/multimedia/2020/08/27/sculpting-nations-the-politics-around-statues-in-asia)

# Teknologi yang di gunakan

- [Axios](https://axios-http.com/)
- [NextJs](https://nextjs.org/)
- [Cheerio](https://cheerio.js.org/)
- [Puppeteer](https://pptr.dev/)
- [TurndownJs](https://github.com/mixmark-io/turndown)
- dll

# Instalasi

Jika Anda ingin menambahkan project ini di komputer Anda sendiri, Anda bisa melakukan instalasi dengan mengikuti cara dibawah ini :

1. klon repositori ini.

```
git clone https://github.com/faruqmaulana/JAKARTA-POST-API.git
```

2. Unduh `dependencies`.

dalam kasus saya, saya menggunakan `yarn` untuk `package manager`. Anda bisa menggunakan `package manager` kesukaan anda.

```
yarn install
or
npm install
```

3. Run project.

```
yarn dev
or
npm run dev
```

# Kontribusi

<i>Project</i> ini bersifat <i><b>open source</b></i>. Apabila anda menemukan <i><b>bug</b></i> atau anda memiliki saran terkait format API yang baik, anda bisa melakukan <i><b>pull request</b></i> diproject ini. Saya sangat terbuka dengan segala bentuk kontribusi yang anda berikan dengan tujuan membuat <i>project</i> ini menjadi lebih baik.

# Showcase

Jika Anda menggunakan API ini di <i>project</i> yang anda buat, Anda bisa mendaftarkan <i>project</i> Anda di bawah ini :

- jadilah yang pertama 🔥

# Referensi

### Artikel

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=en)
- [NextJs API Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table> <tr>
    <td align="center"><a href="https://fm-space.vercel.app"> <img src="https://avatars.githubusercontent.com/u/88839109?v=4?s=100" width="100px;" alt=""/><br /> <sub><b>Faruq Maulana</b></sub></a><br /><a href="https://github.com/faruqmaulana/JAKARTA-POST-API/commits?author=faruqmaulana" title="Code">💻</a> <a href="#refactoringCode-faruqmaulana" title="Refactoring Code">🔨</a> <a href="#Documentation-faruqmaulana" title="Documentation">📖</a> <a href="#maintenance-faruqmaulana" title="Maintenance">🚧</a> <a href="#ideas-faruqmaulana" title="Ideas, Planning, & Feedback">🤔</a> </td></tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
