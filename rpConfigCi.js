const config = {
  // required fields
  apiKey: 'testing_nG3vZILYSa6PfzsWQ1QHKEhoXEsjyF7j6Q7h4o6dw5f8BampCkR4id-iiDtNJfaa',
  endpoint: 'https://reportportal.usxpress.io/api/v1',
  project: 'superadmin_personal',
  launch: 'orders',
  // optional fields
  attributes: [
    {
      key: 'agent',
      value: 'playwright',
    },
    {
      value: 'demo',
    },
  ],
  description: 'This is an example launch with playwright tests',
  restClientConfig: {
    timeout: 30000,
  },
  includeTestSteps: true,
  skippedIssue: false,
};

module.exports = { config };
