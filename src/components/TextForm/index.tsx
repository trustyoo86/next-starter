import { useState, FormEvent } from 'react'; 
import { Form, Input } from 'antd';

interface IProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: Function;
  onKeyup?: () => void;
  onKeydown?: () => void;
  onInput?: () => void;
}

function TextForm({ label = '라벨', value, name = 'test', onChange = () => {} }: IProps) {
  const [inputVal, setValue] = useState(value);

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
    onChange(e);
  };

  return (
    <Form.Item
      label={label}
      name={name}
    >
      <input
        name={name}
        onChange={changeHandler}
        value={inputVal} />
    </Form.Item>
  );
}

export default TextForm;
