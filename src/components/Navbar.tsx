import React, { useState } from 'react';

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuItem {
  label: string;
  href: string;
  active?: boolean;
  dropdown?: DropdownItem[];
}

const menu: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    active: true,
    dropdown: [
      { label: 'Homepage 2', href: '/homepage2' },
      { label: 'Homepage 3', href: '/homepage3' },
      { label: 'Homepage 4', href: '/homepage4' },
    ],
  },
  { label: 'Markets', href: '/markets' },
  {
    label: 'Company',
    href: '#',
    dropdown: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  { label: 'Education', href: '/education' },
  {
    label: 'Resources',
    href: '#',
    dropdown: [
      { label: 'Documentation', href: 'https://getuikit.com/docs/introduction', external: true },
      { label: 'Help Center', href: '/help-center' },
      { label: 'Customers', href: '/customers' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Legal Docs', href: '/legal-docs' },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="https://www.svgrepo.com/show/331760/logo.svg" alt="logo" width={120} height={32} className="h-10 w-auto" />
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 items-center">
          {menu.map((item) => (
            <li key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    className={`inline-flex items-center px-3 py-2 rounded hover:bg-gray-100 focus:outline-none ${item.active ? 'font-bold text-blue-600' : ''}`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 12 12"><polyline points="1 3.5 6 8.5 11 3.5" /></svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 transition-all duration-150 z-20 ${openDropdown === item.label ? 'block' : 'hidden'}`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((drop) => (
                      <a
                        key={drop.label}
                        href={drop.href}
                        target={drop.external ? '_blank' : undefined}
                        rel={drop.external ? 'noopener noreferrer' : undefined}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                      >
                        {drop.label}
                        {drop.external && (
                          <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path d="M5 11l6-6M11 5h-4v4" /></svg>
                        )}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className={`px-3 py-2 rounded hover:bg-gray-100 ${item.active ? 'font-bold text-blue-600' : ''}`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="/signin" className="text-blue-600 hover:underline font-medium flex items-center">
            Log in
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" /></svg>
          </a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
            Sign up
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" /></svg>
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            {menu.map((item) => (
              <li key={item.label} className="relative">
                {item.dropdown ? (
                  <details>
                    <summary className="flex items-center justify-between px-2 py-2 cursor-pointer hover:bg-gray-100 rounded">
                      {item.label}
                      <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 12 12"><polyline points="1 3.5 6 8.5 11 3.5" /></svg>
                    </summary>
                    <div className="pl-4">
                      {item.dropdown.map((drop) => (
                        <a
                          key={drop.label}
                          href={drop.href}
                          target={drop.external ? '_blank' : undefined}
                          rel={drop.external ? 'noopener noreferrer' : undefined}
                          className="block px-2 py-2 hover:bg-gray-100 text-sm text-gray-700"
                        >
                          {drop.label}
                          {drop.external && (
                            <svg className="inline w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16"><path d="M5 11l6-6M11 5h-4v4" /></svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-2 py-2 rounded hover:bg-gray-100 ${item.active ? 'font-bold text-blue-600' : ''}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="flex space-x-2 mt-4">
              <a href="/signin" className="text-blue-600 hover:underline font-medium flex items-center">
                Log in
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" /></svg>
              </a>
              <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                Sign up
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" /></svg>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 