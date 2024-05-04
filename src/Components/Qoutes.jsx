import React, { useState, useEffect } from "react";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "The only source of knowledge is experience. - Albert Einstein",
    "It is never too late to be what you might have been. - George Eliot",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Aim for the moon. If you miss, you may hit a star. - W. Clement Stone",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "The best revenge is massive success. - Frank Sinatra",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  ];

  useEffect(() => {
    displayRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const displayRandomQuote = () => {
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
  };

  return (
    <div className="container">
      <h5 id="quote">{quote}</h5>
    </div>
  );
};

export default RandomQuoteGenerator;
