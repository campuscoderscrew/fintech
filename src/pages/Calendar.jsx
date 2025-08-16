import Monthdiv from "../calendar-library/MonthView";
import { useState, useEffect } from "react";
import localData from "../calendar-library/LocalData";
import { convertMonthIndex } from "../util/utils";

export default function Calendar() {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(0);

    function updateLocDataMonth(newMonth) {
        console.log("Clicked" + newMonth)
        localData.currentDate.setMonth(newMonth);
        console.log("New month: " + localData.currentDate.getMonth())
        setMonth(localData.currentDate.getMonth())
        setYear(localData.currentDate.getFullYear())
    }
    useEffect(() => {
        setMonth(localData.currentDate.getMonth())
        setYear(localData.currentDate.getFullYear())
      }, []);
  return (
    <div className="space-y-4">
      <section>
        <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
        <p className="text-gray-500">Hackathons, workshops, and speaker panels coming soon.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">Past Highlights</h2>
        <p className="text-gray-500">See what we've done this semester and who we’ve worked with.</p>
      </section>

      <div className="calendar-title" style={{fontSize: 70, fontWeight: 'bold', color: '#2d336b'}}>CALENDAR</div>
      <div className="month-title-container" style={{display: "flex", flexDirection: "row", marginTop: 0}}>
          <div className="month-title" variant="h7" style={{ fontWeight: 'bold', color: '#2d336b', width: "80%", fontSize: 40 }}>
              {convertMonthIndex(month) + " " + year}
          </div>
          <div className = "arrows-container" style={{display: "flex", flexDirection: "row-reverse", alignItems: "center", width: "20%"}}>
            <div className="prev-month" onClick={() => updateLocDataMonth(localData.currentDate.getMonth() - 1)}>
              <img src="/arrow-image.svg" style={{width: 20}}/>
            </div>
            <div style={{width: 20}}/>
            <div className="next-month" onClick={() => updateLocDataMonth(localData.currentDate.getMonth() + 1)}>
                <img src="/arrow-image.svg" style={{width: 20, transform: "scaleX(-1)"}}/>
            </div>
          </div>
          
      </div>

      <Monthdiv/>


    </div>
  );
}
