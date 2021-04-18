import { gfProfileReport } from 'goldfish/gfProfileReport';
import { UIBuffer } from 'components/UI/UIBuffer/UIBuffer';
import { MarathonCompareResults } from 'components/Marathon/MarathonCompareResults/MarathonCompareResults';

const ProfileReportPage = () => {
  return (
    <div>
      <MarathonCompareResults
        date={new Date()} // MOCK
      />
    </div>
  );
};

export default ProfileReportPage;
