export default function Calendar() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Event Calendar</h1>
      <p className="text-gray-600">Stay up to date on all our upcoming events and deadlines.</p>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
        <p className="text-gray-500">Hackathons, workshops, and speaker panels coming soon.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">Past Highlights</h2>
        <p className="text-gray-500">See what we've done this semester and who we’ve worked with.</p>
      </section>
    </div>
  );
}
