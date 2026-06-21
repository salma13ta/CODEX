// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has already seen onboarding
    const hasSeenOnboarding = localStorage.getItem('onboarded');

    if (hasSeenOnboarding) {
      // Skip onboarding, go directly to dashboard
      router.replace('/dashboard/home');
    } else {
      // Show onboarding first
      router.replace('/onboarding');
    }
  }, [router]);

  return null;
}