"use client";
import { createContext, useContext, useState } from "react";

type NoteSearchContextType = {
  search: string;
  setSearch: (v: string) => void;
};

export const NoteSearchContext = createContext<NoteSearchContextType>({
  search: "",
  setSearch: () => {},
});

export function NoteSearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  return (
    <NoteSearchContext.Provider value={{ search, setSearch }}>
      {children}
    </NoteSearchContext.Provider>
  );
}

export function useNoteSearch() {
  return useContext(NoteSearchContext);
}
