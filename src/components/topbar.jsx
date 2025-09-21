import { memo } from "react";
import { SearchIcon } from "../icons/search";
import { ProfileCard } from "../components/cards/profile-card";
import { LogoutButton } from "../components/LogoutButton";
import { NotificationIcon } from "../icons/notification";
import { InboxIcon } from "../icons/inbox"; 

export const Topbar = memo(function Topbar() {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white w-full gap-12 shadow-md border-b border-gray-100">
      {/* Left side - Search bar */}
      <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 w-full border border-gray-200 outline-0">
        <SearchIcon className="w-5 h-5 text-gray-400 mr-3" />
        <input
          className="w-full bg-transparent flex-1 text-sm placeholder-gray-400"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <NotificationIcon className="w-6 h-6" />
        </button>

        {/* Inbox/Message Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <InboxIcon className="w-6 h-6" />
        </button>

        {/* User Profile */}
        <ProfileCard />
        <LogoutButton />
      </div>
    </div>
  );
});