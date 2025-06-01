"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { useArticleNoteContext } from "../layout/ArticleNoteContext";

export type FeedItem = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
  read: boolean;
  feedName: string;
};

export function FeedItemCard({
  item,
  onReadToggle,
  onNote,
  onSummary,
}: {
  item: FeedItem;
  onReadToggle?: (id: string) => void;
  onNote?: (id: string) => void;
  onSummary?: (id: string) => void;
}) {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const { markAsRead } = useArticleNoteContext();

  function handleSummary() {
    setSummaryOpen(true);
    setLoading(true);
    setAiSummary(null);
    setTimeout(() => {
      setAiSummary(
        "【AI要約】この記事はNext.js 15の新機能やReact 19対応、Turbopack統合などのポイントを簡潔にまとめています。"
      );
      setLoading(false);
    }, 1500);
  }

  function handleReadToggle() {
    markAsRead(item.id);
    onReadToggle?.(item.id);
  }

  return (
    <Card className="w-full max-w-2xl shadow-sm border border-border/60">
      <CardHeader className="pb-2 flex flex-row items-center justify-between gap-2">
        <div>
          <CardTitle className="text-lg line-clamp-2 flex items-center gap-2">
            <Link
              href={`/article/${item.id}`}
              className="hover:underline focus:underline"
            >
              {item.title}
            </Link>
            {!item.read && (
              <span className="ml-2 text-xs text-white bg-blue-500 rounded px-2 py-0.5">
                NEW
              </span>
            )}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {item.feedName}
            </span>
            <span className="text-xs text-muted-foreground">{item.date}</span>
          </CardDescription>
        </div>
        <Button
          size="icon"
          variant={item.read ? "outline" : "secondary"}
          aria-label={item.read ? "未読にする" : "既読にする"}
          onClick={handleReadToggle}
        >
          {item.read ? "👁️" : "🕶️"}
        </Button>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {item.summary}
        </p>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          <Link href={`/note/${item.id}`} passHref legacyBehavior>
            <Button asChild size="sm" variant="outline">
              <a>📝 ノート</a>
            </Button>
          </Link>
          <Dialog open={summaryOpen} onOpenChange={setSummaryOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="ghost" onClick={handleSummary}>
                🤖 要約
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>AI要約</DialogTitle>
              </DialogHeader>
              {loading ? (
                <div className="text-center py-8 text-muted-foreground">
                  要約中...
                </div>
              ) : aiSummary ? (
                <div className="text-base whitespace-pre-line">{aiSummary}</div>
              ) : null}
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
