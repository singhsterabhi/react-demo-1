import React, { useState, useEffect } from "react";
import CocktailThumb from "./CocktailThumb";
import './Cocktails.css'

const Coctails = ({ match }) => {
  const [cocktails, setCocktails] = useState([]);

  console.log(match.params.search);
  const search=match.params.search.replace(/__/g,'_/_');
  console.log(search);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${
          match.params.content
        }=${search}`
      )
        .then(d => {

          return d.json();
        })
        .then(data => {
          console.log(data);
          setCocktails(data.drinks);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="cocktails">
      {cocktails !== [] ? (
        < >
          {cocktails.map(m => {
            return <CocktailThumb key={m.idDrink} drink={m} />;
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Coctails;
