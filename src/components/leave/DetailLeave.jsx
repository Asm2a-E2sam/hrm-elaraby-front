import { Card } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useGetLeaveQuery } from "../../redux/rtk/features/leave/leaveApi";
import UserPrivateComponent from "../PrivateRoutes/UserPrivateComponent";
import ReviewLeavePopup from "../UI/PopUp/ReviewLeavePopup";
import Loader from "../loader/loader";
import PageTitle from "../page-header/PageHeader";
import { useTranslation } from "react-i18next"; 

const DetailLeave = () => {
	const { id } = useParams("id");
	const { data: leave } = useGetLeaveQuery(id);
  const { t } = useTranslation();

	return (
    <div>
      <PageTitle title={t("leave.back")} />
      <UserPrivateComponent permission={"readSingle-leaveApplication"}>
        <Card className="mt-4">
          <div className="text-center mb-4">
            {" "}
            <h2 className="text-2xl font-semibold text-gray-600">
            {t("leave.leave_application")} #{leave?.id}{" "}
            </h2>
          </div>
          {leave ? (
            <div className="flex justify-center ">
              <ul className="list-inside list-none border-2 border-inherit rounded px-5 py-5 ">
                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.name")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {(
                      leave?.user.firstName +
                      " " +
                      leave?.user.lastName
                    ).toUpperCase()}{" "}
                  </p>
                </li>
                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_type")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.leaveType}
                  </p>
                </li>
                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_from")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {dayjs(leave.leaveFrom).format("DD-MM-YYYY")}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_to")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {dayjs(leave.leaveTo).format("DD-MM-YYYY")}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_duration")} :{" "}
                  <p className="ml-2 text-sm text-red-500">
                    {leave.leaveDuration}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_reason")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.reason || "No reason"}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_status")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.status === "pending" ? (
                      <span className="text-yellow-500">
                        {leave.status.toUpperCase()}
                      </span>
                    ) : leave.status === "accepted" ? (
                      <span className="text-green-500">
                        {leave.status.toUpperCase()}
                      </span>
                    ) : (
                      <span className="text-red-500">
                        {leave.status.toUpperCase()}
                      </span>
                    )}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_accepted_from")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.acceptLeaveFrom
                      ? dayjs(leave.acceptLeaveFrom).format("DD-MM-YYYY")
                      : "ON REVIEW"}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_accepted_to")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.acceptLeaveTo
                      ? dayjs(leave.acceptLeaveTo).format("DD-MM-YYYY")
                      : "ON REVIEW"}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.leave_accepted_by")} :{" "}
                  <p className="ml-2 text-sm text-green-500">
                    {(leave.acceptLeaveBy?.firstName || "ON") +
                      " " +
                      (leave.acceptLeaveBy?.lastName || "REVIEW")}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.review_comment")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.reviewComment || "No comment"}
                  </p>
                </li>

                <li className="text-sm text-gray-600 font-semibold py-2 px-4 bg-gray-100 mb-1.5 rounded w-96 flex justify-start">
                {t("leave.attachment")} :{" "}
                  <p className="ml-2 text-sm text-gray-900">
                    {leave.attachment ? (
                      <a
                        href={leave.attachment}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500"
                      >
                        {t("leave.download")}
                      </a>
                    ) : (
                      "No Attachment"
                    )}
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <Loader />
          )}
          <UserPrivateComponent permission={"update-leaveApplication"}>
            {leave?.status === "PENDING" && (
              <div className="flex justify-center items-center">
                <ReviewLeavePopup data={leave} />
              </div>
            )}
            {leave?.status === "REJECTED" && (
              <div className="flex justify-center items-center">
                <ReviewLeavePopup data={leave} />
              </div>
            )}
          </UserPrivateComponent>
        </Card>
      </UserPrivateComponent>
    </div>
  );

	// "reviewComment": null,
	// "attachment": null,
};


export default DetailLeave;
