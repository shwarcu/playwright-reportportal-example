# playwright-reportportal-example

Repository with example setup of Playwright with ReportPortal reporter.

Install dependencies

```sh
npm ci
```

Then update Report Portal config inside [reportportal.config.ts](reportportal.config.ts)
and run tests (assuming that report portal is already running)

```sh
npx playwright test
```

Related links

- [ReportPortal docker installation guide](https://reportportal.io/docs/Deploy-with-Docker).
- [Report Portal Playwright reporter](https://github.com/reportportal/agent-js-playwright)
