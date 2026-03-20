import PokedexPage from "./components/PokedexPage.jsx";
import Crudfonction from "./components/CrudPockedex.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <PokedexPage/>
            <Crudfonction/>
        </div>

    );
}