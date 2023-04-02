module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/anishp264/REACT-APP",
  plugins: [
    "@semantic-release/commit-analyzer", //analyzes commit messages
    "@semantic-release/release-notes-generator", //generates release notes based on commit message description
    //'@semantic-release/npm', useful if releasing npm packages, not required in this project
    //"@semantic-release/github" //responsible for github release notes
    //adding options to github plug-in for assets
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" }
        ]
      }
    ]
  ]
};
