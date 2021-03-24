![Wakatime Client](https://github.com/jaebradley/wakatime-client/workflows/Wakatime%20Client/badge.svg)
[![npm](https://img.shields.io/npm/v/wakatime-client.svg)](https://www.npmjs.com/package/wakatime-client)
[![npm-total-downloads](https://img.shields.io/npm/dt/wakatime-client.svg)](https://www.npmjs.com/package/wakatime-client)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/wakatime-client)
![Codecov branch](https://img.shields.io/codecov/c/gh/jaebradley/wakatime-client/master)
![GitHub](https://img.shields.io/github/license/jaebradley/wakatime-client)

# wakatime-client

A `NodeJS` client for [the `WakaTime` API](https://wakatime.com/developers).

- [WakaTime Client](#wakatime-client)
  - [Installation](#installation)
  - [API](#api)
  - [Local Development](#local-development)

## Installation

```bash
npm install wakatime-client --save
```

## API

* [Create Instance Using API Key](#create-instance-using-api-key)
  * [Custom Base URLs](#custom-base-urls)
* [`getUser`](#getuser)
* [`getMe`](#getme)
* [`getTeams`](#getteams)
* [`getMyTeams`](#getmyteams)
* [`getUserAgents`](#getuseragents)
* [`getMyUserAgents`](#getmyuseragents)
* [`getTeamMembers`](#getteammembers)
* [`getMyTeamMembers`](#getmyteammembers)
* [`getTeamMemberSummary`](#getteammembersummary)
* [`getMyTeamMemberSummary`](#getmyteammembersummary)
* [`getUserSummary`](#getusersummary)
* [`getMySummary`](#getmysummary)
* [`getUserStats`](#getuserstats)
* [`getMyStats`](#getmystats)
* [`getProjects`](#getprojects)
* [`getMyProjects`](#getmyprojects)
* [`getLeaders`](#getleaders)
* [`getHeartbeats`](#getheartbeats)
* [`getMyHeartbeats`](#getmyheartbeats)
* [`getGoals`](#getgoals)
* [`getMyGoals`](#getmygoals)
* [`getDurations`](#getdurations)
* [`getMyDurations`](#getmydurations)
* [`getCommits`](#getcommits)
* [`getMyCommits`](#getmycommits)
* [`getMetadata`](#getmetadata)
* [`getOrganizations`](#getorganizations)
* [`getMyOrganizations`](#getmyorganizations)
* [`getOrganizationDashboards`](#getorganizationdashboards)
* [`getMyOrganizationDashboards`](#getmyorganizationdashboards)
* [`getOrganizationDashboardMembers`](#getorganizationdashboardmembers)
* [`getMyOrganizationDashboardMembers`](#getmyorganizationdashboardmembers)
* [`getOrganizationDashboardMemberSummaries`](#getorganizationdashboardmembersummaries)
* [`getMyOrganizationDashboardMemberSummaries`](#getmyorganizationdashboardmembersummaries)
* [`getOrganizationDashboardMemberDurations`](#getorganizationdashboardmemberdurations)
* [`getMyOrganizationDashboardMemberDurations`](#getmyorganizationdashboardmemberdurations)

### Create Instance Using API Key

```javascript
import { WakaTimeClient } from 'wakatime-client';

const client = new WakaTimeClient('some api key');
```

#### Custom Base URLs
```javascript
import { WakaTimeClient } from 'wakatime-client';

const client = new WakaTimeClient('some api key', 'https://wakapi.dev/api/v1');
```

### `getUser`

Get details for user

```javascript
const userDetails = await client.getUser('some user id');
```

### `getMe`

Get details for user associated with API key

```javascript
const myUserDetails = await client.getMe();
```

### `getTeams`

Get teams for user

```javascript
const teams = await client.getTeams('some user id');
```

### `getMyTeams`

Get teams for user associated with API key

```javascript
const myTeams = await client.getMyTeams();
```

### `getUserAgents`

Get `User Agents` (or plugins) for user

```javascript
const userAgents = await client.getUserAgents('some user id');
```

### `getMyUserAgents`

Get `User Agents` (or plugins) for user associated with API key

```javascript
const myUserAgents = await client.getMyUserAgents();
```

### `getTeamMembers`

Get team members for specified user and team

```javascript
const teamMembers = await client.getTeamMembers({ userId: 'some user id', teamId: 'some team id' });
```

### `getMyTeamMembers`

Get team members for user associated with API key and specified team

```javascript
const myTeamMembers = await client.getMyTeamMembers('some team id');
```

### `getTeamMemberSummary`

Get summary for team member

#### Required Parameters

```javascript
const teamMemberSummary = await client.getTeamMemberSummary({
  userId: 'some user id',
  teamId: 'some team id',
  teamMemberId: 'some team member id',
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
});
```

#### With Optional Parameters

```javascript
const teamMemberSummary = await client.getTeamMemberSummary({
  userId: 'some user id',
  teamId: 'some team id',
  teamMemberId: 'some team member id',
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
  projectName: 'some project name',
  branchNames: ['some branch', 'some other branch', 'some other other branch'],
});
```

### `getMyTeamMemberSummary`

Get summary for team member for user associated with API key

#### Required Parameters

```javascript
const myTeamMemberSummary = await client.getMyTeamMemberSummary({
  teamId: 'some team id',
  teamMemberId: 'some team member id',
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
});
```

#### With Optional Parameters

```javascript
const myTeamMemberSummary = await client.getMyTeamMemberSummary({
  teamId: 'some team id',
  teamMemberId: 'some team member id',
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
  projectName: 'some project name',
  branchNames: ['some branch', 'some other branch', 'some other other branch'],
});
```

### `getUserSummary`

Get summary for user

#### Required Parameters

```javascript
const summary = await client.getUserSummary({
  userId: 'some user id',
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
})
```

#### With Optional Parameters

```javascript
const summary = await client.getUserSummary({
  userId: 'some user id',
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
  projectName: 'some project name',
  branchNames: ['some branch', 'some other branch', 'some other other branch'],
})
```

### `getMySummary`

Get summary for user associated with API key

#### Required Parameters

```javascript
const summary = await client.getMySummary({
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
})
```

#### With Optional Parameters

```javascript
const summary = await client.getMySummary({
  dateRange: {
    startDate: 'some start date',
    endDate: 'some end date',
  },
  projectName: 'some project name',
  branchNames: ['some branch', 'some other branch', 'some other other branch'],
})
```

### `getUserStats`

Get stats for user

#### Required Parameters

```javascript
import { RANGE } from 'wakatime-client';

// I assume you have instantiated the client

const stats = await client.getUserStats({
  userId: 'some user id',
  range: RANGE.PAST_7_DAYS,
});
```

#### With Optional Parameters

```javascript
import { RANGE } from 'wakatime-client';

// I assume you have instantiated the client

const stats = await client.getUserStats({
  userId: 'some user id',
  range: RANGE.PAST_7_DAYS,
  timeout: 'some timeout',
  useWritesOnly: true,
  projectName: 'some project name',
});
```

### `getMyStats`

Get stats for user associated with API key

#### Required Parameters

```javascript
import { RANGE } from 'wakatime-client';

// I assume you have instantiated the client

const myStats = await client.getMyStats({ range: RANGE.PAST_7_DAYS });
```

#### With Optional Parameters

```javascript
import { RANGE } from 'wakatime-client';

// I assume you have instantiated the client

const myStats = await client.getMyStats({
  range: RANGE.PAST_7_DAYS,
  timeout: 'some timeout',
  useWritesOnly: true,
  projectName: 'some project name',
});
```

### `getProjects`

Get projects for user

```javascript
const projects = await client.getProjects('some user id');
```

### `getMyProjects`

Get projects for user associated with API key

```javascript
const myProjects = await client.getMyProjects();
```

### `getLeaders`

Get Leaders

#### Leaders, regardless of language

```javascript
const leaders = await client.getLeaders();
```

#### JavaScript Leaders on Page 2

```javascript
const leaders = await client.getLeaders({ language: 'JavaScript', pageNumber: 2 });
```

### `getHeartbeats`

Get heartbeats for user on a specified date

```javascript
const heartbeats = await client.getHeartbeats({ userId: 'some user id', date: 'some date' });
```

### `getMyHeartbeats`

Get heartbeats for user associated with API key on a specified date

```javascript
const myHeartbeats = await client.getMyHeartbeats('some date');
```

### `getGoals`

Get goals for user

```javascript
const goals = await client.getGoals('some user id');
```

### `getMyGoals`

Get goals for user associated with API key

```javascript
const myGoals = await client.getMyGoals();
```

### `getDurations`

Get durations for user

#### Required Parameters

```javascript
const durations = await client.getDurations({ userId: 'some user id', date: 'some date' });
```

#### With Optional Parameters

```javascript
const durations = await client.getDurations({
  userId: 'some user id',
  date: 'some date',
  projectName: 'some project name',
  branchNames: ['some branch', 'some other branch', 'some other other branch'],
});
```

### `getMyDurations`

Get durations for user associated with API key

#### Required Parameters

```javascript
const myDurations = await client.getMyDurations({ date: 'some date' });
```

#### With Optional Parameters

```javascript
const myDurations = await client.getMyDurations({
  date: 'some date',
  projectName: 'some project name',
  branchNames: ['some branch', 'some other branch', 'some other other branch'],
});
```

### `getCommits`

Get commits for user

#### Required Parameters

```javascript
const commits = await client.getCommits({
  userId: 'some user id',
  projectName: 'some project name',
});
```

#### With Optional Parameters

```javascript
const commits = await client.getCommits({
  userId: 'some user id',
  projectName: 'some project name',
  authorName: 'jaebaebae',
  pageNumber: 2,
});
```

### `getMyCommits`

Get commits for user associated with API key

#### Required Parameters

```javascript
const myCommits = await client.getMyCommits({ projectName: 'some project name' });
```

#### With Optional Parameters

```javascript
const myCommits = await client.getMyCommits({
  projectName: 'some project name',
  authorName: 'jaebaebae',
  pageNumber: 2,
});
```

### `getMetadata`

Get metadata associated with WakaTime service (like IP addresses)

```javascript
const metadata = await client.getMetadata();
```

### `getOrganizations`

Get list of organizations for the specified user

```javascript
const organizations = await client.getOrganizations('some user id');
```

### `getMyOrganizations`

Get list of organizations for user associated with API key

```javascript
const myOrganizations = await client.getMyOrganizations();
```

### `getOrganizationDashboards`

Get list of dashboards for the specified user and organization

```javascript
const dashboards = await client.getOrganizationDashboards({ 
  userId: 'some user id', 
  organizationId: 'some organization id',
});
```

### `getMyOrganizationDashboards`

Get list of dashboards for the current user and the specified organization

```javascript
const dashboards = await client.getMyOrganizationDashboards('some organization id');
```

### `getOrganizationDashboardMembers`

Get list of dashboard members for the specified user, organization, and dashboard

```javascript
const members = await client.getOrganizationDashboardMembers({
  userId: 'some user id',
  organizationId: 'some organization id',
  dashboardId: 'some dashboard id',
})
```

### `getMyOrganizationDashboardMembers`

Get list of dashboard members for the current user and specified organization and dashboard

```javascript
const members = await client.getMyOrganizationDashboardMembers({
  organizationId: 'some organization id',
  dashboardId: 'some dashboard id',
})
```

### `getOrganizationDashboardMemberSummaries`

Get list of dashboard member summaries for the specified user, organization, dashboard, and member

```javascript
const summaries = await client.getOrganizationDashboardMemberSummaries({
  userId: 'some user id',
  organizationId: 'some organization id',
  dashboardId: 'some dashboard id',
  memberId: 'some member id',
})
```

### `getMyOrganizationDashboardMemberSummaries`

Get list of dashboard member summaries for the current user and specified organization, dashboard, and member

```javascript
const summaries = await client.getMyOrganizationDashboardMemberSummaries({
  organizationId: 'some organization id',
  dashboardId: 'some dashboard id',
  memberId: 'some member id',
})
```

### `getOrganizationDashboardMemberDurations`

Get list of dashboard member durations for the specified user, organization, dashboard, and member

```javascript
const summaries = await client.getOrganizationDashboardMemberDurations({
  userId: 'some user id',
  organizationId: 'some organization id',
  dashboardId: 'some dashboard id',
  memberId: 'some member id',
})
```

### `getMyOrganizationDashboardMemberDurations`

Get list of dashboard member durations for the current user and specified organization, dashboard, and member

```javascript
const summaries = await client.getMyOrganizationDashboardMemberDurations({
  organizationId: 'some organization id',
  dashboardId: 'some dashboard id',
  memberId: 'some member id',
})
```

## Local Development

After cloning the repository, use `nvm` / `npm` to install dependencies.

To run tests, execute `npm run test`. This will run both unit and integration tests.

In order to execute local integration tests successfully, you'll need to specify the following environment variables in the `.env` file as well as in the `Secrets` section of your fork's `Settings` page.

- `ACCESS_TOKEN` (A WakaTime Access Token)
- `USER_ID` (A WakaTime User ID)
- `ORGANIZATION_ID` ( A WakaTime Organization ID)
- `DASHBOARD_ID` (A WakaTime Dashboard ID)

To build the production bundle, execute `npm run build`.

### Git Hooks

This project uses [`husky`](https://github.com/typicode/husky) to maintain git hooks.

- `pre-commit` - run `eslint`
- `commit-msg` - run commit message linting
- `pre-push` - run tests

### Commit Linting

This project uses [`semantic-release`](https://github.com/semantic-release/semantic-release) and [`commitlint`](https://github.com/conventional-changelog/commitlint) (specifically the [Angular commit convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)) to automatically enforce semantic versioning.
