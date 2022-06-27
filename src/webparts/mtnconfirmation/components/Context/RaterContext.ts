import * as React from "react";

export type RaterContextType = {
  rater: string;
  setRater: React.Dispatch<React.SetStateAction<string>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  raterEmail: string;
  setRaterEmail: React.Dispatch<React.SetStateAction<string>>;
};

export const RaterContext = React.createContext<RaterContextType | null>(null);
