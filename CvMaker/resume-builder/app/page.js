import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Üst Menü (Navbar) */}
      <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">
          CVBuilder
        </div>
        <Link
          href="/view"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Ücretsiz Başla
        </Link>
      </nav>

      {/* Kahraman Bölümü (Hero Section) */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-sm mb-6">
          🚀 Yeni Nesil Özgeçmiş Oluşturucu
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 max-w-4xl leading-tight mb-6">
          Saniyeler İçinde <span className="text-blue-600">Profesyonel</span> Özgeçmişinizi Oluşturun
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          İşe alım uzmanlarının dikkatini çekecek, ATS uyumlu ve modern tasarımlı CV'nizi hiçbir tasarım bilgisine ihtiyaç duymadan hazırlayın. PDF olarak anında indirin.
        </p>
        <Link
          href="/view"
          className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1"
        >
          Ücretsiz CV Oluştur
        </Link>

        {/* Güven Rozetleri */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
          <span className="flex items-center gap-2">✅ Tamamen Ücretsiz</span>
          <span className="flex items-center gap-2">✅ Kayıt Gerekmez</span>
          <span className="flex items-center gap-2">✅ Anında PDF İndirme</span>
        </div>
      </section>

      {/* Nasıl Çalışır? */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Sadece 3 Adımda CV'niz Hazır</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">1. Bilgilerinizi Girin</h3>
              <p className="text-gray-600 text-sm">Bilgisayarınızdan veya telefonunuzdan bilgilerinizi hızlıca doldurun.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">2. Tasarımınızı Seçin</h3>
              <p className="text-gray-600 text-sm">4 farklı şablon ve sınırsız renk seçeneğiyle CV'nizi kişiselleştirin.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-xl font-bold mb-2">3. Anında İndirin</h3>
              <p className="text-gray-600 text-sm">Yüksek kaliteli, ATS uyumlu PDF çıktınızı tek tıkla indirin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Şablon Galerisi */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Her Tarza Uygun Şablonlar</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Klasikten moderne, yaratıcıdan minimaliste kadar geniş şablon yelpazemizle kendi tarzınızı yansıtın.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Görsel yerine CSS ile şablon temsilleri koyduk */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-slate-800 flex flex-col items-center justify-center text-white">
                <div className="text-xl font-bold">Modern</div>
                <div className="text-xs text-slate-300">Lacivert & Şık</div>
              </div>
              <div className="p-4 text-center text-sm font-semibold text-gray-700">Modern Şablon</div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-white border-b flex flex-col items-center justify-center text-gray-800">
                <div className="text-xl font-bold">Klasik</div>
                <div className="text-xs text-gray-500">Sade & Profesyonel</div>
              </div>
              <div className="p-4 text-center text-sm font-semibold text-gray-700">Klasik Şablon</div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-white border-b flex flex-col items-center justify-center text-gray-800">
                <div className="text-xl font-light uppercase tracking-widest">Minimalist</div>
                <div className="text-xs text-gray-500">Çizgisel & Temiz</div>
              </div>
              <div className="p-4 text-center text-sm font-semibold text-gray-700">Minimalist Şablon</div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-blue-600 flex flex-col items-center justify-center text-white">
                <div className="text-xl font-extrabold">Yaratıcı</div>
                <div className="text-xs text-blue-200">Renkli & Dinamik</div>
              </div>
              <div className="p-4 text-center text-sm font-semibold text-gray-700">Yaratıcı Şablon</div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/View"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Şimdi Dene
            </Link>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular (SSS) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <details className="group border border-gray-200 rounded-lg p-4 bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900">
                CV oluşturmak ücretli mi?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">Hayır, tamamen ücretsizdir. Sitemizde hiçbir gizli ücret veya zorunlu üyelik bulunmamaktadır.</p>
            </details>
            <details className="group border border-gray-200 rounded-lg p-4 bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900">
                Oluşturduğum CV ATS uyumlu mu?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">Evet, oluşturduğumuz PDF çıktıları metin tabanlıdır. Bu sayede işe alım robotları (ATS) CV'nizdeki bilgileri kolayca okuyabilir.</p>
            </details>
            <details className="group border border-gray-200 rounded-lg p-4 bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900">
                Bilgilerim kaydediliyor mu?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">Verileriniz sadece kendi tarayıcınızda (LocalStorage) saklanır. Sunucularımıza hiçbir kişisel veri gönderilmez.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Alt Bilgi (Footer) */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <div className="text-xl font-bold text-white mb-4">CVBuilder</div>
        <p className="text-sm mb-4">Kariyerinize bir adım önde başlayın.</p>
        <p className="text-xs">© {new Date().getFullYear()} CVBuilder. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}