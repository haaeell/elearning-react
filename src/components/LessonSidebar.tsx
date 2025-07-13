import { PlayCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

type Props = {
    lessons: { title: string; duration: string }[];
};

export default function LessonSidebar({ lessons }: Props) {
    return (
        <aside className="w-full lg:w-80 bg-white p-6 rounded-xl shadow-md h-fit">
            <p className="text-sm text-gray-500 mb-4">
                <strong>{lessons.length} lessons</strong> (1.03 hours)
            </p>
            <ul className="space-y-2 mb-6">
                {lessons.map((l, i) => (
                    <li
                        key={i}
                        className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-4 cursor-pointer transition mb-2"
                    >
                        <span className="flex items-center gap-2 text-sm text-gray-800">
                            <PlayCircle className="w-4 h-4 text-cyan-500" />
                            {l.title}
                        </span>
                        <span className="text-xs text-gray-500">{l.duration}</span>
                    </li>
                ))}
            </ul>
            <Button variant="primary" className="w-full text-white bg-blue-600 hover:bg-blue-700">
                Gabung Kelas
            </Button>
        </aside>
    );
}
