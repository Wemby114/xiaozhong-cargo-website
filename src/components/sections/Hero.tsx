'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0f2744]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2744] via-[#1a365d] to-[#0f2744]" />
        {/* Geometric pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6bb5d9" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-[#6bb5d9]/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-[#c8954c]/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6bb5d9]/30 bg-[#6bb5d9]/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#6bb5d9] animate-pulse-glow" />
              <span className="text-sm font-medium text-[#6bb5d9]">
                专注中亚五国国际货运
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              连接中国
              <span className="text-[#c8954c]"> 与中亚 </span>
              的物流桥梁
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
              晓众物流深耕中亚市场，提供铁路、公路、航空及多式联运一站式国际货运服务。
              覆盖哈萨克斯坦、乌兹别克斯坦、吉尔吉斯斯坦、塔吉克斯坦、土库曼斯坦全境。
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="rounded-lg bg-[#c8954c] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#b8853c] hover:shadow-xl hover:shadow-[#c8954c]/20"
              >
                立即咨询
              </button>
              <button
                onClick={scrollToServices}
                className="rounded-lg border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                了解服务
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">5</div>
                <div className="mt-1 text-sm text-white/50">中亚国家覆盖</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="mt-1 text-sm text-white/50">年行业经验</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="mt-1 text-sm text-white/50">服务客户</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className={`hidden transition-all duration-1000 delay-300 lg:block ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Central Asia Map Visualization */}
              <svg viewBox="0 0 500 400" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background glow */}
                <circle cx="250" cy="200" r="180" fill="#6bb5d9" opacity="0.05" />
                <circle cx="250" cy="200" r="120" fill="#6bb5d9" opacity="0.08" />

                {/* Route lines */}
                <path
                  d="M 80 200 Q 150 150 200 180 T 300 160 T 420 200"
                  fill="none"
                  stroke="#c8954c"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  className="animate-route-flow"
                  opacity="0.6"
                />
                <path
                  d="M 80 220 Q 160 260 220 230 T 320 250 T 420 220"
                  fill="none"
                  stroke="#6bb5d9"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  className="animate-route-flow"
                  opacity="0.6"
                />
                <path
                  d="M 100 180 Q 180 120 250 140 T 380 170"
                  fill="none"
                  stroke="#c8954c"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                  className="animate-route-flow"
                  opacity="0.4"
                />

                {/* City nodes */}
                {/* China origin */}
                <circle cx="80" cy="200" r="8" fill="#c8954c" />
                <circle cx="80" cy="200" r="12" fill="#c8954c" opacity="0.3" className="animate-pulse-glow" />
                <text x="80" y="225" textAnchor="middle" fill="white" fontSize="11" fontFamily="Noto Sans SC">中国</text>

                {/* Kazakhstan */}
                <circle cx="200" cy="160" r="6" fill="#6bb5d9" />
                <circle cx="200" cy="160" r="10" fill="#6bb5d9" opacity="0.3" className="animate-pulse-glow" />
                <text x="200" y="145" textAnchor="middle" fill="white" fontSize="10" fontFamily="Noto Sans SC">哈萨克斯坦</text>

                {/* Uzbekistan */}
                <circle cx="280" cy="200" r="6" fill="#6bb5d9" />
                <circle cx="280" cy="200" r="10" fill="#6bb5d9" opacity="0.3" className="animate-pulse-glow" />
                <text x="280" y="225" textAnchor="middle" fill="white" fontSize="10" fontFamily="Noto Sans SC">乌兹别克斯坦</text>

                {/* Kyrgyzstan */}
                <circle cx="320" cy="160" r="5" fill="#6bb5d9" />
                <text x="320" y="145" textAnchor="middle" fill="white" fontSize="9" fontFamily="Noto Sans SC">吉尔吉斯斯坦</text>

                {/* Tajikistan */}
                <circle cx="340" cy="220" r="5" fill="#6bb5d9" />
                <text x="340" y="240" textAnchor="middle" fill="white" fontSize="9" fontFamily="Noto Sans SC">塔吉克斯坦</text>

                {/* Turkmenistan */}
                <circle cx="240" cy="260" r="5" fill="#6bb5d9" />
                <text x="240" y="280" textAnchor="middle" fill="white" fontSize="9" fontFamily="Noto Sans SC">土库曼斯坦</text>

                {/* Destination */}
                <circle cx="420" cy="200" r="8" fill="#c8954c" />
                <circle cx="420" cy="200" r="12" fill="#c8954c" opacity="0.3" className="animate-pulse-glow" />
                <text x="420" y="225" textAnchor="middle" fill="white" fontSize="11" fontFamily="Noto Sans SC">中亚</text>

                {/* Truck icon */}
                <g transform="translate(140, 175)" opacity="0.8">
                  <rect x="0" y="0" width="20" height="12" rx="2" fill="#c8954c" />
                  <rect x="20" y="4" width="10" height="8" rx="1" fill="#c8954c" />
                  <circle cx="6" cy="14" r="3" fill="#6bb5d9" />
                  <circle cx="26" cy="14" r="3" fill="#6bb5d9" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z"
            fill="#f8f7f4"
          />
        </svg>
      </div>
    </section>
  );
}
