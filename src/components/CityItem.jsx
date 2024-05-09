import { useCities } from "../contexts/CitiesProvider";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

/* eslint-disable */
function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, date, emoji,  id, position } = city;
  const {lat, lng} = position;
  // console.log(id, currentCity.id);

  function handleClick(e){
    e.preventDefault();         // ! Buradaki preventDefault formum submitlenmeyinden elave formun icine girmeyin qarsisini aldi
    deleteCity(id);
  }

  return (
    <li>
      <Link className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : "" }`} to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
