import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layouts/layout';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Sajeeb Ahamed</title>
			</Head>
			<div className='content'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
				reiciendis odio eius iste voluptas exercitationem labore
				obcaecati cum itaque sint modi nostrum magni, nihil, rerum esse
				nesciunt nemo neque nulla!
			</div>
		</Layout>
	);
}
