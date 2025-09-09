import HomePage from "@/components/HomePage";
import OverView from "@/components/OverView";
import Predict from "@/components/Predict";
import Security from "@/components/Security";
import { Solution } from "@/components/Solution";
import Testimonial from "@/components/Testimonial";
import Trusted from "@/components/Trusted";


export default function Home() {
  return (
    <>
      <HomePage />
      <Trusted />
      <OverView/>
      <Solution/>
      <Predict/>
      <Security/>
      <Testimonial/>
    </>
  );
}
