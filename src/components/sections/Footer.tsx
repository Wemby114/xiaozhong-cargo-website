import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0f2744] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white/10">
                <Image
                  src="/logo.jpg"
                  alt="晓众物流 Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
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
              {['国际公路汽运', '报关清关服务'].map((item) => (
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
              <li>电话：13308824967</li>
              <li>邮箱：caojiawei@zhonghuiscs.cn</li>
              <li>地址：中国 · 新疆喀什</li>
              <li>工作时间：周一至周五 9:00-18:00</li>
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
