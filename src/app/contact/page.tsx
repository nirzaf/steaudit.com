import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('contact', '/contact');

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
