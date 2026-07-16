import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const cargoTypeMap: Record<string, string> = {
  machinery: '机械设备',
  electronics: '电子产品',
  textile: '纺织服装',
  building: '建材五金',
  chemical: '化工产品',
  agriculture: '农产品',
  auto: '汽车配件',
  daily: '日用百货',
  ecommerce: '跨境电商货物',
  other: '其他',
};

const destinationMap: Record<string, string> = {
  kazakhstan: '哈萨克斯坦',
  uzbekistan: '乌兹别克斯坦',
  kyrgyzstan: '吉尔吉斯斯坦',
  tajikistan: '塔吉克斯坦',
  turkmenistan: '土库曼斯坦',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, cargoType, destination, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: '请填写必填项（姓名、邮箱、电话）' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.exmail.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: 'caojiawei@zhonghuiscs.cn',
        pass: '6Ywd2SnTD7hfG7sA',
      },
    });

    // Format email content
    const cargoTypeLabel = cargoType ? cargoTypeMap[cargoType] || cargoType : '未选择';
    const destinationLabel = destination ? destinationMap[destination] || destination : '未选择';

    const mailOptions = {
      from: '"晓众物流官网" <caojiawei@zhonghuiscs.cn>',
      to: 'caojiawei@zhonghuiscs.cn',
      subject: `【官网咨询】${name} - ${company || '个人客户'}`,
      html: `
        <div style="font-family: 'Microsoft YaHei', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #0f2744; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">晓众物流 - 新客户咨询</h2>
            <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.8;">来自官网联系表单</p>
          </div>
          <div style="background: #f8f7f4; padding: 24px; border: 1px solid #e0ddd8; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px; width: 100px;">姓名</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">公司</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${company || '未填写'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">邮箱</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">电话</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">货物类型</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${cargoTypeLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 14px;">目的国家</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${destinationLabel}</td>
              </tr>
            </table>
            ${message ? `
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e0ddd8;">
              <div style="color: #666; font-size: 14px; margin-bottom: 8px;">需求描述</div>
              <div style="background: white; padding: 12px; border-radius: 6px; font-size: 14px; line-height: 1.6;">${message}</div>
            </div>
            ` : ''}
          </div>
          <div style="background: #f0ede8; padding: 12px 24px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #999;">此邮件由晓众物流官网自动发送</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: '咨询信息已提交，我们将尽快与您联系',
    });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: '邮件发送失败，请稍后重试或直接拨打电话：13308824967' },
      { status: 500 }
    );
  }
}
