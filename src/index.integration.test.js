import dotenv from 'dotenv';

import { WakaTimeClient, RANGE } from './';

dotenv.config();

jest.setTimeout(10000);

describe('WakaTimeClient Integration Test', () => {
  let client;
  const userId = process.env.USER_ID;
  const date = '2018-03-24';
  const dateRange = {
    startDate: '2018-03-24',
    endDate: '2018-03-25',
  };
  const range = RANGE.LAST_7_DAYS;
  const projectName = 'jae-bradley-cli-creator';
  const branchNames = ['master'];

  beforeEach(() => {
    client = new WakaTimeClient(process.env.ACCESS_TOKEN);
  });

  describe('getUser', () => {
    it('gets user details', async () => {
      const response = await client.getUser(userId);
      const { data } = response;
      const { data: userData } = data;
      expect(userData).toBeDefined();
      expect(userData).toMatchObject(expect.objectContaining({
        created_at: '2017-02-18T07:50:22Z',
        id: userId,
      }));
    });
  });
  describe('getMe', () => {
    it('gets my user details', async () => {
      const response = await client.getMe();
      const { data } = response;
      const { data: userData } = data;
      expect(userData).toBeDefined();
      expect(userData).toMatchObject(expect.objectContaining({
        created_at: '2017-02-18T07:50:22Z',
        id: userId,
      }));
    });
  });
  describe('getTeams', () => {
    it('gets teams', async () => {
      const response = await client.getTeams(userId);
      const { data } = response;
      const { data: teamsData } = data;
      expect(teamsData).toBeDefined();
    });
  });
  describe('getMyTeams', () => {
    it('gets my teams', async () => {
      const response = await client.getMyTeams();
      const { data } = response;
      const { data: teamsData } = data;
      expect(teamsData).toBeDefined();
    });
  });
  describe('getUserAgents', () => {
    it('gets user agents', async () => {
      const response = await client.getUserAgents(userId);
      const { data } = response;
      const { data: userAgentData } = data;
      expect(userAgentData).toBeDefined();
    });
  });

  describe('getMyUserAgents', () => {
    it('gets my user agents', async () => {
      const response = await client.getMyUserAgents();
      const { data } = response;
      const { data: userAgentData } = data;
      expect(userAgentData).toBeDefined();
    });
  });

  describe('getTeamMembers', () => {
    it('gets team members', async () => {
      // Test this when I have a test teams
      // const response = await client.getTeamMembers({ userId, teamId });
      // const { data } = response;
      // const { data: teamMemberData } = data;
      // expect(teamMemberData).toBeDefined();
    });
  });

  describe('getUserSummary', () => {
    it('gets user summary with default parameters', async () => {
      const response = await client.getUserSummary({ userId, dateRange });
      const { data } = response;
      const { data: userSummaryData } = data;
      expect(userSummaryData).toBeDefined();
    });

    it('gets user summary with parameters', async () => {
      const response = await client.getUserSummary({
        userId,
        dateRange,
        projectName,
        branchNames,
      });
      const { data } = response;
      const { data: userSummaryData } = data;
      expect(userSummaryData).toBeDefined();
    });
  });

  describe('getMySummary', () => {
    it('gets my summary with default parameters', async () => {
      const response = await client.getMySummary({ dateRange });
      const { data } = response;
      const { data: userSummaryData } = data;
      expect(userSummaryData).toBeDefined();
    });

    it('gets my summary with parameters', async () => {
      const response = await client.getMySummary({
        dateRange,
        projectName,
        branchNames,
      });
      const { data } = response;
      const { data: userSummaryData } = data;
      expect(userSummaryData).toBeDefined();
    });
  });

  describe('getUserStats', () => {
    it('gets user stats with default parameters', async () => {
      const response = await client.getUserStats({ userId, range });
      const { data } = response;
      const { data: userStatsData } = data;
      expect(userStatsData).toBeDefined();
    });
  });

  describe('getMyStats', () => {
    it('gets my stats with default parameters', async () => {
      const response = await client.getMyStats({ range });
      const { data } = response;
      const { data: myStatsData } = data;
      expect(myStatsData).toBeDefined();
    });
  });

  describe('getProjects', () => {
    it('gets projects', async () => {
      const response = await client.getProjects(userId);
      const { data } = response;
      const { data: projectData } = data;
      expect(projectData).toBeDefined();
    });
  });

  describe('getMyProjects', () => {
    it('gets my projects', async () => {
      const response = await client.getMyProjects();
      const { data } = response;
      const { data: myProjecftData } = data;
      expect(myProjecftData).toBeDefined();
    });
  });

  describe('getLeaders', () => {
    it('gets leaders with default parameters', async () => {
      const response = await client.getLeaders();
      const { data } = response;
      const { data: leaders } = data;
      expect(leaders).toBeDefined();
    });

    it('gets JavaScript leaders on page 2', async () => {
      const response = await client.getLeaders({ language: 'JavaScript', pageNumber: 2 });
      const { data } = response;
      const { data: javaScriptLeadersOnPage2 } = data;
      expect(javaScriptLeadersOnPage2).toBeDefined();
    });
  });

  describe('getHeartbeats', () => {
    it('gets heartbeats for date', async () => {
      const response = await client.getHeartbeats({ userId, date });
      const { data } = response;
      const { data: heartbeats } = data;
      expect(heartbeats).toBeDefined();
    });
  });

  describe('getMyHeartbeats', () => {
    it('gets my heartbeats for date', async () => {
      const response = await client.getMyHeartbeats(date);
      const { data } = response;
      const { data: myHeartbeats } = data;
      expect(myHeartbeats).toBeDefined();
    });
  });

  describe('getGoals', () => {
    it('gets goals', async () => {
      const response = await client.getGoals(userId);
      const { data } = response;
      const { data: goals } = data;
      expect(goals).toBeDefined();
    });
  });

  describe('getMyGoals', () => {
    it('gets my goals', async () => {
      const response = await client.getMyGoals();
      const { data } = response;
      const { data: myGoals } = data;
      expect(myGoals).toBeDefined();
    });
  });

  describe('getDurations', () => {
    it('gets durations for date', async () => {
      const response = await client.getDurations({ userId, date });
      const { data } = response;
      const { data: durations } = data;
      expect(durations).toBeDefined();
    });

    it('gets durations for date, project, and branches', async () => {
      const response = await client.getDurations({
        userId,
        date,
        projectName,
        branchNames,
      });
      const { data } = response;
      const { data: durations } = data;
      expect(durations).toBeDefined();
    });
  });

  describe('getMyDurations', () => {
    it('gets my durations for date', async () => {
      const response = await client.getMyDurations({ date });
      const { data } = response;
      const { data: myDurations } = data;
      expect(myDurations).toBeDefined();
    });

    it('gets my durations for date, project, and branches', async () => {
      const response = await client.getMyDurations({ date, projectName, branchNames });
      const { data } = response;
      const { data: myDurations } = data;
      expect(myDurations).toBeDefined();
    });
  });

  // describe('getCommits', () => {
  //   it('gets commits with default parameters', async () => {
  //     const response = await client.getCommits({ userId, projectName });
  //     const { data } = response;
  //     const { data: commits } = data;
  //     expect(commits).toBeDefined();
  //   });
  // });

  // describe('getMyCommits', () => {
  //   it('gets my commits with default parameters', async () => {
  //     const response = await client.getMyCommits({ projectName });
  //     const { data } = response;
  //     const { data: myCommits } = data;
  //     expect(myCommits).toBeDefined();
  //   });
  // });
});
