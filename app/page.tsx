"use client";

import { useRef, useState } from "react";
import { translations, Language } from "./i18n";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("tr");

const t = translations[language];
const positionLabels = {
  goalkeeper: t.goalkeeper,
  defender: t.defender,
  midfielder: t.midfielder,
  forward: t.forward,
};

  const toggleAnthem = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Marş başlatılamadı:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
  <>
    {selectedImage && (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
        onClick={() => setSelectedImage(null)}
      >
        <button
          type="button"
          onClick={() => setSelectedImage(null)}
          className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white hover:text-black"
          aria-label="Fotoğrafı kapat"
        >
          ×
        </button>

        <img
          src={selectedImage}
          alt="Altay FC galeri büyük görünümü"
          onClick={(event) => event.stopPropagation()}
          className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
        />
      </div>
    )}

    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/team.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

        <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-5 md:px-16 md:py-7">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="ALTAY FC logosu"
              className="h-16 w-14 rounded-lg object-cover shadow-2xl"
            />

            <div>
              <p className="text-xl font-black tracking-[0.18em]">ALTAY FC</p>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                Almaty
              </p>
            </div>
          </div>
<a
  href="https://www.instagram.com/fcaltay.kz/"
  target="_blank"
  rel="noopener noreferrer"
  className="transition hover:text-emerald-400"
>
  Instagram
</a>
          <div className="hidden md:flex items-center gap-8">
  <nav className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide">
            <a href="#about" className="transition hover:text-emerald-400">
              {t.about}
            </a>

            <a href="#team" className="transition hover:text-emerald-400">
              {t.team}
            </a>

            <a href="#management" className="transition hover:text-emerald-400">
              {t.management}
            </a>

            <a href="#contact" className="transition hover:text-emerald-400">
              {t.contact}
            </a>
            <a
  href="https://ardager40.join.football"
  target="_blank"
  rel="noopener noreferrer"
  className="transition hover:text-emerald-400"
>
  {t.fixture}
</a>
            <a href="#awards" className="transition hover:text-emerald-400">
              {t.awards}
            </a>
            <a href="#news" className="transition hover:text-emerald-400">
              {t.news}
            </a>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase">
  <button
  onClick={() => setLanguage("tr")}
  className={`transition ${language === "tr" ? "text-emerald-400" : ""}`}
>
  TR
</button>

<button
  onClick={() => setLanguage("ru")}
  className={`transition ${language === "ru" ? "text-emerald-400" : ""}`}
>
  RU
</button>

<button
  onClick={() => setLanguage("kz")}
  className={`transition ${language === "kz" ? "text-emerald-400" : ""}`}
>
  KZ
</button>

<button
  onClick={() => setLanguage("en")}
  className={`transition ${language === "en" ? "text-emerald-400" : ""}`}
>
  EN
</button>
</div></div>
        </header>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
              
            </p>

            <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
  <span className="text-white">ALTAY </span>
  <span className="text-emerald-500">FC</span>
</h1>

<div className="mt-5 space-y-2">
  <p className="text-lg font-bold uppercase tracking-[0.35em] text-emerald-400">
    ALMATY • KAZAKHSTAN
  </p>

  <p className="text-xl text-white/80 md:text-2xl">
    {t.heroSubtitle}
  </p>
</div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              {t.heroDescription}
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
              {t.heroStory}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold uppercase tracking-wider transition hover:bg-emerald-500"
              >
                {t.galleryButton}
              </a>

              <button
                type="button"
                onClick={toggleAnthem}
                className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
                
              >
                {isPlaying ? t.anthemStop : t.anthemPlay}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 z-10 hidden gap-12 md:left-16 md:flex">
          <div>
            <p className="text-3xl font-black">40+</p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              {t.veteranLeague}
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">28</p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              {t.players}
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">2026</p>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              {t.season}
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24 md:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
              {t.about}
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              {t.aboutTitleLine1},
              <span className="block text-emerald-500">{t.aboutTitleLine2}</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/65">
            <p>
              {t.aboutText1}
            </p>

            <p>
              {t.aboutText2}
            </p>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24 md:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/team.jpg"
                alt="ALTAY FC takım kadrosu"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-black p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
                {t.squadLabel}
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                {t.squadTitle1}
                <span className="block text-white/30">
                  {t.squadTitle2}
                </span>
              </h2>

              <p className="mt-7 leading-8 text-white/60">
  {t.squadText}
</p>
            

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-zinc-950 p-5">
                  <p className="text-3xl font-black text-emerald-500">28</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-white/45">
                    {t.squadPlayers}
                  </p>
                </div>

                <div className="rounded-2xl bg-zinc-950 p-5">
                  <p className="text-3xl font-black text-emerald-500">40+</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-white/45">
                    {t.squadVeteran}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-black px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
              {t.officialSquadLabel}
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              {t.officialSquadTitle1}
              <span className="block text-white/30"> {t.officialSquadTitle2} </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
  ["Oktay Aydın", "goalkeeper", 1],
  ["Sebahattin Usanmaz", "midfielder", 8],
  ["Harun Şarapçıoğlu", "midfielder", 99],
  ["Kemal Ayyildiz", "defender", 36],
  ["Hüseyin Yıldız", "defender", 62],
  ["Cüneyt Tanrıverdi", "midfielder", 5, true],
  ["Levent Yıldız", "midfielder", 16],
  ["Musa Arslan", "midfielder", 21],
  ["Erlan Satibaldiev", "midfielder", 3],
  ["Murat Çelik", "midfielder", 6],
  ["Zafer Selvitopu", "midfielder", 26],
  ["Rıza Yalçın", "defender", 77],
  ["Rıza Çelik", "forward", 17],
  ["İsrafil Kamzayev", "defender", 52],
  ["Mesut Özsaç", "midfielder", 33],
  ["Kasım Mauletov", "forward", 9],
  ["Yavuz Bekar", "forward", 88],
  ["Anatoliy Tsezman", "defender", 2],
  ["İskander Gayniyev", "midfielder",7],
  ["Akjol Mamırulı", "defender", 3],
  ["Adris Şehmus", "midfielder", 10],
  ["Azamat Rısbekov", "midfielder", 4],
]
            .map(([name, position, number, captain], index) => (
              <article
                key={String(name)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60"
              >
                <div className="absolute right-5 top-5 text-3xl font-black text-emerald-500">
  {number}
  {captain && (
    <span className="ml-2 rounded-full bg-yellow-500 px-2 py-1 text-xs font-bold text-black">
      C
    </span>
  )}
</div>

                <img
  
    src={`/players/${String(name)
  .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll(" ", "-")}.jpg`}
  alt={String(name)}
  className="mb-6 h-32 w-32 rounded-full object-cover  border-2 border-green-500 shadow-lg mx-auto"
/>
                <h3 className="text-center text-xl font-bold">{name}</h3>

                <p className="mt-2 text-center text-sm uppercase tracking-[0.2em] text-emerald-500">
                  {positionLabels[position as keyof typeof positionLabels]}
                </p>

                <div className="mt-6 h-px w-full bg-white/10 transition group-hover:bg-emerald-500/50" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
  id="news"
  className="border-t border-white/10 bg-black px-6 py-24 text-white md:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-500">
        {t.newsLabel}
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        {t.newsTitle1}
        <span className="block text-white/30">{t.newsTitle2}</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/65">
        {t.newsIntro}
      </p>
    </div>

    <article className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
      <div className="overflow-hidden">
        <img
          src="/meeting.jpg"
          alt="Federasyon yetkilileri ve takım temsilcileriyle sezon öncesi toplantısı"
          className="h-[420px] w-full object-cover object-center transition duration-500 hover:scale-105 md:h-[620px]"
        />
      </div>

      <div className="p-7 md:p-10">
        <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em]">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400">
            2026 Sezonu
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-white/55">
            Almatı
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-black md:text-3xl">
          {t.newsArticleTitle}
        </h3>

        <div className="mt-5 max-w-4xl space-y-4 leading-8 text-white/65">

  <p>{t.newsP1}</p>

  <p>{t.newsP2}</p>

  <p>{t.newsP3}</p>

</div>
      </div>
    </article>
  </div>
</section>
      

      <footer
        id="contact"
        className="border-t border-white/10 bg-zinc-950 px-6 py-12 md:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black tracking-wider">ALTAY FC</p>
            <p className="mt-2 text-sm text-white/45">
              {t.footerLocation}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end">
  <a
    href="https://www.instagram.com/fcaltay.kz/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold text-emerald-500 transition hover:text-emerald-400"
  >
    Instagram • @fcaltay.kz
  </a>

  <p className="mb-3 text-lg font-semibold text-white/80">
  {t.footerLeague}
</p>

<p className="text-white/50">
  {t.footerFounded}
</p>

<p className="text-white/50">
  {t.footerNewIdentity}
</p>

<p className="text-white/35">
  {t.footerRights}
</p>
</div>
        </div>
        <section
  id="gallery"
  className="border-t border-white/10 bg-black px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
        {t.galleryLabel}
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        {t.galleryTitle1}
        <span className="block text-white/30">{t.galleryTitle2}</span>
      </h2>
    </div>

   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "/gallery-1.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
     "/gallery-7.jpg",
  "/gallery-9.jpg",
  "/gallery-10.jpg",
  "/gallery-11.jpg",
  "/gallery-12.jpg",
"/gallery-13.jpg",
"/gallery-14.jpg",
"/gallery-15.jpg",
"/gallery-16.jpg",
"/gallery-17.jpg",
"/gallery-18.jpg",
"/gallery-19.jpg",
"/gallery-20.jpg",
"/gallery-21.jpg",
  ].map((image, index) => (
    <div
      key={image}
      className="group relative overflow-hidden rounded-2xl border border-white/10"
    >
      <img
  src={image}
  alt={`Altay FC galeri ${index + 1}`}
  onClick={() => setSelectedImage(image)}
  className="h-full w-full cursor-zoom-in object-cover transition duration-500 group-hover:scale-105"
/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
          ALTAY FC
        </p>

        <p className="mt-1 text-lg font-bold">
          {t.galleryArchive}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
</section>
<section
  id="team"
  className="border-t border-white/10 bg-zinc-950 px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
        {t.teamLabel}
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        {t.teamTitle1}
        <span className="block text-white/30">{t.teamTitle2}</span>
      </h2>
    </div>

    <div className="mx-auto max-w-xl">
 
      

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img
          src="/ismail-bulut.jpg"
          alt="İsmail Bulut"
          className="h-72 w-full object-contain object-center"
        />

        <div className="p-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
            {t.coachRole}
          </p>

          <h3 className="mt-2 text-3xl font-black">
            İsmail Bulut
          </h3>

          <p className="mt-3 leading-7 text-white/60">
  {t.coachText}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="history"
  className="border-t border-white/10 bg-black px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
        {t.history.label}
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
  {t.history.title1}
  <span className="block text-emerald-400">
    {t.history.title2}
  </span>
</h2>

<p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
  {t.history.intro}
</p>    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
  <div className="space-y-6 text-lg leading-8 text-white/80">
    <p>{t.history.p1}</p>
    <p>{t.history.p2}</p>
    <p>{t.history.p3}</p>
    <p>{t.history.p4}</p>

    <p>{t.history.p5}</p>
    <p>{t.history.p6}</p>
  </div>
</div>

<div className="mt-10 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center md:p-10">
  <p className="text-2xl font-black italic leading-snug text-emerald-400 md:text-4xl">
  {t.history.quote}
</p>
</div>
</div>
</section>
<section
  id="awards"
  className="border-t border-white/10 bg-zinc-950 px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-500">
        {t.awardsLabel}
      </p>

      <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
        {t.awardsTitle1}
        <span className="block text-white/30">{t.awardsTitle2}</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/70">
        {t.awardsIntro}
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="overflow-hidden">
        <img
          src="/award-stage.jpg"
          alt="Altay FC ödül töreni"
          className="h-[420px] w-full object-cover transition duration-500 hover:scale-105 md:h-[620px]"
        />
      </div>

      <div className="p-6 md:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
  {t.awardsCardTitle}
</p>

       <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
  {t.awardsCardTitle}
</h3>
<p className="mt-3 max-w-3xl leading-7 text-white/60">
  {t.awardsCardText}
</p>
      </div>
    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="overflow-hidden">
          <img
            src="/award-group.jpg"
            alt="Almatı Futbol Federasyonu ve kulüp temsilcileri"
            className="h-80 w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-black text-white">
  {t.awardsGroupTitle}
</h3>

      <p className="mt-3 leading-7 text-white/60">
  {t.awardsGroupText}
</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="overflow-hidden">
          <img
            src="/award-ceremony.jpg"
            alt="2025 sezon sonu ödül töreni"
            className="h-80 w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-black text-white">
  {t.awardsSeasonTitle}
</h3>

          <p className="mt-3 leading-7 text-white/60">
  {t.awardsSeasonText}
</p>
        </div>
      </div>
    </div>

    <div className="mt-10 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 px-8 py-10 text-center">
      <p className="mx-auto max-w-4xl text-xl font-semibold leading-9 text-white/85 md:text-2xl">
        {t.awardsQuote}
      </p>

      <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
        Altay FC • Almatı
      </p>
    </div>
  </div>
</section>
<section
  id="contact"
  className="border-t border-white/10 bg-black px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-6xl">
    <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center md:px-14">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
        {t.contactLabel}
      </p>

      <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
        {t.contactTitle1} {t.contactTitle2}
      </h2>
    

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
        {t.contactText}
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://www.instagram.com/fcaltay.kz/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:scale-105 hover:bg-emerald-400"
        >
          {t.contactInstagram}
        </a>

        <div className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/70">
          {t.contactLocation}
        </div>
      </div>

      <p className="mt-8 text-sm font-semibold text-white/40">
        @fcaltay.kz
      </p>
    </div>
  </div>
</section>
<section
  id="anisina"
  className="border-t border-white/10 bg-black px-6 py-24 md:px-16"
>
  <div className="mx-auto max-w-4xl text-center">

    <div className="mb-5 text-5xl">🌹</div>

    <div className="flex items-center justify-center gap-5">
      <div className="h-px w-24 bg-emerald-500/50" />

      <p className="text-sm font-bold uppercase tracking-[0.5em] text-emerald-500">
        {t.memoryLabel}
      </p>

      <div className="h-px w-24 bg-emerald-500/50" />
    </div>

    <img
      src="/ekrem-kilinc.jpg"
      alt="Ekrem Kılınç"
      className="mx-auto mt-8 h-64 w-64 rounded-full border-2 border-white/80 object-cover grayscale shadow-[0_0_30px_rgba(16,185,129,0.25)]"
    />

    <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
      {t.memoryTitle1}
    </h2>

    <p className="mt-3 text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
{t.memoryTitle2}    </p>

    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
      Altay FC • 2026 Kış Ligi
    </p>

    <div className="mx-auto my-8 h-px w-32 bg-emerald-500" />

    <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-white/75">
      {t.memoryText}
    </div>

    <div className="mx-auto mt-9 max-w-3xl rounded-2xl border-x-2 border-emerald-500/60 px-8 py-5">
      <p className="text-xl font-semibold italic leading-8 text-emerald-400">
        {t.memoryQuote}
      </p>
    </div>

    <p className="mt-8 text-lg font-bold text-white">
      {t.memoryPrayer}
    </p>

    <p className="mt-7 text-3xl font-bold italic text-emerald-400 md:text-4xl">
      {t.memoryNeverForget}
    </p>

    <div className="mx-auto mt-10 flex max-w-2xl items-center gap-5">
      <div className="h-px flex-1 bg-white/15" />

      <p className="text-sm font-bold uppercase tracking-[0.5em] text-white/50">
        {t.memoryFamily}
      </p>

      <div className="h-px flex-1 bg-white/15" />
    </div>

    <p className="mt-6 text-sm text-white/35">
      {t.memoryClosing}
    </p>

  </div>
</section>
      </footer>
  </main>
  </>
);
}