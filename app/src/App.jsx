// import styled from "styled-components"
// import { useEffect, useState } from "react";
// import SearchResult from "./components/SearchResults/SearchResult";

// export const BASE_URL="http://localhost:9000";

// const App = () => {

// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
// const [filteredData,setFilteredData]=useState(null);
// const [selectedBtn, setSelectedBtn] = useState("all")

// useEffect(()=>{
//   const fetchFoodData=async()=>{
//     setLoading(true);

//    try {

//     const response=await fetch(BASE_URL);

//     const json= await response.json();

//     setData(json);
//     setLoading(false);
//     setFilteredData(json);

//    } catch (error) {
//     setError("unable to load data")
//    }
//   };
//   fetchFoodData();
// },[]);

// const searchFood=(e)=>{
//   const searchValue=e.target.value;

//    if(searchValue === ""){
//     setFilteredData(null);
//    }

//    const filter = data?.filter((food)=>
//     food.name.toLowerCase().includes(searchValue.toLowerCase())
//   );
//   setFilteredData(filter);
// };

// const filteredFood=(type)=>{
//   if(type === "all"){
//   setFilteredData(data);
//   setSelectedBtn("all");
//   return;
//   }
//   const filter = data?.filter((food)=>
//     food.type.toLowerCase().includes(type.toLowerCase())
//   );
//   setFilteredData(filter);
//   setSelectedBtn(type);
// };

// const filterBtns=[
//   {
//     name:"All",
//     type:"all",
//   },
//   {
//     name:"breakfast",
//     type:"breakfast",
//   },
//   {
//     name:"lunch",
//     type:"lunch",
//   },
//   {
//     name:"dinner",
//     type:"dinner",
//   }
// ]

// if(error)return <div>{error}</div>
// if(loading)return <div>loading...</div>

//   return (
//  <>
//     <Container>
//      <TopContainer>
//         <div className="logo">
//           <img src="/logo.svg" alt="" />
//         </div>
//         <div className="search">
//           <input onClick={searchFood}
//           placeholder="Search food"
//           />
//         </div>
//      </TopContainer>
//      <FilterContainer>
//       {
//         filterBtns.map((value)=>(
//           <Button key={value.name} onClick={()=> filteredFood(value.type)}>
//             {value.name}
//           </Button>
//         ))
//       }
//      </FilterContainer>
//     </Container>
//     <SearchResult data={filteredData}/>
//  </>
//   )
// }

// export default App

// export const Container=styled.div`
//     max-width: 1120px;
//     margin: 0 auto;

// `;
// const TopContainer=styled.section`
//       display: flex;
//       justify-content: space-between;
//       padding: 16px;
//       align-items: center;
//       height: 120px;

//       .search{
//         input{
//           background-color: transparent;
//           color: white;
//           border-radius: 5px;
//           padding: 12px;
//           border: 1px solid red;
//           font-size: 16px;
//         }
//       }

//      @media (0<width<600px){
//         flex-direction: column;
//      }

// `;
// const FilterContainer=styled.section`
//     display: flex;
//     justify-content: center;
//     gap:10px ;
//     padding-bottom: 10px;
// `;

// export const Button=styled.button`
//      background-color: #FF4343;
//      color: #FFFFFF;
//      border: none;
//      padding: 6px 12px;
//      border-radius: 5px;
//      cursor: pointer;
//      &:hover {
//       background-color: #e80c0c
//      }

// `;

import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResults/SearchResult";
import Heading from "./components/Heading";
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setLoading(false);
        setFilteredData(json);
      } catch (error) {
        setError("unable to load data");
      }
    };
    fetchFoodData();
  }, []);


  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filteredFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "CSE",
      type: "CSE",
    },
    {
      name: "IT",
      type: "IT",
    },
    {
      name: "ECE",
      type: "ECE",
    },
    {
      name: "EEE",
      type: "EEE",
    },
    {
      name: "MECH",
      type: "MECH",
    },
    {
      name: "BIO-TECH",
      type: "BIO-TECH",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="search">
            <input onClick={searchFood} placeholder="Search food" />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns.map((value) => (
            <Button key={value.name} onClick={() => filteredFood(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
      {/* <Heading></Heading> */}
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  height: 60px;

  .search {
    input {
      background-color: transparent;
      color: white;
      border-radius: 5px;
      padding: 12px;
      border: 1px solid red;
      font-size: 16px;
    }
  }

  @media (0<width<600px) {
    flex-direction: column;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  color: #ffffff;
  border: none;
  padding: 6px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e80c0c;
  }
`;

export const Button2 = styled.button`
  background-color: #ff4343;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;

  margin: 2px;
  &:hover {
    background-color: #e80c0c;
  }
`;

// export const Button=styled.button`
//      background-color: #FF4343;
//      color: #FFFFFF;
//      border: none;
//      padding: 6px 12px;
//      border-radius: 5px;
//      cursor: pointer;
//      margin-left:-130px;
//      margin-right:30px;
//      &:hover {
//       background-color: #e80c0c
//      }

// `;
