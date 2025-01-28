import React from "react";

const Processes = () => {
  return (
    <div>
      <h1 className="text-2xl">Business Process</h1>
      <div className="flex">
        <div>
          <h1 className="text-lg">Understand</h1>
          <p>Understand Client Goals</p> <p>Identify business objectives</p>
          <p>Scope Documentation</p>
        </div>
        <div>
          <h1 className="text-lg">Plan and strategize</h1>
          <p>Define Milestones</p>
          <p>Assign Roles</p>
          <p>Select Tech Stack</p>
        </div>
        <div>
          <h1 className="text-lg">Design</h1>
          <p>Wireframes and Mockups</p>
          <p>User-Centric Design</p>
          <p>Feedback Loop</p>
        </div>
        <div>
          <h1 className="text-lg">Develop</h1>
          <p>Agile Task Management</p>
          <p>Component-Based Development</p>
          <p>Continuous Integration/Delivery</p>
        </div>
        <div>
          <h1 className="text-lg">Deploy</h1>
          <p>Hosting</p>
          <p>Performance Optimization</p>
          <p>SEO Best Practices</p>
        </div>
      </div>
    </div>
  );
};

export default Processes;
