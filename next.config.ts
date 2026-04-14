/** @type {import('next').NextConfig} */
const nextConfig = {
  // ضعه مباشرة هنا وليس داخل experimental
  allowedDevOrigins: ['192.168.1.5', '192.168.1.3', '192.168.1.10'],
};

export default nextConfig;