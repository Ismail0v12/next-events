import {Fragment} from "react";
import EventList from "../../../components/events/event-list";
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../../dummy-data";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";


function FilterEvents() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <h3 className="center">Loading...</h3>
  }

  const dateFilter = {
    year: +filterData[0],
    month: +filterData[1],
  }
  const items = getFilteredEvents(dateFilter);

  if (
    isNaN(dateFilter.year) ||
    isNaN(dateFilter.month) ||
    dateFilter.year > 2030 ||
    dateFilter.year < 2021 ||
    dateFilter.month < 1 ||
    dateFilter.month > 12
  ) {
    return (
      <Fragment>
        <h3 className="center">Invalid filter. Please adjust your values!</h3>
        <div className="center">
          <Button link="/events">Show all event</Button>
        </div>
      </Fragment>
    )
  }


  if (items || items.length === 0) {

    return (
      <Fragment>
        <h3 className="center mb-10">No event found!</h3>
        <div className="center">
          <Button link="/events">Show all event</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(dateFilter.year, dateFilter.month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={items}/>
    </Fragment>
  )
}

export default FilterEvents;
