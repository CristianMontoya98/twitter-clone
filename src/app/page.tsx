import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
	const { data: posts } = await supabase.from('posts').select('*');
	return (
		<main>
			Hola twitter!
			{JSON.stringify(posts, null, 2)}
		</main>
	);
}
