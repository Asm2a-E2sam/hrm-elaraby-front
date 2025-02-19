import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API,
  credentials: "include",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    try {
      const refreshResult = await baseQuery(`/refresh-token`, api, extraOptions);
      if (refreshResult.data) {
        localStorage.setItem("access-token", refreshResult.data.token);
        
        result = await baseQuery(args, api, extraOptions);
      } else {
        localStorage.clear();
        window.location.replace("/admin/auth/login");
        return undefined;
      }
    } catch (error) {
        localStorage.clear();
        window.location.replace("/admin/auth/login");
        return undefined;
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,

  tagTypes: [
    "Users",
    "User",
    "Transactions",
    "Accounts",
    "PublicHolidays",
    "PublicHoliday",
    "TaskTimes",
    "TaskStatusAll",
    "TaskStatusById",
    "TaskStatus",
    "TaskPriority",
    "TaskPriorities",
    "TaskDependency",
    "ProjectTeams",
    "ProjectTeam",
    "ProjectTeamsById",
    "ProjectTask",
    "ProjectAll",
    "Projects",
    "Project",
    "Milestones",
    "MilestoneById",
    "Milestone",
    "AssignedTasks",
    "Payrolls",
    "Payroll",
    "PaySlips",
    "PaySlipsByMonth",
    "Payments",
    "LeavePolicies",
    "LeavePolicy",
    "Leaves",
    "LeaveByStatus",
    "Leave",
    "EmploymentStatus",
    "Designations",
    "Designation",
    "DesignationHistories",
    "DesignationHistory",
    "DesignationByEmployee",
    "AwardHistory",
    "Awards",
    "Attendances",
    "AttendanceById",
    "Attendance",
    "AttendanceAll",
    "AttendanceByClock",
    "Announcements",
    "Announcement",
    "Departments",
    "Department",
    "setting",
    "WeeklyHolidays",
    "WeeklyHoliday",
    "Roles",
    "Role",
    "Shifts",
    "Shift",
    "Educations",
    "Education",
    "SalaryHistories",
    "SalaryHistory",
    "ConfigEmail",
    "jobCategory",
    "jobCategories",
    "jobType",
    "jobTypes",
    "jobLocation",
    "jobLocations",
    "jobSkill",
    "jobSkills",
    "jobWorkExperience",
    "jobWorkExperiences",
    "job",
    "jobs",
    "jobApplication",
    "jobApplications",
    "jobInterview",
    "jobInterviews",
    "jobApplicationStatuses",
    "jobApplicationStatus",
  ],
  endpoints: (builder) => ({}),
});