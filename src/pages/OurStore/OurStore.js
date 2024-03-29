import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ReactStars from "react-rating-stars-component";

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";

import ProductCard from "../../components/Product/ProductCard";
import ProductColor from "../../components/Product/ProductColor";

import Container from "../../components/Container/Container";
import "./OurStore.css";

import { getAllProducts } from "../../features/product/ProductSlice";

const OurStore = () => {
  const dispatch = useDispatch();

  const [grid, setGrid] = useState(4);
  // alert(grid);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [colors, setColors] = useState([]);

  // FILTER STATES
  const [brand, setBrand] = useState(null);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [color, setColor] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  //TODO: my working for
  // const productState = useSelector((state) => state.product);
  // const allProducts = productState?.products;

  // TODO: his working
  const productState = useSelector((state) => state.product?.products);

  // console.log('product state', productState);
  // console.log('allProducts', allProducts);

  const getProductsAll = () => {
    dispatch(getAllProducts({
      sort,
      tag,
      brand,
      category,
      minPrice,
      maxPrice
    }));
  };

  // console.log('getAllProducts -> ', getAllProducts);

  useEffect(() => {
    // dispatch(getAllProducts());
    getProductsAll();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  useEffect(() => {
    let brandCollections = [];
    let categoriesCollections = [];
    let tagsCollections = [];
    let colorsCollections = [];

    for (let index = 0; index < productState.length; index++) {
      brandCollections.push(productState[index].brand);
      categoriesCollections.push(productState[index].category);
      tagsCollections.push(productState[index].tags);
      colorsCollections.push(productState[index].color);
    }

    setBrands(brandCollections);
    setCategories(categoriesCollections);
    setTags(tagsCollections);
    setColors(colorsCollections);
  }, [productState])

  // console.log('brand collections -> ', [...new Set(brands)]);
  // console.log('categories collections -> ', [...new Set(categories)]);
  // console.log('tags collections -> ', [...new Set(tags)]);
  // console.log('colors collections -> ', [...new Set(colors)]);

  return (
    <>
      {/* <div>OurStore</div> */}

      <Meta title="DGC | Our-Store" />
      <BreadCrumb title="Our-Store" />

      <Container class1="home-wrapper-2 py-5 store-wrapper">
        <div className="row">
          <div className="col-3">
            <div className="filter-card">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  { categories && [...new Set(categories)].map((item, index) => {
                    return (
                      <li key={ index } onClick={ () => setCategory(item) }>
                        { item }
                      </li>
                    )
                  })}

                  {/* <li>Watch</li> */ }
                  {/* <li>TV</li> */}
                  {/* <li>Camera</li> */}
                  {/* <li>Laptop</li> */}
                </ul>
              </div>
            </div>

            <div className="filter-card">
              <h3 className="filter-title">Filter By</h3>

              <h3 className="sub-title">Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  { brands && [...new Set(brands)].map((item, index) => {
                    return (
                      <span
                        key={ index }
                        onClick={ () => setBrand(item) }
                        className="badge bg-light text-secondary text-capitalize rounded-3 py-2 px-3"
                      >
                        { item }
                      </span>
                    )
                  })}
                </div>
              </div>

              <h3 className="sub-title">Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  { tags && [...new Set(tags)].map((item, index) => {
                    return (
                      <span
                        key={ index }
                        onClick={ () => setTag(item) }
                        className="badge bg-light text-secondary text-capitalize rounded-3 py-2 px-3"
                      >
                        { item }
                      </span>
                    )
                  })}

                  {/* <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span> */}
                  {/* <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span> */}
                  {/* <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span> */}
                  {/* <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span> */}
                </div>
              </div>

                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      id="from"
                      type="text"
                      placeholder="from"
                      className="form-control"
                      onChange={(e) => setMinPrice(e.target.value)}
                      />
                    <label htmlFor="from">From</label>
                  </div>

                  <div className="form-floating">
                    <input
                      id="to"
                      type="text"
                      placeholder="to"
                      className="form-control form-control-label"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="to">To</label>
                  </div>
                </div>

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

                <h5 className="sub-title">Colors</h5>
                <div className="">
                  <ProductColor />
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
                  <select
                    defaultValue="default"
                    className="form-control form-select"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="created">Date, old to new</option>
                    <option value="-created">Date, new to old</option>
                  </select>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">{productState?.length} Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      alt="grid"
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      onClick={ () => setGrid(3) }
                    />
                    <img
                      alt="grid"
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      onClick={() => setGrid(4)}
                    />
                    <img
                        alt="grid"
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        onClick={() => setGrid(6)}
                      />
                    <img
                      alt="grid"
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      onClick={() => setGrid(12)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="products-list pb-5">
              <div className="d-flex flex-wrap">
                {/* <ProductCard grid={grid} /> */}
                {/* <ProductCard data={allProducts} grid={grid} /> */}
                <ProductCard
                  data={ productState ? productState : [] }
                  grid={ grid }
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
