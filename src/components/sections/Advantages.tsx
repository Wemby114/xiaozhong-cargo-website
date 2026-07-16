'use client';

import { useEffect, useRef, useState } from 'react';

const advantages = [
  {
    num: '01',
    title: '喀什口岸直达',
    desc: '从新疆喀什出发，依托陆路口岸优势，路线短、通关快，为中国至中亚货物提供高效便捷的运输通道。',
  },
  {
    num: '02',
    title: '专业报关团队',
    desc: '熟悉中亚各国海关政策与清关流程，专业团队代办进出口报关手续，确保货物合规高效通行。',
  },
  {
    num: '03',
    title: '灵活定制方案',
    desc: '根据货物特性、时效要求和预算，量身定制整车或拼车运输方案，平衡成本与效率。',
  },
  {
    num: '04',
    title: '1v1专属客服',
    desc: '每位客户配备专属客服对接，从咨询到交付全程跟进，及时响应各类需求与问题。',
  },
  {
    num: '05',
    title: '合规安全保障',
    desc: '严格遵守国际运输法规，TIR资质认证，货物保险全覆盖，专业团队处理各类突发情况。',
  },
  {
    num: '06',
    title: '一站式服务',
    desc: '从提货、报关、运输、清关到配送，提供端到端的全流程物流服务，省心省力。',
  },
];

export default function Advantages() {
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
    <section id="advantages" className="bg-[#f8f7f4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8954c]">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0f2744] md:text-4xl">
            核心优势
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#666666]">
            选择晓众物流，就是选择专业、可靠、高效的中亚物流合作伙伴
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div
              key={item.num}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl border border-[#e0ddd8] bg-white p-8 transition-all duration-700 hover:border-[#c8954c]/30 hover:shadow-xl ${
                visibleItems.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-[#0f2744]/5 transition-colors group-hover:text-[#c8954c]/10">
                {item.num}
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f2744] text-sm font-bold text-white transition-colors group-hover:bg-[#c8954c]">
                  {item.num}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#0f2744]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#666666]">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#c8954c] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
