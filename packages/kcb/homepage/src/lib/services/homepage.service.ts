import { Injectable } from '@nestjs/common';
import { ContactDto } from '../dto/contact.dto';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';

@Injectable()
export class HomepageService {
  getData(): { message: string } {
    return {
      message: 'Hi, welcome to the homepage part of the api',
    };
  }

  async sendEmail(contactDto: ContactDto): Promise<{ message: string }> {
    const { email, message, name } = contactDto;

    // Gmail OAuth2 credentials from environment variables
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const USER = process.env.GMAIL_USER;

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      'https://developers.google.com/oauthplayground', // redirect URL, not used for refresh
    );
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken?.token,
      },
    });

    await transporter.sendMail({
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
