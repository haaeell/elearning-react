type CustomCheckboxProps = {
    label: string;
};

export default function CustomCheckbox({ label }: CustomCheckboxProps) {
    return (
        <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="peer hidden" />
            <div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-cyan-400 peer-checked:border-cyan-400 flex items-center justify-center">
                <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
            <span>{label}</span>
        </label>
    );
}
