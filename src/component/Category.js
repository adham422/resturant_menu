import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({filterbyCategory,allcategory}) => {
  //filter by category
  const onFilter=(cat)=>{
    filterbyCategory(cat)
  }
  return (
    <Row className='my-2 mb-5'>
        <Col className='justify-content-center d-flex' sm='12'>
        {
          allcategory.length >=1 ? (allcategory.map((cat)=>{
            return(
              <div>
                <button  onClick={()=>onFilter(cat)} style={{border:"1px solid #b45b35"}} className='btn mx-2'>{cat}</button>
            </div>
            )
          })) :<h4> لا يوجد تصنيقات</h4>
        }
           
        </Col>
    </Row>
  )
}

export default Category
