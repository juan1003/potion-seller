import { ReactNode } from "react";

export default function Card({ title, action, children }: { title: string, action?: ReactNode, children: ReactNode }) {
    return (
      <div className="border border-stone-500 rounded-md p-4 w-full lg:w-[550px]">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-3xl font-thin text-white">{title}</h2>
          {action}
        </div>
        {children}
      </div>
    )
  }
