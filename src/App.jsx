import "./App.css";
import { BookForm } from "./components/book-form/BookForm";
import { BookList } from "./components/book-list/BookList";
import { Filter } from "./components/filter/Filter";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
