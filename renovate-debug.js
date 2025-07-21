module.exports = {
  platform: "github",
  repositories: ["Rayahhhmed/bazel-renovate-onnxruntime-github-assets-bug"],
  onboarding: false,
  requireConfig: "ignored",
  gitUrl: "https",
  gitTimeout: 30000,
  gitNoVerify: ["commit", "push"],
  printConfig: true,
  logLevel: "debug",
  logLevelRemap: [
    { matchMessage: /Git function thrown/, newLogLevel: "warn" }
  ],
  enabledManagers: ["bazel"],
  fileMatch: ["WORKSPACE", "MODULE.bazel"],
} 