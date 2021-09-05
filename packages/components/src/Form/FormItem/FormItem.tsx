import React from 'react';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
import styled from 'styled-components';
import { Meta } from 'rc-field-form/lib/interface';
import { Row, Col, ColProps } from '../../Grid/Row';
import forwardRef from '../../utils/forwardRef';
import { FormContext } from '../context';
import { ErrorList } from './ErrorList';

const FieldRow = styled(Row)`
  margin-bottom: 5px;
`;

export type ValidateStatus = 'success' | 'warning' | 'error' | 'validating' | '';

interface FieldColProps extends ColProps {
  labelAlign?: string;
}

const FieldCol = styled(Col)<FieldColProps>`
  text-align: ${({ labelAlign }) => labelAlign || 'right'};
  overflow: hidden;
  white-space: nowrap;
  vertical-align: middle;
`;

const FieldLabel = styled('label')`
  position: relative;
  height: 32px;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.accents_8};
  &:after {
    content: ':';
    margin-left: 2px;
  }
`;

const FieldWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 12px;
`;

const FieldLabelWrapper = styled('div')``;

const FieldItemWrapper = styled('div')``;

export interface FormItemProps extends FieldProps {
  /** Label element of FormItem */
  label?: React.ReactNode;

  /** Help content of FormItem */
  help?: React.ReactNode;

  /** The validation status. If not provided, it will be generated by validation rule. options: success warning error validating */
  validateStatus?: ValidateStatus;
}

export const FormItem = forwardRef<FormItemProps, 'div'>(
  ({ name, label, validateStatus, children, ...rest }) => {
    const formContext = React.useContext(FormContext);
    const { labelCol, wrapperCol, labelAlign, layout } = formContext;

    const getStatus = (meta?: Meta) => {
      let mergedValidateStatus: ValidateStatus = '';
      if (validateStatus !== undefined) {
        mergedValidateStatus = validateStatus;
      } else if (meta?.validating) {
        mergedValidateStatus = 'validating';
      } else if (meta?.errors?.length) {
        mergedValidateStatus = 'error';
      } else if (meta?.touched) {
        mergedValidateStatus = 'success';
      }

      return mergedValidateStatus;
    };

    return (
      <Field name={name} {...rest}>
        {(control, meta, form) => {
          const childNode =
            typeof children === 'function'
              ? children(control, meta, form)
              : React.cloneElement(children as React.ReactElement, { ...control });

          const formItemStatus = getStatus(meta);
          const wrapperClassName = formItemStatus && `form-item-status-${formItemStatus}`;

          if (layout === 'horizontal') {
            return (
              <FieldRow columns={24} className={wrapperClassName}>
                <FieldCol className="label-col" labelAlign={labelAlign} {...labelCol}>
                  <FieldLabel>{label || name}</FieldLabel>
                </FieldCol>
                <Col {...wrapperCol}>
                  <div className="form-item">{childNode}</div>
                  <ErrorList errors={meta.errors} warnings={meta.warnings} />
                </Col>
              </FieldRow>
            );
          }

          return (
            <FieldWrapper className={wrapperClassName}>
              <FieldLabelWrapper>
                <FieldLabel>{label || name}</FieldLabel>
              </FieldLabelWrapper>
              <FieldItemWrapper>
                <div className="form-item">{childNode}</div>
                <ErrorList errors={meta.errors} warnings={meta.warnings} />
              </FieldItemWrapper>
            </FieldWrapper>
          );
        }}
      </Field>
    );
  }
);

FormItem.displayName = '@kubed/components/FormItem';
