import { memo } from "react";

export const UnderlineAnimated = memo(function UnderlineAnimated({ className}) {
    return (
        <div className={`relative  w-full ${className}`}>
            <span className="absolute -bottom-[1px] left-0 h-[2px] bg-danger w-0 group-hover:w-full transition-all duration-300"></span>
        </div>
    );
})
