"use client";

import { NoteSearchProvider } from "@/components/context/NoteSearchContext";

export default function NoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NoteSearchProvider>
      {children}
    </NoteSearchProvider>
  );
}
