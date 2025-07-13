import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

type SidebarProps = {
  open: boolean;
  onToggle: () => void;
};

export default function Sidebar({ open, onToggle }: SidebarProps) {
  const location = useLocation();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const menu = [
    { label: 'Dashboard', to: '/', icon: <LayoutDashboard className="w-5 h-5" /> },
    {
      label: 'Courses',
      icon: <BookOpen className="w-5 h-5" />,
      children: [
        { label: 'All Courses', to: '/courses' },
        { label: 'My Courses', to: '/courses/my' },
        { label: 'Create Course', to: '/courses/create' },
      ],
    },
    {
      label: 'Users',
      icon: <Users className="w-5 h-5" />,
      children: [
        { label: 'All Users', to: '/users' },
        { label: 'Instructors', to: '/users/instructors' },
        { label: 'Students', to: '/users/students' },
      ],
    },
    {
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      to: '/settings',
    },
  ];

  const isChildActive = (children: { to: string }[]) =>
    children.some((child) => location.pathname.startsWith(child.to));

  return (
    <aside className={`relative ${open ? 'w-64' : 'w-20'} bg-white shadow h-screen p-4 transition-all duration-300`}>
      <button onClick={onToggle} className="absolute -right-3 top-6 w-8 h-8 border rounded-full flex items-center justify-center shadow bg-cyan-400 text-white cursor-pointer">
        {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      <h1 className={`text-2xl font-bold mb-6 text-center transition-opacity ${open ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5Xgq7X6eW90I2i_H2iSex2I8ZTt07WC8mw&s" alt="Logo"
          className={`mx-auto ${open ? 'w-16 h-16' : 'w-10 h-10'} transition-all duration-300`}
        />
        HOHOHO
      </h1>

      <nav className="space-y-2">
        {menu.map((item, index) => {
          const hasChildren = !!item.children;
          const isOpen = openMenuIndex === index || (hasChildren && isChildActive(item.children!));
          const isActive = location.pathname === item.to;

          if (hasChildren) {
            return (
              <div key={index}>
                <div
                  onClick={() => setOpenMenuIndex(isOpen ? null : index)}
                  className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 cursor-pointer ${isOpen ? 'text-cyan-400 font-semibold' : 'text-gray-800'
                    }`}
                >
                  {item.icon}
                  <span className={`${open ? 'block' : 'hidden'} transition-all`}>{item.label}</span>
                  {open && (
                    <ChevronDown
                      className={`ml-auto w-4 h-4 transform transition-transform duration-150 ${isOpen ? 'rotate-0' : '-rotate-90'
                        }`}
                    />
                  )}
                </div>
                <div className={`pl-10 mt-1 space-y-1 ${isOpen && open ? 'block' : 'hidden'}`}>
                  {item.children!.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      className={({ isActive }) =>
                        `block text-sm py-1 pr-2 rounded hover:bg-gray-100 ${isActive ? 'text-cyan-400 font-semibold' : 'text-gray-800'
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <NavLink
              key={index}
              to={item.to!}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 ${isActive ? 'text-cyan-400 font-semibold' : 'text-gray-800'
                }`
              }
            >
              {item.icon}
              <span className={`${open ? 'block' : 'hidden'} transition-all`}>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
