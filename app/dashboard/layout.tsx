'use client';

// استيراد الـ Layout من مجلد المكونات الصحيح وليس من صفحة splash
import MainLayout from '@/app/components/MainLayout'; 

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
    
}