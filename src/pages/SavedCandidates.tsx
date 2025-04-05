import { useState, useEffect } from 'react';
//import { searchGithub, searchGithubUser } from '../api/API';


//interface Candidate {
//  id: number;
//  login: string;
//  name?: string;
//  email?: string;
//  html_url?: string;
//  avatar_url?: string;
//}

const SavedCandidates = () => {

  // create state variables if necessary

  // create useEffect hook method 
  //  read from the localStorage

    //add typescript typing later
    const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

    //interface Candidate {
    //   id: number | null;
    //   login: string | null;
    //   email: string | null;
    //   html_url: string | null;
    //   avatar_url: string | null;
    // }
    // type SavedCandidatesProps = {
    //   candidates: Candidate[],
    // }
    // console.log("boo")
    // const SavedCandidates = ({
      
    // });
  
    /**
     * Search each candidate in the array based on candidate username.
     * Returns a json object.
     */
    useEffect(() => {
      let savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '');
      //let candidates: Candidate[] = [];
      setPotentialCandidates(savedCandidates);
    },[])
  
    const testSinglePotentialCandidate = potentialCandidates.pop() || {
      id: 0,
      login: '0',
      name: 'name',
      email: 'email',
      html_url: '',
      avatar_url: '',
    };
    

  return (
    <>
      <h1>Potential Candidates</h1>
      <h2>see console for a full list</h2>
      <h3>Username: {testSinglePotentialCandidate.login}</h3>
      <p>Email: {testSinglePotentialCandidate.email}</p>
      console.log(potentialCandidates)
     
    </>
  );
};

export default SavedCandidates;
