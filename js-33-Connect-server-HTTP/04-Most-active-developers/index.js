function getMostActiveDevs({ days, userId, repoId }) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const since = date.toISOString();

  return fetch(
    `https://api.github.com/repos/${userId}/${repoId}/commits?since=${since}&per_page=100`,
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(commits => {
      if (commits.length === 0) {
        throw new Error('No commits found in the specified period');
      }

      const authors = commits.reduce((acc, commit) => {
        const { name, email } = commit.commit.author;
        if (!acc[email]) {
          acc[email] = { count: 0, name, email };
        }
        acc[email].count += 1;
        return acc;
      }, {});

      const maxCount = Math.max(...Object.values(authors).map(author => author.count));
      const mostActiveDevs = Object.values(authors).filter(dev => dev.count === maxCount);

      return mostActiveDevs;
    })
    .catch(error => console.error('Error:', error.message));
}

getMostActiveDevs({ days: 7, userId: 'USERID', repoId: 'REPOID' })
  .then(activeDevs => {
    console.log(activeDevs);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
