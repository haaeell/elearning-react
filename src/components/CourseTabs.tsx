import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = {
    tabs: { key: string; label: string }[];
    activeTab: string;
    onChange: (key: string) => void;
};

export default function CourseTabs({ tabs, activeTab, onChange }: Props) {
    return (
        <div className="relative flex gap-4 mb-6 border-b border-gray-300">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onChange(tab.key)}
                    className={clsx(
                        'relative px-4 py-2 text-sm font-medium cursor-pointer',
                        activeTab === tab.key ? 'text-gray-900' : 'text-gray-500'
                    )}
                >
                    {tab.label}
                    {activeTab === tab.key && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-cyan-600 rounded"
                        />
                    )}
                </button>
            ))}
        </div>
    );
}
