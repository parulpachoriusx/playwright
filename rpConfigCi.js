const config = {
  // required fields
  apiKey: 'playwright-testing_YrJdqcURTzeTOlT40rBQBC3Gvn0aN8Upu6ltjmVdE_YpNTTfJO_rNrFwTAbmxDGX',
  endpoint: 'https://reportportal.dpl.usxpress.io/api/v1',
  project: 'default_personal',
  launch: 'Custom regression',
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
