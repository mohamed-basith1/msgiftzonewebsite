import React, { useEffect, useState } from "react";
import "./products.css";
import { categoriesdata, breakpoint } from "../../data/howtoboxcontant";
import Categoriestitle from "../categoriestitle";
import Carousel from "react-elastic-carousel";
import Productbox from "../productbox";
import { Fade } from "react-reveal";
import { productimagesample } from "../../data/howtoboxcontant";
import { Axios } from "../../axios";

const Products = () => {
  const [state, setState] = useState(0);
  const [categorieslistfromapi, setCategorieslistfromapi] = useState([]);
  const [products, setProduct] = useState([]);
  //get catgeories list from api
  useEffect(() => {
    getcategorieslistdata();
  }, []);

  //get categories filter by selecting catgeorires

  // useEffect(() => {
  //   console.log(" i ma run n ow");

  // }, [state]);

  const getdatafilterbycategeories = async (id, title) => {
    setState(id);
    const ress = await Axios.get(`/product/filterbycategories/${title}`);
    setProduct(ress.data);
  };

  const getcategorieslistdata = async () => {
    const res = await Axios.get("/categories/getcreatecategories");
    setCategorieslistfromapi(res.data);
    console.log(res.data, "i am from backend server for catgeories list");
    const ress = await Axios.get(`/product/filterbycategories/Birthday Gift`);
    setProduct(ress.data);
  };
  return (
    <div className="productscontainer">
      <div className="productstitlecontainer">
        <Fade top>
          <div className="producttitles">Our Gift Collections</div>
        </Fade>
        <Fade top>
          <div className="productsubtitle">Thoughtful gifting made easy</div>
        </Fade>
      </div>

      <div className="categoriestitlecontainer">
        <div className="categorieswrapper">
          <Carousel
            // itemPosition={"CENTER"}
            breakPoints={breakpoint}
            showArrows={true}

            // preventDefaultTouchmoveEvent={true}
          >
            {categorieslistfromapi
              ?.filter((e) => e.categories != "Add Categories")
              .map((e, index) => {
                return (
                  <div key={index}>
                    <Categoriestitle
                      title={e.categories}
                      id={index}
                      state={state}
                      setState={(f, title) =>
                        getdatafilterbycategeories(f, title)
                      }
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
      <div className="allproducts">
        {products?.map((e) => {
          return <Productbox data={e} />;
        })}
      </div>
    </div>
  );
};

export default Products;
