import { useFormik } from "formik";
import React from "react";
import { Wrapper, Form, ButtonSearch } from "./search.style";
import searchIcon from "../../assets/search-icon.png";

export const Search: React.FC = () => {
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
      <h3>Bem vindos ao DiscoveringBooks</h3>
      <div>
        <p>
          Faça uma osca por nossa bibilhoteca, encontre e salve seus livros
          favoritos :)
        </p>
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <input
          id="textsearch"
          name="textsearch"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.textsearch}
          placeholder="Digite aqui sua busca"
        />

        <ButtonSearch type="submit">
          <img src={searchIcon} alt="Imagem de uma lupa" />
        </ButtonSearch>
      </Form>
      <span>Ver meus favoritos</span>
    </Wrapper>
  );
};
