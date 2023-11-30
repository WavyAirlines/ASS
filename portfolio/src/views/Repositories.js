import React, { useState, useEffect } from 'react';

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/WavyAirlines/repos';
    const accessToken = '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';

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching repositories: {error.message}</p>;
  }

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <strong>{repo.name}</strong>: {repo.description}
            <ul>
              <li>Language: {repo.language}</li>
              <li>Watchers: {repo.watchers_count}</li>
              <li>Created At: {new Date(repo.created_at).toLocaleDateString()}</li>
              <li>Updated At: {new Date(repo.updated_at).toLocaleDateString()}</li>
              <li>Default Branch: {repo.default_branch}</li>
              <li>Owner: {repo.owner.login}</li>
              <li>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  Repository Link
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubRepos;
