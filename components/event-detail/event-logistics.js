import DateIcons from "../icons/date-icons";
import AddressIcon from "../icons/address-icon";
import styles from './event-logistics.module.css';
import LogisticsItem from "./logistic-item";

function EventLogistics(props) {
  const {date, address, image, imageAlt} = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={image} alt={imageAlt}/>
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcons}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}

export default EventLogistics;