import { Types } from "mongoose";
import { Folder } from "./Folder";

export interface Bookmark {
  id: string;
  name: string;
  url: string;
  used: number;
  searched: number;
  folderId: string;
}

export interface Bookmarks extends Folder {
  data: Bookmark[];
}
