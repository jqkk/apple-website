import {
  ForCollegeContent,
  Iphone14ProContent,
  MacbookAir15Content,
} from '@/components/content';
import styled from '@emotion/styled';

const MainPage = () => {
  return (
    <Container>
      <MacbookAir15Content />
      <ForCollegeContent />
      <Iphone14ProContent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;
export default MainPage;
