import { useState } from 'react';
import DefaultLayout from "@/layouts/default";
import { Course } from "@/components/course";
import { Pagination, Input, CheckboxGroup, Checkbox, Divider } from "@nextui-org/react"

export default function Courses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');

    const animals = [
        {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
        {label: "Dog", value: "dog", description: "The most popular pet in the world"},
        {label: "Elephant", value: "elephant", description: "The largest land animal"},
        {label: "Lion", value: "lion", description: "The king of the jungle"},
        {label: "Tiger", value: "tiger", description: "The largest cat species"},
        {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
        {
          label: "Dolphin",
          value: "dolphin",
          description: "A widely distributed and diverse group of aquatic mammals",
        },
        {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
        {label: "Zebra", value: "zebra", description: "A several species of African equids"},
        {
          label: "Shark",
          value: "shark",
          description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
          label: "Whale",
          value: "whale",
          description: "Diverse group of fully aquatic placental marine mammals",
        },
        {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
        {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
      ];
    
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
        <DefaultLayout>
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
        </DefaultLayout>
    );
}