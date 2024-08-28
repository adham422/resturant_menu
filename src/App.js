import { Container } from "react-bootstrap";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Category from "./component/Category";
import Itemlist from "./component/Itemlist";
import { items } from "./data";
import { useState } from "react";
function App() {
  const [itemData,setItemState] = useState(items)
  //get all category
  const allcategory = ['الكل',...new Set(items.map((i)=>i.category)) ]
  console.log(allcategory)
  //filter by category 
  const filterbyCategory=(cat)=>{
    if(cat==='الكل'){
      setItemState(items)
    }else{
      const newArr=items.filter((item)=>item.category===cat)
      setItemState(newArr)
    }
  }
  //filter by search 
  const filterbySearch=(word)=>{
    if(word !==''){
      const newArr=items.filter((item)=>item.title===word)
      setItemState(newArr)
    }
  }
  return (
    <div className="App color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header />
        <Category filterbyCategory={filterbyCategory} allcategory={allcategory} />
        <Itemlist itemData={itemData}/>
      </Container>
    </div>
  );
}

export default App;
