"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Feed = {
  id: string;
  name: string;
  url: string;
  articles: number;
  updated: string;
};

type FeedContextType = {
  feeds: Feed[];
  addFeed: (name: string, url: string) => void;
  editFeed: (id: string, name: string, url: string) => void;
  deleteFeed: (id: string) => void;
};

const FeedContext = createContext<FeedContextType | undefined>(undefined);

const initialFeeds: Feed[] = [
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

export function FeedProvider({ children }: { children: ReactNode }) {
  const [feeds, setFeeds] = useState<Feed[]>(initialFeeds);

  function addFeed(name: string, url: string) {
    setFeeds((prev) => [
      ...prev,
      {
        id: (Date.now() + Math.random()).toString(),
        name,
        url,
        articles: 0,
        updated: new Date().toISOString().slice(0, 10),
      },
    ]);
  }
  function editFeed(id: string, name: string, url: string) {
    setFeeds((prev) =>
      prev.map((f) => (f.id === id ? { ...f, name, url } : f))
    );
  }
  function deleteFeed(id: string) {
    setFeeds((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <FeedContext.Provider value={{ feeds, addFeed, editFeed, deleteFeed }}>
      {children}
    </FeedContext.Provider>
  );
}

export function useFeedContext() {
  const ctx = useContext(FeedContext);
  if (!ctx) throw new Error("useFeedContext must be used within FeedProvider");
  return ctx;
}
