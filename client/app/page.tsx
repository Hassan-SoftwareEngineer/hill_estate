import PropertyDescription from "@/components/atoms/PropertyDescription";
import PropertyDetails from "@/components/atoms/PropertyDetails";
import Documents from "@/components/molecules/Documents";
import Investment from "@/components/molecules/Investment";
import Location from "@/components/molecules/Location";
import Process from "@/components/molecules/Process";
import Hero from "@/components/organisms/Hero";

const Home = () => {
  return (
    <>
    <Hero />
    <PropertyDetails />
    <Documents />
    <Process />
    <Investment />
    <PropertyDescription />
    <Location />
     </>
  )
}

export default Home;
