//import { useState, useEffect } from 'react';
//import { searchGithub, searchGithubUser } from '../api/API';

const username = "Question"
const location = "UK, London"
const email = "watermelon_2121212@gmail.com"
const company = "American Software"
const bio = "First time doing this"

const CandidateSearch = () => {
  return <><h1>{username}</h1> {location} {email} {company} {bio}</>;
};

export default CandidateSearch;
