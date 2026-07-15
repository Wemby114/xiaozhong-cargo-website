import type { Metadata } from 'next';
import { Noto_Sans_SC, Inter } from 'next/font/google';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '晓众物流 - 中亚五国专业国际货运服务',
    template: '%s | 晓众物流 Xiao Zhong Cargo',
  },
  description:
    '晓众物流（Xiao Zhong Cargo）专注中亚五国国际公路汽运，从新疆喀什出发经陆路口岸直达中亚，覆盖哈萨克斯坦、乌兹别克斯坦、吉尔吉斯斯坦、塔吉克斯坦、土库曼斯坦。',
  keywords: [
    '中亚物流',
    '国际货运',
    '晓众物流',
    'Xiao Zhong Cargo',
    '哈萨克斯坦物流',
    '乌兹别克斯坦货运',
    '中亚铁路运输',
    '中亚公路运输',
    '国际物流',
    '跨境货运',
  ],
  authors: [{ name: '晓众物流 Xiao Zhong Cargo' }],
  openGraph: {
    title: '晓众物流 - 中亚五国专业国际货运服务',
    description:
      '专注中亚五国国际货运，提供铁路、公路、航空及多式联运一站式物流解决方案。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${inter.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-noto-sans-sc), var(--font-inter), system-ui, sans-serif' }}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
