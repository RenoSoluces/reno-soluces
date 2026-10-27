import DepartmentPage from '../../components/DepartmentPage';
import { DEPARTMENTS } from '../../data/departments';

const RenovationEnergetiqueArriege = ({ onPageChange }: { onPageChange: (page: string) => void }) => (
  <DepartmentPage content={DEPARTMENTS['ariege']} onPageChange={onPageChange} />
);

export default RenovationEnergetiqueArriege;
