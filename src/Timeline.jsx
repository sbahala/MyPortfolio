import React from "react";

const Timeline = () => {
  return (
    <section id="timeline" className="relative bg-gradient-to-br from-indigo-100 to-purple-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">My Professional Journey</h2>
      
      {/* Timeline Container */}
      <div className="relative mx-auto max-w-5xl">
        {/* Road */}
        <div className="w-full h-2 bg-gray-400 rounded-full absolute top-1/2 transform -translate-y-1/2"></div>

        {/* Milestones */}
        <div className="relative flex justify-between items-center">
          {/* Milestone 1 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold absolute -top-8">2012</div>
            <h3 className="text-lg font-bold mt-16">B.Tech</h3>
            <p className="text-sm text-gray-600">Started undergraduate studies</p>
          </div>

          {/* Milestone 2 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold absolute -top-8">Job 1</div>
            <h3 className="text-lg font-bold mt-16">First Job</h3>
            <p className="text-sm text-gray-600">Worked as a Software Engineer</p>
          </div>

          {/* Milestone 3 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold absolute -top-8">Job 2</div>
            <h3 className="text-lg font-bold mt-16">Second Job</h3>
            <p className="text-sm text-gray-600">Promoted to Senior Developer</p>
          </div>

          {/* Milestone 4 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold absolute -top-8">Master</div>
            <h3 className="text-lg font-bold mt-16">Master's Degree</h3>
            <p className="text-sm text-gray-600">Completed postgraduate studies</p>
          </div>

          {/* Milestone 5 */}
          <div className="flex flex-col items-center relative">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold absolute -top-8">Future</div>
            <h3 className="text-lg font-bold mt-16">Future Jobs</h3>
            <p className="text-sm text-gray-600">Looking forward to exciting roles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
