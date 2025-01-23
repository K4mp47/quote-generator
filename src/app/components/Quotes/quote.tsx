'use client'
import { Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState('But did you know that if I buy a gun and shoot you in the foot it will cost less than your computer?');
  const [author, setAuthor] = useState('Campa');
  
  // trying to make test animation 
  const handleClick = () => {
    getQuotes();
    //setVisible("hidden");
  }

  const getQuotes = () => {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const dataQuotes = data.quotes;
        const randomNum = Math.floor(Math.random() * dataQuotes.length);
        const randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        console.log(randomQuote, randomNum);
      })
  }
  
  return (
    <div>
      <div className="group w-full flex flex-col justify-between bg-slate-200 text-slate-950 p-8 min-h-[20rem] rounded-lg shadow-lg hover:drop-shadow-2xl hover:shadow-green-400 duration-500">
        <div id="text" className="flex items-start">
          <h1 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl">
            {quote}
          </h1>  
        </div>
        <div>
          <div id="author" className="w-full flex justify-end">
              <p className="text-xl pt-4">{author}.</p>
            </div>  
          <div className="flex flex-row justify-between p-2 relative pt-6">
            <div className="flex justify-center items-center gap-2">
              <a href="https://www.linkedin.com/in/alberto-campagnolo-916b86265/"><Linkedin size={32} className="hover:text-green-600"/></a>
              <a href="https://www.instagram.com/isthatcampa/?next=%2F"><Instagram size={32} className="hover:text-green-600"/></a>
            </div>
            <div id="div-quote" className="absolute right-0 top-[1.1rem]">
              <button id="new-quote" onClick={ handleClick } className="cursor-pointer transition-all bg-slate-900 text-white px-6 py-2 rounded-lg border-green-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-extrabold">New Quote</button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-400 w-full flex justify-center items-center py-12">
        by&nbsp;
        <a href="https://github.com/k4mp47" className="group relative inline-block text-green-400 font-medium cursor-pointer">
        k4mp47
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-green-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </a> 
        &nbsp;from somewhere in the internet
      </p>
    </div>
  );
};

export default Quotes;