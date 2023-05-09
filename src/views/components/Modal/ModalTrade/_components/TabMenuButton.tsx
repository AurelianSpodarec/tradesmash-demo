function TabMenuButton({ name, isActive, id, onClick }:TabMenuButtonProps) {
    return (
        <button type="button" className={` ${isActive === id ? "bg-gray-100" : ""} rounded py-2 w-full`} onClick={onClick}>
            {name}
        </button>
    )
}

export default TabMenuButton;

interface TabMenuButtonProps {
    name: string;
    isActive: string;
    id: string;
    onClick: () => void;
}
