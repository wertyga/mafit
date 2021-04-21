import { gfProfileReport } from 'goldfish/gfProfileReport';
import { UIBuffer } from 'components/UI/UIBuffer/UIBuffer';
import { MarathonCompareResults } from 'components/Marathon/MarathonCompareResults/MarathonCompareResults';

const ProfileReportPage = () => {
  return (
    <div>
      <UIBuffer center>
        <h2>{gfProfileReport.title}</h2>
      </UIBuffer>
      <MarathonCompareResults
        date={new Date()} // MOCK
      />
    </div>
  );
};

export default ProfileReportPage;
