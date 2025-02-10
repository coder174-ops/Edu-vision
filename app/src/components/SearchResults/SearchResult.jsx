// import styled from "styled-components"
// import { BASE_URL, Button, Container, } from "../../App"

// const SearchResult = ({data}) => {

//   return (
//     <>
//     <FoodCardContainer>
//      <Container>
//      <FoodCards>
//         {data?.map(({name,image,text,price})=>(
//             <FoodCard key={name}>
//                 <div className="food_image">
//                     <img src={BASE_URL + image} alt="" />
//                 </div>
//                 <div className="food_info">
//                     <div className="info">
//                         <h3>{name}</h3>
//                         <p>{text}</p>
//                     </div>
//                     <Button>${price.toFixed(2)}</Button>
//                 </div>
//             </FoodCard>
            
//         ))}

//       </FoodCards>
//      </Container>
    
//      </FoodCardContainer>
//      </>
//   )
// }

// export default SearchResult

// const FoodCardContainer=styled.section`
//     min-height: calc(100vh - 160px);
//     background-image: url("/bg1.jpg");
//     background-size: cover;
// `;
// const FoodCards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   row-gap: 32px;
//   column-gap: 20px;
//   justify-content: center;
//   align-items: center;
//   padding-top: 80px;
// `;
// const FoodCard = styled.div`
//   width: 340px;
//   height: 167px;
//   border: 0.66px solid;

//   border-image-source: radial-gradient(
//       80.69% 208.78% at 108.28% 112.58%,
//       #eabfff 0%,
//       rgba(135, 38, 183, 0) 100%
//     ),
//     radial-gradient(
//       80.38% 222.5% at -13.75% -12.36%,
//       #98f9ff 0%,
//       rgba(255, 255, 255, 0) 100%
//     );

//    background: url(.png),
//     radial-gradient(
//       90.16% 143.01% at 15.32% 21.04%,
//       rgba(165, 239, 255, 0.2) 0%,
//       rgba(110, 191, 244, 0.0447917) 77.08%, 
//       rgba(70, 144, 213, 0) 100%
//     );  
//   background-blend-mode: overlay, normal;
//   backdrop-filter: blur(13.1842px);

//   border-radius: 20px;

//   display: flex;
//   padding: 8px;

//   .food_info {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: end;
//     h3 {
//       margin-top: 8px;
//       font-size: 16px;
//       font-weight: 500;
//     }
//     p {
//       margin-top: 4px;
//       font-size: 12px;
//     }
//     button {
//       font-size: 12px;
//     }
//   }
// `;



//change
import styled from "styled-components"
import { BASE_URL, Button, Button2, Container, } from "../../App"

const SearchResult = ({data}) => {

  return (
    <>
    <FoodCardContainer>
     <Container>
     <FoodCards>
        {data?.map(({name,image,text,price})=>(
            <FoodCard key={name}>
                <div className="food_image">
                    <img className="food-photo" src={BASE_URL + image} alt="" />
                </div>
                <div className="food_info">
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    </div>
                   
                <div className={Button2}>
                    <Button2 className="btn_pyq">LECTURES{price}</Button2>
                    <Button2>NOTES{price}</Button2>
                    <Button2>PYQs{price}</Button2>
                    
                </div>
              
                    </div>
            </FoodCard>
            
            
        ))}
     </FoodCards>
     </Container>
    </FoodCardContainer>
    
     </>
  )
}

export default SearchResult

const FoodCardContainer=styled.section`
    min-height: calc(100vh - 160px);
    background-image: url("/bg1.jpg");
    background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
const FoodCard = styled.div`
  width: 350px;
  height: 240px;
  border: 0.66px solid;


    .food-photo{
      width: 135px;
      height: 135px;
      border-radius:50%;
      margin-right:5px;
    }
  

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

 background: url(.png),
radial-gradient(
  90.16% 143.01% at 15.32% 21.04%,
  #3d3d3d 0%,
  #3d3d3d 77.08%, 
  rgba(70, 144, 213, 0) 100%
); 
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 10px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 19;
      font-weight: 600;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    .btn_pyq{
      margin-left: 25px;
      border: none;
      padding: 6px 12px;
      border-radius: 5px;
      /* padding-left: ; */
    }
    /* Button {
      display: flex;
      justify-content: center;
      font-size: 15px;
      background-color: #FF4343;
      color: #FFFFFF;
      font-weight: 550;
      border: none;
      padding: 6px 12px;
      border-radius: 5px;
      margin-right: 70px;
      margin-top: 7px;

      cursor: pointer;
      &:hover {
        background-color: #e80c0c;
      }
    } */
  }
   /* .card_button {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 8px;
    button {
      font-size: 12px;
      background-color: #FF4343;
      color: #FFFFFF;
      border: none;
      padding: 6px 12px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #e80c0c;
      }
    } 
  } */
`;



