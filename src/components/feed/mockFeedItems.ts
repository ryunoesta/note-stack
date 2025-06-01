import type { FeedItem } from "./FeedItemCard";

export const mockFeedItems: FeedItem[] = [
  {
    id: "1",
    title: "Next.js 15の新機能まとめ",
    summary:
      "React 19対応やTurbopack統合など、最新のNext.jsアップデートを解説。",
    tags: ["Next.js", "React", "アップデート"],
    date: "2024-06-01",
    read: false,
    feedName: "Zenn",
  },
  {
    id: "2",
    title: "Gemini APIでAI要約を自動生成する方法",
    summary: "Google Gemini APIを使った記事要約の自動化手順と活用例を紹介。",
    tags: ["AI", "Gemini", "API"],
    date: "2024-05-30",
    read: true,
    feedName: "Qiita",
  },
  {
    id: "3",
    title: "Tailwind CSS 4.0の新機能と移行ポイント",
    summary:
      "Tailwind CSS 4.0で追加された新機能や、移行時の注意点をまとめました。",
    tags: ["Tailwind CSS", "フロントエンド"],
    date: "2024-05-28",
    read: false,
    feedName: "Medium",
  },
];
