import './App.css';
import { GifList } from '@pages/GifList';

export const App = () => {
  return (
    <>
      <div className="container-lg main-wrapper">
        <header>
          <h1>Giphy App</h1>
        </header>

        <GifList />
      </div>
    </>
  );
};