'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid items-center gap-16 lg:grid-cols-2 transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-[#0f2744] p-12 lg:p-16">
              {/* Geometric background */}
              <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6bb5d9" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-grid)" />
              </svg>

              <div className="relative z-10">
                {/* Logo display */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white/10 backdrop-blur">
                    <Image
                      src="/logo.png"
                      alt="晓众物流 Logo"
                      width={64}
                      height={64}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">晓众物流</div>
                    <div className="text-sm text-white/60">XIAO ZHONG CARGO</div>
                  </div>
                </div>

                <blockquote className="mb-8 border-l-2 border-[#c8954c] pl-6">
                  <p className="text-lg leading-relaxed text-white/80 italic">
                    "以专业的物流能力，搭建中国与中亚之间的贸易桥梁。
                    每一次运输，都是信任的传递。"
                  </p>
                </blockquote>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-white/5 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-[#c8954c]">10+</div>
                    <div className="mt-1 text-sm text-white/60">年行业深耕</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-[#6bb5d9]">5</div>
                    <div className="mt-1 text-sm text-white/60">中亚国家覆盖</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-[#c8954c]">1000+</div>
                    <div className="mt-1 text-sm text-white/60">服务客户</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-[#6bb5d9]">99%</div>
                    <div className="mt-1 text-sm text-white/60">准时交付率</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8954c]">
              About Us
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#0f2744] md:text-4xl">
              关于晓众物流
            </h2>
            <div className="space-y-4 text-[#666666] leading-relaxed">
              <p>
                晓众物流（Xiao Zhong Cargo）是一家专注于中亚五国国际货运的专业物流公司。
                我们致力于为中国与中亚之间的贸易往来提供高效、安全、可靠的物流解决方案。
              </p>
              <p>
                多年来，我们深耕中亚市场，建立了完善的物流网络和丰富的运营经验。
                从哈萨克斯坦的阿斯塔纳到乌兹别克斯坦的塔什干，从吉尔吉斯斯坦的比什凯克
                到塔吉克斯坦的杜尚别，再到土库曼斯坦的阿什哈巴德，我们的服务网络覆盖中亚全境。
              </p>
              <p>
                我们专注于国际公路汽运，从新疆喀什出发经陆路口岸直达中亚各国，
                可根据客户的货物类型、时效要求和预算，量身定制最优运输方案。
                所有服务均严格遵守国际运输法规，确保货物安全合规送达。
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: '专业', en: 'Professional' },
                { label: '可靠', en: 'Reliable' },
                { label: '高效', en: 'Efficient' },
              ].map((v) => (
                <div key={v.label} className="rounded-xl border border-[#e0ddd8] p-4 text-center">
                  <div className="text-lg font-bold text-[#0f2744]">{v.label}</div>
                  <div className="text-xs text-[#6bb5d9]">{v.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
