import Link from "next/link";
import styles from './event-item.module.css';
import Button from "../ui/button";
import DateIcons from "../icons/date-icons";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem({id, date, image, location, title}) {
  const humanReadableDate = new Date(date).toLocaleTimeString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={image} alt={title}/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcons/>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon/>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}><ArrowRightIcon/></span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem;