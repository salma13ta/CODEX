'use client';
import { MainLayout } from '@/app/components/MainLayout';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
