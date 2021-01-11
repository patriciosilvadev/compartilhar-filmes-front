import { makeStyles, Typography } from '@material-ui/core';
import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 

function Home(){
  const classes = useStyles();

  return (
    <div className={classes.container} >
      <div>
        <img 
          className={classes.homeImage}
          src={DoraAventureiraImg} 
          alt='imagem da divulgação do filme da Dora Aventureira'>
        </img>
        <Typography
          className={classes.homeImageText}
        >
          Filme em destaque
        </Typography>
      </div>
      <div>
        <Typography
            variant="h1"
            component="h1"
            className={classes.subItemTitle}
          >
            Filmes e séries mais bem avaliados
        </Typography>
      </div>
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
      width: "100%",
      color: "white",
      backgroundColor: "none",
      fontFamily: "Comic Sans MS",
      fontSize: 'x-large',
      fontWeight: 'bold'
    },
    subItemTitle: {
      color: "white",
      fontSize: 'xx-large',
      fontWeight: 'bold',
      fontFamily: "Comic Sans MS",
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '5%',
      paddingLeft: '12%',
      paddingRight: '12%'
    }
}));

export default Home;

// import './Home.css';
// import DoraAventureiraImg from '../../assets/dora-aventureira.png'; 
// import MovieCard from '../../Components/Card/MovieCard';

// const Home = (props) => {

//   return (
//     <div className='home'>
//       <div className='home__featured-image'>
//         <img 
//           className='home__image'
//           src={DoraAventureiraImg} 
//           alt='imagem da divulgação do filme da Dora Aventureira'>
//         </img>

//         <span className='home__image_text'>
//           Filme em Destaque
//         </span>
//       </div>

//       <div className='home__movies-cards'>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>

//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//           <div className='home__movies-card'>
//             <MovieCard 
//               title='O som do metal'
//               note='6.7'
//               image=''
//               views='200'
//             />
//           </div>
//       </div>

//     </div>
//   );
// }