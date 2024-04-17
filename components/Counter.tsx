"use client"
import { useCountUp } from "react-countup";

export const Counter = () => {
  useCountUp({ ref: "counter", start:1, end: 102,duration:15 });
  return <span id="counter" />;
};
