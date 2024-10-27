import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-red-600 w-full">
      <div className="w-full rounded-lg border border-red-600">
        <NavLink
          to="/dashboard/all-books"
          className={({ isActive }) =>
            `block p-2 rounded-lg w-full ${
              isActive
                ? 'bg-primary text-primary-foreground dark:bg-dark-primary dark:text-dark-primary-foreground'
                : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground dark:bg-dark-muted dark:text-dark-muted-foreground dark:hover:bg-dark-primary dark:hover:text-dark-primary-foreground'
            }`
          }
        >
          All Books
        </NavLink>
      </div>
      <div className="w-full rounded-lg">
        <NavLink
          to="/dashboard/setting" 
          className={({ isActive }) =>
            `block p-2 rounded-lg ${
              isActive
                ? 'bg-primary text-primary-foreground dark:bg-dark-primary dark:text-dark-primary-foreground'
                : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground dark:bg-dark-muted dark:text-dark-muted-foreground dark:hover:bg-dark-primary dark:hover:text-dark-primary-foreground'
            }`
          }
        >
          Setting
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
