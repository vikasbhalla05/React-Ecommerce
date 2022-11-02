import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageNavigation from "./components/PageNavigation";
import { useProductContext } from "./Contexts/productContext";
import ProductImages from "./components/ProductImages";
import { Container } from "./styles/Container";
import IndianPrice from "./Helpers/IndianPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import StarReviews from "./components/StarReviews";
import AddToCart from "./components/AddToCart";

import { MdSecurity } from "react-icons/md";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  let { id } = useParams();

  const { getSingleProducts, singleLoading, singleProduct } =
    useProductContext();

  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);

  const {
    id : alias,
    name,
    price,
    company,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  if (singleLoading) return <div className="page_load">Loading...</div>;

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product images */}
          <div className="product_images">
            <ProductImages imgs={image} />
          </div>

          {/* product details */}
          <div className="product-data">
            <h2>{name}</h2>
            <StarReviews stars={stars} reviews={reviews}/>

            {/* Cross through price */}
            <span className="product-data-price">
              MRP{" "}
              <del>
                <IndianPrice price={price + 250000} />
              </del>
            </span>
            {/* discounted Price */}
            <p className="product-data-price product-data-real-price">
              Deal of the Day <IndianPrice price={price} />
            </p>
            {/* product description */}
            <p className="product-data-info">{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available :{" "}
                <span>
                  {stock ? stock + " In Stock" : "Currently Out of Stock"}
                </span>
              </p>
              <p>
                Id : <span>{id}</span>
              </p>
              <p>
              Category : <span>{category}</span>
              </p>
              <p>
                Brand : <span>{company}</span>
              </p>
            </div>

            <hr />

            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      text-align: justify;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
