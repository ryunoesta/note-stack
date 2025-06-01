"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useFeedContext } from "@/components/layout/FeedContext";

export default function FeedManagePage() {
  const { feeds, editFeed, deleteFeed, addFeed } = useFeedContext();
  const [editFeedId, setEditFeedId] = useState<string | null>(null);
  const [deleteFeedId, setDeleteFeedId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [addName, setAddName] = useState("");
  const [addUrl, setAddUrl] = useState("");

  function openEdit(feed: (typeof feeds)[0]) {
    setEditFeedId(feed.id);
    setEditName(feed.name);
    setEditUrl(feed.url);
  }
  function saveEdit() {
    if (!editFeedId) return;
    editFeed(editFeedId, editName, editUrl);
    setEditFeedId(null);
  }
  function confirmDelete(feed: (typeof feeds)[0]) {
    setDeleteFeedId(feed.id);
  }
  function doDelete() {
    if (!deleteFeedId) return;
    deleteFeed(deleteFeedId);
    setDeleteFeedId(null);
  }
  function handleAddFeed(e: React.FormEvent) {
    e.preventDefault();
    addFeed(addName, addUrl);
    setAddName("");
    setAddUrl("");
    setAddOpen(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">フィード管理</h1>
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" onClick={() => setAddOpen(true)}>
              ＋ 新規追加
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
                  value={addName}
                  onChange={(e) => setAddName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">RSS URL</label>
                <input
                  className="w-full border rounded px-2 py-1"
                  value={addUrl}
                  onChange={(e) => setAddUrl(e.target.value)}
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
      </div>
      <ul className="space-y-4">
        {feeds.length === 0 && (
          <li className="text-muted-foreground text-center py-8">
            フィードがありません
          </li>
        )}
        {feeds.map((feed) => (
          <li
            key={feed.id}
            className="border rounded p-4 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div>
              <div className="font-semibold text-lg">{feed.name}</div>
              <div className="text-xs text-muted-foreground break-all">
                {feed.url}
              </div>
              <div className="text-xs text-muted-foreground mt-1 flex gap-2">
                <span>記事数: {feed.articles}</span>
                <span>最終取得: {feed.updated}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Dialog
                open={editFeedId === feed.id}
                onOpenChange={(v) => !v && setEditFeedId(null)}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEdit(feed)}
                  >
                    編集
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>フィード編集</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      saveEdit();
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm mb-1">フィード名</label>
                      <input
                        className="w-full border rounded px-2 py-1"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">RSS URL</label>
                      <input
                        className="w-full border rounded px-2 py-1"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        required
                        type="url"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      保存
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog
                open={deleteFeedId === feed.id}
                onOpenChange={(v) => !v && setDeleteFeedId(null)}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => confirmDelete(feed)}
                  >
                    削除
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>本当に削除しますか？</DialogTitle>
                  </DialogHeader>
                  <div className="mb-4 text-sm">
                    「{feed.name}」のフィードを削除します。よろしいですか？
                  </div>
                  <div className="flex gap-2">
                    <Button variant="destructive" onClick={doDelete}>
                      削除
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setDeleteFeedId(null)}
                    >
                      キャンセル
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
