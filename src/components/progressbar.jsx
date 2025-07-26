export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-red-800  rounded-full h-2 my-2">
      <div
        className="bg-green-800 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

// Usage:
