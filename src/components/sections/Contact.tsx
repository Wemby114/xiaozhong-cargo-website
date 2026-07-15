'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    cargoType: '',
    origin: '',
    destination: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-[#f8f7f4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#c8954c]">
            Contact Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#0f2744] md:text-4xl">
            联系我们
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#666666]">
            有货运需求？填写以下信息，我们的专业团队将在24小时内与您联系
          </p>
        </div>

        <div
          className={`grid gap-12 lg:grid-cols-5 transition-all duration-1000 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#0f2744] p-8 text-white lg:p-10">
              <h3 className="mb-6 text-xl font-bold">联系方式</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5 text-[#c8954c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">电话</div>
                    <div className="font-medium">+86 XXX-XXXX-XXXX</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5 text-[#c8954c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">邮箱</div>
                    <div className="font-medium">contact@xiaozhongcargo.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5 text-[#c8954c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">地址</div>
                    <div className="font-medium">中国 · 新疆乌鲁木齐</div>
                    <div className="text-sm text-white/50">中亚物流枢纽城市</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <svg className="h-5 w-5 text-[#c8954c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/60">工作时间</div>
                    <div className="font-medium">周一至周六 9:00 - 18:00</div>
                    <div className="text-sm text-white/50">7×24小时紧急响应</div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm text-white/40">
                  我们承诺对所有咨询信息严格保密，仅用于业务沟通。
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-[#e0ddd8] bg-white p-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#0f2744]">提交成功</h3>
                  <p className="text-[#666666]">
                    感谢您的咨询！我们的专业团队将在24小时内与您联系。
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', cargoType: '', origin: '', destination: '', message: '' }); }}
                    className="mt-6 rounded-lg bg-[#0f2744] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1a365d]"
                  >
                    继续咨询
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#e0ddd8] bg-white p-8 lg:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                      姓名 <span className="text-[#c8954c]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                      公司
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="公司名称"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                      邮箱 <span className="text-[#c8954c]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                      电话 <span className="text-[#c8954c]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                      placeholder="联系电话"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                      货物类型
                    </label>
                    <select
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                    >
                      <option value="">请选择货物类型</option>
                      <option value="machinery">机械设备</option>
                      <option value="electronics">电子产品</option>
                      <option value="textile">纺织服装</option>
                      <option value="building">建材五金</option>
                      <option value="chemical">化工产品</option>
                      <option value="agriculture">农产品</option>
                      <option value="auto">汽车配件</option>
                      <option value="daily">日用百货</option>
                      <option value="ecommerce">跨境电商货物</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                      目的国家
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                    >
                      <option value="">请选择目的国家</option>
                      <option value="kazakhstan">哈萨克斯坦</option>
                      <option value="uzbekistan">乌兹别克斯坦</option>
                      <option value="kyrgyzstan">吉尔吉斯斯坦</option>
                      <option value="tajikistan">塔吉克斯坦</option>
                      <option value="turkmenistan">土库曼斯坦</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-1.5 block text-sm font-medium text-[#1a1a1a]">
                    需求描述
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-[#e0ddd8] bg-[#f8f7f4] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none transition-colors focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744] resize-none"
                    placeholder="请描述您的货运需求，包括货物重量、体积、期望时效等..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#c8954c] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#b8853c] hover:shadow-lg hover:shadow-[#c8954c]/20"
                >
                  提交咨询
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
