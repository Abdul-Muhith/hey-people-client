import { useState } from "react";

import ReactStars from "react-rating-stars-component";

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";

import ProductCard from "../../components/Product/ProductCard";
import ProductColor from "../../components/Product/ProductColor";

import "./OurStore.css";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid);

  return (
    <>
      {/* <div>OurStore</div> */}

      <Meta title="DGC | Our-Store" />
      <BreadCrumb title="Our-Store" />

      <div className="home-wrapper-2 py-5 store-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
              </div>

              <div className="filter-card">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="instock" />
                      <label className="form-check-label" htmlFor="instock">In Stock (1)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="outofstock" />
                      <label className="form-check-label" htmlFor="outofstock">Out of Stock (0)</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" placeholder="from" id="from" />
                      <label htmlFor="from">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" placeholder="to" id="to" />
                      <label htmlFor="to">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div className="mb-3">
                    <ProductColor />
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="size-1" />
                      <label className="form-check-label" htmlFor="size-1">S (2)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="size-2" />
                      <label className="form-check-label" htmlFor="size-2">M (2)</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid mb-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block w-50">Sort By :</p>
                    <select className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling" defaultValue="defaultValue">Best Selling</option>
                      <option value="title-asending">Best Selling</option>
                      <option value="title-desending">Alphabetically, A-Z</option>
                      <option value="price-asending">Alphabetically, Z-A</option>
                      <option value="price-desending">Price, low to high</option>
                      <option value="created-asending">Price, high to low</option>
                      <option value="created-desending">Date, old to new</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img onClick={() => setGrid(3)} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => setGrid(4)} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => setGrid(6)} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => setGrid(12)} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-list pb-5">
                <div className="d-flex flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
