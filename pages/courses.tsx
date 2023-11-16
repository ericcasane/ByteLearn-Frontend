import { useState } from 'react';
import DefaultLayout from "@/layouts/default";
import { Course } from "@/components/course";
import { Pagination } from "@nextui-org/react"

export default function Courses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');

    return (
        <DefaultLayout>
            <div className="flex">
                <div className="w-1/4 p-4">
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Search by category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Search by language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mb-4"
                    />
                </div>
                <div className="w-3/4 p-4">
                    <Course />
                    <Pagination />
                </div>
            </div>
        </DefaultLayout>
    );
}