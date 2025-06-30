const config = {
  // required fields
  apiKey: 'DX-Test_rGPk9D3wT9Ky2r4c_Yn7PulzV2UR-5C25aQ1byvuWtAByT3x3XnLm6njfmLa8NMo',
  endpoint: 'https://reportportal.dpl.usxpress.io/api/v1',
  project: 'default_personal',
  launch: 'release-1.0',
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
    timeout: 0,
  },
  includeTestSteps: true,
  skippedIssue: false,
};

module.exports = { config };
