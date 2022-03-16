import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import {Fragment} from "react";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

function Events() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function onSearch(year, month) {
    const link = `/events/${year}/${month}`;
    router.push(link, "", {
      scroll: true
    });
  }

  return (
    <Fragment>
      <EventsSearch onSearch={onSearch}/>
      <EventList items={allEvents}/>
    </Fragment>
  )
}

export default Events;