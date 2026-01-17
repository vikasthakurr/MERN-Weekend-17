import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useSearch } from "../context/SearchContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  const cart = useSelector((state) => state.cart);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { search, setSearch } = useSearch();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-white/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-fuchsia-600 transition-all duration-300">
                ShopHub
              </span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div
              className={`relative w-full transition-all duration-300 ${
                searchFocus ? "scale-105" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search
                  className={`h-5 w-5 transition-colors duration-300 ${
                    searchFocus ? "text-cyan-600" : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="block w-full pl-11 pr-4 py-2.5 bg-gray-100/50 border border-transparent rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                placeholder="Search for premium products..."
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-cyan-600 transition-colors group"
            >
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {quantity > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {quantity}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  onBlur={() =>
                    setTimeout(() => setIsProfileDropdownOpen(false), 200)
                  }
                  className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-gray-200 hover:border-cyan-200 bg-white hover:bg-cyan-50 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-100 to-fuchsia-100 flex items-center justify-center text-cyan-700 font-bold group-hover:scale-105 transition-transform">
                    {user.username?.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-cyan-700 max-w-[100px] truncate">
                    {user.username}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      isProfileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-4 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform origin-top-right transition-all animate-in fade-in slide-in-from-top-5">
                    <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                      <p className="text-sm font-medium text-gray-500">
                        Signed in as
                      </p>
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {user.email}
                      </p>
                    </div>
                    <div className="p-2">
                      <div className="space-y-1">
                        <Link
                          to="/profile"
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                        >
                          <User className="w-4 h-4" />
                          Your Profile
                        </Link>
                        {user.role === "admin" && (
                          <Link
                            to="/admin"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-purple-50 hover:text-purple-700 transition-colors"
                          >
                            <Settings className="w-4 h-4" />
                            Admin Dashboard
                          </Link>
                        )}
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-gray-600 font-medium hover:text-cyan-600 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-gray-600">
              <ShoppingCart className="w-6 h-6" />
              {quantity > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {quantity}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 animate-in slide-in-from-top-5">
          <div className="p-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-gray-900"
                placeholder="Search..."
              />
            </div>

            <div className="space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 rounded-xl hover:bg-gray-50 font-medium text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-3 rounded-xl hover:bg-gray-50 font-medium text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shopping Cart
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-100 to-fuchsia-100 flex items-center justify-center text-cyan-700 font-bold">
                      {user.username?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {user.username}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    {user.role === "admin" && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-red-50 text-red-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 p-2">
                  <Link
                    to="/login"
                    className="flex justify-center py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="flex justify-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-cyan-500/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
