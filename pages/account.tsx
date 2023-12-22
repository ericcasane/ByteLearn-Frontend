import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from "@/layouts/default";
import { Menu } from '@/components/account/DropdownMenu';

export default function Account() {
    const router = useRouter();
    const [active, setActive] = useState('');

    useEffect(() => {
        setActive(router.pathname.split('/')[2] || '');
    }, [router.pathname]);

    return (
        <Layout>
            <div className="flex">
                <div className="w-1/4 p-4">
                    <div className="flex flex-col space-y-4">
                        <Menu></Menu>
                    </div>
                </div>
                <div className="w-3/4 p-4">
                <button
                            className={`w-full text-left ${active === 'orders' ? 'text-blue-500' : ''}`}
                            onClick={() => router.push('/account/orders')}
                        >
                            Orders
                        </button>
                        <button
                            className={`w-full text-left ${active === 'enrollments' ? 'text-blue-500' : ''}`}
                            onClick={() => router.push('/account/enrollments')}
                        >
                            Enrollments
                        </button>
                        <button
                            className={`w-full text-left ${active === 'reviews' ? 'text-blue-500' : ''}`}
                            onClick={() => router.push('/account/reviews')}
                        >
                            Reviews
                        </button>
                </div>
            </div>
        </Layout>
    );
}