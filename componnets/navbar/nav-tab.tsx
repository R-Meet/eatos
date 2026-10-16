import Link from "next/link";

interface NavBarTabProps {
  text: string;
  path: string;
  className?: string;
  noAnimate?: boolean;
}

export const NavBarTab = ({
  text,
  path,
  className = "",
  noAnimate = false,
}: NavBarTabProps) => {
  return (
    <Link
      href={path}
      className={`group border-r flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {noAnimate ? (
        <span>{text}</span>
      ) : (
        <div className="relative overflow-hidden">
          <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            {text}
          </span>
          <span
            className="block absolute top-full left-0 w-full text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
            aria-hidden="true"
          >
            {text}
          </span>
        </div>
      )}
    </Link>
  );
};
