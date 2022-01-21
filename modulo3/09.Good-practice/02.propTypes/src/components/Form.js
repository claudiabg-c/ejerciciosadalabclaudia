import InputGroupCheck from "./InputGroupCheck";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import Button from "./Button";

const Form = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
    if (props.name !== "") {
      console.log("Enviando datos al servidor...");
    }
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className="form">
        <InputGroupText
          id="name"
          text="Escribe un nombre:"
          type="text"
          placeholder="María García"
          value={props.name}
          handleInput={props.handleChangeForm}
        />
        <InputGroupText
          id="email"
          text="Escribe un email:"
          type="email"
          placeholder="mariagarcia@gmail.com"
          value={props.email}
          handleInput={props.handleChangeForm}
        />
        <InputGroupSelect
          id="region"
          text="Indica tu región:"
          value={props.region}
          handleSelect={props.handleRegion}
        />
        <label className="label-text">Indica tu método de pago:</label>
        <InputGroupRadio
          value="creditCard"
          text="Tarjeta de crédito"
          checked={props.paymentType === "creditCard"}
          handleRadio={props.handlePaymentType}
        />
        <InputGroupRadio
          value="cash"
          text="Efectivo"
          checked={props.paymentType === "cash"}
          handleRadio={props.handlePaymentType}
        />
        <InputGroupRadio
          value="cashOnDelivery"
          text="Contra reembolso"
          checked={props.paymentType === "cashOnDelivery"}
          handleRadio={props.handlePaymentType}
        />
        <InputGroupCheck
          id="legalTerms"
          text="Debes aceptar nuestros términos legales para completar la compra:"
          checked={props.legalTerms}
          handleCheck={props.handleLegalTerms}
        />
      </div>
      <Button
        class="button"
        text="Enviar"
        type="submit"
        name={props.name}
        email={props.email}
        paymentType={props.paymentType}
        legalTerms={props.legalTerms}
        disabled={props.disabled}
      />

      <Button
        class="button reset"
        text="Limpiar el formulario"
        click={props.click}
      />
    </form>
  );
};

export default Form;
