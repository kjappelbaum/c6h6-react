import { SvgOutlineExternalLink } from '@/components/tailwind-ui';

import { CompactTable, Td, Th } from '../CompactTable';

export default function SolubilityTable(props: { data: any }) {
  const { data } = props;
  if (!data) return <></>;
  return (
    <div>
      <div className="text-xl pt-5">Solubility</div>
      <CompactTable Header={Header} data={data} Tr={Row} />
    </div>
  );
}

function Header() {
  return (
    <tr>
      <Th>Original value</Th>
      <Th>Reference</Th>
    </tr>
  );
}

function Row(props: any) {
  const value = props.value;
  return (
    <tr key={value.label}>
      <Td>{value.data.original}</Td>
      <Td>
        <div>
          {value.reference.sourceName}{' '}
          <a href={value.reference.url} rel="noreferrer" target="_blank">
            <SvgOutlineExternalLink style={{ display: 'inline' }} />
          </a>
        </div>
      </Td>
    </tr>
  );
}
