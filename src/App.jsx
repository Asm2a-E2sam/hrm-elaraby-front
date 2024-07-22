import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Logout from "./components/user/Logout";
import UserList from "./components/user/user";

import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import Page404 from "./components/404/404Page";
import Dashboard from "./components/Dashboard/Graph/Dashboard";
import DetailStaff from "./components/user/detailsStaff";

import Designation from "./components/designation/designation";
import DetailDesignation from "./components/designation/detailDesignation";
import UpdateDesignation from "./components/designation/updateDesignation";

import Main from "./components/layouts/Main";

import WelcomePage from "./components/UI/welcomePage";
import Department from "./components/department/Department.js.jsx";
import DetailDepartment from "./components/department/DetailsDepartment";
import CalculatePayroll from "./components/payroll/CalculatePayroll";
import AddPermission from "./components/role/AddPermission";
import DetailRole from "./components/role/DetailsRole";
import RoleList from "./components/role/role";
import InvoiceSetting from "./components/settings/invoiceSetting";
import GetAllUsers from "./components/user/GetAllUser";

import UserAttendance from "./components/attendance/UserAttendance";
import EmploymentStatus from "./components/employmentStatus/EmploymentStatus";
import DetailEmploymentStatus from "./components/employmentStatus/EmploymentStatusDetails";
import DetailLeave from "./components/leave/DetailLeave";
import GetAllLeaves from "./components/leave/GetAllLeaves";
import Leave from "./components/leave/Leave";
import PayslipList from "./components/payroll/PayslipList";
import Shift from "./components/shift/Shift";
import DetailShift from "./components/shift/ShiftDetails";

import Account from "./components/account/account";
import BalanceSheet from "./components/account/balanceSheet";
import DetailAccount from "./components/account/detailAccount";
import IncomeStatement from "./components/account/incomeStatement";
import TrialBalance from "./components/account/trialBalance";

import EmailConfig from "./components/EmailConfig/EmailConfig.jsx";
import UserPrivateRoute from "./components/PrivateRoutes/UserPrivateRoute";
import JobEditPopup from "./components/UI/PopUp/JobEditPopup.jsx";
import Announcement from "./components/announcement/Announcement";
import DetailAnnouncement from "./components/announcement/AnnouncementDetails";
import GetAllAttendance from "./components/attendance/GetAllAttendance";
import DetailAward from "./components/award/DetailsAward";
import GetAllAward from "./components/award/GetAllAward";
import KanbanBoard2 from "./components/kanbanBoard/KanbanBoard2";
import UserLeave from "./components/leave/UserLeave";
import DetailLeavePolicy from "./components/leavePolicy/DetailsLeavePolicy";
import LeavePolicy from "./components/leavePolicy/LeavePolicy";
import DetailPayslip from "./components/payroll/PayslipDetail";
import AddProject from "./components/project/AddProject";
import UpdateProject from "./components/project/UpdateProject";
import UpdateStatus from "./components/project/UpdateStatus";
import UpdateMilestone from "./components/project/milestone/UpdateMilestone";
import Milestone from "./components/project/milestone/milestone";
import Project from "./components/project/project";
import UpdateTaskPriority from "./components/project/taskPriority/UpdateTaskPriority";
import TaskPriority from "./components/project/taskPriority/taskPriority";
import UpdateTaskStatus from "./components/project/taskStatus/UpdateTaskStatus";
import TaskStatus from "./components/project/taskStatus/taskStatus";
import Task from "./components/project/tasks/tasks";
import DetailProjectTeam from "./components/project/team/DetailProjectTeam";
import ProjectTeam from "./components/project/team/ProjectTeam";
import DetailPublicHoliday from "./components/publicHoliday/DetailsPublicHoliday";
import PublicHoliday from "./components/publicHoliday/PublicHoliday";
import DetailsJob from "./components/recruitment/job/DetailsJob.jsx";
import Job from "./components/recruitment/job/Job.jsx";
import DetailsJobApplication from "./components/recruitment/jobApplication/DetailsJobApplication.jsx";
import JobApplication from "./components/recruitment/jobApplication/JobApplication.jsx";
import DetailsJobInterview from "./components/recruitment/jobInterview/DetailsJobInterview.jsx";
import JobInterview from "./components/recruitment/jobInterview/JobInterview.jsx";
import DetailsJobLocation from "./components/recruitment/jobLocation/DetailsJobLocation.jsx";
import JobLocation from "./components/recruitment/jobLocation/JobLocation.jsx";
import DetailsJobSkills from "./components/recruitment/jobSkills/DetailsJobSkills.jsx";
import JobSkills from "./components/recruitment/jobSkills/JobSkills.jsx";
import DetailsJobType from "./components/recruitment/jobType/DetailsJobType.jsx";
import JobType from "./components/recruitment/jobType/JobType.jsx";
import DetailsJobWorkExperience from "./components/recruitment/jobWorkExperience/DetailsJobWorkExperience.jsx";
import JobWorkExperience from "./components/recruitment/jobWorkExperience/JobWorkExperience.jsx";

import JobKanbanBoard from "./components/jobKanbanBoard/JobKanbanBoard.jsx";
import DetailsJobCategory from "./components/recruitment/jobCategory/DetailsJobCategory.jsx";
import JobCategory from "./components/recruitment/jobCategory/JobCategory.jsx";
import RecruitmentJobDetails from "./components/recruitmentDesk/recruitmentDetails/RecruitmentJobDetails.jsx";
import RecruitmentForm from "./components/recruitmentDesk/recruitmentForm/RecruitmentForm.jsx";
import RecruitmentHome from "./components/recruitmentDesk/recruitmentHome/RecruitmentHome.jsx";
import RecruitmentMain from "./components/recruitmentDesk/recruitmentLayout/RecruitmentMain.jsx";
import DetailTransaction from "./components/transaction/detailTransaction";
import Transaction from "./components/transaction/transaction";
import DetailWeeklyHoliday from "./components/weeklyHoliday/DetailsWeeklyHoliday";
import WeeklyHoliday from "./components/weeklyHoliday/WeeklyHoliday";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import enTranslation from "./../src/locales/en/translation.json";
import arTranslation from "./../src/locales/ar/translation.json";
import { useSelector } from "react-redux";
function App() {
  const language = useSelector((state) => state.language.language);
  i18next.init({
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      ar: {
        translation: arTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
    <div className='App container-fluid'  dir={`${language == 'ar' ? 'rtl' : 'ltr'}`}>
      <ToastContainer
        position='bottom-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <BrowserRouter>
        {/* <TestComp/> */}
        <>
          <Main>
            <Routes>
              <Route path='/' element={<WelcomePage />} />
              <Route path='/admin/dashboard' element={<Dashboard />}></Route>
              <Route path='/admin' element={<Dashboard />} />

              {/* job desk public route started*/}
              <Route element={<RecruitmentMain />}>
                <Route path='/recruitment' element={<RecruitmentHome />} />
                <Route
                  path='/recruitment/jobDetails/:id'
                  element={<RecruitmentJobDetails />}
                />
                <Route
                  path='/recruitment/applicationForm/:jobId'
                  element={<RecruitmentForm />}
                />
              </Route>
              {/* job desk public route ended*/}


              <Route path='/admin/auth/login' exact element={<Login />} />
              <Route path='/admin/auth/register' exact element={<Register/>} />
              <Route path='/admin/auth/logout' exact element={<Logout />} />
              <Route element={<UserPrivateRoute permission={"create-user"} />}>
                <Route
                  path='/admin/hr/staffs/new'
                  exact
                  element={<UserList />}
                />
              </Route>
              <Route element={<UserPrivateRoute permission={"readAll-user"} />}>
                <Route
                  path='/admin/hr/staffs'
                  exact
                  element={<GetAllUsers />}
                />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"readSingle-user"} />}
              >
                <Route
                  path='/admin/hr/staffs/:id'
                  exact
                  element={<DetailStaff />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-rolePermission"} />
                }
              >
                <Route path='/admin/role' exact element={<RoleList />} />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-rolePermission"} />
                }
              >
                <Route path='/admin/role/:id' element={<DetailRole />} />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"create-rolePermission"} />
                }
              >
                <Route
                  path='/admin/role/permit/:id/'
                  element={<AddPermission />}
                />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"readAll-department"} />}
              >
                <Route
                  path='/admin/department'
                  exact
                  element={<Department />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-department"} />
                }
              >
                <Route
                  path='/admin/department/:id'
                  element={<DetailDepartment />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-designation"} />
                }
              >
                <Route
                  path='/admin/designation'
                  exact
                  element={<Designation />}
                />
              </Route>

              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-designation"} />
                }
              >
                <Route
                  path='/admin/designation/:id'
                  element={<DetailDesignation />}
                />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"update-designation"} />}
              >
                <Route
                  path='/admin/designation/:id/update'
                  element={<UpdateDesignation />}
                />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"readAll-setting"} />}
              >
                <Route
                  path='/admin/company-setting'
                  exact
                  element={<InvoiceSetting />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-emailConfig"} />
                }
              >
                <Route
                  path='/admin/email-config'
                  exact
                  element={<EmailConfig />}
                />
              </Route>

              {/* === === === Payroll Routes === === === */}
              <Route
                element={<UserPrivateRoute permission={"readAll-payroll"} />}
              >
                <Route
                  path='/admin/payroll/new'
                  element={<CalculatePayroll />}
                />
                <Route path='/admin/payroll/list' element={<PayslipList />} />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"readSingle-payroll"} />}
              >
                <Route path='/admin/payroll/:id' element={<DetailPayslip />} />
              </Route>

              {/* === === === Shift Routes === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-shift"} />}
              >
                <Route path='/admin/shift' element={<Shift />} />
              </Route>

              <Route
                element={<UserPrivateRoute permission={"readSingle-shift"} />}
              >
                <Route path='/admin/shift/:id' element={<DetailShift />} />
              </Route>

              {/* === === === EmploymentStatus Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-employmentStatus"} />
                }
              >
                <Route
                  path='/admin/employment-status'
                  element={<EmploymentStatus />}
                />
              </Route>

              <Route
                element={
                  <UserPrivateRoute
                    permission={"readSingle-employmentStatus"}
                  />
                }
              >
                <Route
                  path='/admin/employment-status/:id'
                  element={<DetailEmploymentStatus />}
                />
              </Route>

              {/* === === === Leave Routes === === === */}

              <Route
                element={
                  <UserPrivateRoute permission={"create-leaveApplication"} />
                }
              >
                <Route path='/admin/leave/new' element={<Leave />} />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-leaveApplication"} />
                }
              >
                <Route path='/admin/leave/:id' element={<DetailLeave />} />
                <Route path='/admin/leave' element={<GetAllLeaves />} />
              </Route>
              <Route
                element={
                  <UserPrivateRoute
                    permission={"readSingle-leaveApplication"}
                  />
                }
              >
                <Route path='/admin/leave/user/:id' element={<UserLeave />} />
              </Route>
              {/* === === === Attendance Routes === === === */}
              <Route
                element={<UserPrivateRoute permission={"readAll-attendance"} />}
              >
                <Route
                  path='/admin/attendance'
                  element={<GetAllAttendance />}
                />
              </Route>

              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-attendance"} />
                }
              >
                <Route
                  path='/admin/attendance/user/:id'
                  element={<UserAttendance />}
                />
              </Route>
              {/*<Route
							path='/admin/attendance/:id'
							element={<DetailAttendance />}
						/> */}

              {/* === === === Accounting Routes === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-account"} />}
              >
                <Route path='/admin/account' exact element={<Account />} />
                <Route path='/admin/account/:id' element={<DetailAccount />} />
                <Route
                  path='/admin/account/trial-balance'
                  exact
                  element={<TrialBalance />}
                />
                <Route
                  path='/admin/account/balance-sheet'
                  exact
                  element={<BalanceSheet />}
                />
                <Route
                  path='/admin/account/income'
                  exact
                  element={<IncomeStatement />}
                />
              </Route>
              {/* === === === Transaction Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-transaction"} />
                }
              >
                <Route
                  path='/admin/transaction'
                  exact
                  element={<Transaction />}
                />
              </Route>

              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-transaction"} />
                }
              >
                <Route
                  path='/admin/transaction/:id'
                  element={<DetailTransaction />}
                />
              </Route>

              {/* === === === Announcement Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-announcement"} />
                }
              >
                <Route
                  path='/admin/announcement'
                  exact
                  element={<Announcement />}
                />
              </Route>

              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-announcement"} />
                }
              >
                <Route
                  path='/admin/announcement/:id'
                  element={<DetailAnnouncement />}
                />
              </Route>

              {/* === === === Award Routes === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-award"} />}
              >
                <Route path='/admin/award/:id' element={<DetailAward />} />
                <Route path='/admin/award' exact element={<GetAllAward />} />
              </Route>

              {/* === === === Leave Policy Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-leavePolicy"} />
                }
              >
                <Route
                  path='/admin/leave-policy'
                  exact
                  element={<LeavePolicy />}
                />
                <Route
                  path='/admin/leave-policy/:id'
                  element={<DetailLeavePolicy />}
                />
              </Route>

              {/* === === === Weekly Holiday Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-weeklyHoliday"} />
                }
              >
                <Route
                  path='/admin/holiday/week'
                  exact
                  element={<WeeklyHoliday />}
                />
                <Route
                  path='/admin/holiday/week/:id'
                  element={<DetailWeeklyHoliday />}
                />
              </Route>
              {/* === === === Public Holiday Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-publicHoliday"} />
                }
              >
                <Route
                  path='/admin/holiday/public'
                  exact
                  element={<PublicHoliday />}
                />
                <Route
                  path='/admin/holiday/public/:id'
                  element={<DetailPublicHoliday />}
                />
              </Route>

              {/* === === === === PROJECT MANAGEMENT STARTED HERE === === === ===*/}

              {/* === === === Kanban Routes === === === */}
              <Route
                element={<UserPrivateRoute permission={"readSingle-project"} />}
              >
                <Route
                  path='/admin/kanban/:projectId'
                  element={<KanbanBoard2 />}
                />
              </Route>
              {/* <Route
							path='/admin/kanban2/:projectId'
							element={<KanbanBoard2 />}
              />
              */}
              {/* === === === Project Routes === === === */}
              <Route
                element={<UserPrivateRoute permission={"readAll-project"} />}
              >
                <Route path='/admin/project' element={<Project />} />
              </Route>

              <Route
                element={<UserPrivateRoute permission={"create-project"} />}
              >
                <Route path='/admin/project/new' element={<AddProject />} />
              </Route>

              <Route
                element={<UserPrivateRoute permission={"update-project"} />}
              >
                <Route
                  path='/admin/project/update/:projectId'
                  element={<UpdateProject />}
                />
              </Route>

              <Route
                path='/admin/project/update/:projectId/status'
                element={<UpdateStatus />}
              />

              {/* === === === Project Milestone === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-project"} />}
              >
                <Route
                  path='/admin/project/:id/milestone'
                  element={<Milestone isFixed={true} />}
                />
              </Route>

              {/* === === === Project Task Status === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-project"} />}
              >
                <Route
                  path='/admin/project/:id/task-status'
                  element={<TaskStatus isFixed={true} />}
                />
              </Route>

              {/* === === === Team Routes === === === */}

              <Route
                element={
                  <UserPrivateRoute permission={"readAll-projectTeam"} />
                }
              >
                <Route path='/admin/team' element={<ProjectTeam />} />
              </Route>

              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-projectTeam"} />
                }
              >
                <Route path='/admin/team/:id' element={<DetailProjectTeam />} />
              </Route>
              {/* <Route path='/admin/team/update/:id' element={<DetailProjectTeam />} /> */}

              {/* === === === Milestone Routes === === === */}

              <Route
                element={<UserPrivateRoute permission={"create-milestone"} />}
              >
                <Route path='/admin/milestone' element={<Milestone />} />
              </Route>

              <Route
                element={<UserPrivateRoute permission={"update-milestone"} />}
              >
                <Route
                  path='/admin/milestone/update/:id'
                  element={<UpdateMilestone />}
                />
              </Route>

              {/* <Route path="/admin/milestone/:id" element={<DetailProject />} /> */}

              <Route element={<UserPrivateRoute permission={"create-task"} />}>
                <Route path='/admin/task' element={<Task />} />
              </Route>

              {/* === === === TaskStatus Routes === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-taskStatus"} />}
              >
                <Route path='/admin/task-status' element={<TaskStatus />} />
              </Route>

              <Route
                element={<UserPrivateRoute permission={"update-taskStatus"} />}
              >
                <Route
                  path='/admin/task-status/update/:id'
                  element={<UpdateTaskStatus />}
                />
              </Route>

              {/* === === === TaskPriority Routes === === === */}

              <Route
                element={<UserPrivateRoute permission={"readAll-priority"} />}
              >
                <Route path='/admin/task-priority' element={<TaskPriority />} />
              </Route>

              <Route
                element={<UserPrivateRoute permission={"update-priority"} />}
              >
                <Route
                  path='/admin/task-priority/update/:id'
                  element={<UpdateTaskPriority />}
                />
              </Route>

              {/* <Route path='/admin/project-team' eclement={<ProjectTeam />} /> */}

              {/* === === === Task Routes === === === */}
              {/* <Route path="/admin/task" element={<Task />} /> */}
              {/* <Route path="/admin/task/:id" element={<DetailTask />} />  */}

              {/* === === === all the recruitment module routes starts=== === === */}
              {/* === === job category routes */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-jobCategory"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobCategory'
                  exact
                  element={<JobCategory />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-jobCategory"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobCategory/:id'
                  exact
                  element={<DetailsJobCategory />}
                />
              </Route>

              {/* === === job Type routes */}
              <Route
                element={<UserPrivateRoute permission={"readAll-jobType"} />}
              >
                <Route
                  path='/admin/recruitment/jobType'
                  exact
                  element={<JobType />}
                />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"readSingle-jobType"} />}
              >
                <Route
                  path='/admin/recruitment/jobType/:id'
                  exact
                  element={<DetailsJobType />}
                />
              </Route>

              {/* === === job Location routes */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-jobLocation"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobLocation'
                  exact
                  element={<JobLocation />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-jobLocation"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobLocation/:id'
                  exact
                  element={<DetailsJobLocation />}
                />
              </Route>

              {/* === === job skills routes */}
              <Route
                element={<UserPrivateRoute permission={"readAll-jobSkills"} />}
              >
                <Route
                  path='/admin/recruitment/jobSkills'
                  exact
                  element={<JobSkills />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-jobSkills"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobSkills/:id'
                  exact
                  element={<DetailsJobSkills />}
                />
              </Route>

              {/* === === job Work Experience routes */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-jobWorkExperience"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobWorkExperience'
                  exact
                  element={<JobWorkExperience />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute
                    permission={"readSingle-jobWorkExperience"}
                  />
                }
              >
                <Route
                  path='/admin/recruitment/jobWorkExperience/:id'
                  exact
                  element={<DetailsJobWorkExperience />}
                />
              </Route>

              {/* === === job routes */}
              <Route element={<UserPrivateRoute permission={"readAll-job"} />}>
                <Route path='/admin/recruitment/job' exact element={<Job />} />
              </Route>
              <Route
                element={<UserPrivateRoute permission={"readSingle-job"} />}
              >
                <Route
                  path='/admin/recruitment/job/:id'
                  exact
                  element={<DetailsJob />}
                />
              </Route>
              <Route element={<UserPrivateRoute permission={"update-job"} />}>
                <Route
                  path='/admin/recruitment/job/update/:id'
                  exact
                  element={<JobEditPopup />}
                />
              </Route>

              {/* === === job application routes */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-jobApplication"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobApplication'
                  exact
                  element={<JobApplication />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-jobApplication"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobApplication/:id'
                  exact
                  element={<DetailsJobApplication />}
                />
              </Route>

              {/* === === job Interview routes */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-jobInterview"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobInterview'
                  exact
                  element={<JobInterview />}
                />
              </Route>
              <Route
                element={
                  <UserPrivateRoute permission={"readSingle-jobInterview"} />
                }
              >
                <Route
                  path='/admin/recruitment/jobInterview/:id'
                  exact
                  element={<DetailsJobInterview />}
                />
              </Route>

              {/* === === === Job Kanban Routes === === === */}
              <Route
                element={
                  <UserPrivateRoute permission={"readAll-jobApplication"} />
                }
              >
                <Route
                  path='/admin/jobKanbanBoard'
                  element={<JobKanbanBoard />}
                />
              </Route>

              {/* === === === all the recruitment module routes ends=== === === */}
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Main>
        </>
      </BrowserRouter>
    </div>
    </I18nextProvider>
  );
}

export default App;
