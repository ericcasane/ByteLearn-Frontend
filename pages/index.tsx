import { Course } from "@/components/course";
import { title, subtitle} from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from 'react';

export default function IndexPage() {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(true)
   
	useEffect(() => {
	  fetch('/courses')
		.then((res) => res.json())
		.then((data) => {
		  setData(data)
		  setLoading(false)
		})
	}, [])

	console.log(data);
   
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block text-center justify-center">
					<h1 className={title()}>Unlock Your </h1>
					<h1 className={`${title({ color: "gradient" })} bg-clip-text text-transparent pb-2 bg-gradient-to-r`}>Potential</h1>
					<br />
					<h1 className={title()}>
						Code. Learn. Succeed.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
					Online platform for learning to code from scratch.
					</h4>
					<div className="px-20">
						<Course />
					</div>
				</div>
				
			</section>
		</DefaultLayout>
	);
}
