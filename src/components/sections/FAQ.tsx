'use client';

import { useState, useEffect, useRef } from 'react';

const faqData = [
  {
    question: '发货到中亚五国需要多长时间？',
    answer: '根据目的地不同，公路运输时效如下：哈萨克斯坦约5-8天，乌兹别克斯坦约7-12天，吉尔吉斯斯坦约5-7天，塔吉克斯坦约8-12天，土库曼斯坦约10-15天。具体时效受口岸通关、天气等因素影响。'
  },
  {
    question: '哪些货物可以通过公路运输到中亚？',
    answer: '我们承接符合国际运输规定的各类货物，包括：机械设备、日用百货、电子产品、建材、化工产品（非危险品）、农产品、纺织服装、汽车配件等。危险品、违禁品不在承运范围内。'
  },
  {
    question: '整车运输和拼车运输有什么区别？',
    answer: '整车运输（FTL）适合货物量大（通常10吨以上或装满一车）的情况，直达目的地，时效更快；拼车运输（LTL）适合货物量较小的情况，与其他客户的货物拼车，费用更经济，但时效稍长。'
  },
  {
    question: '报关清关手续怎么办理？',
    answer: '我们提供一站式报关清关服务。您只需提供货物清单、发票、装箱单等基本资料，我们的专业报关团队会代为办理出口报关和目的国进口清关手续，全程无需您操心。'
  },
  {
    question: '运费是如何计算的？',
    answer: '运费主要根据以下因素计算：货物重量/体积、运输距离、货物类型、是否需要报关服务等。您可以使用网站上的"运费估算"工具获取参考报价，或联系我们的客服获取精准报价。'
  },
  {
    question: '货物在运输途中安全如何保障？',
    answer: '我们采取多重安全保障措施：正规TIR国际运输资质、专业司机团队、货物保险服务、定期班次发车、全程信息跟踪。如发生货损货差，按保险条款理赔。'
  },
  {
    question: '从喀什出发到中亚有哪些口岸？',
    answer: '从喀什出发主要有以下口岸：吐尔尕特口岸（通往吉尔吉斯斯坦）、伊尔克什坦口岸（通往吉尔吉斯斯坦）、红其拉甫口岸（通往巴基斯坦，可中转）。我们根据目的地选择最优路线。'
  },
  {
    question: '如何查询货物运输状态？',
    answer: '发货后，您的专属客服会定期向您汇报货物运输进度，包括发车时间、口岸通关情况、预计到达时间等。您也可以通过电话或微信随时联系客服查询。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 bg-[var(--bg-primary)]"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            常见问题
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            关于中亚公路运输，您可能想了解的问题
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 border border-[var(--border-color)] rounded-lg overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <span className="text-base font-semibold text-[var(--text-primary)] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--accent-color)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-60 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-5 text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[var(--text-secondary)] mb-4">
            还有其他问题？欢迎直接联系我们
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系我们
          </a>
        </div>
      </div>
    </section>
  );
}
