import DepartmentPage from '../../components/DepartmentPage';
import { DEPARTMENTS } from '../../data/departments';

const RenovationEnergetiquePyreneesOrientales = ({ onPageChange }: { onPageChange: (page: string) => void }) => (
  <DepartmentPage content={DEPARTMENTS['pyrenees-orientales']} onPageChange={onPageChange} />
);

export default RenovationEnergetiquePyreneesOrientales;
