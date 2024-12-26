import TextSlider from "@/components/TextSlider";
import "./page.css";
import Header from "@/components/Header";
import Info from "@/components/Info";

export default function Home() {
  return (
    <div className="desktop">
      <div className="hero">
        <Header />
        <TextSlider />
        <Info />
      </div>
    </div>
  );
}
