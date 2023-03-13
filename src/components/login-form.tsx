import { useState } from "react";
import ResultComponent from "./result-component";

interface Props {
  onSubmit?: (values: any) => void;
}

export default function LoginComponent({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit?.("Hello");
  };

  return (
    <div>
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button onClick={handleSubmit}>Submit</button>

      <ResultComponent {...{ email, password }} />
    </div>
  );
}
