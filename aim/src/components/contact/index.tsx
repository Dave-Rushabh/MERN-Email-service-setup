import { useReducer } from 'react';
import PrefixDropdown from './PrefixDropdown/index.js';
import CustomInput from './CustomInput/index.js';
import {
  ContactBanner,
  ContactLayout,
  ContactWrapper,
  EmailAndContactWrapper,
  PrefixAndNameWrapper,
  SubmitButtonWrapper,
} from './styles.js';
import { INPUT_TYPES } from '../../constants/input-types.js';

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

  // console.log(state, 'state');

  return (
    <ContactWrapper>
      <ContactBanner>Let us hear from you</ContactBanner>

      <ContactLayout>
        <PrefixAndNameWrapper>
          <PrefixDropdown
            prefix={state.prefix}
            handlePrefixChange={(
              event: React.ChangeEvent<HTMLSelectElement>
            ) => {
              dispatch({
                type: 'handlePrefixChange',
                payload: event.target.value,
              });
            }}
          />

          <CustomInput
            type={INPUT_TYPES['TEXT']}
            placeholder="Please provide us your full name"
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
        </PrefixAndNameWrapper>
        <EmailAndContactWrapper>
          <CustomInput
            type={INPUT_TYPES['TEXT']}
            placeholder="Please provide us your e-mail"
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
            type={INPUT_TYPES['TEXT']}
            placeholder="Please provide us your contact number"
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
        </EmailAndContactWrapper>
        <CustomInput
          type={INPUT_TYPES['TEXT']}
          placeholder="Please let us know the purpose of contacting"
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
          type={INPUT_TYPES['TEXTAREA']}
          placeholder="Please describe how can we assist you with our services"
          inputValue={state.description}
          handleTextAreaValueChange={(
            event: React.ChangeEvent<HTMLTextAreaElement>
          ) => {
            dispatch({
              type: 'handleDescriptionChange',
              payload: event.target.value,
            });
          }}
        />
      </ContactLayout>
      <SubmitButtonWrapper>
        <button>Submit</button>
      </SubmitButtonWrapper>
    </ContactWrapper>
  );
};

export default Contact;
