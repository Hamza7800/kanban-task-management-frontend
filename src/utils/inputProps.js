export const name_Props = {
  name: 'name',
  label: 'Name',
  type: 'text',
  id: 'name',
  placeholder: 'Name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
};

export const email_Props = {
  name: 'email',
  label: 'Email Address',
  type: 'email',
  id: 'email',
  placeholder: 'Email',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid email',
    },
  },
};


export const passwordProps = {
  name: 'password',
  label: 'Password',
  type: 'password',
  id: 'password',
  placeholder: 'Password',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
};


export const confirmPasswordProps = {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  id: 'confirmPassword',
  placeholder: 'Confirm Password',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
};