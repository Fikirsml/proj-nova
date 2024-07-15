import { RiSearchLine } from '@remixicon/react';
import { TextInput } from '@tremor/react';

export default function DashSearch() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <TextInput icon={RiSearchLine} placeholder="Search..." />
      </div>
    </div>
  );
}