import { useState } from "react";

const TimeOfDaySlider = () => {
  const [timeRange, setTimeRange] = useState({ start: 0, end: 15 });

  const formatTime = (time) => {
    const period = time < 12 ? "AM" : "PM";
    const formattedHours = time % 12 || 12;
    return `${formattedHours}:00 ${period}`;
  };

  const handleSliderChange = (e, type) => {
    const value = parseInt(e.target.value, 10);

    if (type === "start" && value <= timeRange.end) {
      setTimeRange((prev) => ({ ...prev, start: value }));
    }

    if (type === "end" && value >= timeRange.start) {
      setTimeRange((prev) => ({ ...prev, end: value }));
    }
  };

  const getBackgroundStyle = () => {
    const startPercentage = (timeRange.start / 23) * 100;
    const endPercentage = (timeRange.end / 23) * 100;
    return `linear-gradient(to right, #e5e7eb ${startPercentage}%, #3b82f6 ${startPercentage}%, #3b82f6 ${endPercentage}%, #e5e7eb ${endPercentage}%)`;
  };

  return (
    <div className="mb-4">
      {/* Time of Day and Time Range */}
      <div className="flex items-center justify-between">
        <label className="block text-gray-600">Time of Day</label>

        <div className="ml-4 px-3 py-1 border border-blue-500 rounded-md text-blue-500">
          {formatTime(timeRange.start)} – {formatTime(timeRange.end)}
        </div>
      </div>

      {/* Single Slider Track with Two Thumbs */}
      <div className="mt-2 relative w-full h-2">
        <input
          type="range"
          min="0"
          max="23"
          step="1"
          value={timeRange.start}
          onChange={(e) => handleSliderChange(e, "start")}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
          style={{
            background: getBackgroundStyle(),
            zIndex: 2, // Ensure correct overlap
          }}
        />

        {/* End Thumb */}
        <input
          type="range"
          min="0"
          max="23"
          step="1"
          value={timeRange.end}
          onChange={(e) => handleSliderChange(e, "end")}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
          style={{
            background: "transparent",
            zIndex: 3, // Ensure correct overlap
          }}
        />
      </div>
    </div>
  );
};

export default TimeOfDaySlider;
