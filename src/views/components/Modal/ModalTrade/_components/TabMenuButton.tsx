function TabMenuButton({ name, isActive, id, onClick }:any) {
    return (
        <button type="button" className={` ${isActive === id ? "bg-gray-100" : ""} rounded py-2 w-full`} onClick={onClick}>
            {name}
        </button>
    )
}

export default TabMenuButton;