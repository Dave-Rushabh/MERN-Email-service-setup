import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  border: 2px solid teal;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
  margin: 3rem auto;
`;

export const ContactBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: teal;
  color: white;
  width: 100%;
  margin: 1rem auto;
`;
export const ContactLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PrefixAndNameWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export const EmailAndContactWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
