type Comment = {
    name: string;
    avatar: string;
    content: string;
    date: string;
};

type Props = {
    activeTab: string;
    comments: Comment[];
};

export default function CourseTabContent({ activeTab, comments }: Props) {
    if (activeTab === 'about') {
        return (
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Tentang Kelas</h2>
                <p className="text-gray-700 leading-relaxed">
                    Di kelas ini, kamu akan belajar dasar-dasar UI/UX design menggunakan Figma.
                    Cocok untuk pemula yang ingin masuk ke dunia desain digital dan berkolaborasi
                    dengan developer.
                </p>
            </section>
        );
    }

    if (activeTab === 'lessons') {
        return (
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Materi Kelas</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Pengenalan UI/UX</li>
                    <li>Basic Tools di Figma</li>
                    <li>Membuat Wireframe & Prototyping</li>
                    <li>Tips dan Best Practice</li>
                </ul>
            </section>
        );
    }

    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Ulasan Peserta</h2>
            <div className="space-y-4">
                {comments.map((c, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <img src={c.avatar} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold">{c.name}</p>
                            <p className="text-sm text-gray-600 mb-1">{c.date}</p>
                            <p className="text-gray-800">{c.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
