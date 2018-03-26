import axios from 'axios';
import RANGE from './range';

const rangeQueryParameters = Object.freeze({
  [RANGE.LAST_7_DAYS]: 'last_7_days',
  [RANGE.LAST_30_DAYS]: 'last_30_days',
  [RANGE.LAST_6_MONTHS]: 'last_6_months',
  [RANGE.LAST_YEAR]: 'last_year',
});

class WakaTimeClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.axiosConfiguration = axios.create({
      baseURL: 'https://wakatime.com/api/v1/',
      // Base-64 encode the API Key
      // https://wakatime.com/developers#introduction
      headers: { Authorization: `Basic ${Buffer.from(this.apiKey).toString('base64')}` },
    });
  }

  static getSummaryParameters({
    dateRange,
    projectName = null,
    branchNames = [],
  }) {
    const { startDate, endDate } = dateRange;
    return {
      start: startDate,
      end: endDate,
      project: projectName,
      branches: branchNames.join(','),
    };
  }

  static getStatsParameters({ timeout = null, useWritesOnly = null, projectName = null }) {
    return {
      timeout,
      writes_only: useWritesOnly,
      project: projectName,
    };
  }

  static getDurationParameters({ date, projectName = null, branchNames = [] }) {
    return {
      date,
      project: projectName,
      branches: branchNames.join(','),
    };
  }

  static getCommitsParameters({ authorUsername = null, pageNumber = null }) {
    return {
      author: authorUsername,
      page: pageNumber,
    };
  }

  getUser(userId) {
    return this.axiosConfiguration.get(`users/${userId}`);
  }

  getMyUser() {
    return this.axiosConfiguration.get('users/current');
  }

  getTeams(userId) {
    return this.axiosConfiguration.get(`users/${userId}/teams`);
  }

  getMyTeams() {
    return this.axiosConfiguration.get('users/current/teams');
  }

  getUserAgents(userId) {
    return this.axiosConfiguration.get(`users/${userId}/user_agents`);
  }

  getMyUserAgents() {
    return this.axiosConfiguration.get('users/current/user_agents');
  }

  getTeamMembers({ userId, teamId }) {
    return this.axiosConfiguration.get(`users/${userId}/teams/${teamId}/members`);
  }

  getMyTeamMembers({ teamId }) {
    return this.axiosConfiguration.get(`users/current/teams/${teamId}/members`);
  }

  getTeamMemberSummary({
    userId,
    teamId,
    teamMemberId,
    ...parameters
  }) {
    return this.axiosConfiguration.get(
      `users/${userId}/teams/${teamId}/members/${teamMemberId}/summaries`,
      { params: WakaTimeClient.getSummaryParameters(parameters) },
    );
  }

  getMyTeamMemberSummary({ teamId, teamMemberId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/current/teams/${teamId}/members/${teamMemberId}/summaries`,
      { params: WakaTimeClient.getSummaryParameters(parameters) },
    );
  }

  getUserSummary({ userId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/${userId}/summaries`,
      { params: WakaTimeClient.getSummaryParameters(parameters) },
    );
  }

  getMyUserSummary({ ...parameters }) {
    return this.axiosConfiguration.get(
      'users/current/summaries',
      { params: WakaTimeClient.getSummaryParameters(parameters) },
    );
  }

  getUserStats({
    userId,
    range,
    ...parameters
  }) {
    return this.axiosConfiguration.get(
      `users/${userId}/stats/${rangeQueryParameters[range]}`,
      { params: WakaTimeClient.getStatsParameters(parameters) },
    );
  }

  getMyStats({ range, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/current/${rangeQueryParameters[range]}`,
      { params: WakaTimeClient.getStatsParameters(parameters) },
    );
  }

  getProjects(userId) {
    return this.axiosConfiguration.get(`users/${userId}/projects`);
  }

  getMyProjects() {
    return this.axiosConfiguration.get('users/current/projects');
  }

  getLeaders({ language = null, pageNumber = null }) {
    return this.axiosConfiguration.get('leaders', { params: { language, page: pageNumber } });
  }

  getHeartbeats({ userId, date }) {
    return this.axiosConfiguration.get(`users/${userId}/heartbeats`, { params: { date } });
  }

  getMyHeartbeats(date) {
    return this.axiosConfiguration.get('users/current/heartbeats', { params: { date } });
  }

  getGoals(userId) {
    return this.axiosConfiguration.get(`users/${userId}/goals`);
  }

  getMyGoals() {
    return this.axiosConfiguration.get('users/current/goals');
  }

  getDurations({ userId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/${userId}/durations`,
      { params: WakaTimeClient.getDurationParameters(parameters) },
    );
  }

  getMyDurations({ ...parameters }) {
    return this.axiosConfiguration.get('users/current/durations', { params: WakaTimeClient.getDurationParameters(parameters) });
  }

  getCommits({ userId, projectId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/${userId}/projects/${projectId}/commits`,
      { params: WakaTimeClient.getCommitsParameters(parameters) },
    );
  }

  getMyCommits({ projectId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/current/projects/${projectId}/commits`,
      { params: WakaTimeClient.getCommitsParameters(parameters) },
    );
  }
}

export {
  WakaTimeClient,
  RANGE,
};
