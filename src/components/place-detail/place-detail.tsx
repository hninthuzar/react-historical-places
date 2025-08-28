import type { HistoricalPlaces } from "../../interfaces/historical-places.interface";
import styles from "./place-detail.module.css";

interface PlaceItemProps {
  place: HistoricalPlaces;
}

function PlaceDetail({ place }: PlaceItemProps) {
  return (
    <div className={styles.itemDetailContainer}>
      <div className={styles.imageContainer}>
        <img src={place.image} alt={place.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{place.name}</h3>

        <p className="mb-5">{place.country}</p>

        <div className="mb-5 text-grey">
          {place.description}
        </div>
        
        <div>
            <label><b>Status : </b></label>
            <label style={{ color: place.visited ? "#75c100" : "#ff0000", fontWeight: '500' }}>
                {place.visited ? "Visited" : "Not Visited"}
            </label>
        </div>

      </div>
    </div>
  );
}

export default PlaceDetail
