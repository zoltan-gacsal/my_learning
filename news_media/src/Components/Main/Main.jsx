/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import NewsDisplay from "../NewsDisplay/NewsDisplay";

const Main = () => {
  const [hir, setHir] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=99af0a57ff23425e86456c6820990490`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setHir(data.articles));
  }, []);

  return (

    hir.map ((item, index)=> {
        return <NewsDisplay key={index} title= {item.title} description= {item.description} src={item.urlToImage} url={item.url} />;
    })

  )
    

  
};

export default Main;
