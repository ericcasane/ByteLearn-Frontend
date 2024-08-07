import { useState } from 'react';
import Layout from "@/layouts/default";
import { Course } from "@/components/courseCard";
import { Pagination, Input, CheckboxGroup, Checkbox, Divider } from "@nextui-org/react"
import { useApiGET } from '@/utils/apiUtils';

export default function Courses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    
    const categories = [
        {label: "JavaScript"},
        {label: "Python"},
        {label: "Java"},
        {label: "C#"},
        {label: "Ruby"},
        {label: "PHP"},
        {label: "Swift"},
    ];

    const languages = [
        {label: "English"},
        {label: "Spanish"},
        {label: "Catala"},
        {label: "French"},
        {label: "German"},
    ];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <Layout>
            <div className="flex">
                <div className="w-1/4 p-4">
                    <h3>Filtros</h3>
                    <Input label="Title" variant='bordered' />
                    <Divider className="my-4" />
                    <CheckboxGroup
                        label = "Search by category"
                        color='secondary'
                    >
                        {categories.map((category, index) => (
                            <Checkbox key={index} value={category.label}>
                                {category.label}
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                    <Divider className="my-4"/>
                    <CheckboxGroup
                        label = "Search by language"
                    >
                        {languages.map((language, index) => (
                            <Checkbox key={index} value={language.label}>
                                {language.label}
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                </div>
                <div className="w-3/4 p-4">
                    <Course page={currentPage}/>
                    <div className="flex justify-center pt-4">
                        <Pagination total={5} initialPage={1} onChange={handlePageChange}/> 
                    </div>
                </div>
            </div>
        </Layout>
    );
}