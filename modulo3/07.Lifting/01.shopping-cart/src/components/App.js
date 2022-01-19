import { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";

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

  return (
    <div>
      <Form
        name={name}
        handleName={handleName}
        email={email}
        handleEmail={handleEmail}
        region={region}
        handleRegion={handleRegion}
        paymentType={paymentType}
        handlePaymentType={handlePaymentType}
        legalTerms={legalTerms}
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
