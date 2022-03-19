<div align="center">
<h1>JAKARTA POST API</h1>
<p><a href="https://jakpost.vercel.app/api">JAKARTA POST API</a> merupakan API hasil <i><b>scraping</b></i> website media berita <a href="https://www.thejakartapost.com/">Jakarta Post.</a> Jika anda menemukan error pada API ini, maka ada kemungkinan terjadi perubahan <i><b>DOM structure</b></i> pada web tersebut. Jika hal tersebut terjadi, anda bisa melaporkannya di <i><b>Issues</b></i>. Apabila anda ingin lebih jauh lagi seperti ikut kontribusi terhadap perubahan code, anda bisa memulainya dengan melakukan <i><b>pull request</b></i></p>
<strong>Mulai project anda dan jadilah produktif 🔥</strong>
</div>

## Routes

- [/api/category](https://jakpost.vercel.app/api/category)
- [/api/category/[category]](https://jakpost.vercel.app/api/category/indonesia) 🡆 index
- [/api/category/[category]/[sub_category]/page/[page]](https://jakpost.vercel.app/api/category/indonesia/politics/page/2) 🡆 sub kategori
- [/api/detailpost/[slug]](https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/16/police-looking-into-human-trafficking-violations-in-langkat-caging)
- [/api/podcast](https://jakpost.vercel.app/api/category/podcast)
- [/api/detailpodcast/[slug]](https://jakpost.vercel.app/api/detailpodcast/multimedia/2022/03/04/beyond-squid-game-translating-asian-film-and-tv-for-a-hungry-global-market)
- [/search/[search]/[sortby]/[page]](https://jakpost.vercel.app/api/search/ukraine/date/1)

## Details

```bash
● /api/category
  > Menampilkan data kategori dan sub kategori

● /api/category/[category]
  > Menampilkan data berita dari kategori yang dipilih

● /api/category/[category]/[sub_category]/page/[page]
  > Menampilkan data berita dari sub kategori yang dipilih.

● /api/detailpost/[slug]
  > Menampilkan data detailpost

● /api/podcast/page/[page]
  > Menampilkan semua data podcast

● /api/detailpodcast/[slug]
  > Menampilkan data detail podcast

● /api/search/[search]/[sortby]/[page]
  > Menampilkan hasil pencarian

```

## Paginasi

Bebebrapa route memiliki kategori, untuk lebih detailnya bisa anda cek dibawah :

```bash

● CATEGORY
  > https://jakpost.vercel.app/api/category/indonesia/page/2 🡆 paginasi ❌
  > https://jakpost.vercel.app/api/category/indonesia/politics/page/2 🡆 paginasi ✅

● PODCAST
  > https://jakpost.vercel.app/api/podcast/page/2 🡆 paginasi ✅

● SEARCH ENGINE
  > https://jakpost.vercel.app/api/search/ukraine/relevance/1 🡆 paginasi ✅

```

## Penting ❗

Dalam API ini ada beberapa data yang me-<i>return</i> `markdown`. Jika anda ingin menampilkan data tersebut didalam proyek anda, maka anda perlu mem-parsenya terlebih dahulu menggunakan `markdown parser`. Banyak sekali `markdown parser` yang mungkin bisa anda gunakan seperti, [react-markdown](https://github.com/remarkjs/react-markdown), [markdown-it](https://github.com/markdown-it/markdown-it), [markedjs](https://github.com/markedjs/marked) dan masih banyak lagi.

## ⚠️ Data yang me-return `markdown` ⚠️

1. headline berita
   <br>
   route ➡️ [/api/category/[category]](https://jakpost.vercel.app/api/category/indonesia)
   <br>
   route ➡️ [/api/category/[category]/[sub_category]/page/[page]](https://jakpost.vercel.app/api/category/indonesia)

2. post_content
   <br>
   route ➡️ [/api/detailpost/[slug]](https://jakpost.vercel.app/api/detailpost/indonesia/2022/03/18/government-outlines-carbon-sink-strategy-in-new-regulation)

3. headline berita `search engine`
   <br>
   route ➡️ [/api/search/[search]/[sortby]/[page]](https://jakpost.vercel.app/api/search/ukraine/date/1)

# Teknologi yang di gunakan

- [Axios](https://axios-http.com/)
- [NextJs](https://nextjs.org/)
- [Cheerio](https://cheerio.js.org/)
- [Puppeteer](https://pptr.dev/)
- [TurndownJs](https://github.com/mixmark-io/turndown)
- dll

# Instalasi

Jika Anda ingin menambahkan project ini di komputer Anda sendiri, Anda bisa melakukan instalasi dengan mengikuti cara dibawah ini

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
<table>
  <tr>
    <td align="center"><a href="https://fm-space.vercel.app"> <img src="https://avatars.githubusercontent.com/u/88839109?v=4?s=100" width="100px;" alt=""/> <br /> <sub><b>Faruq Maulana</b></sub> </a> <br /> <a href="https://github.com/faruqmaulana/JAKARTA-POST-API/commits?author=faruqmaulana" title="Code">💻</a> <a href="#refactoringCode-faruqmaulana" title="Refactoring Code">🔨</a> <a href="#Documentation-faruqmaulana" title="Documentation">📖</a> <a href="#maintenance-faruqmaulana" title="Maintenance">🚧</a> <a href="#ideas-faruqmaulana" title="Ideas, Planning, & Feedback">🤔</a> </td>
  </tr>
</table>
<table>
  <tr>
    <td align="center"><a href="https://zainf.dev"><img src="https://avatars.githubusercontent.com/u/6315466?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zain Fathoni</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=zainfathoni" title="Code">💻</a> <a href="#projectManagement-zainfathoni" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=zainfathoni" title="Documentation">📖</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Azainfathoni" title="Reviewed Pull Requests">👀</a> <a href="#a11y-zainfathoni" title="Accessibility">️️️️♿️</a> <a href="#ideas-zainfathoni" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-zainfathoni" title="Maintenance">🚧</a> <a href="#mentoring-zainfathoni" title="Mentoring">🧑‍🏫</a> <a href="#security-zainfathoni" title="Security">🛡️</a> <a href="#tool-zainfathoni" title="Tools">🔧</a> <a href="#translation-zainfathoni" title="Translation">🌍</a></td>
    <td align="center"><a href="https://resir014.xyz"><img src="https://avatars.githubusercontent.com/u/5663877?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Resi Respati</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=resir014" title="Code">💻</a> <a href="#design-resir014" title="Design">🎨</a> <a href="#a11y-resir014" title="Accessibility">️️️️♿️</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=resir014" title="Documentation">📖</a> <a href="#ideas-resir014" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-resir014" title="Maintenance">🚧</a> <a href="#mentoring-resir014" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-resir014" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Aresir014" title="Reviewed Pull Requests">👀</a> <a href="#security-resir014" title="Security">🛡️</a> <a href="#tool-resir014" title="Tools">🔧</a> <a href="#translation-resir014" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/ekamuktia"><img src="https://avatars.githubusercontent.com/u/9606523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ekamuktia</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Aekamuktia" title="Bug reports">🐛</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ekamuktia" title="Code">💻</a> <a href="#ideas-ekamuktia" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-ekamuktia" title="Maintenance">🚧</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Aekamuktia" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://dev.to/@ekafyi"><img src="https://avatars.githubusercontent.com/u/6597211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eka</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ekafyi" title="Code">💻</a> <a href="#design-ekafyi" title="Design">🎨</a> <a href="#ideas-ekafyi" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-ekafyi" title="Maintenance">🚧</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Aekafyi" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://mazipan.space"><img src="https://avatars.githubusercontent.com/u/7221389?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Irfan Maulana</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Amazipan" title="Bug reports">🐛</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=mazipan" title="Code">💻</a> <a href="#ideas-mazipan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-mazipan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-mazipan" title="Maintenance">🚧</a> <a href="#mentoring-mazipan" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Amazipan" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://taxfix.de"><img src="https://avatars.githubusercontent.com/u/6219895?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aditya Purwa</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=adityapurwa" title="Code">💻</a> <a href="#ideas-adityapurwa" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-adityapurwa" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-adityapurwa" title="Maintenance">🚧</a> <a href="#tool-adityapurwa" title="Tools">🔧</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/hanihusam/"><img src="https://avatars.githubusercontent.com/u/25399426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hani Husamuddin</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=hanihusam" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nibraswastaken"><img src="https://avatars.githubusercontent.com/u/74199335?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nibraswastaken</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=nibraswastaken" title="Code">💻</a> <a href="#infra-nibraswastaken" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#tool-nibraswastaken" title="Tools">🔧</a> <a href="#ideas-nibraswastaken" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://kalwabed.xyz"><img src="https://avatars.githubusercontent.com/u/49640654?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kalwabed Rizki</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=kalwabed" title="Documentation">📖</a> <a href="#translation-kalwabed" title="Translation">🌍</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=kalwabed" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ihsanrabb"><img src="https://avatars.githubusercontent.com/u/47909781?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ihsanrabb</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ihsanrabb" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/emer7"><img src="https://avatars.githubusercontent.com/u/21377166?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gilbert Emerson</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=emer7" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://andriawan.com"><img src="https://avatars.githubusercontent.com/u/13099373?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muhammad Irwan Andriawan</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=andriawan" title="Documentation">📖</a> <a href="#ideas-andriawan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Aandriawan" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://tjandradarmo.me"><img src="https://avatars.githubusercontent.com/u/46013258?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tjandra Darmo</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=TjandraD" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Namchee"><img src="https://avatars.githubusercontent.com/u/32661241?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cristopher</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=Namchee" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=Namchee" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/faizrktm"><img src="https://avatars.githubusercontent.com/u/46273747?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Faiz Azmi Rekatama</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=faizrktm" title="Code">💻</a> <a href="#tool-faizrktm" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/ardiwilda"><img src="https://avatars.githubusercontent.com/u/87063733?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ardiwilda</b></sub></a><br /><a href="#content-ardiwilda" title="Content">🖋</a></td>
    <td align="center"><a href="http://linkedin.com/in/kevinmingtarja/"><img src="https://avatars.githubusercontent.com/u/69668484?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Mingtarja</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=kevinmingtarja" title="Code">💻</a></td>
    <td align="center"><a href="https://renggaprakosonugroho.my.id/"><img src="https://avatars.githubusercontent.com/u/14950309?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rengga Prakoso Nugroho</b></sub></a><br /><a href="#content-vzrenggamani" title="Content">🖋</a></td>
    <td align="center"><a href="https://fatihkalifa.com"><img src="https://avatars.githubusercontent.com/u/1614415?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fatih Kalifa</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=pveyes" title="Documentation">📖</a> <a href="#design-pveyes" title="Design">🎨</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Apveyes" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=pveyes" title="Code">💻</a></td>
    <td align="center"><a href="http://kitabisa.com"><img src="https://avatars.githubusercontent.com/u/23743497?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bara E. Brahmantika</b></sub></a><br /><a href="#ideas-baraeb92" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-baraeb92" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-baraeb92" title="Project Management">📆</a></td>
    <td align="center"><a href="https://suliskh.com"><img src="https://avatars.githubusercontent.com/u/24476578?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kukuh Sulistyo</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=suliskh" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ekiriandra-seo"><img src="https://avatars.githubusercontent.com/u/85287011?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ekiriandra-seo</b></sub></a><br /><a href="#ideas-ekiriandra-seo" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/syauqy"><img src="https://avatars.githubusercontent.com/u/3627108?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Syauqy Nurul Aziz</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=syauqy" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=syauqy" title="Documentation">📖</a></td>
    <td align="center"><a href="https://linktr.ee/funfuncfunction"><img src="https://avatars.githubusercontent.com/u/50759463?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muhammad Fauzan</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=fncolon" title="Documentation">📖</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=fncolon" title="Code">💻</a> <a href="#ideas-fncolon" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://hendraaagil.space"><img src="https://avatars.githubusercontent.com/u/54741166?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hendra Agil Syaputra</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=hendraaagil" title="Code">💻</a></td>
    <td align="center"><a href="http://kusiaga.com"><img src="https://avatars.githubusercontent.com/u/19145812?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Burhan Ahmed</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=burhanahmeed" title="Code">💻</a></td>
    <td align="center"><a href="http://mukhlis.id"><img src="https://avatars.githubusercontent.com/u/27577560?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mukhlis</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=mukhlisakbr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/nkristoporus"><img src="https://avatars.githubusercontent.com/u/35729243?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristoporus Nathan Wilianto</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=nkristoporus" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/abui-am"><img src="https://avatars.githubusercontent.com/u/50738961?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abui</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=abui-am" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/ramarahmanda"><img src="https://avatars.githubusercontent.com/u/12446260?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ramarahmanda</b></sub></a><br /><a href="#ideas-ramarahmanda" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ramarahmanda" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/morezam"><img src="https://avatars.githubusercontent.com/u/74182139?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohammad Hamzehei</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=morezam" title="Code">💻</a></td>
    <td align="center"><a href="http://doni.dev"><img src="https://avatars.githubusercontent.com/u/7299491?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Doni Rubiagatra</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=rubiagatra" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://umarhadi.dev"><img src="https://avatars.githubusercontent.com/u/31447862?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Umar Hadi Siswanto</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=umarhadi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Widi-ps"><img src="https://avatars.githubusercontent.com/u/69189062?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Widi-ps</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3AWidi-ps" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.ryanadhi.tech/"><img src="https://avatars.githubusercontent.com/u/35433920?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Adhi</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ryanadhi" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ryanadhi" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/maziyank"><img src="https://avatars.githubusercontent.com/u/3317904?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bakhtiar Amaludin</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=maziyank" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Amaziyank" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/asaadam"><img src="https://avatars.githubusercontent.com/u/1397612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Akbar</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=asaadam" title="Code">💻</a> <a href="#security-asaadam" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/dekwahdimas"><img src="https://avatars.githubusercontent.com/u/56619123?v=4?s=100" width="100px;" alt=""/><br /><sub><b>IGN Bagus Dimas W.</b></sub></a><br /><a href="#example-dekwahdimas" title="Examples">💡</a> <a href="#data-dekwahdimas" title="Data">🔣</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=dekwahdimas" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.narainvitation.com"><img src="https://avatars.githubusercontent.com/u/13805020?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nasrul Gunawan</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=nasrulgunawan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/iamyuu"><img src="https://avatars.githubusercontent.com/u/45778229?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yusuf</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=iamyuu" title="Code">💻</a></td>
    <td align="center"><a href="https://fadil.dev/"><img src="https://avatars.githubusercontent.com/u/10627998?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nur Fadillah Fajar</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=fadillicious" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/renomureza"><img src="https://avatars.githubusercontent.com/u/49445216?v=4?s=100" width="100px;" alt=""/><br /><sub><b>R.M. Reza</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=renomureza" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://adindap.com"><img src="https://avatars.githubusercontent.com/u/70412?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adinda Praditya</b></sub></a><br /><a href="#security-apraditya" title="Security">🛡️</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=apraditya" title="Documentation">📖</a></td>
    <td align="center"><a href="http://albarranaufala.github.io/albarra-portfolio"><img src="https://avatars.githubusercontent.com/u/54704525?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Albarra Naufala Erdanto</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Aalbarranaufala" title="Bug reports">🐛</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=albarranaufala" title="Code">💻</a></td>
    <td align="center"><a href="http://adibfirman.github.io"><img src="https://avatars.githubusercontent.com/u/24794196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adib Firman</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=adibfirman" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/ranggarppb"><img src="https://avatars.githubusercontent.com/u/44335152?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rangga Putra Pertama</b></sub></a><br /><a href="#tool-ranggarppb" title="Tools">🔧</a></td>
    <td align="center"><a href="https://wisesa.dev"><img src="https://avatars.githubusercontent.com/u/35674157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anvaqta Tangguh Wisesa</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=svspicious" title="Code">💻</a></td>
    <td align="center"><a href="https://behance.net/afifalfiano"><img src="https://avatars.githubusercontent.com/u/47497276?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Afif Alfiano</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=afifalfiano" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://zakiego.my.id"><img src="https://avatars.githubusercontent.com/u/78015359?v=4?s=100" width="100px;" alt=""/><br /><sub><b>M. Zakiyuddin Munziri</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=zakiego" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/FortressValkyrie"><img src="https://avatars.githubusercontent.com/u/66000635?v=4?s=100" width="100px;" alt=""/><br /><sub><b>FortressValkyrie</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=FortressValkyrie" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=FortressValkyrie" title="Tests">⚠️</a></td>
  </tr>
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
