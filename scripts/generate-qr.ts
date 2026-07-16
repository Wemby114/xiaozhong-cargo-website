import QRCode from 'qrcode';
import { Jimp } from 'jimp';
import path from 'path';

const websiteUrl = 'https://feeabb29-0b57-4337-9e45-0d1b4f34f060.dev.coze.site';
const workspacePath = process.env.COZE_WORKSPACE_PATH || '/workspace/projects';
const qrOutputPath = path.join(workspacePath, 'public', 'qr-code.png');
const logoPath = path.join(workspacePath, 'public', 'logo.jpg');
const qrTempPath = path.join(workspacePath, 'public', 'qr-temp.png');

async function generateQRWithLogo() {
  try {
    // 1. 生成临时二维码
    await QRCode.toFile(qrTempPath, websiteUrl, {
      width: 512,
      margin: 2,
      color: {
        dark: '#0f2744',
        light: '#ffffff'
      }
    });
    console.log('临时二维码已生成');

    // 2. 读取二维码和logo
    const qrImage = await Jimp.read(qrTempPath);
    const logoImage = await Jimp.read(logoPath);

    // 3. 计算logo大小（二维码的20%）
    const qrSize = qrImage.width;
    const logoSize = Math.floor(qrSize * 0.22);

    // 4. 缩放logo
    logoImage.resize({ w: logoSize, h: logoSize });

    // 5. 创建白色圆形背景（让logo更突出）
    const padding = 8;
    const bgSize = logoSize + padding * 2;
    const bgImage = new Jimp({ width: bgSize, height: bgSize, color: 0xffffffff });

    // 6. 将logo合成到白色背景上，再合成到二维码中心
    const centerX = (qrSize - bgSize) / 2;
    const centerY = (qrSize - bgSize) / 2;

    // 先合成logo到背景
    bgImage.composite(logoImage, padding, padding);

    // 再合成背景到二维码
    qrImage.composite(bgImage, centerX, centerY);

    // 7. 保存最终二维码
    await qrImage.write(qrOutputPath);
    console.log('带logo的二维码已生成:', qrOutputPath);

    // 8. 删除临时文件
    const fs = await import('fs');
    fs.unlinkSync(qrTempPath);
    console.log('临时文件已清理');

  } catch (err) {
    console.error('生成失败:', err);
  }
}

generateQRWithLogo();
