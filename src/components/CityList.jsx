import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../contexts/CitiesProvider';

/* eslint-disable */ 
function CityList(/* {cities, isLoading} */) {
    const {cities, isLoading} = useCities();     // console.log(useCities());  // ! {cities: Array(5), isLoading: false}

    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message='Add your first city by clicking on a city on the map' />
    return (
        <ul className={styles.cityList}>
            {cities.map(city => <CityItem city={city} key={city.id}/>)}
        </ul>
    )
}

export default CityList
