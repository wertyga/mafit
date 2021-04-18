import React, { useState } from 'react';
import { MarathonContainer } from 'components/Marathon/MarathonContainer/MarathonContainer';
import { UIButton } from 'components/UI/UIButton/UIButton';
import { UICheckbox } from 'components/UI/UICheckbox/UICheckbox';

const HomePage = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <MarathonContainer />
    </div>
  );
};

export default HomePage;
