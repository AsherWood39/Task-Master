import { memo, useState } from "react";

export const ProfileView = memo(function ProfileView() {
  const [timeframe, setTimeframe] = useState("week");

  const user = {
    name: "John Doe",
    email: "john.doe@muthoot.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    role: "Project Manager",
    joinDate: "Jan 2023",
  };

  const stats = {
    week: [2, 5, 3, 7, 4, 8, 6],
    lastWeek: [3, 4, 6, 5, 7, 5, 4],
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentData = timeframe === "week" ? stats.week : stats.lastWeek;
  const maxValue = 10;

  return (
    <div className="h-full flex gap-6 p-6 bg-gray-50">
      {/* Left Section - Profile Card */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-6">
          {/* Profile Picture */}
          <div className="flex justify-center mb-4">
            <div className="h-55 w-55 rounded-3xl bg-gradient-to-br from-pink-200 via-pink-100 to-cyan-100" />
          </div>

          {/* User Info */}
          <div className="space-y-2 text-sm">
            <div className="basic-information bg-gray-200 rounded-2xl p-4">
              <div>
                <p className="text-xs font-semibold text-gray-600">Position:</p>
                <p className="text-gray-900">{user.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">Email:</p>
                <p className="text-gray-900 text-xs">{user.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">Phone:</p>
                <p className="text-gray-900">{user.phone}</p>
              </div>
            </div>

            <div className="border-t pt-3 mt-3 space-y-1 text-xs">
              
            {/* Stats */}
            <div className="stat-information bg-gray-200 rounded-2xl p-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hours worked this month:</span>
                  <span className="font-semibold">35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of tasks in progress:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of closed tasks:</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of frozen tasks:</span>
                  <span className="font-semibold">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-6 min-w-0 pr-2">
        {/* Meetings Section */}
        <div className="bg-white rounded-3xl p-6 min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Meetings</h2>
          <div className="space-y-3 min-w-0">
            {[
              { name: "OcD0 'Energi.kg'", date: "12/04/2021", count: "25", people: "Adyl, Azhar, Arthur" },
              { name: "TextLab", date: "12/04/2021", count: "25", people: "Adyl, Azhar, Arthur" },
              { name: "ComLab", date: "12/04/2021", count: "25", people: "Adyl, Azhar, Arthur" },
            ].map((meeting, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 rounded-2xl p-3 text-sm gap-2 min-w-0">
                <span className="font-medium text-gray-900 truncate">{meeting.name}</span>
                <div className="flex items-center gap-3 text-xs text-gray-600 flex-wrap">
                  <span className="whitespace-nowrap">📅 {meeting.date}</span>
                  <span className="whitespace-nowrap">👥 {meeting.count}</span>
                  <span className="truncate">{meeting.people}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress & Closed Sections */}
        <div className="grid grid-cols-2 gap-4 min-w-0">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 mb-3">In progress</h3>
            <div className="space-y-3">
              {[
                { title: "Notifications", person: "Azhar, Artur", date: "12/04/2021", priority: "low" },
                { title: "Task types", person: "Adyl", date: "12/04/2021", priority: "low" },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 rounded-2xl p-3 min-w-0">
                  <div className="flex items-center gap-2 mb-2 min-w-0">
                    <span className="font-semibold text-sm text-gray-900 truncate">{item.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full text-white whitespace-nowrap ${item.priority === "low" ? "bg-green-500" : "bg-red-500"}`}>
                      {item.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="truncate">Participant: {item.person}</div>
                    <div>Date added: {item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Closed</h3>
            <div className="text-sm text-gray-500">No closed items</div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm min-w-0">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your statistics</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-sm font-semibold text-gray-900">Working Hours</h3>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="px-3 py-1 text-sm font-medium border border-gray-200 rounded-lg bg-white cursor-pointer hover:bg-gray-50 w-fit"
              >
                <option value="week">Weekly</option>
                <option value="last">Last Week</option>
              </select>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative pt-4 overflow-x-hidden flex flex-col">
            <div className="flex gap-2 min-w-0">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between text-xs text-gray-600 font-medium w-8 text-right pr-1 flex-shrink-0">
                <div>10</div>
                <div>8</div>
                <div>6</div>
                <div>4</div>
                <div>2</div>
                <div>0</div>
              </div>

              {/* SVG Chart */}
              <div className="flex-1 min-w-0">
                <svg viewBox="0 0 700 280" className="w-full h-56" preserveAspectRatio="xMidYMid meet">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line key={`grid-${i}`} x1="0" y1={i * 50} x2="700" y2={i * 50} stroke="#f0f0f0" strokeWidth="1" />
                  ))}
                  
                  {/* Last Week line (light gray) */}
                  <polyline
                    points={stats.lastWeek
                      .map((value, idx) => {
                        const x = (idx / (stats.lastWeek.length - 1)) * 700;
                        const y = 250 - (value / maxValue) * 250;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="2.5"
                  />

                  {/* This Week line (red) */}
                  <polyline
                    points={currentData
                      .map((value, idx) => {
                        const x = (idx / (currentData.length - 1)) * 700;
                        const y = 250 - (value / maxValue) * 250;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-xs font-medium text-gray-700 mt-2 ml-10 gap-1">
              {daysOfWeek.map((day) => (
                <span key={day} className="text-center flex-1">{day}</span>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-gray-700">This Week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <span className="text-gray-700">Last Week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});