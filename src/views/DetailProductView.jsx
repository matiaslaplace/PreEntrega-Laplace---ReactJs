import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const BASE_URL = "https://fakestoreapi.com/products";

const DetailProductView = () => {
  const { idProduct } = useParams();
  const navigator = useNavigate();

  const [data] = useFetch(`${BASE_URL}/${idProduct}`);

  const addBtnAction = () => {
    navigator("/about");
  };

  const { title, image, description, price, category } = data;
  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-3 offset-md-3">
          <h2 className="text-danger">Oferta por tiempo limitado !!!</h2>
        </div>
        <div className="col-4">
          <h3>
            Categoria: <span className="text-info">{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 shadow-sm  py-2 px-5">
            <div className="row ">
              <div className="col-md-4">
                <img
                  src={image}
                  width={500}
                  height={500}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <small className="text-muted">$ {price}</small>
                  </p>
                  <button
                    onClick={addBtnAction}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailProductView;
