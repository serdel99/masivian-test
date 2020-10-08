import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import { Comic } from "../components/Comic";
import { Raiting } from "../components/Raiting";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { comicService } from "../services/comicService";

const App = () => {
  const [comic, setComic] = useState({});
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    getRandomComic();
  }, []);

  const getRandomComic = async () => {
    try {
      setLoading(true);
      const newComic = await comicService.getRandomComic();
      setComic(newComic);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <Transition>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Comic
                comic={comic}
                onClickNext={() => {
                  getRandomComic();
                }}
              />
              <Raiting
                onClick={() => {
                  getRandomComic();
                }}
              />
            </>
          )}
        </Transition>
      </div>
    </>
  );
};

export default App;
