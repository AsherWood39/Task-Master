import { memo } from "react";
export const LabelSidebar = memo(function LabelSidebar({
  name,
  setCurrent,
  isCurrent,
}) {
  return (
    <>
      <div
        onClick={() => setCurrent(name)}
        className="relative inline-block w-fit font-rubik m-2 hover:cursor-pointer hover:text-danger hover:text-shadow-xl  transition-all duration-200 group">
        <span className={isCurrent ? "font-bold" : ""}>
          {isCurrent ? "— " : ""}
          {name}
        </span>

        {/* Underline */}
        {!isCurrent && (
          <span className="absolute -bottom-[1px] left-0 h-[2px] bg-danger w-0 group-hover:w-full transition-all duration-300"></span>
        )}
      </div>
    </>
  );
});
