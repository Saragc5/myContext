import styles from './MoviesCard.module.scss';

export default function MoviesCard({
  images,
  title,
  description, 
  releaseYear
  
}) {
  return (
    <div className={styles.container}>
      <img src={images} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>      
    </div>
  );
}