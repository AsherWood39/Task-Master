import { useState } from "react";

export default function CalendarView() {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(year, month) {
    // Adjust for Monday start (0 = Monday, 6 = Sunday)
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  }

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(4); // May (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState(18);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate calendar grid
  const calendarDays = [];
  
  // Get previous month's last days for empty cells
  const prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonthIndex);
  
  // Add days from previous month for empty cells
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: daysInPrevMonth - i, isCurrentMonth: false, isPrevMonth: true });
  }
  
  // Add days of the current month
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push({ day: d, isCurrentMonth: true, isPrevMonth: false });
  }

  // Fill remaining cells with next month's days
  const totalCells = calendarDays.length;
  const weeksNeeded = Math.ceil(totalCells / 7);
  const cellsInGrid = weeksNeeded * 7;
  
  for (let d = 1; d <= (cellsInGrid - totalCells); d++) {
    calendarDays.push({ day: d, isCurrentMonth: false, isPrevMonth: false });
  }

  return (
    <div className="p-10 h-full w-full flex justify-center items-start bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg aspect-square flex flex-col">
        {/* Header with month/year and navigation */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <div className="flex space-x-2">
            <button
              className="w-8 h-8 flex items-center justify-center transition-colors"
              onClick={prevMonth}
              aria-label="Previous Month"
            >
              <svg className="w-4 h-4 text-gray-400 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center transition-colors"
              onClick={nextMonth}
              aria-label="Next Month"
            >
              <svg className="w-4 h-4 text-gray-800 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {/* Day headers */}
          {daysOfWeek.map((day) => (
            <div key={day} className="h-18 flex items-center justify-center text-sm font-medium text-black">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {calendarDays.map((dayObj, idx) => {
            const isCurrentMonth = dayObj.isCurrentMonth;
            const isSelected = dayObj.day === selectedDate && isCurrentMonth;
            const isToday = dayObj.day === today.getDate() && 
                           currentMonth === today.getMonth() && 
                           currentYear === today.getFullYear() && 
                           isCurrentMonth;
            
            return (
              <div
                key={idx}
                className={`aspect-square flex items-center justify-center text-sm cursor-pointer border border-gray-200 transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white font-semibold"
                    : isToday
                    ? "bg-blue-200 text-blue-600 font-semibold"
                    : isCurrentMonth
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-gray-400 hover:bg-gray-50"
                }`}
                onClick={() => {
                  if (isCurrentMonth) {
                    setSelectedDate(dayObj.day);
                  }
                }}
              >
                {dayObj.day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
