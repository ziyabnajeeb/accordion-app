import 'twin.macro';
import { Question } from './components';
import { Main, QuestionWrapper, Section, SectionHeading } from './AppStyles';

const App = () => (
  <Main>
    <Section tw="grid xl:grid-cols-2 gap-4 py-4">
      <SectionHeading className="section-heading" tw="">
        <h1 tw="px-4 text-2xl font-bold xl:text-right">Questions about Login</h1>
      </SectionHeading>
      <QuestionWrapper className="question-wrapper" tw="">
        <Question />
      </QuestionWrapper>
    </Section>
  </Main>
);

export default App;
