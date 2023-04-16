import "./musicStyles.css";

export function Music() {
  return (
    <div>
      <div class="header">
        <h2 class="logoText">music.</h2>
      </div>

      <div
        class="column middle"
        style={{"background-color":"var(--accent-color2)","color":"var(--primary-color1)"}}
      >
        <p>
          I'm passionate about a variety of musical genres, a few of which are
          detailed below:
        </p>
        <button class="collapsible">Scores and Soundtracks</button>
        <div class="content">
          <h3>Scores</h3>
          <p>
            As a fan service to Brandon Sandersons incredible fantasy series{" "}
            <i>Mistborn</i>, I created some musical themes for some of my
            favourite characters. This is the theme I created for Elend:
          </p>
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1016063785&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{"font-size": "10px", "color": "#cccccc","line-break": "anywhere","word-break": "normal","overflow": "hidden","white-space": "nowrap","text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight": "100"}}>
            <a
              href="https://soundcloud.com/user-671837309"
              title="Kalekdan"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Kalekdan
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/user-671837309/elends_theme"
              title="Elend&#x27;s Theme"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Elend&#x27;s Theme
            </a>
          </div>
          <h3>Soundtracks</h3>
          <p>
            Created for a game jam, where a team create a playable prototype in
            a limited time (usually 48hrs or a week), this is an example of a
            soundtrack created to set the mood in a dark and gritty spaceship:
          </p>
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1047524233&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{"font-size": "10px", "color": "#cccccc","line-break": "anywhere","word-break": "normal","overflow": "hidden","white-space": "nowrap","text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight": "100"}}>
            <a
              href="https://soundcloud.com/user-671837309"
              title="Kalekdan"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Kalekdan
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/user-671837309/industrial-space-loopable"
              title="Industrial Space (Loopable)"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Industrial Space (Loopable)
            </a>
          </div>
        </div>
        <button class="collapsible">Drum & Bass</button>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/507433077&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{"font-size": "10px", "color": "#cccccc","line-break": "anywhere","word-break": "normal","overflow": "hidden","white-space": "nowrap","text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight": "100"}}>
            <a
              href="https://soundcloud.com/kalekdan"
              title="Kalekdan"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Kalekdan
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/kalekdan/breakamen-1"
              title="Breakamen"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Breakamen
            </a>
          </div>
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425712573&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{"font-size": "10px", "color": "#cccccc","line-break": "anywhere","word-break": "normal","overflow": "hidden","white-space": "nowrap","text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight": "100"}}>
            <a
              href="https://soundcloud.com/kalekdan"
              title="Kalekdan"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Kalekdan
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/kalekdan/to-infinity"
              title="To Infinity"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              To Infinity
            </a>
          </div>
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/420763404&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{"font-size": "10px", "color": "#cccccc","line-break": "anywhere","word-break": "normal","overflow": "hidden","white-space": "nowrap","text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight": "100"}}>
            <a
              href="https://soundcloud.com/kalekdan"
              title="Kalekdan"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Kalekdan
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/kalekdan/voice-1"
              title="Voice"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Voice
            </a>
          </div>
          <iframe
            width="100%"
            height="100"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/381670163&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{"font-size": "10px", "color": "#cccccc","line-break": "anywhere","word-break": "normal","overflow": "hidden","white-space": "nowrap","text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight": "100"}}>
            <a
              href="https://soundcloud.com/kalekdan"
              title="Kalekdan"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Kalekdan
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/kalekdan/crystal-skies-v2"
              title="Crystal Skies V2"
              target="_blank"
              style={{"color": "#cccccc", "text-decoration": "none"}}
            >
              Crystal Skies V2
            </a>
          </div>
        </div>
        <button class="collapsible">Open Section 3</button>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <script src="collapseRows.js"></script>
    </div>
  );
}
