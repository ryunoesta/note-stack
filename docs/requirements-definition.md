# NoteStack

**技術者のための、賢くまとめる RSS リーダー＋ AI ノート**

---

## 📝 アプリ概要

最新の技術記事（RSS）を収集し、AI で要約、自分用に整理・記録（ノート機能）できる、個人最適化された技術情報ダッシュボード。

---

## 🧩 想定機能一覧

| カテゴリ        | 機能名              | 概要                                                  |
| --------------- | ------------------- | ----------------------------------------------------- |
| 🎒 記事収集     | RSS フィード管理    | 好きな RSS URL を登録（例：Zenn, Qiita, Medium）      |
| 📄 記事一覧     | 記事リスト表示      | 最新記事の一覧。Feed のメタ情報を表示、既読・未読管理 |
| 🧠 AI 要約      | GPT 自動要約        | 記事を Gemini API で要約。要約＋タグ生成              |
| ✏️ ノート機能   | 記事に紐づくノート  | Markdown ベースで自由記述可能（学び、感想、補足）     |
| 🧭 整理機能     | タグ・フォルダ管理  | タグやフォルダで分類整理                              |
| 🔍 検索         | フィルター・検索    | タグやキーワードによる絞り込み                        |
| 👤 個人化       | ログイン / 設定保存 | Clerk + Firestore による個別データ管理                |

---

## 🛠 技術スタック（Tech Stack）

### 🔄 共通ツールチェーン

- **Bun**：ランタイム / バンドラー / テストランナー / PM すべて統一

---

### 💻 フロントエンド

- **Next.js (App Router)**：CSR + SSR + Edge 対応
- **Turbopack**：開発高速化
- **TypeScript**：型安全な開発
- **Tailwind CSS**：ユーティリティファーストスタイリング
- **shadcn/ui**：再利用可能な UI コンポーネント
- **Zustand**：軽量な状態管理ライブラリ
- **React Hook Form + Zod**：型安全なフォームとバリデーション
- **Storybook**：コンポーネント開発環境
- **Biome**：高速リンター・フォーマッター（ESLint/Prettier 代替）

---

### 🔌 バックエンド / API

- **Hono**：軽量 Web フレームワーク（Edge 対応）
- **Bun Runtime**：サーバー実行環境
- **GraphQL**：型安全なフロント連携
- **Gemini API**：要約生成・タグ付け
- **Firebase Firestore**：ノート / 設定 / タグの保存
- **Clerk**：認証とユーザー管理

---

### ☁️ インフラ・運用

- **Vercel**：F/E + API 統合ホスティング
- **Vercel Edge Runtime**：超高速レスポンス
- **Vercel Analytics**：パフォーマンス監視
- **Sentry**：エラートラッキング
- **GitHub Actions**：CI/CD（自動デプロイ）

---

### ✅ テスト / 品質管理

- **Bun test / Vitest**：ユニット・統合テスト
- **Playwright**：E2E テスト（Vercel Preview 環境で実行）
- **Biome**：静的解析 + フォーマット統一
- **TypeScript**：全体の型整合性

---

## ⚙️ 開発フロー

1. **初回ログイン** → Clerk + Firestore にユーザー情報保存
2. **RSS URL 登録** → Edge API（Hono）で Feed 登録・定期取得
3. **新着記事取得** → Firestore に保存し、Gemini API で要約・タグ生成
4. **一覧表示** → 記事と要約・タグ・既読状態をフロントに表示
5. **ノート記述** → Markdown ノートを Firestore に保存
6. **情報整理** → タグ付け・検索・フォルダ管理で分類

---

## 🧠 技術選定の理由

### 🔥 開発体験・速度

- **Bun + Turbopack** による爆速開発体験
- **Hono + Vercel Edge Functions** による高速レスポンス
- **Tailwind CSS + shadcn/ui** による一貫性ある UI 実装

### 🛡️ 型安全・品質保証

- TypeScript + Zod + React Hook Form によるフル型安全な開発
- Biome による高速な静的解析
- Storybook によるコンポーネント単位の品質担保

### ☁️ 運用性・拡張性

- Vercel によるシームレスな F/E + API デプロイ
- Firebase による柔軟なスキーマレス DB と個人化保存
- Clerk による認証とセキュアなデータ分離

---

## 🧪 要検証ポイント

- Bun + Next.js（App Router）での安定動作
- Firebase SDK + Hono（Edge Runtime）での互換性
- Gemini API 呼び出し回数制限 / レイテンシ
- Playwright + GitHub Actions + Vercel Preview の組み合わせ
- Clerk 認証フローの App Router 対応状況

---

## 🔮 拡張アイデア

| 機能名                | 概要                                                         |
| --------------------- | ------------------------------------------------------------ |
| AI 要約カスタマイズ   | 要約スタイル指定（例：初心者向け、要点だけ、3行で）         |
| ノート共有            | ノートを他ユーザーと共有 / 公開                              |
| 自動評価              | トレンドスコア / 人気度などの算出                            |
| 通知機能              | 新着記事や人気記事の通知（メール / Slack）                   |
| PWA 対応              | オフライン閲覧、Push 通知対応                                |

---

## 📁 ディレクトリ構成（予定）

```
apps/
  web/                # Next.js App Router
  api/                # Hono API (Edge Runtime)
packages/
  ui/                 # shadcn/ui + カスタムコンポーネント集
  lib/                # 共通のユーティリティ（Zodスキーマなど）
  config/             # tailwind.config、eslint、biome 設定など
```

---

## 👥 想定ユーザー

- 技術系情報を効率的に収集・整理したいエンジニア
- 情報を自分用にカスタマイズ・ナレッジ化したい開発者
- 雑多な RSS 情報から要点だけを抽出したい情報中毒者

---

## 🚧 現在のフェーズ

- [ ] 技術スタック確定 ✅
- [ ] 要件定義・仕様書作成 ✅
- [ ] API 設計・データスキーマ設計
- [ ] UI コンポーネント設計
- [ ] プロトタイプ開発開始
