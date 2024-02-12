import Layout from '../../components/Layout';
import Link from 'next/link';
import contacts from '../api/contacts';

export default function Contacts() {
	return (
		<Layout>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.id}>
						<Link href={`/contacts/${contact.id}`}>
							<a>{contact.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	)
}