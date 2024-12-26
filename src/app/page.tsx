import TextSlider from "@/components/TextSlider";
import "./page.css";
import Header from "@/components/Header";
import Info from "@/components/Info";
import MapWidget from "@/components/MapWidget";
import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <div className="desktop">
      <div className="hero">
        <Header />
        <TextSlider />
        <Info />
        <MapWidget />
        <FeedbackForm />
      </div>
    </div>
  );
}
