"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

// 仮のノートデータ
const mockNote = {
  id: "1",
  articleTitle: "Next.js 15の新機能まとめ",
  noteTitle: "学びメモ：React 19対応ポイント",
  content: `- Server Componentsの改善\n- use()フックの追加\n- Turbopack統合でビルド高速化`,
  tags: ["Next.js", "React", "学習"],
  updated: "2024-06-01",
};

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  // 本来はparams.idでノート取得
  const note = mockNote;
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.noteTitle);
  const [content, setContent] = useState(note.content);
  const [tags, setTags] = useState(note.tags.join(", "));

  function handleSave() {
    // 本来はAPI保存
    setEditMode(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8">
      <div className="mb-4">
        <div className="text-xs text-muted-foreground mb-1">
          記事: {note.articleTitle}
        </div>
        {editMode ? (
          <input
            className="w-full border rounded px-2 py-1 mb-2 text-lg font-bold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="text-xl font-bold mb-2">{title}</h1>
        )}
        <div className="flex flex-wrap gap-2 mb-2">
          {editMode ? (
            <input
              className="w-full border rounded px-2 py-1 text-xs mb-1"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="タグ（カンマ区切り）"
            />
          ) : (
            tags.split(",").map((tag) => (
              <span
                key={tag.trim()}
                className="bg-purple-100 text-purple-700 rounded px-2 py-0.5 text-xs"
              >
                {tag.trim()}
              </span>
            ))
          )}
        </div>
        <div className="text-xs text-muted-foreground mb-4">
          最終更新: {note.updated}
        </div>
      </div>
      <div className="mb-6">
        {editMode ? (
          <textarea
            className="w-full border rounded p-2 min-h-[120px] text-base mb-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <div className="whitespace-pre-line text-base text-muted-foreground bg-gray-50 rounded p-4">
            {content}
          </div>
        )}
      </div>
      {editMode ? (
        <>
          <Button variant="default" className="mr-2" onClick={handleSave}>
            💾 保存
          </Button>
          <Button variant="ghost" onClick={() => setEditMode(false)}>
            キャンセル
          </Button>
        </>
      ) : (
        <Button
          variant="outline"
          className="mr-2"
          onClick={() => setEditMode(true)}
        >
          ✏️ 編集
        </Button>
      )}
      <Link href="/note" passHref legacyBehavior>
        <Button asChild variant="ghost">
          <a>← ノート一覧へ</a>
        </Button>
      </Link>
    </div>
  );
}
