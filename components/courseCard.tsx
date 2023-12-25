import {Card, CardBody, Image, Link} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useApiGET } from '../utils/apiUtils';

interface Course {
    id: number;
    title: string;
    imageUrl: string;
    currentPrice: number;
}

interface CourseProps {
    page?: number;
}

export const Course = ({ page }: CourseProps) => {    
    const { data: course } = useApiGET(`courses${page ? `?page=${page}` : ''}`);
    const courses = course || [];

    return (
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-5">
        {courses?.map((item: Course, index: number) => (
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