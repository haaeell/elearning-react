import CourseCard from "@/components/CourseCard";
import CustomCheckbox from "@/components/CustomCheckbox";
import Button from "@/components/ui/Button";
import { Filter, Signal, CreditCard } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Courses() {
    const courses = [
        {
            title: "SASS Workshop: Design Website Lebih Cepat",
            price: 0,
            rating: 4.9,
            totalReview: 2820,
            img: "https://placehold.co/600x400",
            slug: "sass-workshop",
        },
        {
            title: "Mastering Mobile UI Design for Beginners with Figma",
            price: 0,
            rating: 4.8,
            totalReview: 1725,
            img: "https://placehold.co/600x400",
            slug: "mastering-figma",
        },
        {
            title: "Mastering Midjourney: Create a Stunning",
            price: 0,
            rating: 4.7,
            totalReview: 1527,
            img: "https://placehold.co/600x400",
            slug: "mastering-midjourney",
        },
        {
            title: "SASS Workshop: Design Website Lebih Cepat",
            price: 0,
            rating: 4.9,
            totalReview: 2820,
            img: "https://placehold.co/600x400",
            slug: "sass-workshop",
        },
        {
            title: "Mastering Mobile UI Design for Beginners with Figma",
            price: 0,
            rating: 4.8,
            totalReview: 1725,
            img: "https://placehold.co/600x400",
            slug: "mastering-figma",
        },
        {
            title: "Mastering Midjourney: Create a Stunning",
            price: 0,
            rating: 4.7,
            totalReview: 1527,
            img: "https://placehold.co/600x400",
            slug: "mastering-midjourney",
        },
    ];

    const sidebarFilters = [
        {
            title: 'Sort',
            icon: Filter,
            options: [
                'Baru Rilis',
                'Terpopuler',
                'Sedang Promo',
                'Harga Terendah',
                'Harga Tertinggi',
            ],
        },
        {
            title: 'Level',
            icon: Signal,
            options: [
                'Beginner Friendly',
                'Intermediate',
                'All Levels',
            ],
        },
        {
            title: 'Tipe',
            icon: CreditCard,
            options: [
                'Starter (Rp 0)',
                'Premium',
            ],
        },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow sticky top-6 self-start h-fit">
                {sidebarFilters.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <section.icon className="w-5 h-5 text-cyan-400" />
                            {section.title}
                        </h3>
                        <div className="space-y-2">
                            {section.options.map((label, idx) => (
                                <CustomCheckbox key={idx} label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </aside>

            <section className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Kelas UI/UX Design</h2>
                <p className="text-gray-600 mb-6">
                    Belajar mendesain tampilan website atau mobile apps dan juga berkolaborasi dengan tim developer
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, idx) => (
                        <Link key={idx} to={`/courses/${course.slug}`}>
                            <CourseCard
                                title={course.title}
                                price={course.price}
                                rating={course.rating}
                                totalReview={course.totalReview}
                                img={course.img}
                            />
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button variant="primary">Lihat Selengkapnya</Button>
                </div>
            </section>
        </div>
    );
}
