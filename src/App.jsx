import React, { useState, useEffect } from 'react';

const currencies = {
  USD: { name: 'United States Dollar', symbol: '$', flag: '🇺🇸' },
  EUR: { name: 'Euro', symbol: '€', flag: '🇪🇺' },
  JPY: { name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  GBP: { name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  AUD: { name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  CAD: { name: 'Canadian Dollar', symbol: 'CA$', flag: '🇨🇦' },
  CNY: { name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  INR: { name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  BRL: { name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
  RUB: { name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
  KRW: { name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  SGD: { name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
  MXN: { name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
  ZAR: { name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  SAR: { name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
  AED: { name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
  TRY: { name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
  CHF: { name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
};

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  JPY: 149.5,
  GBP: 0.79,
  AUD: 1.52,
  CAD: 1.35,
  CNY: 7.23,
  INR: 83.2,
  BRL: 4.95,
  RUB: 91.43,
  KRW: 1334.5,
  SGD: 1.35,
  MXN: 17.15,
  ZAR: 18.9,
  SAR: 3.75,
  AED: 3.67,
  TRY: 32.15,
  CHF: 0.89,
};

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    if (amount) {
      const fromRate = exchangeRates[fromCurrency];
      const toRate = exchangeRates[toCurrency];
      const result = (amount / fromRate) * toRate;
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromkurrency);
  };

  return (
    <div className="max-h-screen bg-[url('/currency.jpeg')] bg-cover bg-center relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-purple-900 opacity-80"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Global Currency Converter</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Currency</label>
              <div className="flex items-center">
                <span className="mr-2 text-2xl">{currencies[fromCurrency].flag}</span>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Object.keys(currencies).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency} - {currencies[currency].name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSwap}
              className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md flex items-center justify-center hover:bg-blue-600 transition-all"
            >
              <span className="mr-2">Swap Currencies</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To Currency</label>
              <div className="flex items-center">
                <span className="mr-2 text-2xl">{currencies[toCurrency].flag}</span>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Object.keys(currencies).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency} - {currencies[currency].name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-xl font-bold flex items-center justify-center">
                <span className="mr-2">{currencies[fromCurrency].flag}</span>
                {currencies[fromCurrency].symbol}
                {amount} {fromCurrency} =
                <span className="ml-2 mr-2">{currencies[toCurrency].flag}</span>
                {currencies[toCurrency].symbol}
                {convertedAmount} {toCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 
