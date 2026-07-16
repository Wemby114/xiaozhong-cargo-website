'use client';

import { useState, useEffect, useRef } from 'react';

const countries = [
  { id: 'kazakhstan', name: '哈萨克斯坦', baseRate: 280, days: '5-8天' },
  { id: 'uzbekistan', name: '乌兹别克斯坦', baseRate: 380, days: '7-12天' },
  { id: 'kyrgyzstan', name: '吉尔吉斯斯坦', baseRate: 260, days: '5-7天' },
  { id: 'tajikistan', name: '塔吉克斯坦', baseRate: 420, days: '8-12天' },
  { id: 'turkmenistan', name: '土库曼斯坦', baseRate: 480, days: '10-15天' }
];

const cargoTypes = [
  { id: 'machinery', name: '机械设备', weightFactor: 1.2 },
  { id: 'electronics', name: '电子产品', weightFactor: 1.0 },
  { id: 'daily', name: '日用百货', weightFactor: 0.9 },
  { id: 'textile', name: '纺织服装', weightFactor: 0.8 },
  { id: 'building', name: '建材', weightFactor: 1.3 },
  { id: 'auto', name: '汽车配件', weightFactor: 1.1 },
  { id: 'agricultural', name: '农产品', weightFactor: 0.85 },
  { id: 'other', name: '其他', weightFactor: 1.0 }
];

export default function FreightCalculator() {
  const [destination, setDestination] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');
  const [needCustoms, setNeedCustoms] = useState(false);
  const [result, setResult] = useState<{ price: string; days: string; note: string } | null>(null);
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

  const calculate = () => {
    if (!destination || !cargoType || (!weight && !volume)) {
      return;
    }

    const country = countries.find(c => c.id === destination);
    const cargo = cargoTypes.find(c => c.id === cargoType);

    if (!country || !cargo) return;

    // 计算计费重量（取实际重量和体积重量的较大值）
    const actualWeight = parseFloat(weight) || 0;
    const actualVolume = parseFloat(volume) || 0;
    const volumeWeight = actualVolume * 167; // 体积转重量系数
    const chargeableWeight = Math.max(actualWeight, volumeWeight);

    if (chargeableWeight <= 0) return;

    // 基础运费 = 基准单价 × 货物类型系数 × 计费重量
    let basePrice = country.baseRate * cargo.weightFactor * chargeableWeight;

    // 小批量附加费（5吨以下）
    if (chargeableWeight < 5000) {
      basePrice *= 1.3;
    }

    // 报关服务费
    const customsFee = needCustoms ? 1500 : 0;

    const totalPrice = basePrice + customsFee;

    setResult({
      price: `¥${Math.round(totalPrice).toLocaleString()}`,
      days: country.days,
      note: chargeableWeight < 5000
        ? '此为拼车运输参考价，整车运输请联系客服获取精准报价'
        : '此为整车运输参考价，实际价格以客服报价为准'
    });
  };

  const reset = () => {
    setDestination('');
    setCargoType('');
    setWeight('');
    setVolume('');
    setNeedCustoms(false);
    setResult(null);
  };

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="py-20 bg-[var(--bg-secondary)]"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            运费估算
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            输入货物信息，快速获取参考报价
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[var(--border-color)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 目的国家 */}
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  目的国家 *
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all bg-white"
                >
                  <option value="">请选择国家</option>
                  {countries.map(country => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 货物类型 */}
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  货物类型 *
                </label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all bg-white"
                >
                  <option value="">请选择货物类型</option>
                  {cargoTypes.map(cargo => (
                    <option key={cargo.id} value={cargo.id}>
                      {cargo.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 重量 */}
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  货物重量（kg）
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="如：5000"
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all"
                />
              </div>

              {/* 体积 */}
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  货物体积（m³）
                </label>
                <input
                  type="number"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="如：20"
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* 报关服务 */}
            <div className="mt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={needCustoms}
                    onChange={(e) => setNeedCustoms(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-checked:bg-[var(--accent-color)] rounded-full transition-colors"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  需要报关清关服务（+¥1,500）
                </span>
              </label>
            </div>

            {/* 按钮 */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={calculate}
                disabled={!destination || !cargoType || (!weight && !volume)}
                className="flex-1 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                计算运费
              </button>
              <button
                onClick={reset}
                className="px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-semibold rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
              >
                重置
              </button>
            </div>

            {/* 结果展示 */}
            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-dark)] rounded-xl text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm opacity-80">参考运费</span>
                  <span className="text-3xl font-bold">{result.price}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm opacity-80">预计时效</span>
                  <span className="text-lg font-semibold">{result.days}</span>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-80">{result.note}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  >
                    获取精准报价
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-[var(--text-light)] mt-6">
            * 以上价格为参考报价，实际运费以客服确认为准。价格受季节、油价、汇率等因素影响。
          </p>
        </div>
      </div>
    </section>
  );
}
