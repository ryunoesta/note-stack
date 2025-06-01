# NoteStack

**"技術者のための、賢くまとめる RSS リーダー＋ AI ノート"**

---

## アプリ概要

最新の技術記事（RSS）を収集し、AI で要約し、自分用に整理・記録（ノート機能）できる、個人最適化された技術情報ダッシュボード。

---

## 想定機能

| カテゴリ        | 機能名              | 概要                                                  |
| --------------- | ------------------- | ----------------------------------------------------- |
| 🎒 記事収集     | RSS フィード管理    | 好きな RSS URL を登録（例：Zenn, Qiita, Medium）      |
| 📄 記事一覧     |                     | 最新記事の一覧。Feed のメタ情報を表示、既読・未読管理 |
| 🧠 AI 要約      |                     | GPT で自動要約。要約＋タグ生成、記事の分類にも活用    |
| ✏️ ノート機能   |                     | 各記事に対して Markdown ベースのメモ・感想が可能      |
| 🧭 カスタマイズ | タグ・フォルダ      | 情報を自分仕様に整理                                  |
| 🔍 検索         | フィルター          | タグやキーワードで絞り込み                            |
| 👤 個人化       | ログイン / 設定保存 | Clerk + Firestore に保存                              |

---

## 技術スタック

### 共通ツールチェーン

- **Bun**（all-in-one JavaScript runtime & toolkit）
  - ランタイム・バンドラー・テストランナー・パッケージマネージャを統一

### フロントエンド

- **Next.js**（App Router, CSR + SSR + Edge Runtime 対応）
- **Turbopack**（開発モードで高速ホットリロード・快適な開発体験）
- **TypeScript**
- **Tailwind CSS**（ユーティリティファースト CSS）
- **shadcn/ui**（Radix UI + Tailwind CSS の再利用可能コンポーネント集）
- **Zustand**（軽量な状態管理）
- **React Hook Form**（軽量で拡張性のあるフォーム管理）
- **Zod**（TypeScript フレンドリーなスキーマバリデーション）
- **Storybook**（UI 開発・デザインシステム）
- **Biome**（高速リンター・フォーマッター）

### バックエンド / API

- **Hono**（軽量高速 Web フレームワー K、Edge Runtime 対応）
- **Bun**（サーバーランタイム）
- **GraphQL**（フロント連携用 API）
- **Gemini API**（記事要約・タグ生成）
- **Firebase Firestore**（ノート / 設定 / タグ管理）
- **Clerk**（認証・ユーザー管理）

### インフラ / デプロイ・運用

- **Vercel**（フロントエンド + バックエンド API 統合ホスティング）
- **Vercel Edge Runtime**（Hono ベース API、高速レスポンス）
- **Vercel Analytics**（パフォーマンス監視）
- **Sentry**（エラートラッキング）
- **GitHub Actions**（CI/CD、Vercel 連携）

### テスト・品質管理

- **Bun test**（ユニットテスト・統合テスト）
- **Vitest**（高速テストランナー、Bun サポート）
- **Playwright**（E2E テスト、Vercel Preview 環境での自動テスト）
- **Biome**（コード品質・一貫性）
- **TypeScript**（型安全性）

---

## 開発フロー

1. **初回ログイン** → ユーザー情報を Clerk + Firestore に保存
2. **RSS URL 登録** → Vercel Edge Functions（Hono）で Feed 登録・定期取得
3. **新記事取得** → Firestore 保存、AI 要約実行（Gemini API）
4. **フロント表示** → 記事一覧表示、記事詳細・ノート記述（React Hook Form + Zod）
5. **情報整理** → タグ・検索でフィルタリング

---

## 技術選定の特徴・メリット

### 🚀 開発体験・パフォーマンス

- **Bun**: 超高速パッケージ管理・ビルド・テスト実行
- **Turbopack**: Next.js 開発モードでの爆速ホットリロード
- **Hono**: 軽量・高速 API、Edge Runtime 最適化
- **Tailwind CSS**: 高速スタイリング、一貫性のあるデザイン
- **shadcn/ui**: 高品質なコンポーネントで UI 開発を大幅効率化

### 🛡️ 型安全性・品質

- **TypeScript**: フルスタック型安全
- **Zod**: ランタイム型検証・バリデーション
- **Biome**: 高速リンター・フォーマッター
- **React Hook Form**: 型安全なフォーム管理
- **shadcn/ui**: TypeScript 完全対応、型安全なコンポーネント

### 🎨 UI/UX・アクセシビリティ

- **shadcn/ui + Radix UI**: WAI-ARIA 準拠、キーボードナビゲーション対応
- **Clerk**: 美しいプリビルト認証 UI、shadcn/ui との統合
- **デザインシステム**: 一貫性のある UI コンポーネント・スタイルガイド
- **カスタマイズ性**: Tailwind CSS ベースで柔軟なデザイン調整
- **フォーム統合**: React Hook Form + Zod + shadcn/ui で使いやすいフォーム体験

### ☁️ デプロイ・運用

- **Vercel**: ゼロコンフィグデプロイ、Edge Runtime、Analytics 統合
- **Clerk**: 認証・ユーザー管理、Vercel との完璧な統合
- **Firebase**: データストレージ（ノート・設定）、Vercel との親和性
- **Edge Runtime**: 世界中で高速レスポンス

### 🧪 テスト・CI/CD

- **Bun + Vitest**: 高速テスト実行
- **Playwright**: 信頼性の高い E2E テスト
- **GitHub Actions + Vercel**: 自動デプロイ・プレビュー環境

---

## 注意点・検証事項

- **Bun + Next.js**: App Router・SSR・Edge Runtime での動作を事前検証
- **Hono + Firestore**: Edge Runtime での Firebase SDK 動作確認
- **Clerk**: Next.js App Router・Edge Runtime での認証フロー確認
- **Playwright**: Vercel Preview 環境での E2E テスト設定
- **Gemini API**: Edge Runtime での呼び出し制限・レスポンス時間

---

## 発展的なアイデア

| 拡張機能              | 内容                                                           |
| --------------------- | -------------------------------------------------------------- |
| AI 要約のカスタマイズ | 「3 行」「初心者向け」「要点だけ」など要約スタイルを指定可能に |
| ノートの共有          | 特定ノートを他ユーザーと共有・公開できる                       |
| 記事の自動評価        | 「トレンドスコア」や「人気度」推定                             |
| 通知                  | 新着記事や注目記事の通知機能（メール / Slack）                 |
| PWA 対応              | オフライン読書・プッシュ通知                                   |
