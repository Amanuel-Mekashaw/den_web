import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type KeyResponsibilityCardT = {
  title?: string;
  description: string;
  icon?: LucideIcon;
  styleClass?: string;
};

export default function KeyResponsibilityCard({
  title,
  description,
  icon: Icon,
  styleClass,
}: KeyResponsibilityCardT) {
  return (
    <div
      className={twMerge(
        "w-full h-full  space-y-3 dark:bg-gray-800 p-10 rounded shadow-md",
        "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-denovoDarkblue to-denovoPink",
        "overflow-hidden hover:scale-[105%] transition-all delay-200 ease-in-out cursor-pointer",
        "shadow-[5px_10px_20px_rgba(0,0,0,0.5)]",
        styleClass ? styleClass : ""
      )}
    >
      <div className="size-14 p-1 rounded-full bg-gray-100 flex justify-center items-center">
        {Icon && <Icon />}
      </div>
      {title && <p className="w-full font-bold text-lg text-white">{title}</p>}
      <p className="w-full text-white dark:text-gray-300 text-lg">
        {description}
      </p>
    </div>
  );
}
