import { useEffect, useState } from "react";
import CardForm from "./components/CardForm";
import CardImage from "./components/CardImage";
import CompleteMessage from "./components/CompleteMessage";
import PatternBg from "./components/PatternBg";
function App() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [inputForm, setInpurForm] = useState({
    cardName: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    month: 0,a
    year: 0,
    cvc: 0,
  });
  function watchInput(data) {
    setInpurForm(data);
  }
  return (
    <main className="relative ">
      <PatternBg />
      <div className="relative top-1/2 flex w-full flex-col items-center overflow-hidden lg:h-screen lg:flex-row">
        <CardImage inputForm={inputForm} />
        {!submitSuccess && (
          <CardForm
            setSubmitSuccess={setSubmitSuccess}
            submitSuccess={submitSuccess}
            watchInput={watchInput}
          />
        )}
        {submitSuccess && (
          <CompleteMessage setSubmitSuccess={setSubmitSuccess} />
        )}
      </div>
    </main>
  );
}

export default App;
