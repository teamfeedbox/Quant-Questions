import React,{useState} from 'react'
import Header from './Header';
import './Resources.css';
import { BiSearchAlt2 } from 'react-icons/bi';
function Resources() {
  const[search,setSearch]=useState("");

  const data=[
    {
      id:1,
      category:"Probability",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    },
    {
      id:2,
      category:"Profit & Loss",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    },
    {
      id:3,
      category:"Simple Interest and Compound Interest",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    },
    {
      id:4,
      category:"Ratio & Proportion",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    },
    {
      id:1,
      category:"Probability",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    },
    {
      id:5,
      category:"Mixture and Alligation",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    },
    {
      id:6,
      category:"Percentage",
      link:"https://www.placementpreparation.io/blog/best-websites-to-learn-quantitative-aptitude/"
    }
  ]
  return (
    <div>
      <Header/>
      <div className='res-page'>
        
      <div className="Res-table-display">
    <div className="RescourcesTable">
      <div className="res-table-heading">
        <div className="res-heading-left">Documents </div>
        <div className="res-heading-right">
  
        <form className="res-table-search">
            <input
              className="srch-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button className="srch-btn" type="submit">
              <BiSearchAlt2 size="20" />
            </button>
          </form>
          
        </div>
      </div>

      <div className="res-table-div">
        <table class="table">
          <thead class="">

            <tr className="res-table-head">
              <th scope="col">
              <div style={{ marginLeft: "30px" }}>Categories</div>
              </th>
              <th scope="col">Resources</th>
            </tr>
          </thead>
          <tbody>


          {
            data.map((data)=>(
              <tr>
              <th scope="row">
                <div style={{ marginLeft: "30px",fontSize:"16px" }}>
                  {data.category}
                </div>
              
              </th>
              <td>
                <div className="res-view">View</div>
              </td>
            </tr>
            
            ))
          }

            

          </tbody>
        </table>
      </div>

     
    </div>
    </div>

      </div>
    </div>
    
  )
}

export default Resources
