import { useState, FormEvent } from "react";
import Logo from "./assets/logo.png";
import { Wrapper } from "./style";
import ViewController from "./viewController";

const App = () => {
  const viewController = ViewController();

  return (
    <Wrapper>
      <main>
        <div className="header">
          <img src={Logo} alt="Bomba de gasolina" />
          <p>Qual melhor opção?</p>
        </div>

        <div>
          <form onSubmit={(e) => viewController.calc_price(e)}>
            <label htmlFor="">Álcool (preço por litro):</label>
            <input
              className="input_alcohol"
              onChange={(e) =>
                viewController.setAlcoolPrice(Number(e.target.value))
              }
              value={viewController.alcoolPrice}
              placeholder="4,90"
              min="1"
              type="number"
              step="0.01"
            />

            <label htmlFor="">Gasolina (preço por litro):</label>
            <input
              onChange={(e) =>
                viewController.setGasPrice(Number(e.target.value))
              }
              value={viewController.gasPrice}
              min="1"
              placeholder="4,90"
              type="number"
              step="0.01"
            />

            <button type="submit">Calcular</button>
          </form>

          {viewController.message &&
          Object.keys(viewController.message).length > 0 ? (
            <div className="result">
              <p className="message">{viewController.message.title}</p>
              <p>Álcool {viewController.message.alcohol}</p>
              <p>Gasolina {viewController.message.gas}</p>
            </div>
          ) : null}
        </div>
      </main>
    </Wrapper>
  );
};

export default App;
