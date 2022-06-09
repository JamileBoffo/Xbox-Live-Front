import { SyntheticEvent, useState } from "react";
import { user } from "../../services/user";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    const responseApi = await user.auth(email);
    const objEmail = {
      email,
    };

    const { _id } = responseApi.data;

    localStorage.setItem('user', _id);
    navigate('/dashboard')

    event.preventDefault();
    console.log(event);
  };

  

  return (
    <>
      <p>
        Insira seu <strong>email</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">E-mail:*</label>
        <input
          type="email"
          id="email"
          placeholder="Informe o seu e-mail"
          required
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </>
  );
}

export default Home;
