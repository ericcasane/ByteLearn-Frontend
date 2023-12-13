import { useState } from 'react';
import Layout from "@/layouts/default";
import { Course } from "@/components/courseCard";
import { Pagination, Input, CheckboxGroup, Checkbox, Divider } from "@nextui-org/react"

export default function Courses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');
    
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
        {label: "Catalan"},
        {label: "French"},
        {label: "German"},
    ];

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
                    <Course />
                    <Pagination total={10} initialPage={1}/> 
                </div>
            </div>
        </Layout>
    );
}