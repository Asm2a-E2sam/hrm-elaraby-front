import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGetMilestoneByProjectIdQuery } from "../../../../redux/rtk/features/projectManagement/project/milestone/milestoneApi";
import { useAddProjectTaskMutation } from "../../../../redux/rtk/features/projectManagement/project/projectTask/projectTaskApi";
import { useGetProjectTeamByProjectIdQuery } from "../../../../redux/rtk/features/projectManagement/project/projectTeam/projectTeamApi";
import { useGetTaskPrioritiesQuery } from "../../../../redux/rtk/features/projectManagement/project/taskPriority/taskPriorityApi";
import BigDrawer from "../../../Drawer/BigDrawer";
import AddMilestone from "../../../project/milestone/AddMilestone";
import AddTaskPriority from "../../../project/taskPriority/AddtaskPriority";
import AddProjectTeam from "../../../project/team/AddProjectTeam";
import { useTranslation } from "react-i18next"; 

const TaskAddSinglePopup = ({ projectId, taskStatusId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [startDate, setstartDate] = useState(null);
  const { t } = useTranslation();
  const [endDate, setendDate] = useState(null);
  const { data: taskPriority, isLoading: taskPriorityLoading } =
    useGetTaskPrioritiesQuery();
  const { data: projectTeamList, isLoading: projectTeamLoading } =
    useGetProjectTeamByProjectIdQuery(projectId);
  const { data: milestoneList, isLoading: milestoneLoading } =
    useGetMilestoneByProjectIdQuery(projectId);
  const [teamUserList, setTeamUserList] = useState([]);
  const [addSingleProjectTasks, { isLoading }] = useAddProjectTaskMutation();

  const onFinish = async (values) => {
    const infoData = {
      ...values,
      taskStatusId: parseInt(taskStatusId),
      projectId: parseInt(projectId),
      completionTime: parseFloat(values.completionTime),
      startDate: dayjs(startDate).format("YYYY-MM-DD"),
      endDate: dayjs(endDate).format("YYYY-MM-DD"),
    };

    const resp = await addSingleProjectTasks(infoData);

    if (resp.data && !resp.error) {
      setIsModalOpen(false);
      form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast.warning(t("pop_up.failed_adding_task"));
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setstartDate(dayjs());
    setendDate(dayjs());
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div>
      <div className='text-center'>
        <button
          className='flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100'
          type='primary'
          onClick={showModal}
        >
          <svg
            className='w-10 h-10'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            ></path>
          </svg>
        </button>
      </div>
      <Modal
        width={`50%`}
        title={`Add Task`}
        okButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          style={{ marginBottom: "20px" }}
          eventKey='department-form'
          name='basic'
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <div>
            <div className='flex justify-center'>
              {/* <Form.Item
								style={{ marginBottom: "10px" }}
								tooltip='Select Project'
								name='projectId'
								rules={[
									{
										required: true,
										message: "Please input your projectId!",
									},
								]}>
								<Select
									className='mr-2'
									placeholder='Select Project'
									mode='single'
									style={{ width: "150px" }}>
									{projectList.map((item) => (
										<Select.Option key={item.id} value={item.id}>
											{item.name}
										</Select.Option>
									))}
								</Select>
							</Form.Item> */}

              <div className='flex justify-around ml-5 mr-10'>
                <span className='font-semibold mr-2 mt-1'>{t("pop_up.milestone")} :</span>
                <Form.Item
                  style={{ marginBottom: "10px" }}
                  name='milestoneId'
                  rules={[
                    {
                      required: true,
                      message: t("pop_up.please_input_your_milestone"),
                    },
                  ]}
                >
                  <Select
                    className='mr-2'
                    loading={milestoneLoading}
                    placeholder={t("pop_up.select_milestone")}
                    mode='single'
                    style={{ width: "160px" }}
                  >
                    {milestoneList?.map((item) => (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <BigDrawer title={"Milestone"}>
                  <AddMilestone isFixed={true} projectId={projectId} />
                </BigDrawer>
              </div>
              <div className='flex justify-start'>
                <span className='font-semibold mr-2 mt-1'>{t("pop_up.priority")} :</span>
                <Form.Item
                  style={{ marginBottom: "10px" }}
                  name='priorityId'
                  tooltip='Select Priority'
                  rules={[
                    {
                      required: true,
                      message: t("pop_up.please_input_your_priority"),
                    },
                  ]}
                >
                  <Select
                    className='mr-2'
                    placeholder={t("pop_up.select_priority")}
                    loading={taskPriorityLoading}
                    mode='single'
                    style={{ width: "160px" }}
                  >
                    {taskPriority?.map((item) => (
                      <Select.Option key={item.id} value={item.id}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <BigDrawer title={"Task Priority"}>
                  <AddTaskPriority />
                </BigDrawer>
              </div>

              {/* <Form.Item
								style={{ marginBottom: "10px" }}
								name='taskStatusId'
								tooltip='Select Task Status'
								rules={[
									{
										required: true,
										message: "Please input your taskStatus!",
									},
								]}>
								<Select
									className='mr-2'
									placeholder='Select Task Status'
									mode='single'
									style={{ width: "150px" }}>
									{taskStatus?.map((item) => (
										<Select.Option key={item.id} value={item.id}>
											{item.name}
										</Select.Option>
									))}
								</Select>
							</Form.Item> */}
            </div>

            <Form.Item
              style={{ marginBottom: "10px" }}
              label={t("pop_up.team_select")}
              name='teamSelect'
              rules={[
                teamUserList?.length === 0 && {
                  required: true,
                  message: t("pop_up.please_select_team"),
                },
              ]}
            >
              <div className='flex'>
                <Select
                  className='mr-2'
                  placeholder={t("pop_up.select_team")}
                  loading={projectTeamLoading}
                  onChange={(value) => {
                    // eslint-disable-next-line array-callback-return
                    projectTeamList?.map((item) => {
                      if (item.id === value) {
                        // make object for setTeamUserList
                        const projectTeamMember = item.projectTeamMember.map(
                          (item) => {
                            return {
                              userId: item.userId,
                              user: item.user,
                            };
                          }
                        );
                        setTeamUserList(projectTeamMember);
                      }
                    });
                  }}
                  mode='single'
                >
                  {projectTeamList?.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.projectTeamName}
                    </Select.Option>
                  ))}
                </Select>
                <BigDrawer projectId={projectId} title={"Team"}>
                  <AddProjectTeam projectId={projectId} />
                </BigDrawer>
              </div>
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "10px" }}
              label={t("pop_up.team_member_select")}
              rules={[
                {
                  required: true,
                  message: t("pop_up.please_select_team_member"),
                },
              ]}
              name='assignedTask'
            >
              <Select
                className='mr-2'
                placeholder={t("pop_up.select_member")}
                loading={teamUserList?.length === 0}
                mode='multiple'
                optionFilterProp='children'
              >
                {teamUserList?.map((item) => (
                  <Select.Option key={item.userId} value={item.userId}>
                    {item.user.firstName + " " + item.user.lastName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "10px" }}
              label={t("pop_up.task_name")}
              rules={[
                {
                  required: true,
                  message: t("pop_up.please_input_task_name"),
                },
              ]}
              name='name'
            >
              <Input placeholder={t("pop_up.task_name")} />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "10px" }}
              label={t("pop_up.start_date")}
              name='startDate'
              valuePropName='startDate'
              rules={[
                {
                  required: true,
                  message: t("pop_up.please_input_start_date"),
                },
              ]}
            >
              <DatePicker onChange={(date) => setstartDate(date)} />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "10px" }}
              label={t("pop_up.end_date")}
              rules={[
                {
                  required: true,
                  message: t("pop_up.please_input_end_date"),
                },
              ]}
              name='endDate'
              valuePropName='endDate'
            >
              <DatePicker onChange={(date) => setendDate(date)} />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "10px" }}
              label={t("pop_up.description")}
              name='description'
              rules={[
                {
                  required: true,
                  message: t("pop_up.please_input_description"),
                },
              ]}
            >
              <Input.TextArea placeholder={t("pop_up.description")} />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "20px" }}
              label={t("pop_up.completion_time")}
              name='completionTime'
              required
              rules={[
                {
                  required: true,
                  message: t("pop_up.please_input_completion_time"),
                },
              ]}
            >
              <Input placeholder={`20.00 ${t("pop_up.in_hours")}`} />
            </Form.Item>

            <Form.Item
              style={{ marginBottom: "20px" }}
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button
                block
                type='primary'
                size='middle'
                htmlType='submit'
                loading={isLoading}
              >
                {t("pop_up.add_now")}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default TaskAddSinglePopup;
