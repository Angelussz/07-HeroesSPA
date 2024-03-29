import React from "react";
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  const showSearch = q.length === 0
  const showError = (q.length > 0) && heroes.length === 0;
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Busqua al heroe que quieras!</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="formHero">
            <input
              type="text"
              placeholder="Busca Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {/* {(q === "") ? 
            <div className="alert alert-primary">Busca un heroe</div>
           : 
            (heroes.length === 0) && 
              <div className="alert alert-danger">
                No hay resultados con el heroe <b>{q}</b>{" "}
              </div>
              
            } */}

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch?"":"none" }}>
            Search Hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError?"":"none" }}>
            No hay resultados con el heroe <b>{q}</b>{" "}
          </div>

          {/* <HeroCard /> */}
          {heroes.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </>
  );
};
