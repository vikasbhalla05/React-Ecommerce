import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import styled from 'styled-components';

const StarReviews = ({stars, reviews}) => {

    const starRate = Array.from({length:5}, (ele, idx) => {

        let number = idx+0.5;
        // {console.log(stars);}

        return ( <span key={idx}>
            {
                stars >= idx+1 ? (<BsStarFill className='icon'/>)
                : stars >= number ? (<BsStarHalf className='icon' />)
                : (<BsStar className='icon' />)
            }
        </span> );

        
    });

  return (
    <Wrapper>
      <div className="icon-style">
        {starRate}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;


export default StarReviews