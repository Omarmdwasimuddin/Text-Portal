import Master3 from '@/component/laws/Master3';
import CustomsAct2023 from '@/component/laws/CustomsAct2023';
import React from 'react';
import CustomsAct1969  from '@/component/laws/CustomsAct1969';

export default async function Page({ params }) {
  const { slug } = await params;

  if (slug === "customs-act-2023") {
    return (
      <Master3>
        <CustomsAct2023 />
      </Master3>
    );
  } else if(slug === "customs-act-1969-bengali") {
    return (
      <Master3>
        <CustomsAct1969 />
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