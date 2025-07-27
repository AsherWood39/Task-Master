import { MeetingCard } from "../../../components/cards/meeting-card";
const participants = ["Alice", "Bob", "Charlie", "David"];
export const MeetingView = () => {
  return (
    <div className="fixed p-10 h-full w-full  overflow-scroll  justify-center-safe">
      {/* Add your meeting-related components here */}
      <MeetingCard
        meeting={{
          status: "active",
          title: "Team Meeting",
          description: "If you’d like, I can help check Sidebar or Topbar for unnecessary rerenders instead — want to see an optimized version? Just say “yes!” 🚀 project updates",
          date: "2023-10-10",
          admin: "Alice Smith",
          priority: "high",
          participants: participants
        }}
       
      />
      <MeetingCard
        meeting={{
          status: "inactive",
          title: "Team Meeting",
          description: "Discuss projectIf you’d like, I can help check Sidebar or Topbar for unnecessary rerenders instead — want to see an optimized version? Just say “yes!” 🚀 updates",
          date: "2023-10-10",
          admin: "Bob Johnson",
          priority: "medium",
          participants: participants
        }}
      
      />
      <MeetingCard
        meeting={{
          status: "active",
          title: "Team Meeting",
          description: "Discuss projectIf you’d like, I can help check Sidebar or Topbar for unnecessary rerenders instead — want to see an optimized version? Just say “yes!” 🚀 updates",
          date: "2023-10-10",
          admin: "Charlie Brown",
          priority: "low" 
        }}
        />
      <MeetingCard
        meeting={{
          status: "completed",
          title: "Team Meeting",
          description: "Discuss project updates",
          date: "2023-10-10",
          admin: "David Wilson",
          priority: "high"
        }}
      />
      <MeetingCard
        meeting={{
          status: "active",
          title: "Team Meeting",
          description: "Discuss project If you’d like, I can help check Sidebar or Topbar for unnecessary rerenders instead — want to see an optimized version? Just say “yes!” 🚀 updates",
          date: "2023-10-10",
          admin: "Eve Davis",
          priority: "medium"
        }}
      />
      <MeetingCard
        meeting={{
          status: "completed",
          title: "Team Meeting",
          description: "Discuss project updates",
          date: "2023-10-10",
          admin: "Frank Miller",
          priority: "high"
        }}
      />
    </div>
  );
};
