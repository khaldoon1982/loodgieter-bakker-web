import { Mail, Phone, Clock, Star, MessageCircle } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="hidden md:block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-sm font-semibold py-3 shadow-md z-50 relative">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Left Side: Contact & Urgency */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full animate-pulse-slow backdrop-blur-sm border border-white/20">
                        <div className="bg-green-400 p-1 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.6)]"></div>
                        <span className="text-xs font-bold tracking-wide uppercase text-white drop-shadow-sm">24/7 Spoedservice</span>
                    </div>

                    <a href="tel:0640755336" className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 group">
                        <Phone size={16} className="fill-current text-white group-hover:text-yellow-200 transition-colors" />
                        <span className="tracking-wide">06-40755336</span>
                    </a>

                    <a href="mailto:support@loodgieterbakr.nl" className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200 group">
                        <Mail size={16} className="group-hover:scale-110 transition-transform" />
                        <span>support@loodgieterbakr.nl</span>
                    </a>
                </div>

                {/* Right Side: Socials & Rating */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5 text-yellow-300 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        <div className="flex">
                            <Star size={14} className="fill-current" />
                            <Star size={14} className="fill-current" />
                            <Star size={14} className="fill-current" />
                            <Star size={14} className="fill-current" />
                            <Star size={14} className="fill-current" />
                        </div>
                        <span className="text-white text-xs ml-1">9.8 Klantscore</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="https://wa.me/31640755336" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 group">
                            <MessageCircle size={16} className="text-white fill-current" />
                            <span className="font-bold text-xs tracking-wide group-hover:text-white">WhatsApp: 0640755336</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
