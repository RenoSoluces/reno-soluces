import DepartmentPage from '../../components/DepartmentPage';
import { DEPARTMENTS } from '../../data/departments';

const RenovationEnergetiqueHerault = ({ onPageChange }: { onPageChange: (page: string) => void }) => (
  <DepartmentPage content={DEPARTMENTS['herault']} onPageChange={onPageChange} />
);

export default RenovationEnergetiqueHerault;
