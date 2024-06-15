import {
	BrowserRouter,
	Routes,
	Route,
	useParams,
	useLocation,
} from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';

function Home() {
	const params = useParams();
	const location = useLocation();

	return <pre>{JSON.stringify({ location, params }, null, 2)}</pre>;
}

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<AuthPage />} />
			</Routes>
		</BrowserRouter>
	);
}
