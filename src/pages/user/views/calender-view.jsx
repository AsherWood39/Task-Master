import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function CalendarView() {
  return (
    <div className="fixed p-10 h-full w-full overflow-scroll flex ">
     <div className="w-3/4 h-full border ">
        <Calendar style={{ height: "100%", width: "100%" }} />
     </div>
    </div>
  );
}
