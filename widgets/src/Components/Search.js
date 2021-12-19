import React, { useState,useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
        setDebouncedTerm(term)
    }, 1000);
    return () => {
      clearTimeout(timerId);
    }
  }, [term])

  useEffect(() => {
    console.log("Renders",results);
    
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });
      console.log("Data", data);
      setResults(data.query.search);
    }
    search();
      
    // if (term && !results) {
    //   search();
    // } else {
    //   const timerId = setTimeout(() => {
      
    //     if (term) {
    //       search();
    //     }    // return () => {
    //   }, 500);
    //   return () => {
    //     clearTimeout(timerId);
    //   }
    // }
    //   console.log("Cleanup here");

    // }
  }, [debouncedTerm])

  const renderedResult = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>

          <div>
            <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
            {/* {result.snippet} */}
          </div>
        </div>
    </div>
  )  
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
      {renderedResult}
      </div>
    </div>
  );
};

export default Search;
