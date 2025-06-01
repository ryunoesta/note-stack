# NoteStack

**技術者のための、賢くまとめる RSS リーダー＋ AI ノート**

---

## 概要

最新の技術記事（RSS）を収集し、AI で要約し、自分用に整理・記録（ノート機能）できる、個人最適化された技術情報ダッシュボードです。

---

## 主な機能

- **RSS フィード管理**: 好きな RSS URL を登録（例：Zenn, Qiita, Medium）
- **記事一覧・既読管理**: 最新記事の一覧表示、既読・未読管理
- **AI 要約・タグ生成**: Gemini API で自動要約＋タグ生成
- **ノート機能**: 各記事に Markdown ベースのメモ・感想
- **タグ・フォルダ管理**: タグやフォルダで情報整理
- **検索・フィルター**: タグやキーワードで絞り込み
- **個人化**: ログイン・設定保存（Clerk + Firestore）

---

## 技術スタック

- **フロントエンド**: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Zustand, React Hook Form, Zod
- **バックエンド/API**: Hono (Edge Runtime), Bun, GraphQL, Gemini API, Firebase Firestore, Clerk
- **インフラ/運用**: Vercel, Sentry, GitHub Actions, Vercel Analytics
- **テスト/品質管理**: Bun test, Vitest, Playwright, Biome

---

## セットアップ

```bash
bun install
bun dev
```

- [http://localhost:3000](http://localhost:3000) でアプリを確認できます。
- ページ編集は `app/page.tsx` から始めてください。

---

## 開発フロー

1. 初回ログイン → ユーザー情報を Clerk + Firestore に保存
2. RSS URL 登録 → Vercel Edge Functions（Hono）で Feed 登録・定期取得
3. 新記事取得 → Firestore 保存、AI 要約実行（Gemini API）
4. フロント表示 → 記事一覧・詳細・ノート記述
5. 情報整理 → タグ・検索でフィルタリング

---

## 特徴・メリット

- **超高速開発体験**: Bun, Turbopack, Hono, Tailwind CSS
- **型安全・品質担保**: TypeScript, Zod, Biome, React Hook Form
- **アクセシビリティ**: shadcn/ui + Radix UI（WAI-ARIA 準拠）
- **柔軟な UI/UX**: Tailwind CSS, shadcn/ui, デザインシステム
- **ゼロコンフィグ運用**: Vercel, Clerk, Firebase
- **自動テスト/CI**: Bun + Vitest, Playwright, GitHub Actions

---

## 注意点・検証事項

- Bun + Next.js: App Router・SSR・Edge Runtime での動作検証
- Hono + Firestore: Edge Runtime での Firebase SDK 動作確認
- Clerk: Next.js App Router・Edge Runtime での認証フロー確認
- Playwright: Vercel Preview 環境での E2E テスト設定
- Gemini API: Edge Runtime での呼び出し制限・レスポンス時間

---

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Bun](https://bun.sh/)
- [Hono](https://hono.dev/)
- [Clerk](https://clerk.com/)
- [Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/)
