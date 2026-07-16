import QRCode from 'qrcode';
import path from 'path';
import fs from 'fs';

const websiteUrl = 'https://feeabb29-0b57-4337-9e45-0d1b4f34f060.dev.coze.site';
const outputPath = path.join(process.env.COZE_WORKSPACE_PATH || '/workspace/projects', 'public', 'qr-code.png');

async function generateQR() {
  try {
    await QRCode.toFile(outputPath, websiteUrl, {
      width: 512,
      margin: 2,
      color: {
        dark: '#0f2744', // 深海蓝，与品牌色一致
        light: '#ffffff'
      }
    });
    console.log('二维码已生成:', outputPath);
  } catch (err) {
    console.error('生成失败:', err);
  }
}

generateQR();
