import { useFormik } from "formik";
import React from "react";
import { Wrapper } from "./search.style";

export const Header: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      textsearch: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Wrapper>
      <h3>Bem vindo ao Books</h3>
      <div>
        <p>
          Faça uma osca por nossa bibilhoteca, encontre e salve seus livros
          favoritos :)
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="textsearch"
            name="textsearch"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.textsearch}
            placeholder="Digite aqui sua busca"
          />

          <button type="submit">Submit</button>
        </form>
        <span>Ver meus favoritos</span>
      </div>
    </Wrapper>
  );
};
