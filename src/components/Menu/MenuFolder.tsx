import { MdOutlineMoreHoriz } from "react-icons/md";
import DropdownMenu, { ItemMenu } from "../DropdownMenu";
import { useContext } from "react";
import { BookmarkContext } from "@/contexts/bookmarkContext";

export function MenuFolder() {
  const { setIsOpenFormBookmark } = useContext(BookmarkContext);
  const items: ItemMenu[] = [
    {
      text: "New Bookmark",
      keyboard: "⌘B",
      click: () => {
        setIsOpenFormBookmark(true);
      },
    },
    {
      text: "Edit Folder",
      click: () => {},
    },
    {
      separator: true,
    },
    {
      text: "Delete Folder",
      className: "text-red-500",
      click: () => {},
    },
  ];
  return (
    <DropdownMenu items={items}>
      <button
        type="button"
        className="p-1 pr-2 folder-more opacity-0 outline-none transition-opacity duration-300"
        tabIndex={-1}
      >
        <MdOutlineMoreHoriz size={16} />
      </button>
    </DropdownMenu>
  );
}
