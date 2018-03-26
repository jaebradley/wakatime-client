import dotenv from 'dotenv';

import { WakaTimeClient, RANGE } from './';

dotenv.config();

describe('WakaTimeClient Integration Test', () => {
  let client;
  const userId = process.env.USER_ID;
  const dateRange = {
    startDate: '2018-03-24',
    endDate: '2018-03-25',
  };
  const range = RANGE.LAST_7_DAYS;

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
  describe('getMyUser', () => {
    it('gets my user details', async () => {
      const response = await client.getMyUser();
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
      const projectName = 'jae-bradley-cli-creator';
      const branchNames = ['master'];
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

  describe('getMyUserSummary', () => {
    it('gets my user summary with default parameters', async () => {
      const response = await client.getMyUserSummary({ dateRange });
      const { data } = response;
      const { data: userSummaryData } = data;
      expect(userSummaryData).toBeDefined();
    });

    it('gets my user summary with parameters', async () => {
      const projectName = 'jae-bradley-cli-creator';
      const branchNames = ['master'];
      const response = await client.getMyUserSummary({
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
});
