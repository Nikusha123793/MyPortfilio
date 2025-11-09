import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  isSuccess = false;

  async submitForm() {
    if (this.isSubmitting) return;

    // Basic validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showMessage('Please fill in all required fields', false);
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.formData.email)) {
      this.showMessage('Please enter a valid email address', false);
      return;
    }

    this.isSubmitting = true;
    this.showMessage('Sending your message...', true);

    try {
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        from_phone: this.formData.phone || 'Not provided',
        message: this.formData.message,
        to_email: 'cercvadzenikoloz95@gmail.com',
        reply_to: this.formData.email,
        subject: `New message from ${this.formData.name}`,
        date: new Date().toLocaleString('en-US')
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_rpn568a',    // Replace with your EmailJS service ID
        'template_l88cvwi',   // Replace with your EmailJS template ID
        templateParams,
        'PYB4vKdvDvJxq4uIV'     // Replace with your EmailJS public key
      );

      this.showMessage('Thank you! Your message has been sent successfully. I will get back to you within 24 hours.', true);
      this.resetForm();
    } catch (error) {
      console.error('Error sending email:', error);
      this.showMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.', false);
    } finally {
      this.isSubmitting = false;
    }
  }

  private showMessage(message: string, success: boolean) {
    this.submitMessage = message;
    this.isSuccess = success;

    // Clear message after 5 seconds for success, 8 seconds for errors
    setTimeout(() => {
      this.submitMessage = '';
    }, success ? 5000 : 8000);
  }

  private resetForm() {
    this.formData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      const offsetTop = element.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

}