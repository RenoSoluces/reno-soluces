import DepartmentPage from '../../components/DepartmentPage';
import { DEPARTMENTS } from '../../data/departments';

const RenovationEnergetiqueAude = ({ onPageChange }: { onPageChange: (page: string) => void }) => (
  <DepartmentPage content={DEPARTMENTS['aude']} onPageChange={onPageChange} />
);

export default RenovationEnergetiqueAude;
