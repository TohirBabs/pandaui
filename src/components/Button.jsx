const Button = ({icon, children, color, variant}) => {
    switch (variant) {
        case "underline":
            return (
                <button className="group w-max flex flex-col gap-1"><span>{children}</span><div className="h-1 rounded-full w-0 transition-all duration-300  bg-[#0e0e0e]/80 group-hover:w-full"></div></button>
            )
            break;
    
        default:
            return (
                <button className="group rounded-full w-max bg-white text-black flex items-center gap-1 p-1 pl-4"><span>{children}</span><div className="p-4 rounded-full bg-[#0e0e0e]/30">{icon}</div></button>
                )
            break;
    }
    
}
export default Button