import React from "react";
import { DemoStand } from "./DemoStand";

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <h1>Пример контейнера с горизонтальной прокруткой</h1>
      <DemoStand />
    </div>
  );
};

const appStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "20px",
};

export default App;