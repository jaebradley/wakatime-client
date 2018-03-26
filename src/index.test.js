import { WakaTimeClient } from './';

describe('WakaTimeClient Unit Test', () => {
  const projectName = 'projectName';
  const branchNames = ['jae', 'bae', 'bae'];

  describe('getSummaryParameters', () => {
    const startDate = 'startDate';
    const endDate = 'endDate';
    const dateRange = { startDate, endDate };

    it('gets only required parameters', () => {
      expect(WakaTimeClient.getSummaryParameters({ dateRange })).toEqual({
        start: startDate,
        end: endDate,
        project: null,
        branches: '',
      });
    });

    it('gets all parameters', () => {
      expect(WakaTimeClient.getSummaryParameters({ dateRange, projectName, branchNames })).toEqual({
        start: startDate,
        end: endDate,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
  });

  describe('getStatsParameters', () => {
    it('gets only required parameters', () => {
      expect(WakaTimeClient.getStatsParameters({})).toEqual({
        timeout: null,
        writes_only: null,
        project: null,
      });
    });

    it('gets all parameters', () => {
      expect(WakaTimeClient.getStatsParameters({
        timeout: 'timeout',
        useWritesOnly: 'useWritesOnly',
        projectName: 'projectName',
      })).toEqual({
        timeout: 'timeout',
        writes_only: 'useWritesOnly',
        project: 'projectName',
      });
    });
  });

  describe('getDurationParameters', () => {
    const date = 'date';

    it('gets only required parameters', () => {
      expect(WakaTimeClient.getDurationParameters({ date })).toEqual({
        date,
        project: null,
        branches: '',
      });
    });

    it('gets all parameters', () => {
      expect(WakaTimeClient.getDurationParameters({ date, projectName, branchNames })).toEqual({
        date,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
  });

  describe('getCommitsParameters', () => {
    it('gets only required parameters', () => {
      expect(WakaTimeClient.getCommitsParameters({})).toEqual({ author: null, page: null });
    });

    it('gets all parameters', () => {
      const authorUsername = 'authorUsername';
      const pageNumber = 'pageNumber';

      expect(WakaTimeClient.getCommitsParameters({ authorUsername, pageNumber })).toEqual({
        author: authorUsername,
        page: pageNumber,
      });
    });
  });
});
