import React ,{ useState }from 'react'
import Header from './Header';
import './Submissions.css';
import {ImCross} from 'react-icons/im';
import {TiTick} from 'react-icons/ti';
function Submissions() {
        
const data = [
    {
        submit: '1 day ago',
        que: 'Fibonacci',
        correct:"correct",
        difficulty: 'easy',
        category:"Math"
    },
    {
      submit: '1 day ago',
      que: 'Fibonacci',
      correct:"wrong",
      difficulty: 'hard',
      category:"Math"
  },    {
    submit: '1 day ago',
    que: 'Fibonacci',
    correct:"correct",
    difficulty: 'medium',
    category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'hard',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'hard',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"correct",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'medium',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'medium',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"correct",
  difficulty: 'medium',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'hard',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'hard',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"correct",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'hard',
  category:"Math"
},    {
  submit: '1 day ago',
  que: 'Fibonacci',
  correct:"wrong",
  difficulty: 'easy',
  category:"Math"
}
]

const itemsPerPage=10;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(data.length / itemsPerPage);

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const tableData = data.slice(startIndex, endIndex);

  return (
    <div>
    <Header/>
    <div className='sub'>
    <div className="search-submit">
      <label style={{marginRight:"5px"}}>Search:</label><input type="text" />
    </div>
    <div className='whole-table'>
            <table className='mytable table-striped'>
                <thead className='table-head'>
                    <tr height="1%">
                    <th width="2%">Date Submitted</th>
                    <th  width="4%">Question</th>
                    <th  width="2%">Correct?</th>
                    <th  width="0.1%">Difficulty</th>
                    <th  width="1%">Category</th>
                    </tr>
                </thead>
                <tbody className='tablebody'>
                    {tableData.map((data) => (
                       <tr height="1%" >
                       <td className='set'>{data.submit}</td>
                       <td className='quest set'>{data.que}</td>
                       <td>
                        {
                          data.correct==='correct'?<TiTick color="green" size={25} className="tick"/>:<ImCross size={15} color="red"/>
                        }
                       </td>
                       <td>
                           <p
                               className={
                                   data.difficulty==="easy"?"success":data.difficulty==='hard'?"danger" :"medium"
                               }>
                               {data.difficulty}    
                           </p>
                       </td>
                       <td className='quest set-categ'>{data.category}</td>
                   </tr>
                    ))}
                </tbody>
            </table>

            <nav className='d-flex justify-content-center'>
            <ul className='pagination'>
                {
                    [...Array(totalPages)].map((_, index) => (
                        <li className={
                            _===currentPage?"page-item active":"page-item"
                        }><button className='page-button'
                        onClick={()=>handlePageChange(index+1)}>{index+1}</button></li>
                    ))
                }
            </ul>
        </nav>
        </div>
        </div>
    </div>
  )
}

export default Submissions