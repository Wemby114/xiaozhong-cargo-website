'use client';

import { useEffect, useRef, useState } from 'react';

const advantages = [
  {
    num: '01',
    title: '深耕中亚市场',
    desc: '多年中亚物流运营经验，熟悉各国海关政策、运输法规和清关流程，有效规避运输风险。',
  },
  {
    num: '02',
    title: '全程可视化追踪',
    desc: 'GPS + 物联网技术实现货物全程实时追踪，客户可随时查询货物位置和运输状态。',
  },
  {
    num: '03',
    title: '本地化服务团队',
    desc: '在中亚主要城市设有本地服务团队，提供母语沟通、快速响应的在地化服务支持。',
  },
  {
    num: '04',
    title: '灵活定制方案',
    desc: '根据货物特性、时效要求和预算，量身定制最优运输方案，平衡成本与效率。',
  },
  {
    num: '05',
    title: '合规安全保障',
    desc: '严格遵守国际运输法规，货物保险全覆盖，专业团队处理各类突发情况。',
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
