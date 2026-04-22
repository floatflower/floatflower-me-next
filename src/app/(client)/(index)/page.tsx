import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PhotoGrid } from "./_components/photo-grid";
import { AvatarLightbox } from "./_components/avatar-lightbox";

export const metadata: Metadata = {
  title: "黃建霖 Jerry Huang — Portfolio",
  description: "一個熱衷於手工藝、料理的資深全端工程師",
};

const DATA = {
  name: { zh: "黃建霖", en: "Jerry Huang" },
  tagline: "一個熱衷於手工藝、料理的資深全端工程師",
  links: [
    {
      label: "個人網站",
      tooltip: "floatflower.me",
      url: "https://floatflower.me",
      icon: "fa-solid fa-globe",
    },
    {
      label: "GitHub",
      tooltip: "GitHub",
      url: "https://github.com/floatflower",
      icon: "fa-brands fa-github",
    },
    {
      label: "Unsplash",
      tooltip: "Unsplash",
      url: "https://unsplash.com/@floatflower",
      icon: "fa-brands fa-unsplash",
    },
    {
      label: "Instagram",
      tooltip: "floatflower.kitchen",
      url: "https://www.instagram.com/floatflower.kitchen",
      icon: "fa-brands fa-instagram",
    },
    {
      label: "Email",
      tooltip: "floatflower1029@gmail.com",
      url: "mailto:floatflower1029@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ],
  experience: [
    {
      role: "後端工程師",
      company: "Jerawine",
      location: "英國（遠端）",
      period: "2023.03 — 至今",
      desc: "獨立開發後端，服務英國紅酒借貸新創，獨立承擔從需求分析、架構設計、基礎設施維運到系統持續迭代的完整開發週期。",
      highlights: [
        "主導平台 v1（Symfony PHP）的開發與維運；需求穩定後推動全面架構重設計，以 Next.js + GraphQL + PostgreSQL 重構為 v2，系統性消除早期技術債",
        "對 Livex 逾 3,500 萬筆紅酒歷史交易資料進行建模分析，以 R 語言產出價格預測指標，輔助信貸審核決策",
        "獨力建置並維運完整基礎設施，涵蓋 GitLab CI/CD pipeline、AWS App Runner 與 RDS 的全自動化部署流程",
        "並行協助母公司 Coterie Holdings（英國）開發內部管理系統",
      ],
    },
    {
      role: "創辦人 · 全端工程師",
      company: "Fresco Technology 賦睿科技",
      location: "台灣，台中",
      period: "2021.01 — 2023.03",
      desc: "創立個人開發公司，獨立承接並交付多元前後端專案，範疇涵蓋 Web App 開發、API 設計與雲端基礎設施建置。",
      highlights: [
        {
          text: "獨立完成 GhettoSharkhood ERC721 智能合約與 Mint DApp 全端開發，支撐客戶首波發行達 1,500 萬台幣銷售額，Mint 當日零合約異常、零資金事故。",
          keyword: "GhettoSharkhood",
          href: "https://opensea.io/collection/ghettosharkhood",
        },
        "承接 Jerawine.com 外包開發，負責全端實作與交付",
      ],
    },
    {
      role: "技術長 (CTO)",
      company: "跳跳股份有限公司",
      location: "台灣，台中",
      period: "2018.07 — 2020.12",
      desc: "大學在學期間兼任技術長，主導六人技術團隊，全權負責系統架構規劃與核心技術決策，帶領產品從無到有完整落地。",
      highlights: [
        "主導 JINS 台灣官方網站及後台管理系統的設計與開發",
        "設計並實作門市 POS 出單系統：將 Rust 程式交叉編譯後部署至市售 OpenWRT 路由器，作為門市邊緣網關，以極低硬體成本打通雲端與地端的即時出單鏈路",
      ],
    },
  ],
  education: [
    {
      school: "國立台中教育大學",
      dept: "資訊工程學系",
      period: "2015 — 2021",
      note: "學士 · 台灣，台中 · 畢業專題第二名（主題：基於Qt C++之HTTP微服務框架開發），並獲得大學生研究計畫補助（計劃編號：107-2813-C-142-043-E）",
    },
    {
      school: "華中科技大學",
      dept: "軟件工程學院",
      period: "2016.07 — 2017.02",
      note: "交換學生 · 湖北，武漢 · 入選華中科技大學校內頂級創業團隊「冰岩作坊」",
    },
    {
      school: "國立台中第一高級中學",
      dept: "",
      period: "2013 — 2015",
      note: "畢業",
    },
  ],
  projects: [
    {
      name: "創作者內容分享及社群平台",
      year: "2025",
      status: "上線中",
      solo: "全端獨立開發",
      scale: ["3,000+ 使用者", "100+ 創作者"],
      summary:
        "一手規劃並獨立開發的數位內容交易平台，讓創作者得以販售照片、影片等數位商品，同時提供完整的點數儲值與合規出金流程。",
      highlights: [
        "圖片管線：以 Node.js + Sharp 進行初步壓縮，再結合 Cloudflare Images、Worker、Durable Object 與 CDN，於邊緣節點完成即時縮圖處理與全球分發",
        "影片管線：透過 Coconut.co 將影片轉碼為 HLS 串流，同步產出 GIF 動態縮圖與 JPEG 靜態縮圖；以 Cloudflare Worker + CDN 實現受控的內容存取與分發",
        "後端服務以 Docker 容器化，部署於 DigitalOcean App Platform，具備自動水平擴展能力",
        "串接藍新金流處理點數儲值；出金機制符合台灣勞報單申報規範，並設有 7 天交易冷卻期以確保資金安全",
        "站內點數支援 QR Code 即時收款，讓創作者在實體活動現場也能與粉絲無縫完成點數交易",
      ],
      note: "如需進一步了解平台細節，歡迎面談時詢問。",
      tech: ["Next.js", "PostgreSQL", "Cloudflare", "Docker", "藍新金流"],
    },
    {
      name: "短影音互動平台",
      year: "2024",
      status: "已被收購",
      solo: "後端獨立開發",
      scale: ["8,000+ 使用者", "50+ 創作者"],
      summary:
        "專為短影音創作者打造的社群平台，具備 DRM 版權加密播放、即時聊天傳影片及 VIP 訂閱機制。後端由本人獨立開發，平台後續獲其他公司收購並持續營運至今。",
      highlights: [
        "影片管線：Coconut.co 轉碼為 HLS 串流後，串接 Axinom DRM 服務分別封裝 Widevine（Chrome）與 FairPlay（Safari）兩種加密格式，確保跨瀏覽器的版權保護播放",
        "即時聊天：基於 Firebase Firestore Realtime 構建，支援訊息即時同步與影片訊息傳送",
        "聊天影片管線：自主開發並部署於 GCP Cloud Run 的影片編碼服務，自動產出縮圖、HLS 串流及模糊預覽版本，兼顧體驗與內容保護",
        "整體後端以 Firebase + GCP Cloud Run + BunnyCDN 架構承載，在彈性擴展與邊緣分發效能間取得平衡",
        "串接 TapPay 實作 VIP 訂閱制度，付費會員享有平台專屬特權與創作者互動福利",
      ],
      note: "如需進一步了解平台細節，歡迎面談時詢問。",
      tech: [
        "Firebase",
        "GCP Cloud Run",
        "BunnyCDN",
        "Axinom DRM",
        "Coconut.co",
        "TapPay",
      ],
    },
    {
      name: "個人品牌電商",
      year: "2022",
      status: "上線中",
      solo: "獨立創辦 · 全端開發",
      scale: ["3,000+ X 粉絲", "4,200+ Instagram 粉絲"],
      summary:
        "以個人身份獨立創辦並持續營運的品牌電商，從無到有一手包辦品牌定位、商品設計打樣、供應鏈洽談、視覺拍攝與修圖，到網站開發運維、金流串接與社群行銷，完整貫穿一門生意的每個環節。",
      highlights: [
        "自主拍攝商品視覺，並以 Photoshop / Lightroom / Evoto 完成全套修圖流程",
        "獨立設計商品、洽談打樣與供應商合作，掌握完整供應鏈",
        "同步經營 X、Instagram、Facebook 三個社群頻道，累積 X 3,000+、Instagram 4,200+ 粉絲",
        "全端獨立開發並自主維運網站，涵蓋金流串接與上線後持續迭代",
      ],
      note: "",
      tech: ["Next.js", "PostgreSQL", "DigitalOcean"],
    },
  ],
  languages: [
    { lang: "中文", level: "母語", pct: 100 },
    { lang: "英文", level: "中等偏上", pct: 70 },
    { lang: "日文", level: "中等", pct: 40 },
  ],
  skillHighlights: [
    { name: "Next.js", pct: 90, level: "精通" },
    { name: "Express.js", pct: 80, level: "熟練" },
    { name: "Nest.js", pct: 70, level: "熟練" },
    { name: "React", pct: 60, level: "熟悉" },
    { name: "Symfony PHP", pct: 90, level: "精通" },
    { name: "Cloudflare", pct: 80, level: "熟練" },
    { name: "GCP", pct: 70, level: "熟練" },
    { name: "AWS", pct: 70, level: "熟練" },
  ],
  skillTagGroups: [
    {
      label: "後端 & API",
      cls: "bg-emerald-50 border-emerald-200 text-emerald-600",
      tags: ["GraphQL (Apollo)", "Prisma", "Temporal"],
    },
    {
      label: "搜尋 & 佇列",
      cls: "bg-orange-50 border-orange-200 text-orange-600",
      tags: ["Typesense", "Algolia", "RabbitMQ"],
    },
    {
      label: "資料庫",
      cls: "bg-violet-50 border-violet-200 text-violet-600",
      tags: ["PostgreSQL", "MySQL", "Redis", "Valkey"],
    },
    {
      label: "雲端 & DevOps",
      cls: "bg-sky-50 border-sky-200 text-sky-600",
      tags: ["Firebase", "Digital Ocean", "Docker"],
    },
    {
      label: "Web3",
      cls: "bg-amber-50 border-amber-200 text-amber-600",
      tags: ["ERC721", "ERC20"],
    },
  ],
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="relative w-full aspect-[4/1] overflow-hidden bg-stone-100">
        <img
          src="/images/portfolio/cover.avif"
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* ── Identity ─────────────────────────────────── */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="-mt-16 mb-4">
          <AvatarLightbox />
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight leading-tight text-stone-800">
            {DATA.name.zh}
            <span className="ml-2.5 text-base font-normal text-stone-500">
              {DATA.name.en}
            </span>
          </h1>
          <p className="text-sm text-stone-500 mt-1">{DATA.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2 pb-8 border-b border-stone-200">
          {DATA.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors group"
            >
              <i
                className={`${link.icon} text-stone-400 group-hover:text-stone-600 transition-colors text-sm w-4 text-center`}
              />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-stone-600 leading-tight">
                  {link.label}
                </span>
                <span className="text-xs text-stone-400 leading-tight">
                  {link.tooltip}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Main content ─────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-14">
        {/* Skills */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
            技術能力 Skills
          </h2>
          <div className="flex flex-col gap-3 mb-8">
            {DATA.skillHighlights.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span className="text-sm text-stone-700 w-28 shrink-0">
                  {s.name}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-stone-400"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
                <span className="text-xs text-stone-400 w-16 shrink-0 text-right">
                  {s.level}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400 mb-3">其他開發技能</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {DATA.skillTagGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2.5 rounded-xl border border-stone-200 bg-stone-50/50 p-3.5"
              >
                <span className="text-xs font-medium text-stone-500 leading-tight">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-md border ${group.cls}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-200" />

        {/* Experience */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
            工作經歷 Experience
          </h2>
          <div className="flex flex-col">
            {DATA.experience.map((exp, i) => (
              <div key={i} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center shrink-0 w-4">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-stone-300 bg-white mt-3 shrink-0" />
                  {i < DATA.experience.length - 1 && (
                    <div className="w-px flex-1 bg-stone-200 my-1" />
                  )}
                </div>
                {/* Content */}
                <div
                  className={`flex flex-col gap-4 ${i < DATA.experience.length - 1 ? "pb-10" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold tracking-tight text-stone-800">
                        {exp.role}
                      </p>
                      <p className="text-sm font-medium text-stone-500 mt-0.5">
                        {exp.company}
                        {exp.location && (
                          <span className="font-normal text-stone-400">
                            {" "}
                            · {exp.location}
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="text-xs text-stone-400 tracking-wide shrink-0 mt-1">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 list-disc list-outside pl-4">
                    <li className="text-sm text-stone-600 leading-relaxed">
                      {exp.desc}
                    </li>
                    {exp.highlights?.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-stone-500 leading-relaxed"
                      >
                        {typeof h === "string" ? (
                          h
                        ) : (
                          <span>
                            {h.text.split(h.keyword).map((part, k, arr) => (
                              <span key={k}>
                                {part}
                                {k < arr.length - 1 && (
                                  <a
                                    href={h.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-stone-700 transition-colors"
                                  >
                                    {h.keyword}
                                  </a>
                                )}
                              </span>
                            ))}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-200" />

        {/* Projects */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
            個人專案 Projects
          </h2>
          <div className="flex flex-col gap-8">
            {DATA.projects.map((proj, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold tracking-tight text-stone-800">
                      {proj.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-stone-400">
                        {proj.year}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 border border-green-200 text-green-600">
                        {proj.status}
                      </span>
                      {proj.solo && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-500">
                          {proj.solo}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {proj.scale.map((s) => (
                      <span key={s} className="text-xs text-stone-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {proj.summary}
                </p>
                <ul className="flex flex-col gap-1.5 list-disc list-outside pl-4">
                  {proj.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-stone-500 leading-relaxed"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md border border-stone-200 text-stone-600 bg-stone-100/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {proj.note && (
                  <p className="text-xs text-stone-400 italic">{proj.note}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-200" />

        {/* Languages */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
            語言能力 Languages
          </h2>
          <div className="flex flex-col gap-4">
            {DATA.languages.map((l) => (
              <div key={l.lang} className="flex items-center gap-4">
                <span className="text-sm text-stone-700 w-10 shrink-0">
                  {l.lang}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-stone-400"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
                <span className="text-xs text-stone-400 w-16 shrink-0">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-200" />

        {/* Education */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
            學歷 Education
          </h2>
          <div className="flex flex-col divide-y divide-stone-200">
            {DATA.education.map((edu, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="font-medium tracking-tight text-sm text-stone-800">
                    {edu.school}
                  </p>
                  {edu.dept && (
                    <p className="text-xs text-stone-500 mt-0.5">{edu.dept}</p>
                  )}
                  <p className="text-xs text-stone-400 mt-0.5">{edu.note}</p>
                </div>
                <span className="text-xs text-stone-400 shrink-0">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-200" />

        {/* Photography */}
        <section>
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
                攝影 Photography
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                喜歡在出門的途中，將偶然入眼的美好瞬間收進鏡頭裡——或許是轉角的光線，或許是某個不起眼的角落。攝影對我來說不是創作，而是一種記錄生活的方式。作品在
                Unsplash 上的觀看數位居全站前 10%。
              </p>
            </div>
            <a
              href="https://unsplash.com/@floatflower"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="查看 Unsplash 作品集"
              className="shrink-0 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </div>
          <PhotoGrid />
        </section>
      </div>

      {/* ── Footer ───────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-stone-200 py-6 flex justify-between items-center">
          <span className="text-xs text-stone-400">
            © 2026 黃建霖 Jerry Huang
          </span>
          <span className="text-xs text-stone-400">floatflower.me</span>
        </div>
      </div>
    </div>
  );
}
