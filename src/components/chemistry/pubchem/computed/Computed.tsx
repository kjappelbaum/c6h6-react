import CompactTd from '@/components/common/CompactTd';
import { Table, Th } from '@/components/tailwind-ui';

export default function Computed(props: { computed: any }) {
  const { computed } = props;

  const rows: Array<any> = [];
  for (let key in computed) {
    rows.push({
      label: key,
      value:
        computed[key].value +
        (computed[key].units ? ` ${computed[key].units}` : ''),
      description: computed[key].reference.description,
    });
  }

  return <Table Header={Header} data={rows} Tr={Row} />;
}

function Header() {
  return (
    <tr>
      <Th>Label</Th>
      <Th>Value</Th>
      <Th>Description</Th>
    </tr>
  );
}

function Row(props: any) {
  const row = props.value;
  return (
    <tr key={row.label}>
      <CompactTd>{row.label}</CompactTd>
      <CompactTd>{row.value}</CompactTd>
      <CompactTd>{row.description}</CompactTd>
    </tr>
  );
}
