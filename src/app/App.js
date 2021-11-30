import './App.css';
import { GifList } from '@pages/GifList';

export const App = () => {
  return (
    <>
      <div className="container-lg main-wrapper">
        <h1>Giphy App</h1>
        <hr />

        <GifList />
      </div>
    </>
  );
};