import dotenv from 'dotenv';

import { WakaTimeClient } from './';

dotenv.config();

describe('WakaTimeClient Integration Test', () => {
  let client;
  const userId = process.env.USER_ID;

  beforeEach(() => {
    client = new WakaTimeClient(process.env.ACCESS_TOKEN);
  });

  describe('getSummaryParameters', () => {
    const startDate = 'startDate';
    const endDate = 'endDate';
    const dateRange = { startDate, endDate };
    const projectName = 'projectName';
    const branchNames = ['jae', 'bae', 'bae'];

    it('gets parameters without optional parameters', () => {
      expect(WakaTimeClient.getSummaryParameters({ dateRange })).toEqual({
        start: startDate,
        end: endDate,
        project: null,
        branches: '',
      });
    });

    it('gets parameters with optional parameters defined', () => {
      expect(WakaTimeClient.getSummaryParameters({ dateRange, projectName, branchNames })).toEqual({
        start: startDate,
        end: endDate,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
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
});
