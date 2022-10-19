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
          <p>16強賽</p>
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
          <p>半準決賽</p>
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
          <p>準決賽</p>
          <ItemGrandParent>
            <p>Parent 1</p>
          </ItemGrandParent>
          <StepChild3 />
          <ItemGrandParent>
            <p>Parent 2</p>
          </ItemGrandParent>
          <span> </span>
          <p>季軍賽</p>
          <ItemOnlyChild>
            <p>Stepmother</p>
          </ItemOnlyChild>
        </Row>
        <Row>
          <p>決賽</p>
          <ItemGreatParent>
            <p>only-child</p>
          </ItemGreatParent>
        </Row>
      </TreeWrapper>
    </ContentContainer>
  );
};

export default ScoreRound16;
