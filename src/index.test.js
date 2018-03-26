import dotenv from 'dotenv';

import WakaTimeClient from './';

dotenv.config();

describe('WakaTimeClient Integration Test', () => {
  describe('getUser', () => {
    it('gets User', async () => {
      const client = new WakaTimeClient(process.env.ACCESS_TOKEN);
      const response = await client.getUser(process.env.USER_ID);
      const { data } = response;
      const { data: userData } = data;
      expect(userData).toBeDefined();
      expect(userData).toMatchObject(expect.objectContaining({
        created_at: '2017-02-18T07:50:22Z',
        id: process.env.USER_ID,
      }));
    });
  });
  describe('getMyUser', () => {
    it('gets my User', async () => {
      const client = new WakaTimeClient(process.env.ACCESS_TOKEN);
      const response = await client.getMyUser();
      const { data } = response;
      const { data: userData } = data;
      expect(userData).toBeDefined();
      expect(userData).toMatchObject(expect.objectContaining({
        created_at: '2017-02-18T07:50:22Z',
        id: process.env.USER_ID,
      }));
    });
  });
  describe('getTeams', () => {
    it('gets teams', async () => {
      const client = new WakaTimeClient(process.env.ACCESS_TOKEN);
      const response = await client.getTeams(process.env.USER_ID);
      const { data } = response;
      const { data: teamsData } = data;
      expect(teamsData).toBeDefined();
    });
  });
  describe('getMyTeams', () => {
    it('gets my teams', async () => {
      const client = new WakaTimeClient(process.env.ACCESS_TOKEN);
      const response = await client.getMyTeams();
      const { data } = response;
      const { data: teamsData } = data;
      expect(teamsData).toBeDefined();
    });
  });
});
