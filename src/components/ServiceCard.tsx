import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

type ServiceProps = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    href: string;
    className?: string;
};

export default function ServiceCard({ title, description, icon, href, className }: ServiceProps) {
    const t = useTranslations('Services'); // Optional if passing raw text
    return (
        <div className={cn("bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full", className)}>
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
            {description && <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">{description}</p>}
            <Link href={href} className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all mt-auto">
                <span>Meer lezen</span> <ArrowRight size={16} />
            </Link>
        </div>
    );
}
