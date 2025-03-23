import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Rocket, Award, Image, Calendar, Phone, CircuitBoard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/logo';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Team', href: '/team', icon: Users },
  { label: 'Projects', href: '/projects', icon: Rocket },
  { label: 'Alumni', href: '/alumni', icon: Award },
  { label: 'Gallery', href: '/gallery', icon: Image },
  { label: 'Events', href: '/events', icon: Calendar },
  { label: 'Contact', href: '/contact', icon: Phone },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-anarc-dark-deeper/80 backdrop-blur-lg shadow-lg border-b border-white/5'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 z-50">
            <Logo className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 group ${
                    isActive 
                      ? 'bg-anarc-blue/10 text-anarc-blue' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${
                    isActive ? 'text-anarc-blue' : 'text-white/70 group-hover:text-white'
                  }`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-anarc-dark-deeper/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="grid gap-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className={`p-4 rounded-xl flex items-center space-x-4 transition-all duration-200 ${
                    isActive
                      ? 'bg-anarc-blue/10 text-anarc-blue'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-anarc-blue' : ''}`} />
                  <span className="text-lg font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
