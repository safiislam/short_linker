import { useState } from "react";
import Background from "./Components/Background/Background";
import DisplayLink from "./Components/Background/DisplayLink";
import InputLink from "./Components/Background/InputLink";


const App = () => {
  const [generateLink, setGenerateLink] = useState('hello')
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <Background />
        <InputLink setGenerateLink={setGenerateLink} />
        <DisplayLink generateLink={generateLink} />
      </div>
    </div>
  );
};

export default App;