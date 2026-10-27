import DepartmentPage from '../../components/DepartmentPage';
import { DEPARTMENTS } from '../../data/departments';

const RenovationEnergetiqueHauteGaronne = ({ onPageChange }: { onPageChange: (page: string) => void }) => (
  <DepartmentPage content={DEPARTMENTS['haute-garonne']} onPageChange={onPageChange} />
);

export default RenovationEnergetiqueHauteGaronne;
