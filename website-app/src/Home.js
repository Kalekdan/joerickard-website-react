export function Home() {
  return (
    <div>
      <div class="header">
        <h2 class="logoText">joerickard.</h2>
        <h3 class="logoText" style={{"font-size": "25px"}}>
          build.&nbsp;&nbsp;&nbsp;create.&nbsp;&nbsp;&nbsp;play.
        </h3>
      </div>

      <div class="row">
        <div
          class="column side"
          style={{"background-color":"var(--primary-color1)","color":"var(--primary-color1)"}}
        ></div>
        <div
          class="column middle large_content"
          style={{"background-color":"var(--accent-color1)","color":"var(--primary-color1)"}}
        >
          <h3>who am i</h3>
          <p>
            I'm Joe, a systems integration consultant from the UK with
            First-Class Honors BSc in Computer Science from The University of
            Reading. I have a love for creating, whether that's games, software
            or music. This site is a platform for me to share all of that.
          </p>
        </div>
        <div
          class="column middle"
          style={{"background-color":"var(--accent-color1)","color":"var(--primary-color1)","text-align": "center"}}
        >
          <img src={require("./media/jr_headshot_close.jpg")} style={{"max-width": "80%"}}></img>
        </div>
        <div
          class="column side"
          style={{"background-color":"var(--primary-color1)","color":"var(--primary-color1)"}}
        ></div>
      </div>
    </div>
  );
}
