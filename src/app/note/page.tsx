"use client";
import Link from "next/link";
import { useArticleNoteContext } from "@/components/layout/ArticleNoteContext";
import { useFeedContext } from "@/components/layout/FeedContext";
import { useNoteSearch } from "@/components/context/NoteSearchContext";

export default function NoteListPage() {
  const { notes } = useArticleNoteContext();
  const { search } = useNoteSearch();

  // ノート検索に特化
  let filtered = notes;
  if (search) {
    filtered = filtered.filter(
      (n) =>
        n.title.includes(search) ||
        n.content?.includes(search) ||
        n.tags.some((t) => t.includes(search))
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">ノート一覧</h1>
      <ul className="space-y-4">
        {filtered.length === 0 && (
          <li className="text-muted-foreground text-center py-8">
            ノートがありません
          </li>
        )}
        {filtered.map((note) => (
          <li
            key={note.id}
            className="border rounded p-4 bg-white hover:bg-gray-50 transition"
          >
            <div className="text-xs text-muted-foreground mb-1">
              記事ID: {note.articleId}
            </div>
            <Link
              href={`/note/${note.id}`}
              className="text-lg font-semibold hover:underline"
            >
              {note.title}
            </Link>
            <div className="flex flex-wrap gap-2 mt-2 mb-1">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-100 text-purple-700 rounded px-2 py-0.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              最終更新: {note.updated}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
