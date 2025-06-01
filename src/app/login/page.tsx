"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    // TODO: Clerk/Firebase連携
    setTimeout(() => {
      setLoading(false);
      setError("デモ用：認証API未接続");
    }, 1000);
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm flex flex-col gap-6 border"
      >
        <h1 className="text-2xl font-bold text-center mb-2">ログイン</h1>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            パスワード
          </label>
          <input
            id="password"
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "ログイン中..." : "ログイン"}
        </Button>
        <div className="text-xs text-center text-muted-foreground mt-2">
          デモ用：認証API未接続
        </div>
      </form>
    </div>
  );
}
