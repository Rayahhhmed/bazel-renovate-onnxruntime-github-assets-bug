module.exports = {   
  requireConfig: "ignored",
  onboarding: false,
  // platform: "github",
  persistRepoData: true,
  baseBranches: ["main"],
  addLabels: ["renovate"],
  branchConcurrentLimit: 0,
  prConcurrentLimit : 0,
  prHourlyLimit: 0,
  enabledManagers: ["bazel", "bazel-module", "custom.regex"],
  repositories: ["Rayahhhmed/bazel-renovate-onnxruntime-github-assets-bug"],
}