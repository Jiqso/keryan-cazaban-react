import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactDto } from '../dto/contact.dto';

@Injectable()
export class HomepageService {
  constructor(private readonly mailerService: MailerService) {}

  getData(): { message: string } {
    return {
      message: 'Hi, welcome to the homepage part of the api',
    };
  }

  async sendEmail(contactDto: ContactDto): Promise<{ message: string }> {
    const { email, message, name } = contactDto;

    await this.mailerService.sendMail({
      to: 'keryan.cazaban@gmail.com',
      subject: `New Contact Form Submission from ${name || email}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 30px;
                text-align: center;
                color: white;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .content {
                padding: 40px 30px;
              }
              .field {
                margin-bottom: 25px;
              }
              .field-label {
                font-weight: 600;
                color: #667eea;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
                line-height: 1.6;
                padding: 12px;
                background-color: #f8f9fa;
                border-radius: 4px;
                border-left: 3px solid #667eea;
              }
              .message-box {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 4px;
                border-left: 3px solid #764ba2;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">From</div>
                  <div class="field-value">${name || 'Anonymous'}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                  </div>
                </div>
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from your portfolio contact form</p>
                <p>© ${new Date().getFullYear()} Keryan Cazaban. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { message: 'Email sent successfully' };
  }
}
