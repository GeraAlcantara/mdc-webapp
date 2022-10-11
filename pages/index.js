import Head from "next/head";
import CourseSpecs from "../components/ui/CourseSpecs";
import Hero from "../components/ui/Hero";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <CourseSpecs />
    </>
  );
}
