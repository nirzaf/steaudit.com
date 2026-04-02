interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  titleAr?: string;
  descriptionAr?: string;
  keywordsAr?: string;
  ogImage?: string;
}

interface PageSEOConfig {
  home: SEOConfig;
  about: SEOConfig;
  services: SEOConfig;
  contact: SEOConfig;
  partners: SEOConfig;
}

export const seoConfig: PageSEOConfig = {
  home: {
    title: 'Salem Taleb Efaifa | Leading Auditing & Consultancy in Qatar',
    description: 'Salem Taleb Efaifa Auditing & Consultancy offers expert financial services, auditing, consulting, and tax solutions in Qatar. Member of PrimeGlobal with over 30 years of experience.',
    keywords: 'auditing qatar, financial consulting qatar, tax services qatar, accounting services doha, business advisory qatar, salem taleb efaifa, ste audit',
    titleAr: 'سالم طالب عفييفة | التدقيق والاستشارات الرائدة في قطر',
    descriptionAr: 'يقدم سالم طالب عفييفة للتدقيق والاستشارات خدمات مالية خبيرة، وتدقيق حسابات، واستشارات، وحلول ضريبية في قطر. عضو في PrimeGlobal مع أكثر من 30 عاماً من الخبرة.',
    keywordsAr: 'تدقيق الحسابات قطر، استشارات مالية قطر، خدمات ضريبية قطر، خدمات محاسبية الدوحة، استشارات أعمال قطر، سالم طالب عفييفة، تدقيق STE',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg'
  },
  about: {
    title: 'About Us | Salem Taleb Efaifa Auditing & Consultancy',
    description: 'Discover our 30+ years of excellence in providing professional auditing and consulting services in Qatar. Learn about our expertise, values, and commitment to client success.',
    keywords: 'about ste audit, qatar auditing firm, professional services qatar, accounting firm qatar, salem taleb efaifa history',
    titleAr: 'من نحن | سالم طالب عفييفة للتدقيق والاستشارات',
    descriptionAr: 'اكتشف أكثر من 30 عاماً من التميز في تقديم خدمات التدقيق والاستشارات المهنية في قطر. تعرف على خبراتنا وقيمنا والتزامنا بنجاح العملاء.',
    keywordsAr: 'عن تدقيق STE، شركة تدقيق قطر، خدمات مهنية قطر، شركة محاسبة قطر، تاريخ سالم طالب عفييفة',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-02.jpg'
  },
  services: {
    title: 'Our Services | Professional Auditing & Financial Solutions',
    description: 'Comprehensive range of professional services including external audit, accounting, tax services, consulting, and financial management solutions tailored for Qatar businesses.',
    keywords: 'audit services qatar, financial consulting, tax advisory qatar, accounting services, business consulting doha, erp implementation qatar',
    titleAr: 'خدماتنا | حلول التدقيق والتمويل المهنية',
    descriptionAr: 'مجموعة شاملة من الخدمات المهنية بما في ذلك التدقيق الخارجي، المحاسبة، الخدمات الضريبية، الاستشارات، وحلول الإدارة المالية المصممة للشركات في قطر.',
    keywordsAr: 'خدمات التدقيق قطر، استشارات مالية، استشارات ضريبية قطر، خدمات محاسبية، استشارات أعمال الدوحة، تنفيذ أنظمة ERP قطر',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-03.jpg'
  },
  contact: {
    title: 'Contact Us | Salem Taleb Efaifa Auditing & Consultancy',
    description: 'Get in touch with our expert team for professional auditing and consulting services in Qatar. Visit our office in Umm Ghuwalina or contact us online.',
    keywords: 'contact auditor qatar, financial consultant contact, qatar accounting firm contact, ste audit location',
    titleAr: 'اتصل بنا | سالم طالب عفييفة للتدقيق والاستشارات',
    descriptionAr: 'تواصل مع فريق الخبراء لدينا للحصول على خدمات التدقيق والاستشارات المهنية في قطر. تفضل بزيارة مكتبنا في أم غويلينة أو اتصل بنا عبر الإنترنت.',
    keywordsAr: 'اتصل بمدقق حسابات قطر، اتصل بمستشار مالي، شركة محاسبة قطر، موقع تدقيق STE',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-04.jpg'
  },
  partners: {
    title: 'Our Partners | Global Network & Collaborations',
    description: 'Part of PrimeGlobal network, connecting us with over 28,000 professionals worldwide. Learn about our strategic partnerships and international capabilities.',
    keywords: 'primeglobal qatar, international accounting network, global audit partners, qatar business network',
    titleAr: 'شركاؤنا | الشبكة العالمية والتعاون',
    descriptionAr: 'جزء من شبكة PrimeGlobal، مما يربطنا بأكثر من 28,000 متخصص حول العالم. تعرف على شراكاتنا الاستراتيجية وقدراتنا الدولية.',
    keywordsAr: 'برايم جلوبال قطر، شبكة محاسبة دولية، شركاء تدقيق عالميون، شبكة أعمال قطر',
    ogImage: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-05.jpg'
  }
};