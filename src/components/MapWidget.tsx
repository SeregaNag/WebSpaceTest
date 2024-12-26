import "./MapWidget.css";

export default function MapWidget() {
  return (
    <div className="map-widget">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aabe49127aad17dc586431b4a3c11d168e14581da33ba9930f95c7b5d1ae897ca&amp;source=constructor"
        width="1356"
        height="480"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
