import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
/*
interface Candidate {
  id: number | null;
  login: string | null;
  name: string | null;
  email: string | null;
  html_url: string | null;
  avatar_url: string | null;
}
  */

interface Candidate {
  id: number;
  login: string;
  name?: string;
  email?: string;
  html_url?: string;
  avatar_url?: string;
}

const CandidateSearch = () => {

  //    [variable, methodToUpdateTheVariable]  = hook(InitialCondition);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [current, setCurrent] = useState<Candidate>({
    id: 0,
    login: '0',
    name: 'name',
    email: 'email',
    html_url: '',
    avatar_url: '',
  });

  const [currentIndex, setCurrentIndex] = useState (0);


  useEffect(()=> {

    console.log (`useEffect...`);
   
    // Going to github api and retrieve the candidates and set it to local state
    searchGithub().then((data)=> {
      
      console.log(JSON.stringify(data));
      setCandidates(data);
      setCurrent(candidates[0]);
    });

  }, []);

  //setCurrent(candidates[0]);
  
  // When the stuff is clicked Plus sign, store the localhost storage
  const plusClicked = () => {
    console.log('Plus clicked');
    // In the locaStorage you can only store strings
    let storedCandidates:string = localStorage.getItem("savedCandidates") || "[]";
    let storedCandidatesArray = JSON.parse(storedCandidates);
    storedCandidatesArray.push(candidates[currentIndex]);
    // saving the new updated array back into the storage
    localStorage.setItem("savedCandidates", JSON.stringify(storedCandidatesArray));
    // update the state variables or state data
    setCurrentIndex (currentIndex + 1)
    setCurrent(candidates[currentIndex]);
  }

  const minusClicked = () => {
    console.log('Minus clicked');
    setCurrentIndex ((currentIndex - 1 < 0 ? 0 : currentIndex -1))
    setCurrent(candidates[currentIndex]);
  }
  // We need to add Logic to Save a Canidate (what operations/actions do we need to save the current Canidate to our SavedCanidates)
  //  Wee need to add logic to grab and load the next candidate data

  return (
    <div>
      <div>
        <h1>Candidate Search</h1>

        { current ? (
          <div> 
            <img src={current.avatar_url} />
            <h3>{current.login}</h3>
            <h4>{current.id}</h4>
            <h4>{current.email}</h4>
            <h4>{current.html_url}</h4>
            <h4>Bio: </h4>


          </div>
        ) :  (<h2>No Candidates</h2>)
       }
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          width: "100px",
        }}
      >
        <a
          href="#"
          onClick={minusClicked}
          style={{ textDecoration: "none", color: "blue" }}
        >
          <img
            src="/images/minus.png"
            alt="Next No Save"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
        <a
          href="#"
          onClick={plusClicked}
          style={{ textDecoration: "none", color: "blue" }}
        >
          <img
            src="/images/plus.png"
            alt="Next Save"
            style={{ width: "30px", height: "30px" }}
          />
        </a>
      </div>
      
    </div>
  );
}

export default CandidateSearch;
