import { Layout } from "./components/Layout/layout";
import { GlobalStyled } from "./globalStyle";

function App() {
  // useEffect(() => {
  //   // console.log(process.env.REACT_APP_MYKEYAPI);
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=maxResults=20&full&key=${process.env.REACT_APP_MYKEYAPI}`
  //     )
  //     .then((resp) => {
  //       console.log("THEN");
  //       console.log(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log("Errr");
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <GlobalStyled />
      <Layout />
    </>
  );
}

export default App;
