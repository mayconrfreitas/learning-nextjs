import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import contacts from '../api/contacts';

export default function ContactId() {
	const router = useRouter();
	const { contactId } = router.query;
	const contact = contacts.find(contact => contact.id === contactId);
	return (
		<Layout>
			<h1>{contact.name}</h1>
			<p>{contact.country}</p>
		</Layout>
	)
}