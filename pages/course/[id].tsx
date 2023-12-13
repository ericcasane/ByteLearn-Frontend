import Layout from "@/layouts/default";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

interface Course {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    currentPrice: number;
    available: boolean;
    categories: { id: number, name: string }[];
    reviews: any[];
}

const CourseInfo = ({ course }: { course: Course }) => {
    return (
        <Layout>
        <div className="flex flex-col md:flex-row p-6">
            <div className="w-full md:w-2/3">
                <Card>
                    <CardBody>
                        <h2 className="text-2xl font-bold">{course.title}</h2>
                        <p className="mt-2 text-gray-600">{course.description}</p>
                        <div className="mt-4">
                            <h3 className="font-semibold">Categorías:</h3>
                            <ul>
                                {course.categories.map((category) => (
                                    <li key={category.id}>{category.name}</li>
                            ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Disponible:</h3>
                            <p>{course.available ? 'Sí' : 'No'}</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6">
                <Card>
                    <CardBody>
                        <Image
                            src={course.imageUrl}
                            alt={course.title}
                            className="w-full object-cover h-[300px] rounded-lg"
                        />
                        <h3 className="mt-4 text-2xl font-semibold">{course.currentPrice} €</h3>
                        <Button className="mt-4 w-full" color="primary">Añadir a la cesta</Button>
                        <Button className="mt-4 w-full" color="success">Comprar ahora</Button>
                        <p className="mt-4 text-sm text-gray-600">Garantía de reembolso de 30 días</p>
                    </CardBody>
                </Card>
            </div>
        </div>
        </Layout>
    );
};

export async function getServerSideProps({ params }: { params: { id: string } }) {
    const res = await fetch(`https://erjose-api-bytelearn-api.azuremicroservices.io/courses/${params.id}`);
    const course = await res.json();

    return {
        props: {
            course,
        },
    };
}

export default CourseInfo;