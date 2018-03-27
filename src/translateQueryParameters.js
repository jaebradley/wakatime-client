const translateSummaryParameters = ({
  dateRange,
  projectName = null,
  branchNames = [],
}) => {
  const { startDate, endDate } = dateRange;
  return {
    start: startDate,
    end: endDate,
    project: projectName,
    branches: branchNames.join(','),
  };
};

const translateStatsParameters = ({
  timeout = null,
  useWritesOnly = null,
  projectName = null,
} = {}) => (
  {
    timeout,
    writes_only: useWritesOnly,
    project: projectName,
  }
);

const translateDurationParameters = ({ date, projectName = null, branchNames = [] }) => (
  {
    date,
    project: projectName,
    branches: branchNames.join(','),
  }
);

const translateCommitsParameters = ({ authorUsername = null, pageNumber = null } = {}) => (
  {
    author: authorUsername,
    page: pageNumber,
  }
);

export {
  translateSummaryParameters,
  translateStatsParameters,
  translateDurationParameters,
  translateCommitsParameters,
};
