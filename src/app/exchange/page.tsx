"use client"; // 📌 Necesario para usar useState y useEffect

import { useEffect, useState } from "react";

export default function ExchangeRate() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [rate, setRate] = useState<number | null>(null);
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

    // 📌 Función para obtener tasas de cambio
    useEffect(() => {
        const fetchExchangeRate = async () => {

            if (fromCurrency === toCurrency) {
                setRate(1);
                setConvertedAmount(amount);
                return;
            }

            try {
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
                const data = await res.json();
                setRate(data.rates[toCurrency]);
                setConvertedAmount(data.rates[toCurrency]);
            } catch (error) {
                console.error("Error obteniendo tasas de cambio:", error);
            }
        };

        fetchExchangeRate();
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl text-black font-bold mb-4">Conversor de Monedas</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
                {/* Monto a convertir */}
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full p-2 border rounded-md text-black"
                    placeholder="Monto"
                />

                {/* Selección de moneda origen */}
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full p-2 border rounded-md text-black"
                >
                    <option value="USD">USD - Dólar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - Libra</option>
                    <option value="JPY">JPY - Yen</option>
                </select>

                {/* Selección de moneda destino */}
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full p-2 border rounded-md text-black"
                >
                    <option value="USD">USD - Dólar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - Libra</option>
                    <option value="JPY">JPY - Yen</option>
                </select>

                {/* Resultado */}
                {convertedAmount !== null && (
                    <p className="text-lg text-black font-semibold text-center">
                        {amount} {fromCurrency} = {convertedAmount.toFixed(3)} {toCurrency}
                    </p>
                )}
            </div>
        </div>
    );
}
