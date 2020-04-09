import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";

function FilterProducts(props) {
  return (
    <div className="container">
      <ProductConsumer>
        {value => {
          const {
            storeProducts,
            filteredProducts,
            search,
            min,
            max,
            company,
            price,
            shipping,
            handleChange
          } = value;
          // let companies = new Set();
          // companies.add("All");
          // for (let product in storeProducts) {
          //   companies.add(storeProducts[product]["company"]);
          // }
          // companies = [...companies];

          let companies = ["All"];
          // for (let i = 0; i < storeProducts.length; i++) {
          //   if (!companies.includes(storeProducts[i].company)) {
          //     companies.push(storeProducts[i].company);
          //   }
          // }
          for (let item of storeProducts) {
            if (!companies.includes(item.company)) companies.push(item.company);
          }
          companies = companies.sort();

          return (
            <div className="container">
              <h4 className="text-lead text-capitalize d-block">
                there are {filteredProducts.length} products
              </h4>
              <FilterWrapper>
                <div className="row align-items-start mb-4">
                  <div className="col-md-3">
                    <label htmlFor="search">Search Products</label>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      onChange={handleChange}
                      value={search}
                      className="filter-item"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="company">Company</label>
                    <select
                      name="company"
                      id="company"
                      onChange={handleChange}
                      value={company}
                      className="filter-item text-capitalize"
                      style={{ height: "2rem" }}
                    >
                      {companies.map(item => {
                        return <option value={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="price">
                      <p className="mb-2">
                        product price:<span>${price}</span>
                      </p>
                    </label>
                    <input
                      type="range"
                      name="price"
                      id="price"
                      max={max}
                      min={min}
                      value={price}
                      onChange={handleChange}
                      className="filter-price"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="shipping" className="mx-2">
                      free shipping
                    </label>
                    <input
                      type="checkbox"
                      name="shipping"
                      id="shipping"
                      onChange={handleChange}
                      checked={shipping && true}
                    />
                  </div>
                </div>
              </FilterWrapper>
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
}

const FilterWrapper = styled.div`
  //display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  //grid-column-gap: 2rem;
  //grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 75%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;

export default FilterProducts;
