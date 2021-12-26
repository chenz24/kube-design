import * as React from 'react';
import { Magnifier, Appcenter } from '@kubed/icons';
import { Group, Loading, Tooltip, InputPassword } from '../index';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Basic = () => <Input placeholder="please input some text" width={360} />;

const suffix = (
  <Tooltip content="点击选择容器镜像">
    <Appcenter size={16} />
  </Tooltip>
);

export const PrefixAndSuffix = () => (
  <Group direction="column">
    <Input prefix={<Magnifier size={16} />} suffix={<Loading size={16} />} />
    <Input prefix="https://" suffix={suffix} />
  </Group>
);

export const Disabled = () => <Input placeholder="please input some text" disabled />;

export const Addon = () => (
  <Group>
    <Input addonBefore="https://" width={350} />
    <Input addonAfter=".com" width={350} prefix={<Appcenter size={16} />} />
  </Group>
);

export const PasswordInput = () => (
  <InputPassword
    width={360}
    onChange={(v) => {
      console.log('focus', v.target.value);
    }}
    onBlur={() => {
      console.log('onBlur');
    }}
  />
);
