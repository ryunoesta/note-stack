"use client";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { FeedProvider } from "./FeedContext";
import { ArticleNoteProvider } from "./ArticleNoteContext";

const initialFeeds = [
  {
    id: "1",
    name: "Zenn",
    url: "https://zenn.dev/feed",
    articles: 12,
    updated: "2024-06-01",
  },
  {
    id: "2",
    name: "Qiita",
    url: "https://qiita.com/feed",
    articles: 8,
    updated: "2024-05-30",
  },
  {
    id: "3",
    name: "Medium",
    url: "https://medium.com/feed",
    articles: 5,
    updated: "2024-05-28",
  },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <FeedProvider>
      <ArticleNoteProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1 w-full">
            {/* Sidebar: モバイル非表示, md以上で表示 */}
            <aside className="hidden md:flex h-full">
              <Sidebar />
            </aside>
            {/* Mainエリアにchildrenを描画 */}
            <main className="flex-1 p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto h-[calc(100dvh-4rem)] overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </ArticleNoteProvider>
    </FeedProvider>
  );
}
