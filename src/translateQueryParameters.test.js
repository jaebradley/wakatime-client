import {
  translateSummaryParameters,
  translateStatsParameters,
  translateDurationParameters,
  translateCommitsParameters,
} from './translateQueryParameters';

describe('translateQueryParameters', () => {
  const projectName = 'projectName';
  const branchNames = ['jae', 'bae', 'bae'];

  describe('translateSummaryParameters', () => {
    const startDate = 'startDate';
    const endDate = 'endDate';
    const dateRange = { startDate, endDate };

    it('gets only required parameters', () => {
      expect(translateSummaryParameters({ dateRange })).toEqual({
        start: startDate,
        end: endDate,
        project: null,
        branches: '',
      });
    });

    it('gets all parameters', () => {
      expect(translateSummaryParameters({ dateRange, projectName, branchNames })).toEqual({
        start: startDate,
        end: endDate,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
  });

  describe('translateStatsParameters', () => {
    it('gets only required parameters', () => {
      expect(translateStatsParameters()).toEqual({
        timeout: null,
        writes_only: null,
        project: null,
      });
    });

    it('gets all parameters', () => {
      expect(translateStatsParameters({
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

  describe('translateDurationParameters', () => {
    const date = 'date';

    it('gets only required parameters', () => {
      expect(translateDurationParameters({ date })).toEqual({
        date,
        project: null,
        branches: '',
      });
    });

    it('gets all parameters', () => {
      expect(translateDurationParameters({ date, projectName, branchNames })).toEqual({
        date,
        project: projectName,
        branches: 'jae,bae,bae',
      });
    });
  });

  describe('translateCommitsParameters', () => {
    it('gets only required parameters', () => {
      expect(translateCommitsParameters()).toEqual({ author: null, page: null });
    });

    it('gets all parameters', () => {
      const authorUsername = 'authorUsername';
      const pageNumber = 'pageNumber';

      expect(translateCommitsParameters({ authorUsername, pageNumber })).toEqual({
        author: authorUsername,
        page: pageNumber,
      });
    });
  });
});
