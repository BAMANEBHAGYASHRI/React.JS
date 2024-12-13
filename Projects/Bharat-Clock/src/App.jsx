import ClockContent from "./Component/ClockContent";
import ClockTitle from "./Component/ClockTitle"
import CurrentTime from "./Component/CurrentTime";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div className="Clock-container">
    <ClockTitle />
    < ClockContent />
    <CurrentTime />
    </div>
    )
}

export default App;
