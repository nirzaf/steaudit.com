'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { HiPhone, HiMail, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { supabase } from '../lib/supabase';
import type { ContactFormData } from '../types/contact';
import { toast } from 'react-hot-toast';
import { useLocale } from './LocaleProvider';

export default function Contact() {
  const { locale, isRTL } = useLocale();
  const t = (en: string, ar: string) => (locale === 'ar' ? ar : en);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const domain = window.location.hostname;
      const subjectWithDomain = `${formData.subject} (${domain})`;

      const { error } = await supabase
        .from('quadrate_contact_submissions')
        .insert([{
          ...formData,
          subject: subjectWithDomain
        }]);

      if (error) throw error;

      toast.success(locale === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(locale === 'ar' ? 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative bg-white overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,32,74,0.03),transparent_40%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,32,74,0.03),transparent_40%)] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-primary mb-4">
            {t('Get in Touch', 'تواصل معنا')}
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
        </div>

        {/* Business Hours Card - Full Width */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 border border-brand-primary/10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-brand-primary mb-6 text-center">
                {t('Business Hours', 'ساعات العمل')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-brand-primary/5 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="font-medium text-brand-primary mb-3">{t('Weekdays', 'أيام الأسبوع')}</h4>
                    <p className="text-brand-primary/70">{t('Sunday - Thursday', 'الأحد - الخميس')}</p>
                    <p className="text-brand-primary font-medium">{t('8:00 AM - 6:00 PM', '8:00 صباحاً - 6:00 مساءً')}</p>
                  </div>
                </div>
                <div className="bg-brand-primary/5 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="font-medium text-brand-primary mb-3">{t('Saturday', 'السبت')}</h4>
                    <p className="text-brand-primary/70">{t('Weekend', 'نهاية الأسبوع')}</p>
                    <p className="text-brand-primary font-medium">{t('9:00 AM - 3:00 PM', '9:00 صباحاً - 3:00 مساءً')}</p>
                  </div>
                </div>
                <div className="bg-brand-primary/5 rounded-lg p-6">
                  <div className="text-center">
                    <h4 className="font-medium text-brand-primary mb-3">{t('Friday', 'الجمعة')}</h4>
                    <p className="text-brand-primary/70">{t('Weekend', 'نهاية الأسبوع')}</p>
                    <p className="text-brand-primary font-medium">{t('Closed', 'مغلق')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Phone Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-brand-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-primary/5 rounded-lg">
                    <HiPhone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-1">{t('Phone', 'هاتف')}</h3>
                    <a 
                      href="tel:+97450008194" 
                      className="text-lg text-brand-primary/80 hover:text-brand-primary hover:underline"
                    >
                      +974 5000 8194
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 border border-brand-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-primary/5 rounded-lg">
                    <HiMail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-1">{t('Email', 'البريد الإلكتروني')}</h3>
                    <a 
                      href="mailto:info@steaudit.com" 
                      className="text-lg text-brand-primary/80 hover:text-brand-primary hover:underline"
                    >
                      info@steaudit.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-primary/90">
                    {t('Name', 'الاسم')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-brand-primary/5 border border-brand-primary/10 rounded-md shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-primary placeholder-brand-primary/50"
                    placeholder={t('Your name', 'اسمك')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-primary/90">
                    {t('Email', 'البريد الإلكتروني')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-brand-primary/5 border border-brand-primary/10 rounded-md shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-primary placeholder-brand-primary/50"
                    placeholder={t('your@email.com', 'your@email.com')}
                  />
                </div>
              <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-primary/90">{t('Subject', 'الموضوع')}</label>
                  <input
                    type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-brand-primary/5 border border-brand-primary/10 rounded-md shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-primary placeholder-brand-primary/50"
                  placeholder={t('Subject of your message', 'موضوع رسالتك')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-primary/90">{t('Message', 'الرسالة')}</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-brand-primary/5 border border-brand-primary/10 rounded-md shadow-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-primary placeholder-brand-primary/50"
                  placeholder={t('Your message', 'رسالتك')}
                ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-brand-primary text-white px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-brand-primary/90'
                  }`}
                >
                  {isSubmitting ? t('Sending...', 'جاري الإرسال...') : t('Send Message', 'إرسال الرسالة')}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map and Address */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Map and Address Cards */}
              <div className="space-y-6">
                {/* Umm Ghuwalina Office */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-brand-primary/10">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6769879792673!2d51.54228617593193!3d25.281449228282085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c50060f6cb5f%3A0xefd74124f3bb15e2!2sSTE%20Auditing%20Services!5e0!3m2!1sen!2suk!4v1737905505800!5m2!1sen!2suk" 
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-t-lg"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-brand-primary/5 rounded-lg flex-shrink-0">
                        <HiLocationMarker className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2">{t('Umm Ghuwalina Office', 'مكتب أم غويلينة')}</h3>
                    <p className="text-brand-primary/70 leading-relaxed">
                      {t('Flat No. 2, Floor No. 1,', 'شقة رقم 2، الطابق الأول،')}<br />
                      {t('Street No. 220, Building No. 9,', 'شارع رقم 220، مبنى رقم 9،')}<br />
                      {t('Zone 27, Umm Ghuwalina, Qatar', 'منطقة 27، أم غويلينة، قطر')}
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/Evu1fY4TYMzaqma5A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-sm text-brand-primary/80 hover:text-brand-primary hover:underline"
                    >
                      {t('View on Google Maps', 'عرض على خرائط جوجل')} <HiExternalLink className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
    </div>
  );
}
