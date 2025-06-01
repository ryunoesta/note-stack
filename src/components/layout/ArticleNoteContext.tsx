"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Article = {
  id: string;
  feedId: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
  read: boolean;
};

export type Note = {
  id: string;
  articleId: string;
  title: string;
  content: string;
  tags: string[];
  updated: string;
};

type ArticleNoteContextType = {
  articles: Article[];
  notes: Note[];
  selectedFeedId: string | null;
  setSelectedFeedId: (id: string | null) => void;
  markAsRead: (id: string) => void;
  loading: boolean;
};

const ArticleNoteContext = createContext<ArticleNoteContextType | undefined>(
  undefined
);

const initialArticles: Article[] = [
  {
    id: "a1",
    feedId: "1",
    title: "Next.js 15の新機能まとめ",
    summary:
      "React 19対応やTurbopack統合など、最新のNext.jsアップデートを解説。",
    tags: ["Next.js", "React", "アップデート"],
    date: "2024-06-01",
    read: false,
  },
  {
    id: "a2",
    feedId: "2",
    title: "Gemini APIでAI要約を自動生成する方法",
    summary: "Google Gemini APIを使った記事要約の自動化手順と活用例を紹介。",
    tags: ["AI", "Gemini", "API"],
    date: "2024-05-30",
    read: true,
  },
  {
    id: "a3",
    feedId: "3",
    title: "Tailwind CSS 4.0の新機能と移行ポイント",
    summary:
      "Tailwind CSS 4.0で追加された新機能や、移行時の注意点をまとめました。",
    tags: ["Tailwind CSS", "フロントエンド"],
    date: "2024-05-28",
    read: false,
  },
];

const initialNotes: Note[] = [
  {
    id: "n1",
    articleId: "a1",
    title: "学びメモ：React 19対応ポイント",
    content: `- Server Componentsの改善\n- use()フックの追加\n- Turbopack統合でビルド高速化`,
    tags: ["Next.js", "React", "学習"],
    updated: "2024-06-01",
  },
  {
    id: "n2",
    articleId: "a2",
    title: "Gemini API活用メモ",
    content: `Gemini APIの使い方と要約自動化のポイント`,
    tags: ["AI", "Gemini"],
    updated: "2024-05-30",
  },
];

export function ArticleNoteProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [notes] = useState<Note[]>(initialNotes);
  const [selectedFeedId, setSelectedFeedId] = useState<string | null>(null);
  const [loading] = useState(false); // 今後API連携時に利用

  function markAsRead(id: string) {
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, read: true } : a))
    );
  }

  return (
    <ArticleNoteContext.Provider
      value={{
        articles,
        notes,
        selectedFeedId,
        setSelectedFeedId,
        markAsRead,
        loading,
      }}
    >
      {children}
    </ArticleNoteContext.Provider>
  );
}

export function useArticleNoteContext() {
  const ctx = useContext(ArticleNoteContext);
  if (!ctx)
    throw new Error(
      "useArticleNoteContext must be used within ArticleNoteProvider"
    );
  return ctx;
}
