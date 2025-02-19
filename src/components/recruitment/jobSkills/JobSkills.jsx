import React, { useState } from "react";
import { useGetJobSkillsQuery } from "../../../redux/rtk/features/recruitment/jobSkills/jobSkillsApi";
import ViewBtn from "../../Buttons/ViewBtn";
import CardCustom from "../../CommonUi/CardCustom";
import CommonSearch from "../../CommonUi/CommonSearch";
import CreateDrawer from "../../CommonUi/CreateDrawer";
import JobCategorySelection from "../../CommonUi/JobCategorySelection";
import StatusSelectionDropdown from "../../CommonUi/StatusSelectionDropdown";
import TablePagination from "../../CommonUi/TablePagination";
import PageTitle from "../../page-header/PageHeader";
import AddJobSkills from "./AddJobSkills";
import { useTranslation } from "react-i18next"; 

const JobSkills = () => {
    const { t } = useTranslation();
    const [pagConfig, setPageConfig] = useState({
        status: "true",
        page: 1,
        count: 10,
    });
    const { data, isLoading } = useGetJobSkillsQuery(pagConfig);
    const columns = [
        {
            key: "id",
            title: t("recruitment.id"),
            dataIndex: "id",
        },
        {
            key: "jobCategory",
            title: t("recruitment.job_category"),
            dataIndex: "jobCategory",
            render: (jobCategory) => jobCategory?.jobCategoryName,
        },
        {
            key: "jobSkillName",
            title: t("recruitment.skill"),
            dataIndex: "jobSkillName",
        },
        {
            key: "action",
            title: t("recruitment.action"),
            dataIndex: "id",
            render: (id) => (
                <ViewBtn path={`/admin/recruitment/jobSkills/${id}`} />
            ),
        },
    ];
    return (
        <>
            <PageTitle title={t("recruitment.back")} />

            <CardCustom
                title={t("recruitment.job_skills")}
                extra={
                    <>
                        <StatusSelectionDropdown
                            setPageConfig={setPageConfig}
                        />

                        <JobCategorySelection setPageConfig={setPageConfig} />

                        <CreateDrawer
                            permission={"create-jobSkills"}
                            title={t("recruitment.job_skill")}
                            width={35}
                        >
                            <AddJobSkills />
                        </CreateDrawer>
                    </>
                }
            >
                <CommonSearch setPageConfig={setPageConfig} />

                <TablePagination
                    columns={columns}
                    list={data?.getAllJobSkills}
                    total={data?.totalJobSkills}
                    setPageConfig={setPageConfig}
                    loading={isLoading}
                    csvFileName={"Job jobSkills"}
                    permission={"readAll-jobSkills"}
                />
            </CardCustom>
        </>
    );
};

export default JobSkills;
