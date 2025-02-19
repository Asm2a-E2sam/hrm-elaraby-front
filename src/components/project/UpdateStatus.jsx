import { Button, Col, Form, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
} from "../../redux/rtk/features/projectManagement/project/project/projectApi";
import { toastHandler } from "../../utils/functions";
import Loader from "../loader/loader";
import PageTitle from "../page-header/PageHeader";
import { useTranslation } from "react-i18next"; 

const UpdateStatus = () => {
  const { t } = useTranslation();
  const projectId = useParams("id").projectId;
  const [initialValues, setInitialValues] = useState(null);
  const { data: project } = useGetProjectQuery(projectId);
  const [updateProject, { isLoading }] = useUpdateProjectMutation();

  useEffect(() => {
    if (project) {
      setInitialValues(project);
    }
  }, [project]);

  const { Title } = Typography;
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const resp = await updateProject({ id: projectId, values: values });

    if (resp) {
      form.resetFields();
      navigate(-1);
    }
  };

  const onFinishFailed = (errorInfo) => {
    toastHandler(t("project.warning_status"), "warning");
  };
  return (
    <>
      {/* <UserPrivateComponent permission={"create-leaveApplication"}> */}
      <PageTitle title={t("project.back")} />
      <Row className="mt-[25px]">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={18}
          xl={16}
          className="column-design border rounded card-custom"
        >
          <Title level={4} className="m-2 mt-5 mb-5 text-center">
          {t("project.update_status")}
          </Title>
          {initialValues ? (
            <Form
              form={form}
              style={{ marginBottom: "40px" }}
              eventKey="shift-form"
              name="basic"
              initialValues={initialValues}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 12,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div>
                <Form.Item
                  style={{ marginBottom: "20px" }}
                  label={t("project.status")}
                  name="status"
                  rules={[
                    {
                      required: true,
                      message: t("project.select_status"),
                    },
                  ]}
                >
                  <Select placeholder={t("project.select_status")}>
                    <Select.Option value="PROGRESS">{t("project.progress")}</Select.Option>
                    <Select.Option value="COMPLETE">{t("project.complete")}</Select.Option>
                    <Select.Option value="ONHOLD">{t("project.on_hold")}</Select.Option>
                    <Select.Option value="DELETED">{t("project.deleted")}</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  style={{ marginBottom: "10px" }}
                  wrapperCol={{
                    offset: 8,
                    span: 12,
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    block
                    loading={isLoading}
                  >
                    {t("project.update_now")}
                  </Button>
                </Form.Item>
              </div>
            </Form>
          ) : (
            <Loader />
          )}
        </Col>
      </Row>
      {/* </UserPrivateComponent> */}
    </>
  );
};

export default UpdateStatus;
