import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const SavedCandidates = () => {

  //add typescript typing later
  const [potentialCandidates, setPotentialCandidates] = useState([]);

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

  const testSinglePotentialCandidate = potentialCandidates.pop();

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
