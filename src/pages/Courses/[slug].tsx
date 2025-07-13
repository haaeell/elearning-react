import { useState } from 'react';
import { Star, Users, StarHalf } from 'lucide-react';
import CourseTabs from '@/components/CourseTabs';
import CourseTabContent from '@/components/CourseTabContent';
import LessonSidebar from '@/components/LessonSidebar';

export default function CourseDetail() {
    const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>('about');

    const comments = [
        { name: 'Haikal', avatar: 'https://i.pravatar.cc/40?img=1', content: 'Materinya lengkap dan penjelasannya enak banget!', date: '1 hari lalu' },
        { name: 'Ayu', avatar: 'https://i.pravatar.cc/40?img=2', content: 'Kelas ini cocok banget buat pemula, recommended!', date: '2 hari lalu' },
    ];

    const lessons = [
        { title: 'Berkenalan UI/UX', duration: '4 mins' },
        { title: 'Prototype Horizontal', duration: '3 mins' },
        { title: 'Micro UI Interaction', duration: '5 mins' },
        { title: 'Prototype Vertical Scroll', duration: '4 mins' },
        { title: '15 video lainnya', duration: '' },
    ];

    const tabs = [
        { key: 'about', label: 'About' },
        { key: 'lessons', label: 'Lessons' },
        { key: 'reviews', label: 'Reviews' },
    ];

    return (
        <div className="gap-8 p-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">
                UI/UX Design dengan Figma untuk Pemula
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <StarHalf className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    4.8 (1.528 ulasan)
                </span>
                <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> 3.200 peserta
                </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    {/* VIDEO */}
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl mb-8">
                        <iframe
                            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>

                    <CourseTabs tabs={tabs} activeTab={activeTab} onChange={(key: string) => setActiveTab(key as 'about' | 'lessons' | 'reviews')} />
                    <CourseTabContent activeTab={activeTab} comments={comments} />
                </div>

                <LessonSidebar lessons={lessons} />
            </div>
        </div>
    );
}
