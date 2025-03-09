"use client";

import { useState } from "react";
import styles from "./IMCCalculator.module.css";

export default function IMCCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightInCentimeters = parseFloat(height);

    if (weightNum && heightInCentimeters) {
      const heightInMeters = heightInCentimeters / 100;
      const imcValue = weightNum / (heightInMeters * heightInMeters);
      setImc(imcValue);

      if (imcValue < 18.5) {
        setStatus("Bajo peso");
      } else if (imcValue >= 18.5 && imcValue < 25) {
        setStatus("Peso normal");
      } else if (imcValue >= 25 && imcValue < 30) {
        setStatus("Sobrepeso");
      } else {
        setStatus("Obesidad");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Peso (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={styles.input}
            placeholder="Ingrese el peso en kg"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Altura (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={styles.input}
            placeholder="Ingrese la altura en centímetros"
          />
        </div>
        <button
          onClick={calculateIMC}
          className={styles.button}
        >
          Calcular IMC
        </button>
        {imc && (
          <div className={styles.result}>
            <p className={styles.resultText}>Tu IMC: {imc.toFixed(2)}</p>
            <p className={styles.resultText}>Estado: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
