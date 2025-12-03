import type { Metadata } from 'next';
import HeroSection from '@/components/partners/HeroSection';
import PartnersSection from '@/components/partners/PartnersSection';
import { buildMetadata } from '@/lib/metadata';

const partners = [
  {
    name: 'Salem Taleb Efaifa (MBA)',
    title: 'Managing Partner',
    image: 'https://ik.imagekit.io/ri5cvrkrr/2022-12-10_21-02-36.png?updatedAt=1732207356209',
    description: [
      'Salem is the Managing Partner and is responsible for the Assurance and Advisory services, Tax and Business Community Training offered by the firm. He is the Managing partner for the firm as well and our team will be advised overall by him.',
      'He is based in Qatar has been involved in audit activities in Qatar. His ability to quickly comprehend core issues in general and his experience in other business ventures in the Middle East will enable the team to develop and deliver high quality and effective assurance solutions.',
      'During his career, Salem has gained extensive experience in audit, accounting, taxation, and related services. His client portfolio covers a wide variety of industries including oil and gas, telecommunication, utilities, banks, petrochemical and other downstream sector businesses, construction and manufacturing. He has advised a number of clients on assurance and advisory assignments in Qatar.',
      'He specializes in providing professional consultancy services such as Feasibility Study, Business Planning, and Financial & Management Consultancy and is an Assurance Services expert'
    ]
  },
  {
    name: 'Mr. M. Dahalan FCCA, ACA, ACFE, APA',
    title: 'Partner Audit and Assurance',
    image: 'https://ik.imagekit.io/ri5cvrkrr/2022-12-10_21-17-52.png?updatedAt=1732207356185',
    description: [
      'Dahalan is the Partner Audit and Assurance, and is responsible for the Assurance and Advisory services, Tax and Business Community Training offered by the firm. He is the Technical Partner for the firm as well and our team will be advised on technical matters by M.DahaIan.',
      'He is based in Qatar and has been involved in audit and training activities in Qatar, Srilanka, and UAE for over 18 years. His ability to quickly comprehend core issues in general and his experience in other business ventures in the Asia and Middle East will enable the team to develop and deliver high quality and effective assurance solutions.',
      'During his career, M.DahaIan has gained extensive experience in audit, accounting, taxation, business community training, and related services. His client portfolio covers a wide variety of industries including oil and gas, telecommunication, utilities, banks, petrochemical and other downstream sector businesses, construction and manufacturing. He has advised a number of clients on assurance and advisory assignments in Qatar, Srilanka and UAE.',
      'Dahalan is a fraud examiner and Investigation expert involved in many fraud-related assignments and was able to produce reports with solid findings with evidence. He is a Certified Fraud Examiner from the United States.',
      'M.DahaIan carries a vast amount of professional experience, exceeding 18 years in Assurance, Advisory, Internal Audit, Accounting and Management & Financial Consulting Services with major Audit firms including Ernst & Young (EY) and PricewaterhouseCoopers (PWC).'
    ]
  }
];

export const metadata: Metadata = buildMetadata('partners', '/partners');

export default function PartnersPage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <PartnersSection partners={partners} />
    </div>
  );
}
