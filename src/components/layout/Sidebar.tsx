"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState, useContext } from "react";
import { useFeedContext } from "./FeedContext";
import { useArticleNoteContext } from "./ArticleNoteContext";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const isNote = pathname.startsWith("/note");
  const isFeed = pathname.startsWith("/feed");

  if (isNote || isFeed) {
    return (
      <aside className="w-56 md:w-60 h-[calc(100vh-4rem)] overflow-y-auto border-r bg-muted flex flex-col gap-4 p-3 md:p-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:underline mb-2"
        >
          記事一覧
        </Link>
        <Link
          href="/note"
          className="text-sm text-muted-foreground hover:underline mb-2"
        >
          ノート一覧
        </Link>
        <Link
          href="/feed"
          className="text-sm text-muted-foreground hover:underline mb-2"
        >
          フィード管理
        </Link>
      </aside>
    );
  }

  // 記事用サイドバー（従来通り）
  const { feeds, addFeed } = useFeedContext();
  const { selectedFeedId, setSelectedFeedId } = useArticleNoteContext();
  const [feedName, setFeedName] = useState("");
  const [feedUrl, setFeedUrl] = useState("");

  function handleAddFeed(e: React.FormEvent) {
    e.preventDefault();
    addFeed(feedName, feedUrl);
    setFeedName("");
    setFeedUrl("");
    // Dialogは自動で閉じる
  }

  return (
    <aside className="w-56 md:w-60 h-[calc(100vh-4rem)] overflow-y-auto border-r bg-muted flex flex-col gap-4 p-3 md:p-4">
      <div className="font-semibold mb-2">フィード</div>
      <ul
        className="flex flex-col gap-2"
        role="listbox"
        aria-label="フィード一覧"
      >
        <li
          className={`px-2 py-1 rounded hover:bg-gray-100 cursor-pointer ${
            !selectedFeedId ? "bg-gray-200 font-bold" : ""
          }`}
          tabIndex={0}
          aria-selected={!selectedFeedId}
          onClick={() => setSelectedFeedId(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setSelectedFeedId(null);
          }}
        >
          🗂️ すべて
        </li>
        {feeds.map((feed) => (
          <li
            key={feed.id}
            className={`px-2 py-1 rounded hover:bg-gray-100 cursor-pointer ${
              selectedFeedId === feed.id ? "bg-gray-200 font-bold" : ""
            }`}
            tabIndex={0}
            aria-selected={selectedFeedId === feed.id}
            onClick={() => setSelectedFeedId(feed.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedFeedId(feed.id);
            }}
          >
            📰 {feed.name}
          </li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4 w-full" variant="secondary">
            ＋ フィード追加
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>フィードを追加</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddFeed} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">フィード名</label>
              <input
                className="w-full border rounded px-2 py-1"
                value={feedName}
                onChange={(e) => setFeedName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">RSS URL</label>
              <input
                className="w-full border rounded px-2 py-1"
                value={feedUrl}
                onChange={(e) => setFeedUrl(e.target.value)}
                required
                type="url"
                placeholder="https://example.com/feed.xml"
              />
            </div>
            <Button type="submit" className="w-full">
              追加
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <div className="font-semibold mt-8 mb-2">タグ</div>
      <ul className="flex flex-wrap gap-2">
        <li className="bg-gray-200 rounded px-2 py-0.5 text-xs">Next.js</li>
        <li className="bg-gray-200 rounded px-2 py-0.5 text-xs">React</li>
        <li className="bg-gray-200 rounded px-2 py-0.5 text-xs">AI</li>
      </ul>
      <div className="mt-8">
        <Link
          href="/"
          className="block text-sm text-muted-foreground hover:underline"
        >
          記事一覧
        </Link>
        <Link
          href="/note"
          className="block text-sm text-muted-foreground hover:underline mt-2"
        >
          ノート一覧
        </Link>
        <Link
          href="/feed"
          className="block text-sm text-muted-foreground hover:underline mt-2"
        >
          フィード管理
        </Link>
      </div>
    </aside>
  );
}
