const Link = ({href, children, color, variant}) => {
    switch (variant) {
        case "underline":
            return (
                <a href={href} className="group w-max flex flex-col gap-1"><span>{children}</span><div className="h-1 rounded-full w-0 transition-all duration-300  bg-[#0e0e0e]/80 group-hover:w-full"></div></a>
            )
            break;
    
        default:
            return (
                <a href={href} className="p-1 px-2 w-max rounded-full hover:bg-[#0e0e0e]/30 transition-all duration-300">{children}</a>
            )
            break;
    }
    
}
export default Link