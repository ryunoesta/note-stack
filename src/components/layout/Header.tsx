import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 sm:px-6 border-b bg-background">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden mr-2"
        aria-label="メニュー"
      >
        <span role="img" aria-label="menu">
          ☰
        </span>
      </Button>
      <div className="font-bold text-xl flex-1 md:flex-none">NoteStack</div>
      <input
        type="search"
        placeholder="記事検索..."
        className="hidden sm:block border rounded px-3 py-1 w-40 md:w-64 mx-4"
      />
      <Button variant="outline" size="icon" aria-label="ユーザー">
        <span role="img" aria-label="user">
          👤
        </span>
      </Button>
    </header>
  );
}
