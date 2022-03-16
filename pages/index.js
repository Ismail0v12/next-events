import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <section className="home">
      <div className="container">
        <EventList items={featuredEvents}/>
      </div>
    </section>
  )
}

export default HomePage;