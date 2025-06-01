import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">NoteStack</h1>
          <p className="text-xl text-muted-foreground">
            技術者のための、賢くまとめる RSS リーダー＋ AI ノート
          </p>
          <p className="text-sm text-muted-foreground">
            shadcn/ui コンポーネントライブラリ導入完了 ✅
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Button Examples Card */}
          <Card>
            <CardHeader>
              <CardTitle>Button コンポーネント</CardTitle>
              <CardDescription>
                様々なスタイルのボタンコンポーネント
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Example Card */}
          <Card>
            <CardHeader>
              <CardTitle>Form コンポーネント</CardTitle>
              <CardDescription>
                Input、Label を使用したフォーム例
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rss-url">RSS URL</Label>
                <Input
                  id="rss-url"
                  placeholder="https://example.com/feed.xml"
                  type="url"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note-title">ノートタイトル</Label>
                <Input id="note-title" placeholder="記事についてのメモ" />
              </div>
              <Button className="w-full">保存</Button>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card>
            <CardHeader>
              <CardTitle>主な機能</CardTitle>
              <CardDescription>NoteStack で利用可能な機能一覧</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  RSS フィード管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  AI 自動要約（Gemini API）
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Markdown ノート機能
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  タグ・フォルダ管理
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  検索・フィルター機能
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tech Stack Card */}
          <Card>
            <CardHeader>
              <CardTitle>技術スタック</CardTitle>
              <CardDescription>使用している技術・ツール</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="font-medium">Frontend</div>
                  <ul className="text-muted-foreground">
                    <li>Next.js 15</li>
                    <li>React 19</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>shadcn/ui ✅</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium">Backend</div>
                  <ul className="text-muted-foreground">
                    <li>Hono</li>
                    <li>Bun Runtime</li>
                    <li>Firebase</li>
                    <li>Clerk</li>
                    <li>Gemini API</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8">
            開発を開始する 🚀
          </Button>
        </div>
      </div>
    </div>
  );
}
