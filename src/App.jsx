import tw from 'twin.macro';
import { Question } from './components';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen px-6`,
    hasBackground ? tw`bg-gradient-to-br from-slate-400 to-slate-200` : tw`bg-slate-200`,
  ],
};

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Question />
  </div>
);

export default App;
