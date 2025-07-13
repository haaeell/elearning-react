import { Star, StarHalf, Star as StarOutline } from 'lucide-react';

type CourseCardProps = {
    title: string;
    price: number;
    rating: number;
    totalReview: number;
    img: string;
};

export default function CourseCard({
    title,
    price,
    rating,
    totalReview,
    img,
}: CourseCardProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="bg-white rounded-lg shadow p-4 cursor-pointer hover:scale-105 duration-300">
            <img
                src={img}
                alt={title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">{title}</h4>
            <p className="text-gray-800 font-bold mb-1">Rp {price}</p>

            <div className="flex items-center text-yellow-400 text-lg">
                {Array(fullStars).fill(0).map((_, i) => (
                    <span key={`full-${i}`}>★</span>
                ))}
                {hasHalfStar && <span>☆</span>}
                {Array(emptyStars).fill(0).map((_, i) => (
                    <span key={`empty-${i}`}>☆</span>
                ))}
                <span className="ml-1 text-gray-600">({totalReview.toLocaleString()})</span>
            </div>
        </div>
    );
}
