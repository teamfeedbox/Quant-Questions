import React, { useState } from "react";
import './Dashboard.css';

function Dashboard() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();
  const [anstype, setAnsType] = useState("");
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const [opt4, setOpt4] = useState('');
  const [answer, setAnswer] = useState([]);
  const [selectedFirms,setSelectedFirms]=useState();
  const firms=['Tower Research Capital','Global Atlantic','Nomura','RBC','Bank'];
  const divisions = ['Technology','Risk Management','Sales','Analytics'];
  const position=['Trader','Develop','Analyst','Intern']
  const tags=['c++','C','java','Javascript'];

  // add questions to db
  const submitHandler = async () => {
    let val = '';
    if (anstype === 'mcq') {
      val = {
        title: title,
        question: question,
        answer: answer,
        difficulty: difficulty,
        category: category,
        answerType: anstype,
        options: [opt1, opt2, opt3, opt4],
        firms:firms,
        divisions:divisions,
        position:position,
        tags:tags
      }
    } else {
      val = {
        title: title,
        question: question,
        answer: answer,
        difficulty: difficulty,
        category: category,
        answerType: anstype,
        firms:firms,
        divisions:divisions,
        position:position,
        tags:tags
      }
    }
    const data = await fetch("http://localhost:8000/question/add", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const res = await data.json();
    console.log(res);
    console.log(selectedFirms);
    setAnsType("");
    setAnswer("");
    setTitle("");
    setQuestion("");
    setDifficulty("");
  }

  const handleFirm = (e) => {
    let target = e.target
    let name = target.name
    let value = Array.from(target.selectedOptions, option => option.value);
    setSelectedFirms({
      [name]: value
    });
  }

  const handleLogout = () => {
    localStorage.setItem("quantuser", null)
    window.location.href = '/'
  }
  return (
    <div>
      <div className="dash">
        <div className="dash-left">
          <div className="dash-head">Dashboard</div>
          <div className="add-que">Add Questions</div> <br /> 
          <div className="add-que" onClick={handleLogout}>Logout</div>
        </div>
        <div className="dash-right">
          <div className="first-row">
            <select name="category" className="opt-font" required onChange={(e) => setCategory(e.target.value)}>
              <option value="none" selected disabled hidden >
                Category
              </option>
              <option value="Brainteasers">Brainteasers</option>
              <option value="Derivatives">Derivatives</option>
              <option value="Finance">Finance</option>
              <option value="Math">Math</option>
              <option value="NonQuant">NonQuant</option>
            </select>

            <select name="difficulty" className="opt-font" required onChange={(e) => setDifficulty(e.target.value)}>
              <option value="none" selected disabled hidden>
                Difficulty
              </option>
              <option value="medium">Medium</option>
              <option value="easy">Easy</option>
              <option value="hard">Hard</option>
            </select>

            <select name="anstype" className="opt-font" onChange={(e) => setAnsType(e.target.value)} >
              <option value="none" selected disabled hidden>
                Answer Type
              </option>
              <option value="mcq">Mcq</option>
              <option value="text">Text</option>
            </select>

            <select name="firm" multiple={true} className="opt-font" onChange={handleFirm}>
              <option value="none" selected disabled hidden>
                Firm
              </option>
              <option value="mcq">Mcq</option>
              <option value="t1">T1</option>
              <option value="t2">T2</option>
              <option value="t3">T3</option>
              <option value="t4">Text</option>
            </select>
          </div>


          <div className="second-row">
            <div className="title">
              <label className="disp-title">
                Question Title
              </label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Title..." />
            </div>

            <div className="title">
              <label className="disp-title">Add Question</label>
              <input type="text" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>

            <div className="que">
              {
                anstype === 'text' &&
                <div className="title">
                  <label className="disp-title">Answer</label>
                  <input type="text" placeholder="Enter Question" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                </div>
              }

              {
                anstype === 'mcq' &&
                <div className="radio-type">
                  <input type="text" placeholder="Option1" value={opt1} onChange={(e) => setOpt1(e.target.value)} />

                  <input type="text" placeholder="Option2" value={opt2} onChange={(e) => setOpt2(e.target.value)} />

                  <input type="text" placeholder="Option3" value={opt3} onChange={(e) => setOpt3(e.target.value)} />

                  <input type="text" placeholder="Option4" value={opt4} onChange={(e) => setOpt4(e.target.value)} />

                  <input type="text" placeholder="Correct Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />

                </div>
              }
              <button className="add-btn" onClick={submitHandler}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
