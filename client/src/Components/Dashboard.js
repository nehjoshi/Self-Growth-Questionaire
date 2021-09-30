import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, useTheme } from '@material-ui/core';
import Bg from "../Images/bg.jpg";
import axios from 'axios';
import { useHistory } from 'react-router';
import Loader from './Loader';
import Ace from '../Images/ace.png';
import Att_Style from '../Images/att_style.png';
import TestInfo from './TestInfo';
import Hope from '../Images/hope.png';
import Bft from '../Images/bft.png';
import Perma from '../Images/perma.png';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    minHeight: '100vh',
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: 'relative'
  },
  heading: {
    margin: '20px',
    fontSize: 'clamp(1.6rem, 2.6vw, 2.5rem)',
    color: 'gray',
    padding: '15px 15vw',
    boxShadow: "0 0 7px  #7a7a7a",
    background: '#f7f7f7',
    borderRadius: '25px'
  },
  testContainer: {
    justifyContent: 'center'
  },
  profile: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#003840',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: '#fff',
    fontWeight: '900',
    '&:hover': {
      cursor: 'pointer',  
    }
  }

}))
const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://self-growth-questionaire.herokuapp.com/verify`, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.auth === true) {
          axios.get(`https://self-growth-questionaire.herokuapp.com/fetch/${localStorage.getItem("email")}`)
            .then(res => {
              console.log(res.data);
              setData(res.data);
              setLoading(false);
            })
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [history])
  return loading ? <Grid className={classes.wrapper}><Loader /></Grid> : (
    <Grid className={classes.wrapper}>
      <h1 className={classes.heading}>The Mirror Test</h1>
      <div className={classes.profile}>{localStorage.getItem("name").charAt(0)}</div>
      <Grid container className={classes.testContainer}>
        <TestInfo heading="Adverse Childhood Experience (ACE) Test" imgSource={Ace} height='200px'
          desc="Adverse Childhood Experiences are what govern our 
          lives and shape our future. Take this test to find out more" progress={data.quiz1.percentage} testNo={1} lastQ={data.quiz1.lastQ} />
        <TestInfo heading="Attachment Style Test" imgSource={Att_Style} height="180px"
          desc="How do you attach with your loved ones or your partner?
           Out of the four attachment styles, secure, 
           anxious, avoidant and disoranized, which one are you?" progress={data.quiz2.percentage} testNo={2} lastQ={data.quiz2.lastQ} />
        <TestInfo heading="Hope and Optimism Test" imgSource={Hope} height="220px"
          desc="How optimistic or pessimistic are you? And how does your level of hope affect your life? Take this test to gain further insights." progress={data.quiz3.percentage} testNo={3} lastQ={data.quiz3.lastQ} />
      </Grid>
      <Grid container className={classes.testContainer}>
        <TestInfo heading="Big Five Personality Test" imgSource={Bft} height='200px'
          desc="Out of the five big personality traits, which one suits you the best? Answer these 50 questions to find out more." progress={data.quiz4.percentage} testNo={4} lastQ={data.quiz4.lastQ} />
        <TestInfo heading="Wellbeing (PERMA) Test" imgSource={Perma} height='200px'
          desc="How do you feel about your overall wellbeing, quality of life and your general health?
          Take the wellbeing test to know more about this." progress={data.quiz5.percentage} testNo={5} lastQ={data.quiz5.lastQ} />
      </Grid>
    </Grid>
  )
}
export default Dashboard;