import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export function MobileDock() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-brand-navy md:hidden flex justify-around items-center pt-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <Link href="tel:1300123456" className="flex flex-col items-center gap-1 text-white hover:text-brand-teal transition-colors flex-1">
        <Phone className="w-5 h-5 text-brand-teal" />
        <span className="text-[10px] font-bold tracking-wide uppercase mt-1">Call Now</span>
      </Link>
      
      <div className="w-[1px] h-8 bg-white/20"></div>
      
      <Link href="https://wa.me/61400000000" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-white hover:text-[#25D366] transition-colors flex-1">
        <MessageCircle className="w-5 h-5 text-[#25D366]" />
        <span className="text-[10px] font-bold tracking-wide uppercase mt-1">WhatsApp</span>
      </Link>
      
      <div className="w-[1px] h-8 bg-white/20"></div>

      <Link href="/contact" className="flex flex-col items-center gap-1 text-white hover:text-brand-teal transition-colors flex-1">
        <Calendar className="w-5 h-5 text-brand-teal" />
        <span className="text-[10px] font-bold tracking-wide uppercase mt-1">Book Free</span>
      </Link>
    </div>
  );
}
