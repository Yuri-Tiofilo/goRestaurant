import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TextInputProps } from 'react-native';
import { Container, InputText, AreaIcon } from './styles';

interface InputSearchProps extends TextInputProps {
  name?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ value = '', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused}>
      <AreaIcon>
        <Icon
          name="search"
          size={20}
          color={isFocused || isFilled ? '#C72828' : '#B7B7CC'}
        />
      </AreaIcon>

      <InputText
        name="search"
        placeholderTextColor="#B7B7CC"
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default InputSearch;
