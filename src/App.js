import CompAxiosCall from "./materi-testing/CompAxiosCall";
import CompRole from "./materi-testing/CompRole";
import CompUserEvent from "./materi-testing/CompUserEvent";
import CompVariant from "./materi-testing/CompVariant";
import SampleCompRTL from "./materi-testing/SampleCompRTL";
import SimpleShowHide from "./materi-testing/SimpleShowHide";

function App() {
  return (
    <>
      <SampleCompRTL />
      <SimpleShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </>
  );
}

export default App;
