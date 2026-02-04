import Master3 from '@/component/laws/Master3';
import IncomeTax2023 from '@/component/laws/IncomeTax2023';
import React from 'react';
import IncomeTax1984  from '@/component/laws/IncomeTax1984';

export default async function Page({ params }) {
  const { slug } = await params;

  if (slug === "income-tax-act-2023") {
    return (
      <Master3>
        <IncomeTax2023 />
      </Master3>
    );
  } else if(slug === "it-ordinance-1984-amended") {
    return (
      <Master3>
        <IncomeTax1984 />
      </Master3>
    );
  }

  return (
    <Master3>
      <div className="p-6 text-gray-700">
        <h1 className="mb-3 text-2xl font-semibold capitalize">{slug.replace(/-/g, " ")}</h1>
        <p>No specific content found for this law yet.</p>
      </div>
    </Master3>
  );
}