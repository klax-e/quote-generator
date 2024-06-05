import React, { useContext, useEffect, useState } from "react";
import Model from "./components/model";
import ModelContext from "./context/modelcontext";
import PopupOnTop from "./components/popupOnTop";

const App = () => {
  const [allQuotes, setAllQuotes] = useState(null);
  const { messageModal, handleModal } = useContext(ModelContext);

  useEffect(() => {
    // console.log("quotes fetched");
    const fetchAPI = async () => {
      await fetch(`https://dummyjson.com/quotes`)
        .then((res) => res.json())
        .then((res) => setAllQuotes(res.quotes));
    };
    fetchAPI();
  }, []);
  const handleModelQuoteAndOpen = () => {
    const quote = allQuotes[Math.floor(Math.random() * 29) + 1].quote;
    handleModal(true, quote, "");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-5 flex-col">
      <h1 className="font-semibold text-5xl">Quote Generator</h1>
      <p className="w-2/3 text-center text-sm  text-zinc-500">
        A delightful tool designed to bring a spark of inspiration, motivation,
        or reflection to your day. Simply click the button below to receive a
        randomly selected quote from our extensive collection, spanning themes
        of love, life, success, and wisdom. Whether you need a daily dose of
        positivity, a thought-provoking statement, or a perfect line to share on
        social media, our Quote Generator is here to uplift and enlighten you.
        Try it now and see what words of wisdom await you!
      </p>
      <button
        disabled={messageModal.message ? true : false}
        className="px-4 py-2 bg-sky-600 rounded text-white font-medium tracking-wider disabled:bg-zinc-400"
        onClick={handleModelQuoteAndOpen}
      >
        Generate
      </button>
      {messageModal.isModelOpen && <Model />}
      {messageModal.color && <PopupOnTop color={messageModal.color} />}
    </div>
  );
};

export default App;
