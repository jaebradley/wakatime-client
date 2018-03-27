# wakatime-client

A `NodeJS` client for [the `WakaTime` API](https://wakatime.com/developers).

## Installation

```bash
npm install wakatime-client --save
```

## API

* [Create Instance Using API Key](#create-instance-using-api-key)
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

### Create Instance Using API Key

```javascript
import { WakaTimeClient } from 'wakatime-client';

const client = new WakaTimeClient('some api key');
```

### `getUser`

Get details for user

```javascript
const userDetails = await client.getUser('some user id');
```

### `getMe`

Get details for user associated with API key

```javascript
const myUserDetails = await client.getMyUser();
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
