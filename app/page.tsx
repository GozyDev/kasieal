import HomePage from "@/components/HomePage";
import OverView from "@/components/OverView";
import { Solution } from "@/components/Solution";
import Trusted from "@/components/Trusted";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomePage />
      <Trusted />
      <OverView/>
      <Solution/>
    </>
  );
}
