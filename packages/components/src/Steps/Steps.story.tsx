import React, { useState } from 'react';
import { Cluster, Kubernetes, Kubesphere } from '@kubed/icons';
import { Steps, Step, StepCompleted, TabStep } from './Steps';

export default {
  title: 'Components/Steps',
  component: Steps,
};

export const Basic = () => {
  const [active, setActive] = useState(1);
  return (
    <Steps active={active} onStepClick={setActive}>
      <Step label="Step 1" description="First desc" icon={<Cluster size={24} />}>
        First step
      </Step>
      <Step label="Step 2" description="Second desc">
        Second step
      </Step>
      <Step label="Step 3" description="Third desc">
        Third step
      </Step>
      <StepCompleted>completed.......</StepCompleted>
    </Steps>
  );
};

export const TabSteps = () => {
  const [active, setActive] = useState(1);
  return (
    <Steps active={active} onStepClick={setActive} variant="tab">
      <TabStep
        label="步骤1"
        description="未设置"
        completedDescription="已设置"
        progressDescription="设置中"
        icon={<Cluster size={24} />}
      >
        First step
      </TabStep>
      <TabStep
        label="步骤2"
        description="未设置"
        completedDescription="已设置"
        progressDescription="设置中"
        icon={<Kubernetes size={24} />}
      >
        Second step
      </TabStep>
      <TabStep
        label="步骤3"
        description="未设置"
        completedDescription="已设置"
        progressDescription="设置中"
        icon={<Kubesphere size={24} />}
      >
        Third step
      </TabStep>
      <StepCompleted>completed.......</StepCompleted>
    </Steps>
  );
};
