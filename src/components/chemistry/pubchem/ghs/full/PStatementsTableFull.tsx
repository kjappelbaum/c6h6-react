import Reference from '../../Reference';
import PStatementsTable from '../summary/HStatementsTable';

export default function PStatementsTableFull(props: {
  pStatements: Array<any>;
}) {
  const { pStatements } = props;
  return (
    <div>
      {pStatements.map((pStatements) => (
        <div className="pt-5" key={pStatements.reference.sourceName}>
          <Reference reference={pStatements.reference} />
          <PStatementsTable hStatements={pStatements.data} />
        </div>
      ))}
    </div>
  );
}
