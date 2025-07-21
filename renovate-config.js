module.exports = {   
  requireConfig: "ignored",
  onboarding: false,
  platform: "github",
  repositories: ["Rayahhhmed/bazel-renovate-onnxruntime-github-assets-bug"],
  gitUrl: "https",
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
  "bazel": {
    fileMatch: [
      "(^|/)WORKSPACE$",
      "(^|/)WORKSPACE\\.bazel$", 
      "\\.bzl$"
    ],
  },
  "bazel-module": {
    fileMatch: [
      "(^|/)MODULE\\.bazel$"
    ],
  },
}