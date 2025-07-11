import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

class EmailService {
  static #transporter;

  static #createTransporter() {
    this.#transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  static async sendOrderConfirmation(name, email, order) {
    if (!this.#transporter) {
      this.#createTransporter();
    }

    try {
      const htmlTemplatePath = path.join(process.cwd(), 'templates', 'order-confirmation.html');
      let htmlTemplate = await fs.readFile(htmlTemplatePath, 'utf-8');

      Object.keys(order).forEach((key) => {
        htmlTemplate = htmlTemplate.replace(`{{${key}}}`, order[key]);
      });
      
      const mail = {
        from: `eStore Project <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Order Confirmation #${order.order_id} - Thank you for your purchase!`,
        html: htmlTemplate
      };

      await this.#transporter.sendMail(mail);
      return true;
    } catch (error) {
      console.error('Error sending order confirmation email:', error);
      return false;
    }
  }
}

export default EmailService;
