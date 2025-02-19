import { Button, Card, DatePicker, Input, InputNumber, Table } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useAddPayrollMutation,
  useGetPayslipsQuery,
} from "../../redux/rtk/features/payroll/payrollApi";
import { updatePayslip } from "../../redux/rtk/features/payroll/payrollSlice";
import UserPrivateComponent from "../PrivateRoutes/UserPrivateComponent";
import ColVisibilityDropdown from "../Shared/ColVisibilityDropdown";
import PageTitle from "../page-header/PageHeader";
import { useTranslation } from "react-i18next"; 

function CustomTable({ list, loading }) {
  const [columnsToShow, setColumnsToShow] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const columns = [
    {
      title: t("payroll.id"),
      dataIndex: "id",
      key: "id",
    },
    {
      title: t("payroll.name"),
      key: "name",
      render: (record) => `${record.firstName} ${record.lastName}`,
    },

    {
      title: t("payroll.salary"),
      dataIndex: "salary",
      key: "salary",
    },

    {
      title: t("payroll.salary_payable"),
      dataIndex: "salaryPayable",
      key: "salaryPayable",
      render: (salaryPayable, { id }) => {
        return (
          <div>
            <InputNumber
              size={"small"}
              style={{ width: "150px", fontSize: "15px" }}
              onChange={(value) => {
                dispatch(updatePayslip({ id, value, key: "salaryPayable" }));
              }}
              value={salaryPayable}
              min={0}
              // defaultValue={salaryPayable}
            />{" "}
          </div>
        );
      },
    },

    {
      title: t("payroll.bonus"),
      dataIndex: "bonus",
      key: "bonus",
      render: (bonus, { id }) => {
        return (
          <div>
            <InputNumber
              size={"small"}
              style={{ width: "100px", fontSize: "15px" }}
              onChange={(value) => {
                dispatch(updatePayslip({ id, value, key: "bonus" }));
              }}
              value={bonus}
              min={0}
              // defaultValue={bonus}
            />{" "}
          </div>
        );
      },
    },

    {
      title: t("payroll.b_comment"),
      dataIndex: "bonusComment",
      key: "bonusComment",
      render: (bonusComment, { id }) => {
        return (
          <div>
            <Input
              placeholder='comment'
              size={"small"}
              style={{ width: "100px", fontSize: "15px" }}
              onChange={(e) => {
                dispatch(
                  updatePayslip({
                    id,
                    value: e.target.value,
                    key: "bonusComment",
                  })
                );
              }}
              value={bonusComment}

              // defaultValue={deductionComment}
            />{" "}
          </div>
        );
      },
    },

    {
      title: t("payroll.deduction"),
      dataIndex: "deduction",
      key: "deduction",
      render: (deduction, { id }) => {
        return (
          <div>
            <InputNumber
              size={"small"}
              style={{ width: "100px", fontSize: "15px" }}
              onChange={(value) => {
                dispatch(updatePayslip({ id, value, key: "deduction" }));
              }}
              value={deduction}
              min={0}
              // defaultValue={deduction}
            />{" "}
          </div>
        );
      },
    },

    {
      title: t("payroll.b_comment"),
      dataIndex: "deductionComment",
      key: "deductionComment",
      render: (deductionComment, { id }) => {
        return (
          <div>
            <Input
              placeholder='comment'
              size={"small"}
              style={{ width: "100px", fontSize: "15px" }}
              onChange={(e) => {
                dispatch(
                  updatePayslip({
                    id,
                    value: e.target.value,
                    key: "deductionComment",
                  })
                );
              }}
              value={deductionComment}

              // defaultValue={deductionComment}
            />{" "}
          </div>
        );
      },
    },

    {
      title: t("payroll.working_hours"),
      dataIndex: "workingHour",
      key: "workingHour",
      render: (workingHour) => `${workingHour?.toFixed(2)} hours`,
    },

    {
      title:  t("payroll.total_payable"),
      dataIndex: "totalPayable",
      key: "totalPayable",
    },
  ];

  useEffect(() => {
    setColumnsToShow(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columnsToShowHandler = (val) => {
    setColumnsToShow(val);
  };

  const addKeys = (arr) => arr.map((i) => ({ ...i, key: i.id }));

  return (

    <div className='mt-5'>
      <div className='text-center items-center gap-5 my-2 flex'>

        {list && (
          <div>
            <ColVisibilityDropdown
              options={columns}
              columns={columns}
              columnsToShowHandler={columnsToShowHandler}
            />
          </div>
        )}

        {list && (
          <div>
            <div className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded mr-2">
              <CSVLink
                data={list}
                className="btn btn-dark btn-sm mb-1"
                filename="payslips"
              >
                {t("payroll.download_csv")}
              </CSVLink>
            </div>
          </div>
        )}
      </div>

      <Table
        scroll={{ x: true }}
        loading={loading}
        columns={columnsToShow}
        dataSource={list ? addKeys(list) : []}
        expandable={{
          expandedRowRender: (record) => (
            <div className="flex justify-start">
              <div className="flex flex-col mr-10">
                <div className="flex justify-between">
                  <div className="font-bold"> {t("payroll.paid_leave")} : </div>
                  <div>{record.paidLeave}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-bold"> {t("payroll.unpaid_leave")} : </div>
                  <div className="ml-2">{record.unpaidLeave}</div>
                </div>
              </div>
              <div className="flex flex-col mr-10">
                <div className="flex justify-between ">
                  <div className="font-bold"> {t("payroll.m_holiday")} : </div>
                  <div>{record.monthlyHoliday}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-bold"> {t("payroll.p_holiday")} : </div>
                  <div>{record.publicHoliday}</div>
                </div>
              </div>

              <div className="flex flex-col mr-10">
                <div className="flex justify-between">
                  <div className="font-bold"> {t("payroll.work_day")} : </div>
                  <div className="ml-2">{record.workDay}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-bold">  {t("payroll.shift_W_H")} : </div>
                  <div>{record.shiftWiseWorkHour}</div>
                </div>
              </div>
              <div className="flex flex-col mr-10">
                <div className="flex justify-between">
                  <div className="font-bold"> {t("payroll.month_W_H")} : </div>
                  <div className="ml-2">{record.monthlyWorkHour}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-bold"> {t("payroll.h_Salary")} : </div>
                  <div className="ml-2">{record.hourlySalary}</div>
                </div>
              </div>
            </div>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
      />
    </div>
  );
}

const CalculatePayroll = () => {
  const [pageConfig, setPageConfig] = useState({
    month: dayjs().format("M"),
    year: dayjs().format("YYYY"),
  });
  const { isLoading } = useGetPayslipsQuery(pageConfig);
  const [addPayslip, { isLoading: addLoading }] = useAddPayrollMutation();
  const { t } = useTranslation();

  const onMonthChange = (date, dateString) => {
    setPageConfig((prev) => {
      return { ...prev, month: dateString };
    });
  };

  const onYearChange = (date, dateString) => {
    setPageConfig((prev) => {
      return { ...prev, year: dateString };
    });
  };

  const [payslips, setPayslips] = useState([]);
  const list = useSelector((state) => state.payroll.list);
  useEffect(() => {
    setPayslips(list);
  }, [list]);

  const navigate = useNavigate();

  const OnSubmit = async () => {
    const dataArray = payslips.map((i) => ({
      userId: i.id,
      salaryMonth: parseInt(pageConfig?.salaryMonth || dayjs().format("M")),
      salaryYear: parseInt(pageConfig?.salaryYear || dayjs().format("YYYY")),
      salary: i.salary,
      paidLeave: i.paidLeave,
      unpaidLeave: i.unpaidLeave,
      monthlyHoliday: i.monthlyHoliday,
      publicHoliday: i.publicHoliday,
      workDay: i.workDay,
      shiftWiseWorkHour: i.shiftWiseWorkHour,
      monthlyWorkHour: i.monthlyWorkHour,
      hourlySalary: i.hourlySalary,
      bonus: i.bonus,
      bonusComment: i.bonusComment,
      deduction: i.deduction,
      deductionComment: i.deductionComment,
      totalPayable: i.totalPayable,
      workingHour: i.workingHour,
      salaryPayable: i.salaryPayable,
    }));

    try {
      const resp = await addPayslip(dataArray);
      if (resp) {
        navigate("/admin/payroll/list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PageTitle title= {t("payroll.back")} />
      <UserPrivateComponent permission={"readAll-payroll"}>
        <Card className='mt-5'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg'> {t("payroll.calculate_payroll")}</h1>
            <div className='flex gap-3'>
              <h1 className='text-base text-color-2 items-center'>
                {" "}
                {t("payroll.select_month")} :{" "}
              </h1>
              <DatePicker
                format={"M"}
                style={{ maxWidth: "200px" }}
                picker='month'
                defaultValue={dayjs()}
                onChange={onMonthChange}
              />
              <h1 className='text-base text-color-2 items-center'>
                {" "}
                {t("payroll.select_year")} :{" "}
              </h1>
              <DatePicker
                format={"YYYY"}
                picker='year'
                style={{ maxWidth: "200px" }}
                onChange={onYearChange}
                defaultValue={dayjs()}
              />
            </div>
          </div>

          <CustomTable list={payslips} loading={isLoading} />

          <div className='flex justify-end'>
            <Button
              loading={isLoading || addLoading}
              type='primary'
              size='large'
              htmlType='submit'
              onClick={OnSubmit}
              className='mt-5 text-end'
            >
              {t("payroll.generate_payslip")}
            </Button>
          </div>
        </Card>
      </UserPrivateComponent>
    </div>
  );
};

export default CalculatePayroll;
