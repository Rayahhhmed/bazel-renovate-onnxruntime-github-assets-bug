module.exports = {   
  requireConfig: "ignored",
  onboarding: false,
  platform: "github",
  repositories: ["Rayahhhmed/bazel-renovate-onnxruntime-github-assets-bug"],
  persistRepoData: true,
  baseBranches: ["main"],
  addLabels: ["renovate"],
  branchConcurrentLimit: 0,
  prConcurrentLimit: 0,
  prHourlyLimit: 0,
  enabledManagers: ["bazel", "bazel-module"],
  includePaths: [
    "MODULE.bazel",
    "WORKSPACE",
  ],
  ignorePaths: [
    "**/node_modules/**",
    "**/bazel-*/**",
  ],
  "bazel": {
    fileMatch: [
      "(^|/)WORKSPACE$",
      "(^|/)WORKSPACE\\.bazel$"
    ],
  },
  "bazel-module": {
    fileMatch: [
      "(^|/)MODULE\\.bazel$"
    ],
  },
}