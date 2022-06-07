import { SyntheticEvent, useState } from "react";

function Home() {
    const [email, setEmail] = useState('')

  function handleSubmit(event: SyntheticEvent) {
      event.preventDefault();
    console.log(event);
  }

  const onChangeInput = (event: any) => {
      setEmail(event.target.value)
  }

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
          onChange={onChangeInput}
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
