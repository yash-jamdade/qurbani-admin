const StatCard = ({
  title,
  value,
  percentage,
  description,
  icon: Icon,
  iconBgColor = "bg-green-100",
  iconColor = "text-green-600",
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-300">

      <div className="flex items-start justify-between">

        {/* Left Section */}
        <div>
          <h4 className="text-sm text-gray-500 font-medium">
            {title}
          </h4>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-green-600 font-semibold text-sm">
              {percentage}
            </span>

            <span className="text-gray-500 text-sm">
              {description}
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBgColor}`}
        >
          <Icon className={`${iconColor}`} size={24} />
        </div>

      </div>

    </div>
  );
};

export default StatCard;