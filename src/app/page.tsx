import TextSlider from "@/components/TextSlider";
import "./page.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="desktop">
      <div className="hero">
        <Header />
        <TextSlider />
      </div>
    </div>
  );
}
