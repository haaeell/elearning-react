import { useEffect, useRef, useState } from 'react';
import { Settings, LogOut } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    open ? document.addEventListener('mousedown', handleClickOutside) : document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-gray-700 font-medium">
        {new Date().toLocaleDateString()}
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
        >
          <span className="text-gray-700 font-bold">U</span>
        </button>

        <div
          className={`absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10 transform transition-all duration-200 ease-out origin-top ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
        >
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4" />
            Settings
          </a>
          <button
            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-left"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
