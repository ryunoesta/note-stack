import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardDescription>カードの説明文がここに入ります。</CardDescription>
      </CardHeader>
      <CardContent>
        <p>カードのメインコンテンツがここに表示されます。</p>
      </CardContent>
    </Card>
  ),
};

export const RSS記事カード: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          Next.js 15の新機能：React 19対応とパフォーマンス向上について
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Zenn
          </span>
          <span className="text-xs text-muted-foreground">2024/06/01</span>
          <span className="text-xs text-muted-foreground">未読</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-3">
          Next.js 15では、React 19のサポートが追加され、新しいServer
          Componentsの機能が強化されました。
          パフォーマンスの改善とTurbopackの統合により、開発体験が大幅に向上しています...
        </p>
        <div className="flex flex-wrap gap-1">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            Next.js
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            React
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            パフォーマンス
          </span>
        </div>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline">
            📖 読む
          </Button>
          <Button size="sm" variant="ghost">
            🤖 要約
          </Button>
          <Button size="sm" variant="ghost">
            📝 ノート
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ノートカード: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-lg">学習メモ: React 19の新機能</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            最終更新: 2024/06/01
          </span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            完了
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm space-y-2">
          <p>
            <strong>重要ポイント:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Server Components の改善</li>
            <li>新しい use() フック</li>
            <li>React Compiler の実装</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
            学習中
          </span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            React
          </span>
        </div>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline">
            ✏️ 編集
          </Button>
          <Button size="sm" variant="ghost">
            🔗 記事を見る
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const 統計カード: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="text-base">今週の学習状況</CardTitle>
        <CardDescription>RSS + ノートの活動サマリー</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-muted-foreground">記事読了</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-muted-foreground">ノート作成</div>
          </div>
        </div>
        <div className="pt-2">
          <Button size="sm" variant="outline" className="w-full">
            詳細を見る
          </Button>
        </div>
      </CardContent>
    </Card>
  ),
};
