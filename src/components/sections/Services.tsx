'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: '国际公路汽运',
    titleEn: 'Road Freight',
    desc: 'TIR国际公路运输，门到门直达服务。从新疆喀什出发，经陆路口岸直达中亚五国。灵活便捷，适合各类符合国际运输规定的货物，提供整车与拼车方案。',
    features: ['TIR跨境直达', '门到门服务', '整车/拼车灵活选择', '定期班次发车'],
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="18" width="20" height="14" rx="2" />
        <path d="M22 22h10l6 6v4H22V22z" />
        <circle cx="10" cy="36" r="4" />
        <circle cx="32" cy="36" r="4" />
        <path d="M2 42h44" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '报关清关服务',
    titleEn: 'Customs Clearance',
    desc: '专业报关团队，熟悉中亚各国海关政策与清关流程。提供出口报关、进口清关、单证办理等一站式通关服务，确保货物合规高效通行。',
    features: ['出口报关', '进口清关', '单证代办', '合规咨询'],
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v40a2 2 0 002 2h36a2 2 0 002-2V12L34 2H14z" />
        <path d="M34 2v10h10" />
        <path d="M16 22h16" strokeLinecap="round" />
        <path d="M16 30h10" strokeLinecap="round" />
        <path d="M16 38h14" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
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
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8954c]">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0f2744] md:text-4xl">
            专业公路汽运服务
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#666666]">
            从新疆喀什出发，经陆路口岸直达中亚五国。提供整车与拼车方案，
            所有服务均符合正规国际运输规定。
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`group rounded-2xl border border-[#e0ddd8] bg-[#f8f7f4] p-8 transition-all duration-700 hover:border-[#0f2744]/20 hover:shadow-2xl hover:shadow-[#0f2744]/5 ${
                visibleItems.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f2744] text-white transition-colors group-hover:bg-[#c8954c]">
                {service.icon}
              </div>
              <h3 className="mb-1 text-xl font-bold text-[#0f2744]">
                {service.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-[#6bb5d9]">
                {service.titleEn}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#666666]">
                {service.desc}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#1a1a1a]"
                  >
                    <svg className="h-4 w-4 flex-shrink-0 text-[#c8954c]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cargo Types */}
        <div className="mt-16 rounded-2xl bg-[#0f2744] p-8 lg:p-12">
          <h3 className="mb-8 text-center text-xl font-bold text-white">
            可运输货物类型
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '机械设备', '电子产品', '纺织服装', '建材五金',
              '化工产品', '农产品', '汽车配件', '日用百货',
              '医疗器械', '新能源设备', '矿产材料', '跨境电商货物',
            ].map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#c8954c]/50 hover:bg-[#c8954c]/10 hover:text-white"
              >
                {type}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            * 所有货物均须符合正规国际运输规定及目的地国家进口要求
          </p>
        </div>
      </div>
    </section>
  );
}
