export const REPORT_PORTAL_CONFIG = {
  token: 'your-api-token',
  endpoint: 'http://your-reportportal:8080/api/v1',
  project: 'todo_mvc',
  launch: 'Playwright test local',
  attributes: [
    {
      key: 'key',
      value: 'value',
    },
  ],
  description: 'Testing integration between playwright and report portal',
};
