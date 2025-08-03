import "../styles/WeekDays.css"
import '../styles/fonts.css';


export default function WeekDays() {


    function LocalDay({label}) {
        return(
            <div className="dayContainer" >
                <div className="text"  style={{borderRadius: "10px"}}>{label}</div>
            </div>
        )
    }


    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


    function RenderDay({day}) {
        return (
            <>
                <LocalDay label={day}/>
                {day === "SAT" ? <></> : <div className="gap"/>}
            </>
        )
    }

    return(
        <div className="foo-container">
            {dayNames.map((day) => <RenderDay key={day} day={day}/>)}
        </div>
    )
}
    
