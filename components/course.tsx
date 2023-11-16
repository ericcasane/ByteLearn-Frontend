import {Card, CardBody, Image, Link} from "@nextui-org/react";
import { useEffect, useState } from 'react';

interface Course {
    id: number;
    title: string;
    imageUrl: string;
    currentPrice: number;
}

export const Course = () => {    
    const USER_API_BASE_URL = 'http://localhost:8080/courses';
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const courses = await response.json();
                setCourses(courses);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchCourses();
    }, []);


    console.log(courses);
    return (
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-5">
        {courses?.map((item, index) => (
            <Link href={`/course/${item.id}`} key={index}>
            <Card
                shadow="sm" 
                key={index} 
                isPressable 
                className="max-w-[50]"
            >
                <CardBody className="overflow-visible p-0 px-2 py-2">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.imageUrl}
                    />
                    <h3 className="overflow-ellipsis overflow-hidden whitespace-nowrap py-2">{item.title}</h3>
                    <p className="text-default-500">{item.currentPrice} €</p>
                </CardBody>
            </Card>
            </Link>
        ))}
        </div>
    );
}