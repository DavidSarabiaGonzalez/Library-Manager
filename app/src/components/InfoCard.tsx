import { Link } from "react-router-dom";

interface InfoCardProps {
  text: string;
  quantity: string;
  to: string;
}

export default function InfoCard(props: InfoCardProps) {
  return (
    <article className="flex min-w-0 flex-row items-start justify-between gap-3 rounded-md border border-gray-300 p-3 sm:p-4 overflow-hidden">
      <div className="truncate flex min-w-0 flex-col justify-center gap-1 sm:gap-2 lg:gap-4 h-full">
        <h4 className=" text-sm font-bold sm:text-base lg:text-lg md:text-3xl">
          {props.text}
        </h4>

        <strong className="text-xl sm:text-2xl md:text-4xl lg:text-4xl">
          {props.quantity}
        </strong>
      </div>

      <Link
        to={props.to}
        aria-label={`Ver ${props.text}`}
        className="flex size-8 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-lg transition hover:bg-amber-500/20 sm:size-9"
      >
        ↗
      </Link>
    </article>
  );
}
