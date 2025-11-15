import ProtectedLayout from "./(protected)/layout";
import HomePage from "./(protected)/page";

export default async function RootPage() {
	return (
		<ProtectedLayout>
			<HomePage />
		</ProtectedLayout>
	);
}
