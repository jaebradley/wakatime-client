import axios from 'axios';
import RANGE from './range';
import {
  translateSummaryParameters,
  translateStatsParameters,
  translateDurationParameters,
  translateCommitsParameters,
} from './translateQueryParameters';

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

  getUser(userId) {
    return this.axiosConfiguration.get(`users/${userId}`).then((response) => response.data);
  }

  getMe() {
    return this.axiosConfiguration.get('users/current').then((response) => response.data);
  }

  getTeams(userId) {
    return this.axiosConfiguration.get(`users/${userId}/teams`).then((response) => response.data);
  }

  getMyTeams() {
    return this.axiosConfiguration.get('users/current/teams').then((response) => response.data);
  }

  getUserAgents(userId) {
    return this.axiosConfiguration.get(`users/${userId}/user_agents`).then((response) => response.data);
  }

  getMyUserAgents() {
    return this.axiosConfiguration.get('users/current/user_agents').then((response) => response.data);
  }

  getTeamMembers({ userId, teamId }) {
    return this.axiosConfiguration.get(`users/${userId}/teams/${teamId}/members`).then((response) => response.data);
  }

  getMyTeamMembers(teamId) {
    return this.axiosConfiguration.get(`users/current/teams/${teamId}/members`).then((response) => response.data);
  }

  getTeamMemberSummary({
    userId,
    teamId,
    teamMemberId,
    ...parameters
  }) {
    return this.axiosConfiguration.get(
      `users/${userId}/teams/${teamId}/members/${teamMemberId}/summaries`,
      { params: translateSummaryParameters(parameters) },
    ).then((response) => response.data);
  }

  getMyTeamMemberSummary({ teamId, teamMemberId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/current/teams/${teamId}/members/${teamMemberId}/summaries`,
      { params: translateSummaryParameters(parameters) },
    ).then((response) => response.data);
  }

  getUserSummary({ userId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/${userId}/summaries`,
      { params: translateSummaryParameters(parameters) },
    ).then((response) => response.data);
  }

  getMySummary({ ...parameters }) {
    return this.axiosConfiguration.get(
      'users/current/summaries',
      { params: translateSummaryParameters(parameters) },
    ).then((response) => response.data);
  }

  getUserStats({
    userId,
    range,
    ...parameters
  }) {
    return this.axiosConfiguration.get(
      `users/${userId}/stats/${rangeQueryParameters[range]}`,
      { params: translateStatsParameters(parameters) },
    ).then((response) => response.data);
  }

  getMyStats({ range, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/current/stats/${rangeQueryParameters[range]}`,
      { params: translateStatsParameters(parameters) },
    ).then((response) => response.data);
  }

  getProjects(userId) {
    return this.axiosConfiguration.get(`users/${userId}/projects`).then((response) => response.data);
  }

  getMyProjects() {
    return this.axiosConfiguration.get('users/current/projects').then((response) => response.data);
  }

  getLeaders({ language = null, pageNumber = null } = {}) {
    return this.axiosConfiguration.get('leaders', { params: { language, page: pageNumber } }).then((response) => response.data);
  }

  getHeartbeats({ userId, date }) {
    return this.axiosConfiguration.get(`users/${userId}/heartbeats`, { params: { date } }).then((response) => response.data);
  }

  getMyHeartbeats(date) {
    return this.axiosConfiguration.get('users/current/heartbeats', { params: { date } }).then((response) => response.data);
  }

  getGoals(userId) {
    return this.axiosConfiguration.get(`users/${userId}/goals`).then((response) => response.data);
  }

  getMyGoals() {
    return this.axiosConfiguration.get('users/current/goals').then((response) => response.data);
  }

  getDurations({ userId, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/${userId}/durations`,
      { params: translateDurationParameters(parameters) },
    ).then((response) => response.data);
  }

  getMyDurations({ ...parameters }) {
    return this.axiosConfiguration.get('users/current/durations', { params: translateDurationParameters(parameters) }).then((response) => response.data);
  }

  getCommits({ userId, projectName, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/${userId}/projects/${projectName}/commits`,
      { params: translateCommitsParameters(parameters) },
    ).then((response) => response.data);
  }

  getMyCommits({ projectName, ...parameters }) {
    return this.axiosConfiguration.get(
      `users/current/projects/${projectName}/commits`,
      { params: translateCommitsParameters(parameters) },
    ).then((response) => response.data);
  }

  getMetadata() {
    return this.axiosConfiguration.get('meta');
  }

  getOrganizations(userId) {
    return this.axiosConfiguration.get(`users/${userId}/orgs`).then((response) => response.data);
  }

  getMyOrganizations() {
    return this.axiosConfiguration.get('users/current/orgs').then((response) => response.data);
  }

  getOrganizationDashboards({ userId, organizationId }) {
    return this.axiosConfiguration.get(`users/${userId}/orgs/${organizationId}`).then((response) => response.data);
  }

  getMyOrganizationDashboards(organizationId) {
    return this.getOrganizationDashboards({ userId: 'current', organizationId });
  }

  getOrganizationDashboardMembers({ userId, organizationId, dashboardId }) {
    return this.axiosConfiguration.get(`users/${userId}/orgs/${organizationId}/dashboards/${dashboardId}/members`).then((response) => response.data);
  }

  getMyOrganizationDashboardMembers({ organizationId, dashboardId }) {
    return this.getOrganizationDashboardMembers({ userId: 'current', organizationId, dashboardId });
  }

  getOrganizationDashboardMemberSummaries({
    userId,
    organizationId,
    dashboardId,
    memberId,
  }) {
    return this.axiosConfiguration
      .get(`users/${userId}/orgs/${organizationId}/dashboards/${dashboardId}/members/${memberId}/summaries`)
      .then((response) => response.data);
  }

  getMyOrganizationDashboardMemberSummaries({ organizationId, dashboardId, memberId }) {
    return this.getOrganizationDashboardMemberSummaries({
      userId: 'current',
      organizationId,
      dashboardId,
      memberId,
    });
  }

  getOrganizationDashboardMemberDurations({
    userId,
    organizationId,
    dashboardId,
    memberId,
  }) {
    return this.axiosConfiguration
      .get(`users/${userId}/orgs/${organizationId}/dashboards/${dashboardId}/members/${memberId}/durations`)
      .then((response) => response.data);
  }

  getMyOrganizationDashboardMemberDurations({ organizationId, dashboardId, memberId }) {
    return this.getOrganizationDashboardMemberDurations({
      userId: 'current',
      organizationId,
      dashboardId,
      memberId,
    });
  }
}

export {
  WakaTimeClient,
  RANGE,
};
