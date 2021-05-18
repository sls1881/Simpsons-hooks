import React, { useState } from 'react';
import Controls from '../components/app/characters/Controls';
import Display from '../components/app/characters/Display';
import Spinner from '../components/Spinner';

function SimpsonsApi() {
  //set quote state
  const [quote, setQuote] = useState({});
  //set loading state
  const [loading, setLoading] = useState(true);

  const handleClick = async ({ target }) => {
    setQuote(target.value);
    setLoading(false);

    // const fetch = await getQuote();
  };

  return (
    <div>
      <Controls onClick={handleClick} />
      {loading ? <Spinner /> : <Display {...quote} />}
    </div>
  );
}

export default SimpsonsApi;
