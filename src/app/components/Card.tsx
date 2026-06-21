export default function Card({
  title,
}: {
  title: string;
}) {
  return (
    <div
      className="
        border border-white/10
        rounded-3xl
        p-8
        bg-white/5
        backdrop-blur-sm
        hover:bg-white/10
        hover:-translate-y-2
        transition
        duration-300
      "
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}