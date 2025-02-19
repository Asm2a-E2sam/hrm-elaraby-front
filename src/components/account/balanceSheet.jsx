import { Card } from "antd";
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { useGetBalanceSheetQuery } from "../../redux/rtk/features/account/accountApi";
import UserPrivateComponent from "../PrivateRoutes/UserPrivateComponent";
import Loader from "../loader/loader";
import PageTitle from "../page-header/PageHeader";

const BalanceSheet = () => {
  const { data, isLoading } = useGetBalanceSheetQuery();
  const { t } = useTranslation(); // Use the hook
  
  if (isLoading) return <Loader />;

  return (
    <>
      <PageTitle title={t("balance_sheet.back")} />
      <br />
      <UserPrivateComponent permission={"readSingle-account"}>
        <Card>
          <div>
            <div className='card-title  flex  justify-between'>
              <h5 className='text-xl mb-3'>
                <span className='ml-2 report-section-card-title'>
                  {t("balance_sheet.title")}
                </span>
              </h5>
            </div>
            <div className='w-full shadow bg-white rounded'>
              <div className='border-gray-200 w-full rounded bg-white overflow-x-auto'>
                <table className=' w-full max-w-full mb-4 bg-transparent report-section-table'>
                  <h5 className='mt-2 mb-1 ml-2  font-semibold text-base'>
                    {t("balance_sheet.assets")}
                  </h5>
                  <thead className='text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 hover:cursor-pointer uppercase border-b-2 border-gray-200'>
                    <tr className='border-b border-gray'>
                      <th
                        scope='col'
                        className='text-white border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-900 text-left text-xs font-semibold uppercase tracking-wider'
                      >
                        {t("balance_sheet.account")}
                      </th>
                      <th
                        scope='col'
                        className='text-white border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-900 text-left text-xs font-semibold uppercase tracking-wider'
                      >
                        {t("balance_sheet.amount")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data?.assets.map((item, index) => {
                        return (
                          <tr key={index} className='hover:bg-gray-100 hover:cursor-pointer'>
                            <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                              {item.subAccount}
                            </td>
                            <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                              {item.balance}
                            </td>
                          </tr>
                        );
                      })}

                    <tr className='hover:bg-gray-100 hover:cursor-pointer'>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        {" "}
                        <strong>{t("balance_sheet.total")}</strong>
                      </td>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        <strong>{data?.totalAsset}</strong>
                      </td>
                    </tr>

                    <h5 className='mt-2 mb-1 ml-2  font-semibold text-base'>
                      {t("balance_sheet.liabilities")}
                    </h5>

                    {data &&
                      data?.liabilities.map((item, index) => {
                        return (
                          <tr key={index} className='hover:bg-gray-100 hover:cursor-pointer'>
                            <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                              {item.subAccount}
                            </td>
                            <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                              {item.balance}
                            </td>
                          </tr>
                        );
                      })}

                    <tr className='hover:bg-gray-100 hover:cursor-pointer'>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        <strong>{t("balance_sheet.total")}</strong>
                      </td>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        <strong>{data?.totalLiability}</strong>
                      </td>
                    </tr>

                    <h5 className='mt-2 mb-1 ml-2  font-semibold text-base'>
                      {t("balance_sheet.equity")}
                    </h5>

                    {data &&
                      data?.equity.map((item, index) => {
                        return (
                          <tr key={index} className='hover:bg-gray-100 hover:cursor-pointer'>
                            <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                              {item.subAccount}
                            </td>
                            <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                              {item.balance}
                            </td>
                          </tr>
                        );
                      })}

                    <tr className='hover:bg-gray-100 hover:cursor-pointer'>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        {" "}
                        <strong>{t("balance_sheet.total")}</strong>
                      </td>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        <strong>{data?.totalEquity}</strong>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 hover:cursor-pointer'>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        {" "}
                        <strong>{t("balance_sheet.total_liability_equity")}</strong>
                      </td>
                      <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm'>
                        <strong>
                          {data?.totalEquity + data?.totalLiability}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </UserPrivateComponent>
    </>
  );
};

export default BalanceSheet;
