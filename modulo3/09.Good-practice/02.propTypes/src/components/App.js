import { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular");
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  const handleChangeForm = (id, value) => {
    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    }
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

  return (
    <div>
      <Form
        name={name}
        email={email}
        region={region}
        paymentType={paymentType}
        legalTerms={legalTerms}
        handleChangeForm={handleChangeForm}
        handleRegion={handleRegion}
        handlePaymentType={handlePaymentType}
        handleLegalTerms={handleLegalTerms}
        disabled={isValidForm() === false}
        click={handleResetButton}
      />
      <Preview
        paymentType={paymentType}
        name={name}
        email={email}
        region={region}
        legalTerms={legalTerms}
      />
    </div>
  );
};

export default App;
