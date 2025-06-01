"use client";

import { FeedItemCard } from "./FeedItemCard";
import { useArticleNoteContext } from "../layout/ArticleNoteContext";
import { useFeedContext } from "../layout/FeedContext";

export function FeedList() {
  const { articles, selectedFeedId, loading } = useArticleNoteContext();
  const { feeds } = useFeedContext();

  // フィード名を取得
  function getFeedName(feedId: string) {
    return feeds.find((f) => f.id === feedId)?.name || "";
  }

  // 選択中フィードで絞り込み
  const filtered = selectedFeedId
    ? articles.filter((a) => a.feedId === selectedFeedId)
    : articles;

  if (loading) {
    return (
      <div
        className="w-full flex flex-col items-center py-12 text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <div className="animate-pulse w-80 h-24 bg-gray-200 rounded mb-4" />
        <div className="animate-pulse w-80 h-24 bg-gray-200 rounded mb-4" />
        <div className="animate-pulse w-80 h-24 bg-gray-200 rounded" />
        <span className="sr-only">記事を読み込み中...</span>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div
        className="w-full flex flex-col items-center py-12 text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <span>記事がありません</span>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-6 w-full items-center"
      role="list"
      aria-label="記事一覧"
    >
      {filtered.map((item) => (
        <FeedItemCard
          key={item.id}
          item={{
            ...item,
            feedName: getFeedName(item.feedId),
          }}
        />
      ))}
    </div>
  );
}
