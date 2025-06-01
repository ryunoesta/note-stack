import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 w-full">
        {/* Sidebar: モバイル非表示, md以上で表示 */}
        <aside className="hidden md:flex h-full">
          <Sidebar />
        </aside>
        <Main />
      </div>
    </div>
  );
}
