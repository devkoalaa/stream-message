import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<!DOCTYPE html>' +
      '<html lang="pt-BR">' +
      '<head>' +
      '<meta charset="UTF-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">' +
      '<title>API LivePix</title>' +
      '</head>' +
      '<body style="margin: 0; padding: 0; font-family: \'Inter\', sans-serif;">' +
      '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">' +
      '<h1 style="font-size: 2rem; font-weight: bold; color: #000;">API LivePix</h1>' +
      '<p style="font-size: 1rem; color: #666;">API para recebimento de webhooks do LivePix</p>' +
      '</div>' +
      '</body>' +
      '</html>';
  }
}
