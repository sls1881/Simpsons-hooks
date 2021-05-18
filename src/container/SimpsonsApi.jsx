import React, { useState } from 'react';
import Controls from '../components/app/characters/Controls';
import Display from '../components/app/characters/Display';
import Spinner from '../components/Spinner';
import { getQuote } from '../services/simpsonsApiFetch';

function SimpsonsApi() {
  //set quote state
  const [quote, setQuote] = useState({});
  //set loading state
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    const fetch = await getQuote();
    setQuote(fetch);
    setLoading(false);
  };

  return (
    <div>
      <Controls onClick={handleClick} />
      {loading ? <Spinner /> : <Display {...quote} />}
    </div>
  );
}

export default SimpsonsApi;
