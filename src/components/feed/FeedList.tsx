import { FeedItemCard } from "./FeedItemCard";
import { mockFeedItems } from "./mockFeedItems";

export function FeedList() {
  // 本来はpropsや状態管理からデータ取得
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      {mockFeedItems.map((item) => (
        <FeedItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
