import { ContentContainer } from '../../components/panel';
import {
  TreeWrapper,
  ItemChild,
  ItemParent,
  ItemGrandParent,
  ItemGreatParent,
  ItemOnlyChild,
  Row,
  StepChild1,
  StepChild2,
  StepChild3,
} from '../../components/tournament-bracket';

const ScoreRound16 = () => {
  // Fetch Data
  // const [round16, setRound16] = useState([]);
  // useEffect(() => {
  //   const fetchScheduleOverview = async () => {
  //     const response = await axios(
  //       'https://storage.googleapis.com/statics.mirrormedia.mg/json/fifa2022_round16_result_schedule.json'
  //     );
  //     setRound16(response?.data);
  //   };
  //   fetchScheduleOverview();
  // }, []);

  // console.log(round16);
  return (
    <ContentContainer>
      <TreeWrapper>
        <Row>
          <h1>16強賽</h1>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
          <ItemChild>
            <p>Child 1</p>
          </ItemChild>
          <ItemChild>
            <p>Child 2</p>
          </ItemChild>
        </Row>
        <Row>
          <h1>半準決賽</h1>
          <ItemParent>
            <p>Parent 1</p>
          </ItemParent>
          <StepChild1 />
          <ItemParent>
            <p>Parent 2</p>
          </ItemParent>
          <ItemParent>
            <p>Parent 1</p>
          </ItemParent>
          <StepChild2 />
          <ItemParent>
            <p>Parent 2</p>
          </ItemParent>
        </Row>
        <Row>
          <h1>準決賽</h1>
          <ItemGrandParent>
            <p>Parent 1</p>
          </ItemGrandParent>
          <StepChild3 />
          <ItemGrandParent>
            <p>Parent 2</p>
          </ItemGrandParent>
          <span> </span>
          <h1>季軍賽</h1>
          <ItemOnlyChild>
            <p>Stepmother</p>
          </ItemOnlyChild>
        </Row>
        <Row>
          <h1>決賽</h1>
          <ItemGreatParent>
            <p>only-child</p>
          </ItemGreatParent>
        </Row>
      </TreeWrapper>
    </ContentContainer>
  );
};

export default ScoreRound16;
