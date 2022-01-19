import { useState } from "react";
import InputGroupCheck from "./InputGroupCheck";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import Preview from "./Preview";
import Button from "./Button";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular");
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (value) => {
    setLegalTerms(value);
  };

  const isValidForm = () => {
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleResetButton = () => {
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          <InputGroupText
            id="name"
            text="Escribe un nombre:"
            type="text"
            placeholder="María García"
            value={name}
            handleInput={handleName}
          />
          <InputGroupText
            id="email"
            text="Escribe un email:"
            type="email"
            placeholder="mariagarcia@gmail.com"
            value={email}
            handleInput={handleEmail}
          />
          <InputGroupSelect
            id="region"
            text="Indica tu región:"
            value={region}
            handleSelect={handleRegion}
          />
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio
            value="creditCard"
            text="Tarjeta de crédito"
            checked={paymentType === "creditCard"}
            handleRadio={handlePaymentType}
          />
          <InputGroupRadio
            value="cash"
            text="Efectivo"
            checked={paymentType === "cash"}
            handleRadio={handlePaymentType}
          />
          <InputGroupRadio
            value="cashOnDelivery"
            text="Contra reembolso"
            checked={paymentType === "cashOnDelivery"}
            handleRadio={handlePaymentType}
          />
          <InputGroupCheck
            id="legalTerms"
            text="Debes aceptar nuestros términos legales para completar la compra:"
            checked={legalTerms}
            handleCheck={handleLegalTerms}
          />
        </div>
        <Preview
          paymentType={paymentType}
          name={name}
          email={email}
          region={region}
          legalTerms={legalTerms}
        />
        <Button
          class="button"
          text="Enviar"
          type="submit"
          name={name}
          email={email}
          paymentType={paymentType}
          legalTerms={legalTerms}
          disabled={isValidForm() === false}
        />

        <Button
          class="button reset"
          text="Limpiar el formulario"
          click={handleResetButton}
        />
      </form>
    </div>
  );
};

export default App;
