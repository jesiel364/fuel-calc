import { FormEvent, useState } from "react";

interface TypeProps {
  title: string;
  alcohol: number | string;
  gas: number | string;
}

const ViewController = () => {
  const [alcoolPrice, setAlcoolPrice] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [message, setMessage] = useState<TypeProps>();

  function formatCurrency(value: number) {
    const formatValue = value.toLocaleString("pt-bt", {
      style: "currency",
      currency: "BRL",
    });

    return formatValue;
  }

  function calc_price(e: FormEvent) {
    e.preventDefault();
    console.log(alcoolPrice, gasPrice);

    const calc: number = alcoolPrice / gasPrice;

    if (calc <= 0.7) {
      setMessage({
        title: "Compensa usar gasolina!",
        gas: formatCurrency(gasPrice),
        alcohol: formatCurrency(alcoolPrice),
      });
    } else {
      setMessage({
        title: "Compensa usar álcool!",
        gas: formatCurrency(gasPrice),
        alcohol: formatCurrency(alcoolPrice),
      });
    }
  }

  return {
    alcoolPrice,
    setAlcoolPrice,
    gasPrice,
    setGasPrice,
    message,
    setMessage,
    formatCurrency,
    calc_price,
  };
};

export default ViewController;
