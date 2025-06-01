import { FeedList } from "../feed/FeedList";

export function Main() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto">
      <FeedList />
    </main>
  );
}
