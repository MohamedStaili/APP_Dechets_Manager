import React from 'react';
import { Menu, Users } from 'lucide-react';

const Header = () => (
  <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
    <button className="p-2 hover:bg-gray-100 rounded-lg">
      <Menu className="h-5 w-5 text-gray-600" />
    </button>
    
    <div className="flex items-center space-x-4">
      <div className="relative">
        <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Users className="h-4 w-4 text-gray-600" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;