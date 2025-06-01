"use client";
import { useArticleNoteContext } from "@/components/layout/ArticleNoteContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";

export default function ArticleDetailPage() {
  const { articles } = useArticleNoteContext();
  const params = useParams();
  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
      ? params.id[0]
      : "";
  const article = articles.find((item) => item.id === id);
  if (!article) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8">
      <div className="mb-4">
        <div className="text-xs text-muted-foreground flex gap-2 items-center">
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
            フィードID: {article.feedId}
          </span>
          <span>{article.date}</span>
        </div>
        <h1 className="text-2xl font-bold mt-2 mb-2 leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-2">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 rounded px-2 py-0.5 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="text-base text-muted-foreground mb-4">
          {article.summary}
        </div>
        <Link href={`/note/${article.id}`} passHref legacyBehavior>
          <Button asChild variant="outline" className="mr-2">
            <a>📝 ノートを書く</a>
          </Button>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <Button asChild variant="ghost">
            <a>← 一覧に戻る</a>
          </Button>
        </Link>
      </div>
      <div className="text-sm text-muted-foreground italic">
        ※ ここに記事本文やAI要約、ノート一覧などを今後追加予定
      </div>
    </div>
  );
}
