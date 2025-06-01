import { Button } from "../ui/button";

export function Sidebar() {
  return (
    <aside className="w-56 md:w-60 h-full border-r bg-muted flex flex-col gap-4 p-3 md:p-4">
      <div className="font-semibold mb-2">フィード</div>
      <ul className="flex flex-col gap-2">
        <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
          📰 Zenn
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
          📰 Qiita
        </li>
        <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
          📰 Medium
        </li>
      </ul>
      <Button className="mt-4 w-full" variant="secondary">
        ＋ フィード追加
      </Button>
      <div className="font-semibold mt-8 mb-2">タグ</div>
      <ul className="flex flex-wrap gap-2">
        <li className="bg-gray-200 rounded px-2 py-0.5 text-xs">Next.js</li>
        <li className="bg-gray-200 rounded px-2 py-0.5 text-xs">React</li>
        <li className="bg-gray-200 rounded px-2 py-0.5 text-xs">AI</li>
      </ul>
    </aside>
  );
}
