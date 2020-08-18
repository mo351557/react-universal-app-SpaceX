/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { useHistory } from "react-router-dom";

import { fetchArticles } from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';

const HomePage = props => {
  const [modal, setModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});
  const [buttonArr, setButtonArr] = useState([]);
  var newPath;

  const readArticle = article => {
    setCurrentArticle(article);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderArticles = () => {
    console.log("props",props)
  
    return   props.articles.length > 0 ? props.articles.map(article => (
     
      <div className="col s12 m6 l3 xl3" key={article.flight_number}>
        <div className="card " style={{"min-height": "430px"}}>
          <div className="card-image" style={{padding: "15px"}}>
            <LazyLoadImage alt={article.links.mission_patch} src={article.links.mission_patch_small} style={{height: "150px", "background-color": "#f5f5f5"}}/>
          </div>
          <div className="card-content" style={styles.padding20}>
            {/* <span className="card-title">{article.title}</span> */}
            <div><b style={styles.fontHeadr}>{article.mission_name} #{article.flight_number}</b></div>

            <div style={styles.mrgnbttp}><b>Mission Ids:</b></div>
              <div style={styles.mrgnLft25}>
                <ul>
                 {article.mission_id.length > 0 ? article.mission_id.map( id => (<li style={{"list-style-type":"disc"}}>{id}</li>)) : "N/A" }
                </ul>
              </div>

              <div style={styles.mrgnbtm10}><b>Launch Year: </b> <span>{article.launch_year}</span></div>
              <div style={styles.mrgnbtm10}><b>Successful Launch: </b><span>{article.launch_success ? "True" : "False"}</span></div>
              <div><b>Successful Landing: </b><span>{article.upcoming ? "True" : "False"}</span></div>
          </div>

         
          {/* <div className="card-action">
            <a href="javascript:void(0)" onClick={() => readArticle(article)}>
              Read More
            </a>
          </div> */}
        </div>
      </div>
    )) : <div><span>No Data</span></div>
  };

  const yearsArr = () => {
    let arr = [];
    for(let i = 2006,j=0; i<=2020; i++,j++){
      arr.push({year : i, key : j, Enabled : false})
    }
    return arr;
  }

  const yearFilter = (year) => {
    console.log("year",year,newPath)
    // if(newPath) newPath = year+"_"+newPath
    // else newPath = year;
    let path = `/articles/${year}`; 
    history.push(path);
  }

  const history = useHistory();

  const filterSuccessLaunch = (isSuccess) =>{ 
    // let newPath;
    console.log("newpath",newPath)
    if(isSuccess) newPath = "LaunchSuccess";
    else newPath = "LaunchFailed"
    let path = `/articles/${newPath}`; 
    history.push(path);
  }

  const filterSuccessLanding = (isSuccess) =>{ 
    // let newPath;
    console.log("newpath",newPath)

    if(isSuccess) newPath = "LandingSuccess";
    else newPath = "LandingFailed"
    let path = `/articles/${newPath}`; 
    history.push(path);
  }


  const filterCard = () => {
    console.log("button",buttonArr)
    return ( 
    <div class="col s12 m12 l12 xl12">
      <div class="card white " style={{height: "700px"}}>
        <div class="card-content black-text" style={{padding: "10px"}}>
          <span class="card-title"><b>Filters</b></span>
          <div style={styles.textAlignCntr}> <p>Launch Year</p> </div>
          <div class="divider" style={styles.dividerStyle}></div>
          <div>
            <div style={{"margin-top": "5px"}}>
            {/* {yearsArr().map(value => 
              ( <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" style={buttonArr.Enabled ? {"background-color" : "red"} : null} 
                    // onMouseOver={changeBackground1} onMouseLeave={changeBackground2(value.key)}
                      onClick={() => changeBackgroundClick(value.key)} 
                     key={value.key}>{value.year}</a>
                </div> 
              )
            )} */}

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2006)} style={{"background-color": "#2bbb4361", color: "black"}}>2006</a>
              </div> 

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2007)} style={{"background-color": "#2bbb4361", color: "black"}}>2007</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2008)} style={{"background-color": "#2bbb4361", color: "black"}}>2008</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2009)} style={{"background-color": "#2bbb4361", color: "black"}}>2009</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2010)} style={{"background-color": "#2bbb4361", color: "black"}}>2010</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2011)} style={{"background-color": "#2bbb4361", color: "black"}}>2011</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2012)} style={{"background-color": "#2bbb4361", color: "black"}}>2012</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2013)} style={{"background-color": "#2bbb4361", color: "black"}}>2013</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2014)} style={{"background-color": "#2bbb4361", color: "black"}}>2014</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2015)} style={{"background-color": "#2bbb4361", color: "black"}}>2015</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2016)} style={{"background-color": "#2bbb4361", color: "black"}}>2016</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2017)} style={{"background-color": "#2bbb4361", color: "black"}}>2017</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2018)} style={{"background-color": "#2bbb4361", color: "black"}}>2018</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2019)} style={{"background-color": "#2bbb4361", color: "black"}}>2019</a>
              </div>

              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" onClick={() => yearFilter(2020)} style={{"background-color": "#2bbb4361", color: "black"}}>2020</a>
              </div>
           
            </div>
          </div>
        </div>
        {/* Successful launch starts */}
        <div class="card-content black-text col s12 m12 l12 xl12s" style={{padding: "10px"}}>
          <div style={styles.textAlignCntr}> <p>Successful Launch</p> </div>
          <div class="divider" style={styles.dividerStyle}></div>
          <div style={{"margin-top": "5px"}}>
              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}} onClick={() => filterSuccessLaunch(true)}>
                <a class="waves-effect btn" style={{ "background-color": "#2bbb4361",color: "black", "text-transform": "none"}} >True</a>
              </div> 
              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}} onClick={() => filterSuccessLaunch(false)}>
                <a class="waves-effect btn" style={{ "background-color": "#2bbb4361", color: "black", "text-transform": "none"}} >False</a>
              </div> 
          </div>
        </div>
        {/* Successful launch Ends*/}

         {/* Successful Landing starts */}
         <div class="card-content black-text col s12 m12 l12 xl12s" style={{padding: "10px"}}>
          <div style={styles.textAlignCntr}> <p>Successful Landing</p> </div>
          <div class="divider" style={styles.dividerStyle}></div>
          <div style={{"margin-top": "5px"}}>
              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" style={{"background-color": "#2bbb4361", color: "black", "text-transform": "none"}} onClick={() => filterSuccessLanding(true)}>True</a>
              </div> 
              <div class="col s6 m6 l6 xl6" style={{padding: "4%", "text-align": "center"}}>
                <a class="waves-effect btn" style={{"background-color": "#2bbb4361", color: "black", "text-transform": "none"}} onClick={() => filterSuccessLanding(false)}>False</a>
             
              </div> 
          </div>
        </div>
        {/* Successful Landing Ends*/}
      </div>
    </div>
 )
}

  let toggleyearBtnArr = Array(yearsArr.length).fill(false);
  function changeBackground1(e) {
    console.log(e.type)
    e.target.style.background = '#2bbb43eb';
  }
  function changeBackground2(e, index) {
    // if(!toggleyearBtnArr[index]){
    //   e.target.style.background = '#2bbb4361' ;
    // }
  }
  function changeBackgroundClick(index){
    // toggleyearBtnArr[index] = !toggleyearBtnArr[index];
    // if(!toggleyearBtnArr[index]) e.target.style.background = '#2bbb4361' ;
    // if(toggleyearBtnArr[index]) e.target.style.background = '#2bbb43eb' ;
    // console.log("HIiiiiiiis",buttonArr)
    // let arr = buttonArr
    // console.log("index",index)

    // for(let i=0; i<buttonArr.length;i++){
    //   if(i = index){
    //     console.log("index",index)
    //     arr.Enabled = true;
    //   }
    //   else{
    //     arr.Enabled = false;
    //   }
    // }
    //   // setButtonArr(arr)
    // console.log("onclik",buttonArr, "arr",arr)
  }

  // #2bbb43a6 - green
  // #2bbb4361 = hover
  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SpaceX Launch Programs</title>
        <meta property="og:title" content="SpaceX Launch Programs - Publicis Sapient" />
        <meta
          name="description"
          content="Breaking news,latest articles, popular articles from most popular news websites of the world"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://react-ssr-ilker.herokuapp.com" />
      </Helmet>
    );
  };

  const { fetchArticles: loadArticles } = props;
  useEffect(() => {
    setButtonArr(yearsArr());
    console.log('componentDidMount',buttonArr);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);

  

  return (
    <div>
      {head()}
      {modal ? <ArticleDetailModal handler={closeModal} data={currentArticle} /> : null}
      <div>

        <div class="row" style={styles.mrgnLR10}>

          {/* Filter card starts */}

            <div class="col s12 m4 l2 xl2">
              <div className="section">
                <div className="row">{filterCard()}</div>
              </div>
            </div>
          {/* Filter card Ends */}

          <div class="col s12 m8 l10 xl10">
            <div className="section">
             <div className="row">{renderArticles()}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const styles = {
  fullWidth: {
    width : "100%"
  },
  mrgnLR10 : {
    "margin-left": "20px",
    "margin-right": "10px"
  },
  textAlignCntr : {
    "text-align" : "center"
  },
  dividerStyle : {
    "text-align": "center",
    "width": "70%",
    "margin-left": "15%"
  },
  mrgnbttp : {
    "margin-bottom": "-15px",
    "margin-top": "10px"
  },
  mrgnLft25: {
    "margin-left": "25px",
    "margin-bottom": "10px"
  },
  mrgnbtm10 : {
    "margin-bottom": "10px"
  },
  fontHeadr : {
    "font-weight": 700,
    "color": "cornflowerblue"
   },
   padding20 : {
    "padding": "20px"
   },
   btnEffect : {
    "&:hover": {
      background: "#efefef"
    },
    "background-color": "#2bbb4361", 
     color: "black"

   }

}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any),
  fetchArticles: PropTypes.func
};

HomePage.defaultProps = {
  articles: [],
  fetchArticles: null
};

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
};
