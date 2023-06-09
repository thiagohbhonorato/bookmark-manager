"use client";

import { BookmarkContext } from "@/contexts/bookmarkContext";
import { ReactNode, useState } from "react";
import { Bookmarks } from "@/interfaces/Bookmark";

interface BookmarkProviderProps {
  children: ReactNode;
}
export function BookmarkProvider({ children }: BookmarkProviderProps) {
  const data: Bookmarks[] = [];
  const [isOpenFormBookmark, setIsOpenFormBookmark] = useState(false);
  const [isOpenFormFolder, setIsOpenFormFolder] = useState(false);
  const [bookmarks, setBookmarks] = useState(data);
  return (
    <BookmarkContext.Provider
      value={{
        isOpenFormBookmark,
        setIsOpenFormBookmark,
        isOpenFormFolder,
        setIsOpenFormFolder,
        bookmarks,
        setBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
