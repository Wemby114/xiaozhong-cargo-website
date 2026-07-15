export default function Footer() {
  return (
    <footer className="bg-[#0f2744] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
                  <path d="M8 12L20 6L32 12V20L20 34L8 20V12Z" fill="#6bb5d9" opacity="0.8" />
                  <path d="M14 16L20 12L26 16V22L20 28L14 22V16Z" fill="#c8954c" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">晓众物流</div>
                <div className="text-xs text-white/50">XIAO ZHONG CARGO</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              专注中亚五国国际货运，搭建中国与中亚之间的物流桥梁。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              物流服务
            </h4>
            <ul className="space-y-2.5">
              {['国际铁路运输', '国际公路运输', '国际航空货运', '多式联运', '报关清关'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/50 transition-colors hover:text-[#c8954c] cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              服务覆盖
            </h4>
            <ul className="space-y-2.5">
              {['哈萨克斯坦', '乌兹别克斯坦', '吉尔吉斯斯坦', '塔吉克斯坦', '土库曼斯坦'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/50 transition-colors hover:text-[#c8954c] cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              联系我们
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>电话：+86 XXX-XXXX-XXXX</li>
              <li>邮箱：contact@xiaozhongcargo.com</li>
              <li>地址：中国 · 新疆乌鲁木齐</li>
              <li>工作时间：周一至周六 9:00-18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} 晓众物流 Xiao Zhong Cargo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-white/40 cursor-pointer hover:text-white/60">隐私政策</span>
            <span className="text-sm text-white/40 cursor-pointer hover:text-white/60">服务条款</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
