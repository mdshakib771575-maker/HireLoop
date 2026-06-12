"use client";

import { Briefcase, MapPin } from "lucide-react";

const applicants = [
  { id: 1, name: "Julianne Moore", role: "Senior Product Designer", dateApplied: "Oct 24, 2023", experience: "6 years", status: "Interviewing" },
  { id: 2, name: "Robert Downey", role: "Backend Engineer", dateApplied: "Oct 23, 2023", experience: "4 years", status: "New" },
  { id: 3, name: "Emma Stone", role: "Marketing Lead", dateApplied: "Oct 22, 2023", experience: "8 years", status: "Reviewing" },
  { id: 4, name: "Chris Pratt", role: "Product Manager", dateApplied: "Oct 21, 2023", experience: "5 years", status: "Rejected" },
];

const topCompanies = [
  { id: 1, name: "Google Inc.", category: "Technology", location: "Mountain View", activeJobs: 24 },
  { id: 2, name: "Meta Platforms", category: "Social Media", location: "Menlo Park", activeJobs: 18 },
  { id: 3, name: "Stripe", category: "Fintech", location: "San Francisco", activeJobs: 12 },
  { id: 4, name: "Tesla", category: "Automotive", location: "Austin", activeJobs: 31 },
];

const statusColors = {
  Interviewing: "text-green-600 bg-green-100",
  New: "text-gray-600 bg-gray-100",
  Reviewing: "text-yellow-600 bg-yellow-100",
  Rejected: "text-red-600 bg-red-100",
};

export default function RecruitmentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5">

        {/* Recent Applications */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-800 font-semibold text-base">Recent Applications</h2>
            <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-700">View all</span>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                <th className="text-left pb-3 font-medium">Candidate Name</th>
                <th className="text-left pb-3 font-medium">Role</th>
                <th className="text-left pb-3 font-medium">Date Applied</th>
                <th className="text-left pb-3 font-medium">Experience</th>
                <th className="text-left pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((app) => (
                <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-4 text-gray-800 font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                        {app.name[0]}
                      </div>
                      {app.name}
                    </div>
                  </td>
                  <td className="py-4 text-gray-500">{app.role}</td>
                  <td className="py-4 text-gray-500">{app.dateApplied}</td>
                  <td className="py-4 text-gray-500">{app.experience}</td>
                  <td className="py-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[app.status]}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Companies */}
        <div className="bg-white rounded-2xl p-5 flex flex-col shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-800 font-semibold text-base">My Top Companies</h2>
            <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-700">View all</span>
          </div>

          <div className="flex flex-col gap-1 flex-1">
            {topCompanies.map((c) => (
              <div key={c.id} className="flex items-center gap-3 py-3 border-b border-gray-100 hover:bg-gray-50 rounded px-1">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-700 font-bold shrink-0">
                  {c.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 text-sm font-medium truncate">{c.name}</p>
                  <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                    <Briefcase className="w-3 h-3" /> {c.category}
                    <span>•</span>
                    <MapPin className="w-3 h-3" /> {c.location}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-gray-800 font-bold text-sm">{c.activeJobs}</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wide">Active Jobs</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full border border-gray-200 text-gray-600 text-sm py-2 rounded-xl hover:bg-gray-50 transition-colors">
            View All Companies
          </button>
        </div>

      </div>
    </div>
  );
}