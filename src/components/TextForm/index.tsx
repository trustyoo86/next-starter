import { Form, Input } from 'antd';

interface IProps {
  label?: string;
  name?: string;
  onChange?: () => void;
}

function TextForm({ label = '라벨', name = 'test', onChange = () => {} }: IProps) {
  return (
    <Form.Item
      label={label}
      name={name}
    >
      <input onChange={onChange} />
    </Form.Item>
  );
}

export default TextForm;
