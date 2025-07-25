export function UnderlineAnimated({ children , className}) {
    return (
        <div className={`relative  w-fit ${className}`}>
            {children}
            <span className="absolute -bottom-[1px] left-0 h-[2px] bg-danger w-0 group-hover:w-full transition-all duration-300"></span>
        </div>
    );
}
