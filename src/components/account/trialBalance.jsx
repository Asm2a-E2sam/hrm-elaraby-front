import { Card } from "antd";
import React from "react";
import PageTitle from "../page-header/PageHeader";

import { useGetTrailBalanceQuery } from "../../redux/rtk/features/account/accountApi";
import UserPrivateComponent from "../PrivateRoutes/UserPrivateComponent";
import Loader from "../loader/loader";
import { useTranslation } from "react-i18next"; 

const TrialBalance = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetTrailBalanceQuery();
  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle title={t("account.back")} />
      <br />
      <UserPrivateComponent permission={"readSingle-account"}>
        <Card>
          <div>
            <div className='card-title  flex  justify-between'>
              <h5 className='text-xl mb-3'>
                <span className=' ml-2 report-section-card-title'>
                {t("account.trail_balance")}
                </span>
              </h5>
            </div>
            <div className='border-gray-200 w-full rounded bg-white overflow-x-auto'>
              <table className=' w-full max-w-full mb-4 bg-transparent report-section-table '>
                <thead className='text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 hover:cursor-pointer uppercase border-b-2 border-gray-200'>
                  <tr className='border-b border-gray'>
                    <th
                      scope='col'
                      className='text-white border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-900 text-left text-xs font-semibold uppercase tracking-wider'
                    >
                      {t("account.account")}
                    </th>
                    <th
                      scope='col'
                      className='text-white border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-900 text-left text-xs font-semibold uppercase tracking-wider'
                    >
                      {t("account.debit")}
                    </th>
                    <th
                      scope='col'
                      className='text-white border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-900 text-left text-xs font-semibold uppercase tracking-wider'
                    >
                      {t("account.credit")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data?.debits?.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className='hover:bg-gray-100 hover:cursor-pointer'
                        >
                          <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                            {item.subAccount}
                          </td>
                          <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                            {item.balance}
                          </td>
                          <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'></td>
                        </tr>
                      );
                    })}
                  {data &&
                    data?.credits?.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className='hover:bg-gray-100 hover:cursor-pointer'
                        >
                          <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                            {item.subAccount}
                          </td>
                          <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'></td>
                          <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                            {item.balance}
                          </td>
                        </tr>
                      );
                    })}

                  <tr className='hover:bg-gray-100 hover:cursor-pointer  font-semibold'>
                    <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                    {t("account.total")}
                    </td>
                    <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                      {data?.totalDebit}
                    </td>
                    <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                      {data?.totalCredit}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </UserPrivateComponent>
    </>
  );
};

export default TrialBalance;
