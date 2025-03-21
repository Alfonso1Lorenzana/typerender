import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

interface Candidate {
  id: number | null;
  login: string | null;
  email: string | null;
  html_url: string | null;
  avatar_url: string | null;
}

const CandidateSearch = () => {

  //    [variable, methodToUpdateTheVariable]  = hook(InitialCondition);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [current, setCurrent] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    avatar_url: null
  });


  useEffect(()=>{ 
    searchGithub().then((data)=> {
      
      console.log(data);
      setCandidates(data)
      // Data you have the data already. Array of candidates.
      // We want to get a single candidate from the array.
      const singleCandidate = data.pop();
    
      //** Added by Thais, cuz she didn't want to manually add keys and values in Local Storage section of the Dev Tools */
      // const savedCandidatesString = localStorage.getItem('savedCandidates') || ''; //corrected by ALfonzo from array
      // let savedCandidatesArray = (JSON.parse(savedCandidatesString) || []);
      // savedCandidatesArray = savedCandidatesArray.map(candidate => {login: candidate.login, email: candidate.email});
      // localStorage.setItem('savedCandidates', JSON.stringify(
      //   savedCandidatesArray.push(singleCandidate))
      // );
      /** end of Added by Thais */

      // Get the username of the single candidate.
      const userName = singleCandidate.login;
      
      // We will use the username to look up the candidates information. (searchGitHubUser)
      searchGithubUser(userName).then((info)=>{
        console.log(info);
        setCurrent(info);
      });

      // Display the candidate's info
      
    })
  },[])

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
    </div>
  );
}

export default CandidateSearch;
