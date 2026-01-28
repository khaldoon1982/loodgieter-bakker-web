import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type ReviewProps = {
    name: string;
    rating: number;
    text: string;
    date?: string;
    className?: string;
};

export default function ReviewCard({ name, rating, text, date, className }: ReviewProps) {
    return (
        <div className={cn("bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", className)}>
            <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-gray-300"} />
                ))}
            </div>
            <p className="text-gray-600 mb-4 italic text-sm leading-relaxed line-clamp-4">"{text}"</p>
            <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-50">
                <span className="font-bold text-slate-800">{name}</span>
                {date && <span className="text-gray-400">{new Date(date).toLocaleDateString()}</span>}
            </div>
        </div>
    );
}
