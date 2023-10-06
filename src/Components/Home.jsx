import { useAppContext } from "./MyContext";
import styles from './Home.module.scss';
import MoviesCard from "./MoviesCard";

export default function Home() {

  const {movieData} = useAppContext();

  return (  
    
     <div className={styles.movies}>
        {movieData &&
          movieData
            .map(({ images, title, releaseYear, description }) => {
              const posterUrl =
                images?.posterArt?.url ?? "./imagen-no-disponible.jpg";

              return {
                images: posterUrl,
                title,
                description,
                releaseYear,
              };
            })
            .sort(
              (movieA, movieB) =>
                new Date(movieB.releaseYear) - new Date(movieA.releaseYear)
            )
            .map(({ images, title, description, releaseYear }) => (
              <MoviesCard
                className={styles.movies}
                key={title}
                images={images}
                title={title}
                description={description}
                releaseYear={releaseYear}
              />
            ))}

    </div>
        )
}



