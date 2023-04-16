import { Home } from "./Home";
import { Music } from "./Music";



export function Navbar({ setPage }) {
  const handleHomepageClick = (event) => {
    console.log("Showing Homepage");
    setPage([<Home />]);
  };

  const handleMusicClick = (event) => {
    console.log("Showing Music");
    setPage([<Music />]);
  };

  const handleSoftwareClick = (event) => {
    console.log("Showing Software");
    // TODO
    // setPage([<Music />]);
  };

  const handleGamesClick = (event) => {
    console.log("Showing Games");
    // setPage([<Music />]);
  };

  const handleAcademiaClick = (event) => {
    console.log("Showing Academia");
    // setPage([<Music />]);
  };

  return (
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <div class="nav-title">
          <a
            lass="logoText"
            style={{ "text-decoration": "none" }}
            onClick={handleHomepageClick}
          >
            joerickard.
          </a>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a target="_self" onClick={handleMusicClick}>
          music.
        </a>
        <a target="_self" onClick={handleSoftwareClick}>
          software.
        </a>
        <a target="_self" onClick={handleGamesClick}>
          games.
        </a>
        <a target="_self" onClick={handleAcademiaClick}>
          academia.
        </a>
      </div>
    </div>
  );
}
