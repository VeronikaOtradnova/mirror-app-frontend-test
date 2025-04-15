import { ReactNode } from "react";

interface IProps {
  handler: () => void;
  children: ReactNode
}

export function Btn({handler, children}:IProps) {
  return (
    <button 
      className="mb-4 p-2 bg-blue-500 text-white text-m hover:bg-blue-600 rounded cursor-pointer"
      onClick={handler}
    >
      {children}
    </button>
  )
}