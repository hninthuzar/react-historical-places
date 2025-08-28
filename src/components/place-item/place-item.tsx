import { useNavigate } from "react-router-dom";
import type { HistoricalPlaces } from "../../interfaces/historical-places.interface";
import styles from "./place-item.module.css";

interface PlaceItemProps {
  place: HistoricalPlaces;
  onToggleVisit: () => void;
}

function PlaceItem({ place, onToggleVisit }: PlaceItemProps) {

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${place.id}`);
  };

  return (
    <div className={styles.itemContainer} onClick={goToDetail}>
      <div className={styles.imageContainer}>
        <img src={place.image} alt={place.name} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{place.name}</h2>
        <div className="text-grey">
          {place.description}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleVisit();
          }}
          className={[styles.button, place.visited ? styles.buttonGreen : styles.buttonRed].join(" ")}
        >
          {place.visited ? "Visited" : "Not Visited"}
        </button>

      </div>
    </div>
  );
}

export default PlaceItem;
