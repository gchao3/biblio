/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep builds single-process for constrained CI/sandbox environments.
    webpackBuildWorker: false,
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
