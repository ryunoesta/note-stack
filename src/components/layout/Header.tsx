"use client";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Sidebar } from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNoteSearch } from "@/components/context/NoteSearchContext";

export function Header() {
  const pathname = usePathname();
  const isNote = pathname.startsWith("/note");
  const { search, setSearch } = useNoteSearch();
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 sm:px-6 border-b bg-background">
      <div className="md:hidden mr-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="メニュー">
              <span role="img" aria-label="menu">
                ☰
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-56">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex-1 md:flex-none flex items-center gap-4">
        <Link href="/" className="font-bold text-xl">
          NoteStack
        </Link>
        <Link
          href="/"
          className="hidden md:block text-sm text-muted-foreground hover:underline"
        >
          記事一覧
        </Link>
        <Link
          href="/note"
          className="hidden md:block text-sm text-muted-foreground hover:underline"
        >
          ノート一覧
        </Link>
        <Link
          href="/feed"
          className="hidden md:block text-sm text-muted-foreground hover:underline"
        >
          フィード管理
        </Link>
      </div>
      {isNote ? (
        <input
          type="search"
          placeholder="ノート検索..."
          className="hidden sm:block border rounded px-3 py-1 w-40 md:w-64 mx-4"
          value={search ?? ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : (
        <input
          type="search"
          placeholder="記事検索..."
          className="hidden sm:block border rounded px-3 py-1 w-40 md:w-64 mx-4"
        />
      )}
      <Link href="/login">
        <Button variant="outline" size="icon" aria-label="ユーザー">
          <span role="img" aria-label="user">
            👤
          </span>
        </Button>
      </Link>
    </header>
  );
}
