import { memo } from "react";

export const ProfileView = memo(function ProfileView() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Profile Page</h1>
        <p className="text-gray-500">Profile content will go here</p>
      </div>
    </div>
  );
});