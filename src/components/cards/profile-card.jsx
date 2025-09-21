import { memo } from "react";
import { ProfileIcon } from "../../icons/profile";
import { useSidebarStore } from "../../store/sidebar-store";
import { useShallow } from "zustand/shallow";

export  const ProfileCard  = memo( function ProfileCard() {
  const setCurrent = useSidebarStore(useShallow((state) => state.setCurrent));
  
  const navigateToProfile = () => {
    setCurrent("Profile");
  };

  // This component can be expanded to include more user details or actions
  // For now, it just displays a profile icon and a placeholder name
  // use Store to fetch user data if needed
  // Example: const user = useUserStore((state) => state.user);
  return (
    <div 
      className="flex items-center p-4 hover:cursor-pointer group rounded-2xl transition-all duration-200"
      onClick={navigateToProfile}
    >
      <ProfileIcon className="group-hover:-translate-0.5 rounded-full group-hover:shadow-xl shadow-secondary transition-all duration-200 " />

      <div className="ml-4">
        <h3 className="text-sm font-semibold group-hover:-translate-0.5 rounded-full group-hover:text-shadow-xl shadow-secondary transition-all duration-200 ">
          John Doe
        </h3>
        <p className="text-xs text-gray-600 group-hover:-translate-0.5 rounded-full group-hover:text-shadow-xl shadow-secondary transition-all duration-200">
          johndoe@example.com
        </p>
      </div>
    </div>
  );
});
