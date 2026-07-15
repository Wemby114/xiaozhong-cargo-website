'use client';

import { useEffect, useRef, useState } from 'react';

const countries = [
  {
    name: '哈萨克斯坦',
    nameEn: 'Kazakhstan',
    capital: '阿斯塔纳',
    desc: '中亚最大经济体，"一带一路"重要节点，铁路网络发达',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21V7l9-4 9 4v14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: '乌兹别克斯坦',
    nameEn: 'Uzbekistan',
    capital: '塔什干',
    desc: '中亚人口最多国家，纺织、农业、矿业贸易活跃',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7L12 3L4 7V17L12 21L20 17V7Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 7L12 11L20 7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11V21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: '吉尔吉斯斯坦',
    nameEn: 'Kyrgyzstan',
    capital: '比什凯克',
    desc: '中吉乌铁路关键通道，跨境电商货物重要中转地',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: '塔吉克斯坦',
    nameEn: 'Tajikistan',
    capital: '杜尚别',
    desc: '山地国家，矿产资源丰富，基础设施建设需求大',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 21L12 3L16 21" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 21L8 13L10 17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 21L16 11L14 17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: '土库曼斯坦',
    nameEn: 'Turkmenistan',
    capital: '阿什哈巴德',
    desc: '能源资源丰富，天然气出口大国，过境运输枢纽',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1V4" strokeLinecap="round" />
        <path d="M12 20V23" strokeLinecap="round" />
        <path d="M4.22 4.22L6.34 6.34" strokeLinecap="round" />
        <path d="M17.66 17.66L19.78 19.78" strokeLinecap="round" />
        <path d="M1 12H4" strokeLinecap="round" />
        <path d="M20 12H23" strokeLinecap="round" />
        <path d="M4.22 19.78L6.34 17.66" strokeLinecap="round" />
        <path d="M17.66 6.34L19.78 4.22" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Coverage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="coverage" className="bg-[#f8f7f4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8954c]">
            Service Coverage
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0f2744] md:text-4xl">
            中亚五国全覆盖
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#666666]">
            我们的物流网络深入中亚每一个国家，从主要城市到偏远地区，
            为您提供门到门的货运服务
          </p>
        </div>

        {/* Country Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {countries.map((country, index) => (
            <div
              key={country.name}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`group rounded-2xl border border-[#e0ddd8] bg-white p-6 transition-all duration-700 hover:border-[#c8954c]/30 hover:shadow-xl hover:shadow-[#c8954c]/5 ${
                visibleItems.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0f2744]/5 text-[#0f2744] transition-colors group-hover:bg-[#c8954c]/10 group-hover:text-[#c8954c]">
                {country.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold text-[#0f2744]">
                {country.name}
              </h3>
              <p className="mb-3 text-xs font-medium text-[#6bb5d9]">
                {country.nameEn} · 首都：{country.capital}
              </p>
              <p className="text-sm leading-relaxed text-[#666666]">
                {country.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Route Info */}
        <div className="mt-16 rounded-2xl border border-[#e0ddd8] bg-white p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center lg:text-left">
              <div className="mb-2 text-4xl font-bold text-[#0f2744]">TIR</div>
              <div className="text-sm font-medium text-[#666666]">国际公路运输资质</div>
              <div className="mt-1 text-xs text-[#6bb5d9]">TIR Convention</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="mb-2 text-4xl font-bold text-[#0f2744]">20+</div>
              <div className="text-sm font-medium text-[#666666]">核心物流节点</div>
              <div className="mt-1 text-xs text-[#6bb5d9]">Hub Cities</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="mb-2 text-4xl font-bold text-[#0f2744]">7×24</div>
              <div className="text-sm font-medium text-[#666666]">全天候运营</div>
              <div className="mt-1 text-xs text-[#6bb5d9]">Non-stop Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
