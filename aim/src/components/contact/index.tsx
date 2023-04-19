import { useReducer } from 'react';
import PrefixDropdown from './PrefixDropdown/index.js';
import CustomInput from './CustomInput/index.js';
import { ContactBanner } from './styles.js';
import CustomTextArea from './CustomTextArea/index.js';

interface ContactFormState {
  prefix: string | null;
  fullName: string | null;
  email: string | null;
  subject: string | null;
  contact: string | null;
  description: string | null;
}

const Contact = () => {
  const handleContactForm = (state: ContactFormState, action: any) => {
    switch (action.type) {
      case 'handlePrefixChange':
        return { ...state, prefix: action.payload };
      case 'handleFullNameChange':
        return { ...state, fullName: action.payload };
      case 'handleEmailChange':
        return { ...state, email: action.payload };
      case 'handleSubjectChange':
        return { ...state, subject: action.payload };
      case 'handleContactChange':
        return { ...state, contact: action.payload };
      case 'handleDescriptionChange':
        return { ...state, description: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(handleContactForm, {
    prefix: null,
    fullName: null,
    email: null,
    subject: null,
    contact: null,
    description: null,
  });

  console.log(state, 'state');

  return (
    <>
      <ContactBanner>Let us hear from you</ContactBanner>

      <PrefixDropdown
        prefix={state.prefix}
        handlePrefixChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch({ type: 'handlePrefixChange', payload: event.target.value });
        }}
      />

      <CustomInput
        placeholder="Enter your full name"
        inputValue={state.fullName}
        handleInputValueChange={(
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          dispatch({
            type: 'handleFullNameChange',
            payload: event.target.value,
          });
        }}
      />

      <CustomInput
        placeholder="Enter your email"
        inputValue={state.email}
        handleInputValueChange={(
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          dispatch({
            type: 'handleEmailChange',
            payload: event.target.value,
          });
        }}
      />

      <CustomInput
        placeholder="Enter your Subject"
        inputValue={state.subject}
        handleInputValueChange={(
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          dispatch({
            type: 'handleSubjectChange',
            payload: event.target.value,
          });
        }}
      />

      <CustomInput
        placeholder="Enter your contact"
        inputValue={state.contact}
        handleInputValueChange={(
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          dispatch({
            type: 'handleContactChange',
            payload: event.target.value,
          });
        }}
      />

      <CustomTextArea
        placeholder="Enter Your description"
        text={state.description}
        handleTextChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          dispatch({
            type: 'handleDescriptionChange',
            payload: event.target.value,
          });
        }}
      />
    </>
  );
};

export default Contact;
