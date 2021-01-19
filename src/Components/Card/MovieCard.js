import React from 'react'
import { makeStyles } from '@material-ui/core';

import './MovieCard.css';

const MovieCard = (props) => {

  const classes = useStyles();

  const renderNote = (props) => {
    return (
      <div className={classes.movieCardNote}>
        <span>{props.note}</span>
      </div>
    )
  }
  
  const renderViews = (props) => {
    return (
      <div className={classes.movieCardViews}>
        <span className={classes.movieCardViewsText}>{props.views}</span>
      </div>
    )
  }
  
  const renderMovieText = (props) => {
    return (
    <span className={classes.movieCardText}>{props.title}</span>
    )
  }
  

  return (
    <div className={classes.movieCardSize}>
      <div className={classes.MovieCard}>
        {renderNote(props)}
        <img
          className={classes.movieCardImage}
          src={props.image}
          alt='Cartaz do filme minha mae é uma peça'
        />
        {renderViews(props)}
      </div>
      {renderMovieText(props)}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  homeImage: {
    width: '100%',
    height: '250px'
  },

  homeImageText: {
    position: "absolute",
    top: "300px",
    color: "white",
    backgroundColor: "none",
    fontSize: 'x-large',
    fontWeight: 'bold'
  },

  subItemTitle: {
    color: "white",
    fontSize: 'xx-large',
    fontWeight: 'bold',
    marginTop: '30px'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%',
    paddingLeft: '12%',
    paddingRight: '12%'
  },

  mostRatedMoviesCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '30px'
  },

  movieCard: {
    width: '190px',
    height: '250px',
    position: 'relative',
  },

  movieCardSize: {
    width: '150px'
  },

  movieCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  },
  
  movieCardNote: {
    height: '26px',
    width: '37px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '5px',
    position: 'absolute',
    right: '-7%',
    top: '-7%',
  },
  
  movieCardViews: {
    height: '20px',
    width: '40px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    position: 'absolute',
    right: '5%',
    bottom: '2%',
  },
  
  movieCardViewsText: {
    fontWeight: '700',
    marginBottom: '5px',
  },
  
  movieCardText: {
    fontSize: '14px',
    color: 'white',
    fontWeight: '600',
    maxWidth: '100px',
  }
}));

export default MovieCard;
