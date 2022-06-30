import * as React from "react";

export type EmployeeContextType = {
  id: string;
  name?: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  itemId: string;
  setItemId: React.Dispatch<React.SetStateAction<string>>;
};
export const EmployeeContext = React.createContext<EmployeeContextType | null>(
  null
);
