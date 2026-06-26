import { animalSummaryData } from "../data/dashboardData";

const AnimalSummary = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Animal Summary
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          View Report
        </button>
      </div>

      <div className="space-y-5">

        {animalSummaryData.map((item) => (

          <div key={item.id}>

            <div className="flex justify-between mb-2">

              <span className="text-sm font-medium text-gray-700">
                {item.animal}
              </span>

              <span className="text-sm text-gray-500">
                {item.total}
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">

              <div
                className={`${item.color} h-2 rounded-full`}
                style={{
                  width: `${item.percentage}%`,
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AnimalSummary;