/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Col, Row, Typography } from "antd";
import ReactApexChart from "react-apexcharts";
import eChart from "./configs/eChart";
import { useTranslation } from "react-i18next"; 

function EChart() {
  const { Title, Paragraph } = Typography;
  const { t } = useTranslation();

  const items = [
    {
      Title: "3,6K",
      user: t("chart.users"),
    },
    {
      Title: "2m",
      user: t("chart.clicks"),
    },
    {
      Title: "$772",
      user: t("chart.sales"),
    },
    {
      Title: "82",
      user: t("chart.items"),
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>{t("chart.active_users")}</Title>
        <Paragraph className="lastweek">
        {t("chart.than_last_week")} <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
          {t("chart.last_week")}
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
