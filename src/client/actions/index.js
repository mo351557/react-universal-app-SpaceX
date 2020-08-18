import axios from 'axios';
import config from '../../../config';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = source => async dispatch => {
  let url = `https://api.spaceXdata.com/v3/launches?limit=100`;
  console.log("source",source)
  // if (source == "LaunchSuccess")     url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true`;
  // else if(source == "LaunchFailed")  url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false`;
  // else if(source == "LandingSuccess") url = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=true`;
  // else if(source == "LandingFailed") url = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=false`;

  // else url = `https://api.spaceXdata.com/v3/launches?limit=100`
  
  if(source){
    if(source.includes("20")) url = url + `&launch_year=${source.slice(0,4)}`
    if(source.includes("LaunchSuccess"))  url = url + `&launch_success=true`
    if(source.includes("LaunchFailed"))  url = url + `&launch_success=false`
    if(source.includes("LandingSuccess"))  url = url + `&land_success=true`
    if(source.includes("LandingFailed"))  url = url + `&land_success=false`
  }

  // else url = `https://api.spaceXdata.com/v3/launches?limit=100`

  const res = await axios.get(url);
  // console.log("res",res)
  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data
  });
};
